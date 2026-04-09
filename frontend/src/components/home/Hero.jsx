import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[52px] lg:pt-[72px] h-auto bg-[#FDFDFB]">
      {/* 3D Background Layer */}
      <FloatingShapes />

      {/* Red Wavy Accent & Mobile Promotional Bar */}
      <div className="absolute top-[52px] lg:top-[72px] left-0 w-full z-20 overflow-hidden h-2">
          <div className="flex h-full w-[200%] animate-wave-slow">
             <svg width="200%" height="4" viewBox="0 0 1000 10" preserveAspectRatio="none" className="fill-toy-coral">
                <path d="M0,10 C150,10 350,0 500,0 C650,0 850,10 1000,10 L1000,10 L0,10 Z"></path>
             </svg>
          </div>
      </div>

      {/* 1. Styled Text Banner Section */}
      <div className="bg-white/40 backdrop-blur-[2px] py-6 lg:py-10 border-b border-slate-50 relative overflow-visible transform-none z-10">
        <div className="container-custom flex justify-center px-4 relative transform-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center relative z-20 transform-none"
            >
              <h2 className="font-kids font-black text-2xl md:text-3xl lg:text-5xl tracking-normal md:tracking-tight leading-tight uppercase flex flex-row flex-wrap justify-center items-center gap-x-2 md:gap-x-3 gap-y-2 transform-none drop-shadow-sm">
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0 }} className="text-toy-blue">Find</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="text-toy-coral">the</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="text-toy-yellow-dark">best</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} className="text-toy-mint-dark">toys</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} className="text-toy-blue">for</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1.0 }} className="text-toy-coral">your</motion.span>
                 <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1.2 }} className="text-toy-yellow-dark">kids</motion.span>
              </h2>
              
              <motion.div 
                animate={{ width: ["80px", "120px", "80px"], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-1 lg:h-1.5 bg-gradient-to-r from-toy-blue via-toy-coral to-toy-yellow-dark mx-auto mt-6 rounded-full blur-[1px]" 
              />
            </motion.div>
        </div>
      </div>

      {/* 2. Main Hero Slide Section */}
      <div className="relative h-[480px] lg:h-[750px] w-full overflow-hidden z-10">
        {/* Background Image with slightly higher z-index than 3D shapes but lower than text */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.png" 
            alt="Child playing with wooden toys" 
            className="w-full h-full object-cover"
          />
          {/* Subtle Overlay to make 3D elements and text pop */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </div>

        {/* Content Overlay */}
        <div className="container-custom relative h-full flex flex-col justify-center items-center lg:items-start lg:pl-16 px-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h1 className="text-2xl lg:text-7xl font-kids font-bold text-white leading-tight mb-10 drop-shadow-2xl">
              Eco-Friendly Games & <br className="hidden lg:block" />
              Toys That Foster <br className="hidden lg:block" />
              <span className="text-toy-blue">Creativity</span>
            </h1>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/shop">
                <Button className="h-14 lg:h-18 px-10 lg:px-14 text-lg lg:text-2xl font-bold rounded-xl shadow-2xl bg-white text-slate-800 hover:bg-slate-50 transition-all uppercase tracking-widest border-none">
                  Shop Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
             <div className="w-10 h-1.5 bg-toy-coral rounded-full shadow-[0_0_15px_rgba(239,154,154,0.9)]" />
             <div className="w-10 h-1.5 bg-white/40 rounded-full" />
             <div className="w-10 h-1.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Liquid Wave Separator */}
      <div className="absolute bottom-[44px] lg:bottom-[54px] left-0 w-full z-20 leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 110C1200 120 1320 120 1380 120L1440 120V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#FDFDFB" className="transform rotate-180" />
        </svg>
      </div>

      {/* 3. Orange Promotional Ticker Bar */}
      <div className="bg-toy-coral py-2 lg:py-3 overflow-hidden whitespace-nowrap z-30 relative">
        <div className="flex animate-marquee gap-8">
           {[...Array(6)].map((_, i) => (
             <span key={i} className="text-white font-black uppercase tracking-widest text-[10px] lg:text-base flex items-center gap-4 shrink-0">
               Colorful friction powered toys ✨ Free Shipping on ₹999+ ✨ Eco-Friendly Wooden Toys
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
