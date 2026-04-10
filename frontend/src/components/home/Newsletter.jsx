import { Mail, Send } from 'lucide-react';
import Button from '../common/Button';

const Newsletter = () => {
  return (
    <section className="pt-10 lg:pt-16 pb-6">
      <div className="container-custom">
        <div className="bg-[#F8F1E7] rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col items-center text-center">
          
          <div className="relative z-10 max-w-xl w-full">
            <h2 className="text-2xl lg:text-3xl text-[#222222] font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Stay in the loop
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Subscribe for exclusive offers, new drops, and play ideas.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow h-12 px-6 rounded-full bg-white border border-gray-200 focus:border-gray-900 outline-none transition-all text-sm"
              />
              <button className="h-12 px-8 bg-[#222222] text-white font-bold rounded-full hover:bg-black transition-all text-sm shrink-0">
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
              By subscribing you agree to our <a href="#" className="underline hover:text-gray-900 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
