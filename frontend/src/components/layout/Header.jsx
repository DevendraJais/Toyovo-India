import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from '../cart/CartDrawer';
import { getTotals } from '../../store/slices/cartSlice';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { cartItems, cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-2' : 'bg-white py-3 border-b border-gray-100'}`}>
      <div className="container-custom flex items-center justify-between gap-4">
        
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
          <button className="p-1 px-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          
          <Link to="/" className="flex items-center gap-1 group">
            <span className="font-kids font-bold text-xl md:text-2xl tracking-tight whitespace-nowrap text-[#F1641E]">
              Toyovo India
            </span>
          </Link>
        </div>
        
        {/* Center: Etsy-style Search Bar */}
        <div className="flex-grow relative items-center flex mx-1 md:mx-4 max-w-[600px]">
          <div className="w-full relative group">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white border border-gray-900 pl-3 md:pl-5 pr-10 md:pr-14 py-1.5 md:py-2 rounded-full outline-none transition-all placeholder:text-gray-500 text-sm md:text-base"
            />
            <button className="absolute right-0.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#F1641E] hover:bg-[#D55618] rounded-full flex items-center justify-center transition-all shadow-sm">
              <Search className="w-4 h-4 md:w-6 md:h-6 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Right: User Options */}
        <div className="flex items-center gap-0.5 md:gap-2 flex-shrink-0">
          <Link to="/login" className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors group relative">
            <User className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </Link>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
          >
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
            {cartTotalQuantity > 0 && (
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#F1641E] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-short">
                {cartTotalQuantity}
              </div>
            )}
          </button>
        </div>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>

      {/* Mobile Drawer (Same as before but matching new brand) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-[70] p-8"
            >
              <div className="flex items-center justify-between mb-12">
                 <span className="font-kids font-bold text-2xl">Menu</span>
                 <button onClick={() => setIsMenuOpen(false)}>
                   <X className="w-7 h-7 text-slate-400" />
                 </button>
              </div>
              <nav className="space-y-8">
                {['Shop All', 'New Arrivals', 'Wooden Toys', 'Education', 'Gift Sets'].map(item => (
                  <Link key={item} to="/shop" className="block text-2xl font-kids font-bold text-slate-800 hover:text-toy-blue transition-colors border-b border-slate-50 pb-4">{item}</Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
