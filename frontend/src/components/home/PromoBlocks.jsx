import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Gift } from 'lucide-react';

const PromoBlocks = () => {
  return (
    <section className="pt-6 lg:pt-8 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Promo 1 */}
          <div className="bg-toy-mint/10 rounded-toy-lg p-6 lg:p-12 flex flex-col items-start justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-toy-mint/20 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
            <div className="flex items-center gap-2 px-3 py-1 bg-white text-toy-mint-dark text-[10px] font-black tracking-widest uppercase rounded-full mb-4 shadow-sm border border-toy-mint/10">
              <Truck className="w-3 h-3" />
              <span>Limited Offer</span>
            </div>
            <h3 className="text-2xl lg:text-4xl font-kids font-bold text-slate-800 mb-3 leading-tight">Free Shipping on All Orders Over ₹499!</h3>
            <p className="text-slate-500 font-medium text-sm lg:text-base mb-6 max-w-sm">No code required. Free standard delivery applied at checkout for qualifying orders.</p>
            <Link to="/shop" className="btn-primary flex items-center gap-2 py-3 lg:py-4 px-6 lg:px-8">
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </Link>
          </div>

          {/* Promo 2 */}
          <div className="bg-toy-yellow/10 rounded-toy-lg p-6 lg:p-12 flex flex-col items-start justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-toy-yellow/20 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
            <div className="flex items-center gap-2 px-3 py-1 bg-white text-toy-yellow-dark text-[10px] font-black tracking-widest uppercase rounded-full mb-4 shadow-sm border-2 border-toy-yellow/10">
              <Gift className="w-3 h-3" />
              <span>First Purchase</span>
            </div>
            <h3 className="text-2xl lg:text-4xl font-kids font-bold text-slate-800 mb-3 leading-tight">Get 10% Off Your First Order!</h3>
            <p className="text-slate-500 font-medium text-sm lg:text-base mb-6 max-w-sm">Use code <strong className="text-toy-yellow-dark underline decoration-2 underline-offset-4">WELCOME10</strong> at the checkout page.</p>
            <Link to="/signup" className="btn-secondary flex items-center gap-2 py-3 lg:py-4 px-6 lg:px-8">
              Sign Up Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBlocks;
