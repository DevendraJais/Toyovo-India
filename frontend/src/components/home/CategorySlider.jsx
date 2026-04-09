import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { categories } from '../../data/mockData';
import 'swiper/css';
import 'swiper/css/pagination';

const CategorySlider = () => {
  return (
    <section className="pt-16 lg:pt-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-kids font-black text-2xl lg:text-4xl mb-3 tracking-tight flex flex-wrap gap-x-3 uppercase">
              <span className="text-toy-blue">Shop</span>
              <span className="text-toy-coral">by</span>
              <span className="text-toy-yellow-dark">Category</span>
            </h2>
            <p className="text-slate-500 font-kids font-bold text-sm lg:text-lg tracking-tight leading-relaxed">Find the perfect gift for every age and interest.</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-toy-blue font-black uppercase text-xs lg:text-sm tracking-widest hover:text-toy-coral transition-colors">
            <span className="border-b-2 border-toy-blue group-hover:border-toy-coral transition-colors pb-1">View All Categories</span>
            <span className="text-xl">→</span>
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          className="pb-0"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link to={cat.path} className="group block h-full">
                <div
                  className="rounded-toy-lg aspect-square flex flex-col items-center justify-between p-5 lg:p-8 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-premium border-2 border-transparent group-hover:border-white/50"
                  style={{ backgroundColor: cat.color }}
                >
                  <div className="flex-1 flex items-center justify-center w-full min-h-0">
                    <img 
                      src={cat.icon} 
                      alt={cat.name} 
                      className="w-full h-full object-contain group-hover:rotate-6 transition-all duration-500 drop-shadow-md" 
                    />
                  </div>
                  <p className="font-kids font-black text-[10px] lg:text-xs text-slate-800/80 group-hover:text-toy-blue transition-colors text-center leading-none mt-4 uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {cat.name}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
