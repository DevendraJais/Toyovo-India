import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-32 lg:pt-48 pb-32 flex items-center justify-center min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-toy-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-toy-yellow/10 rounded-full blur-3xl -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white p-10 lg:p-14 rounded-toy-lg shadow-premium border border-slate-100 flex flex-col items-center"
      >
        <Link to="/" className="flex items-center gap-2 mb-10 group">
          <div className="w-12 h-12 bg-toy-blue rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-md">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <span className="font-kids font-bold text-3xl tracking-tight text-slate-800">ToyStore</span>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-kids font-bold text-slate-800 mb-4">Join the Fun! 🎈</h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">Create an account to start your magical toy shopping journey today.</p>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
             <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
             <div className="relative group">
                <input type="text" placeholder="John Doe" className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700 transition-all focus:ring-4 focus:ring-toy-blue/10 focus:bg-white" />
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-toy-blue transition-colors" />
             </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
             <div className="relative group">
                <input type="email" placeholder="hello@toystore.com" className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700 transition-all focus:ring-4 focus:ring-toy-blue/10 focus:bg-white" />
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-toy-blue transition-colors" />
             </div>
          </div>
          
          <div className="space-y-2">
             <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Password</label>
             <div className="relative group">
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full h-14 pl-14 pr-14 rounded-2xl bg-slate-50 border-0 outline-none font-semibold text-slate-700 transition-all focus:ring-4 focus:ring-toy-blue/10 focus:bg-white" />
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-toy-blue transition-colors" />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-toy-blue"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
             </div>
          </div>

          <div className="flex items-start gap-3 pl-1 mb-2">
             <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200 text-toy-blue focus:ring-0 mt-1" />
             <p className="text-sm font-medium text-slate-500 leading-relaxed">
               I agree to the <Link to="#" className="text-toy-blue font-bold hover:underline">Terms of Service</Link> and <Link to="#" className="text-toy-blue font-bold hover:underline">Privacy Policy</Link>.
             </p>
          </div>

          <Button className="w-full h-16 text-lg shadow-xl shadow-toy-blue/20">Create My Account ✨</Button>
        </form>

        <p className="text-slate-500 font-medium mt-10">
          Already have an account? <Link to="/login" className="text-toy-blue font-bold hover:underline">Log In</Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Signup;
