import { Link } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, ArrowRight, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const OrderSuccess = () => {
  return (
    <div className="pt-32 lg:pt-48 pb-32 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="container-custom flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="w-32 h-32 bg-toy-mint/10 rounded-full flex items-center justify-center mb-10 shadow-inner"
        >
          <CheckCircle2 className="w-16 h-16 text-toy-mint-dark" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-6xl font-kids font-bold text-slate-800 mb-6">Yay! Order Placed! 🎉</h1>
          <p className="text-slate-500 font-medium text-lg lg:text-xl max-w-xl leading-relaxed mb-12">
            Your order <strong>#TS-9827</strong> has been successfully placed. We’re getting your toys ready for their new home!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/shop">
              <Button className="h-14 px-10 flex items-center gap-2 group">
                Continue Shopping
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="h-14 px-10">Go to Home</Button>
            </Link>
          </div>
        </motion.div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-slate-50 pt-20">
           <div className="flex flex-col items-center p-8 bg-toy-blue/5 rounded-toy transition-all hover:bg-white hover:shadow-soft border border-transparent hover:border-toy-blue/10 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-toy-blue" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Track Order</h4>
              <p className="text-sm font-medium text-slate-400">Check your email for tracking link.</p>
           </div>
           <div className="flex flex-col items-center p-8 bg-toy-yellow/5 rounded-toy transition-all hover:bg-white hover:shadow-soft border border-transparent hover:border-toy-yellow/10 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-toy-coral" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Gift Options</h4>
              <p className="text-sm font-medium text-slate-400">Add a message to your gift!</p>
           </div>
           <div className="flex flex-col items-center p-8 bg-toy-mint/5 rounded-toy transition-all hover:bg-white hover:shadow-soft border border-transparent hover:border-toy-mint/10 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-toy-mint-dark" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Help Center</h4>
              <p className="text-sm font-medium text-slate-400">Got questions? We're here 24/7.</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
