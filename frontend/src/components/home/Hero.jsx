import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="relative pt-[74px] lg:pt-[92px] pb-2 bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[16px] bg-[#D4E9F1] min-h-[200px] lg:min-h-[350px] flex items-center shadow-soft">

          {/* Full Banner Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-bg.png"
              alt="Child playing with wooden toys"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle Gradient for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent z-10" />

          {/* Content Overlay */}
          <div className="relative z-20 w-full lg:w-3/5 pl-8 md:pl-16 pr-6 pt-12 pb-6 flex flex-col items-center lg:items-start text-center lg:text-left justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl text-[#222222] font-normal tracking-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Plan the best birthday ever
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
