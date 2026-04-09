import { Mail, Send } from 'lucide-react';
import Button from '../common/Button';

const Newsletter = () => {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="container-custom">
        <div className="bg-toy-blue rounded-toy-lg p-10 lg:p-14 relative overflow-hidden flex flex-col items-center text-center">

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-2xl w-full">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-kids font-bold text-white mb-6">Join the Toy Box!</h2>
            <p className="text-white/80 font-medium text-lg leading-relaxed mb-10">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals. We promise no spam!
            </p>

            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full h-14 pl-6 pr-12 rounded-toy bg-white/90 border-0 focus:ring-4 focus:ring-white/20 font-semibold text-slate-800 placeholder:text-slate-400 outline-none transition-all"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-toy-blue/40" />
              </div>
              <Button className="h-14 px-8 bg-toy-yellow text-slate-800 hover:bg-toy-yellow-dark flex items-center justify-center gap-2 shadow-xl shrink-0">
                Subscribe Now
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <p className="mt-6 text-white/60 text-xs font-bold uppercase tracking-widest">
              By subscribing you agree to our <a href="#" className="underline decoration-2 underline-offset-4 hover:text-white transition-colors">Privacy Policy</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
