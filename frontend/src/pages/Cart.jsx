import { useSelector, useDispatch } from 'react-redux';
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCart } from '../store/slices/cartSlice';
import Button from '../components/common/Button';

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-slate-50/20">
      <div className="container-custom">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
           <div className="max-w-xl">
              <h1 className="font-kids font-bold text-3xl lg:text-5xl text-slate-800 mb-4 flex items-center gap-3">
                Shopping Cart
                <ShoppingBag className="w-8 h-8 text-toy-blue fill-toy-blue/10" />
              </h1>
              <p className="text-slate-500 font-medium text-sm lg:text-base">
                 You have <span className="text-toy-blue font-bold">{cartItems.length} items</span> in your cart. Ready for checkout?
              </p>
           </div>
           {cartItems.length > 0 && (
             <button 
               onClick={() => dispatch(clearCart())}
               className="text-slate-400 font-bold text-sm flex items-center gap-2 hover:text-toy-coral transition-colors"
             >
               <Trash2 className="w-4 h-4" />
               Clear Entire Cart
             </button>
           )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center justify-center space-y-6 bg-slate-50/50 rounded-toy-xl border-2 border-dashed border-slate-200">
             <div className="w-20 h-20 bg-toy-blue/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-toy-blue" />
             </div>
             <div>
               <h2 className="text-xl font-kids font-bold text-slate-800 mb-2">Your Shopping Cart is Empty</h2>
               <p className="text-slate-400 font-medium text-sm max-w-sm mx-auto leading-relaxed">Looks like you haven't added any toys to your cart yet.</p>
             </div>
             <Link to="/shop">
                <Button className="h-12 px-8 text-sm flex items-center gap-2 group">
                  Start Shopping
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
             </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Items List */}
            <div className="lg:col-span-8 space-y-8">
               <div className="bg-white rounded-toy border border-slate-100 shadow-soft overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 px-10 py-6 bg-slate-50 border-b border-slate-100 text-xs font-black text-slate-400 uppercase tracking-widest leading-none">
                     <span className="col-span-6">Product</span>
                     <span className="col-span-2 text-center">Price</span>
                     <span className="col-span-2 text-center">Quantity</span>
                     <span className="col-span-2 text-right">Total</span>
                  </div>
                  
                  <div className="divide-y divide-slate-50">
                    {cartItems.map(item => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center px-4 md:px-10 py-5 md:py-8 group relative border-b border-slate-50 md:border-0 last:border-b-0">
                           <div className="md:col-span-6 flex gap-4 md:gap-6 items-center">
                              <div className="w-16 h-20 md:w-24 md:h-32 rounded-xl overflow-hidden bg-slate-50 shrink-0 shadow-sm border border-slate-100">
                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="space-y-1 md:space-y-2">
                                 <span className="text-[8px] md:text-[9px] font-black text-toy-blue uppercase tracking-widest leading-none">{item.category}</span>
                                 <h3 className="text-base md:text-xl font-kids font-bold text-slate-800 group-hover:text-toy-blue transition-colors leading-tight">{item.name}</h3>
                                 <p className="text-[9px] md:text-[10px] font-bold text-slate-400 leading-relaxed uppercase">Age: {item.age}</p>
                              </div>
                           </div>
                           
                           {/* Price, Quantity, Total Row for Mobile */}
                           <div className="flex items-center justify-between md:grid md:grid-cols-6 md:col-span-6 w-full">
                              <div className="md:col-span-2 md:text-center font-bold text-xs md:text-base text-slate-400">
                                 ${item.price.toFixed(2)}
                              </div>

                              <div className="md:col-span-2 flex justify-center">
                                 <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl p-0.5 md:p-1 border border-slate-100 scale-90 md:scale-100">
                                    <button onClick={() => dispatch(decreaseCart(item))} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 transition-colors">
                                       <Minus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </button>
                                    <span className="font-bold text-sm md:text-base w-4 text-center">{item.cartQuantity}</span>
                                    <button onClick={() => dispatch(addToCart(item))} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 transition-colors">
                                       <Plus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </button>
                                 </div>
                              </div>

                              <div className="md:col-span-2 text-right font-kids font-bold text-base md:text-lg text-slate-800">
                                 ${(item.price * item.cartQuantity).toFixed(2)}
                              </div>
                           </div>

                           <button 
                              onClick={() => dispatch(removeFromCart(item))}
                              className="absolute top-4 md:top-8 right-4 md:right-10 p-2 text-toy-coral opacity-0 group-hover:opacity-100 md:opacity-0 transition-opacity hover:scale-110 active:scale-95"
                           >
                              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                           </button>
                        </div>
                    ))}
                  </div>
               </div>

               {/* Trust Badges */}
               <div className="grid sm:grid-cols-3 gap-8 py-10">
                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-toy border border-slate-100 group shadow-sm hover:shadow-soft transition-all">
                     <Truck className="w-10 h-10 text-toy-blue mb-4 group-hover:scale-110 transition-transform" />
                     <h4 className="font-bold text-slate-800 mb-1">Free Delivery</h4>
                     <p className="text-xs font-medium text-slate-400">Available on all orders over $99</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-toy border border-slate-100 group shadow-sm hover:shadow-soft transition-all">
                     <RotateCcw className="w-10 h-10 text-toy-mint-dark mb-4 group-hover:scale-110 transition-transform" />
                     <h4 className="font-bold text-slate-800 mb-1">Easy Returns</h4>
                     <p className="text-xs font-medium text-slate-400">30 days money back guarantee</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-toy border border-slate-100 group shadow-sm hover:shadow-soft transition-all">
                     <ShieldCheck className="w-10 h-10 text-toy-yellow-dark mb-4 group-hover:scale-110 transition-transform" />
                     <h4 className="font-bold text-slate-800 mb-1">Secure Payment</h4>
                     <p className="text-xs font-medium text-slate-400">100% secure checkout and data</p>
                  </div>
               </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 sticky top-36">
               <div className="bg-white p-10 lg:p-12 rounded-toy shadow-premium border border-slate-100">
                  <h3 className="font-kids font-bold text-2xl text-slate-800 mb-10 pb-6 border-b border-slate-50">Order Summary</h3>
                  
                  <div className="space-y-6 mb-10">
                     <div className="flex items-center justify-between text-slate-400 font-bold uppercase tracking-widest text-xs">
                        <span>Items Subtotal</span>
                        <span>${cartTotalAmount.toFixed(2)}</span>
                     </div>
                     <div className="flex items-center justify-between text-slate-400 font-bold uppercase tracking-widest text-xs">
                        <span>Est. Shipping</span>
                        <span className="text-toy-mint-dark font-black tracking-widest">FREE</span>
                     </div>
                     <div className="flex items-center justify-between text-slate-400 font-bold uppercase tracking-widest text-xs">
                        <span>Tax</span>
                        <span>$0.00</span>
                     </div>
                     <div className="flex items-center justify-between text-slate-800 font-kids font-bold text-3xl pt-6 border-t border-slate-50 mt-4 leading-none">
                        <span>Total</span>
                        <span className="text-toy-blue">${cartTotalAmount.toFixed(2)}</span>
                     </div>
                  </div>

                  <div className="relative mb-10">
                    <input type="text" placeholder="Promo Code" className="w-full h-14 pl-6 pr-24 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700" />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 h-10 bg-white rounded-xl text-xs font-black text-toy-blue hover:shadow-md transition-all">Apply</button>
                  </div>

                  <Link to="/checkout" className="block w-full">
                    <Button className="w-full h-16 text-xl flex items-center justify-center gap-3 shadow-xl shadow-toy-blue/20 group">
                      Checkout Process
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link to="/shop" className="block w-full text-center py-6 font-bold text-slate-400 hover:text-toy-blue transition-colors">
                     Continue Shopping
                  </Link>
               </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
