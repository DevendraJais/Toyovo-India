import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="relative pt-[74px] lg:pt-[92px] pb-2 bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[16px] bg-[#D4E9F1] min-h-[200px] lg:min-h-[320px] flex items-center shadow-soft">

          {/* Background Image (Girl) - Positioned and sized down */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-90 lg:opacity-100 z-0 text-right">
            <img
              src="/hero-bg.png"
              alt="Child playing with wooden toys"
              className="h-full object-cover object-center lg:object-right ml-auto"
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 w-full lg:w-3/5 pl-8 md:pl-16 pr-6 py-8 md:py-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-kids font-bold text-slate-800 leading-tight mb-6">
                Plan the best <br />
                birthday ever
              </h1>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/shop">
                  <button className="px-5 py-2 bg-[#222222] text-white text-xs md:text-sm font-bold rounded-full shadow-lg hover:bg-black transition-all">
                    Explore our guide
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
