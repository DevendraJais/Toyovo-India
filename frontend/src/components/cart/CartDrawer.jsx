import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart } from '../../store/slices/cartSlice';
import Button from '../common/Button';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, cartTotalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col pt-8"
          >
            {/* Header */}
            <div className="px-8 pb-8 flex items-center justify-between border-b border-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-toy-blue/10 rounded-2xl">
                  <ShoppingBag className="w-6 h-6 text-toy-blue" />
                </div>
                <h2 className="text-2xl font-kids font-bold text-slate-800 tracking-tight">Your Toy Box</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto px-8 py-8 scrollbar-toy">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center justify-center space-y-6">
                  <div className="w-24 h-24 bg-toy-blue-light rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-toy-blue-dark" />
                  </div>
                  <p className="font-bold text-slate-400 text-lg">Your cart is currently empty.</p>
                  <Button onClick={onClose} variant="outline" className="h-12 px-8">Continue Shopping</Button>
                </div>
              ) : (
                <div className="space-y-12">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 group relative">
                      <div className="w-24 h-32 rounded-2xl overflow-hidden bg-toy-blue/5 shrink-0 shadow-sm border-2 border-white hover:border-toy-blue/20 transition-all">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow space-y-3">
                        <div>
                          <h4 className="font-kids font-bold text-slate-800 group-hover:text-toy-blue transition-colors leading-tight mb-1">{item.name}</h4>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.category}</span>
                        </div>
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-1 border border-slate-100">
                              <button 
                                onClick={() => dispatch(decreaseCart(item))}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 transition-all"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-bold text-sm w-4 text-center">{item.cartQuantity}</span>
                              <button 
                                onClick={() => dispatch(addToCart(item))}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 transition-all"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                           </div>
                           <span className="font-bold text-slate-800 text-lg">${(item.price * item.cartQuantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => dispatch(removeFromCart(item))}
                        className="absolute -top-1 -right-1 p-2 bg-white rounded-full shadow-md text-toy-coral opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Checkout Section */}
            {cartItems.length > 0 && (
              <div className="p-8 bg-slate-50/50 border-t border-slate-100 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-bold text-slate-400 text-sm uppercase tracking-widest leading-none">
                    <span>Subtotal</span>
                    <span>${cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between font-black text-slate-800 text-2xl tracking-tight leading-none pt-2">
                    <span>Total</span>
                    <span className="text-toy-blue">${cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">Shipping and taxes calculated at checkout.</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link to="/checkout" className="w-full" onClick={onClose}>
                    <Button className="w-full h-14 text-lg flex items-center justify-center gap-2 group">
                      Checkout Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/cart" className="w-full text-center py-4 font-bold text-slate-400 hover:text-toy-blue transition-colors" onClick={onClose}>
                    View Shopping Cart
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
