import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingBag, ChevronRight, Truck, CreditCard, ShieldCheck, Mail, MapPin, BadgePercent } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotalAmount } = useSelector(state => state.cart);
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="container-custom">
        
        {/* Progress Header */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-kids font-bold text-4xl text-slate-800 mb-8">Checkout</h1>
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]">
            <span className={step >= 1 ? 'text-toy-blue' : 'text-slate-300'}>Shipping</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span className={step >= 2 ? 'text-toy-blue' : 'text-slate-300'}>Payment</span>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span className="text-slate-300">Success</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="bg-white p-8 lg:p-12 rounded-toy shadow-soft border border-slate-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-toy-blue/10 rounded-2xl">
                     <Truck className="w-6 h-6 text-toy-blue" />
                  </div>
                  <h2 className="text-2xl font-kids font-bold text-slate-800">Shipping Information</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">First Name</label>
                       <input type="text" placeholder="John" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Last Name</label>
                       <input type="text" placeholder="Doe" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Street Address</label>
                     <input type="text" placeholder="123 Playful St." className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">City</label>
                       <input type="text" placeholder="Toytown" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Postal Code</label>
                       <input type="text" placeholder="123456" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Phone</label>
                       <input type="tel" placeholder="+1..." className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 focus:ring-4 focus:ring-toy-blue/10 outline-none font-semibold text-slate-700" />
                    </div>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full h-16 text-lg mt-8">Continue to Payment</Button>
                </form>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white p-8 lg:p-12 rounded-toy shadow-soft border border-slate-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-toy-blue/10 rounded-2xl">
                     <CreditCard className="w-6 h-6 text-toy-blue" />
                  </div>
                  <h2 className="text-2xl font-kids font-bold text-slate-800">Payment Method</h2>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="p-6 rounded-2xl border-2 border-toy-blue bg-toy-blue/5 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <CreditCard className="w-6 h-6 text-toy-blue" />
                        <span className="font-bold text-slate-700">Credit / Debit Card</span>
                     </div>
                     <div className="w-6 h-6 rounded-full border-4 border-toy-blue flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-toy-blue rounded-full" />
                     </div>
                  </div>
                  <div className="p-6 rounded-2xl border-2 border-slate-100 hover:border-toy-blue/30 transition-all cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <BadgePercent className="w-6 h-6 text-slate-400 group-hover:text-toy-blue transition-colors" />
                        <span className="font-bold text-slate-500 group-hover:text-slate-700">PayPal / Other</span>
                     </div>
                     <div className="w-6 h-6 rounded-full border-2 border-slate-200" />
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Card Number</label>
                     <input type="text" placeholder="**** **** **** 1234" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Expiry Date</label>
                       <input type="text" placeholder="MM/YY" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">CVC</label>
                       <input type="text" placeholder="123" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700" />
                    </div>
                  </div>
                  <Link to="/order-success" className="block w-full pt-4">
                    <Button variant="primary" className="w-full h-16 text-lg">Complete Purchase ✨</Button>
                  </Link>
                  <button onClick={() => setStep(1)} className="w-full py-4 text-slate-400 font-bold hover:text-toy-blue transition-colors">Go Back to Shipping</button>
                </form>
              </div>
            )}

          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5 sticky top-32 space-y-8">
            <div className="bg-white p-8 lg:p-10 rounded-toy shadow-soft border border-slate-100">
               <h3 className="font-kids font-bold text-xl text-slate-800 mb-8 border-b border-slate-50 pb-6 flex items-center gap-3">
                 <ShoppingBag className="w-5 h-5 text-toy-blue" />
                 Order Summary
               </h3>

               <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-toy mb-8">
                 {cartItems.map(item => (
                   <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h4 className="font-bold text-slate-700 text-sm leading-tight mb-1">{item.name}</h4>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                          <span>Qty: {item.cartQuantity}</span>
                          <span className="text-slate-800 text-sm">${(item.price * item.cartQuantity).toFixed(2)}</span>
                        </div>
                      </div>
                   </div>
                 ))}
                 {cartItems.length === 0 && <p className="text-slate-400 font-bold">No items in cart.</p>}
               </div>

               <div className="space-y-4 pt-6 border-t border-slate-50">
                  <div className="flex items-center justify-between text-slate-400 font-bold text-sm">
                    <span>Subtotal</span>
                    <span>${cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 font-bold text-sm">
                    <span>Shipping</span>
                    <span className="text-toy-mint-dark uppercase tracking-widest text-[10px] font-black">Free</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-800 font-kids font-bold text-2xl pt-4">
                    <span>Total</span>
                    <span className="text-toy-blue">${cartTotalAmount.toFixed(2)}</span>
                  </div>
               </div>

               <div className="mt-10 p-6 bg-slate-50 rounded-2xl flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-toy-blue shrink-0" />
                  <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-wider">
                    Secure 256-bit SSL encrypted checkout. Your data is safe with us.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
