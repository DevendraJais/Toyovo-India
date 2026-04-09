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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-1' : 'bg-[#F9F7F2] py-2'}`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Left: Mobile Menu Trigger */}
        <div className="flex-1 flex justify-start">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-7 h-7 text-slate-800" />
          </button>
        </div>
        
        {/* Center: Main Logo Branding */}
        <div className="flex-1 flex justify-center scale-90 lg:scale-100">
          <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="w-8 h-8 lg:w-10 lg:h-11 flex items-center justify-center transition-transform group-hover:scale-110">
               <img src="/bear-logo.png" alt="Bear Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex items-baseline gap-2 lg:gap-3">
               <span className="font-kids font-bold text-xl lg:text-3xl text-toy-blue tracking-tight whitespace-nowrap">
                 Toyovo<span className="text-toy-coral"> India</span>
               </span>
               <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 leading-none pb-1 hidden sm:block border-l border-slate-200 pl-2 lg:pl-3 ml-1 lg:ml-0">
                 Toyshop
               </span>
            </div>
          </Link>
        </div>

        {/* Right: Operational Icons */}
        <div className="flex-1 flex justify-end items-center gap-2 sm:gap-6">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Search className="w-6 h-6 text-slate-800" />
          </button>
          <Link to="/login" className="p-2 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
            <User className="w-6 h-6 text-slate-800" />
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors relative group"
          >
            <ShoppingCart className="w-6 h-6 text-slate-800" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-toy-blue text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
              {cartTotalQuantity}
            </div>
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
