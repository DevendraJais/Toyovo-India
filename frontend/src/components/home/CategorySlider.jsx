import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { categories } from '../../data/mockData';
import 'swiper/css';
import 'swiper/css/pagination';

const CategorySlider = () => {
  return (
    <section className="pt-8 lg:pt-10 pb-4 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl lg:text-3xl text-[#222222] font-semibold tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Shop by Category
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg">Find the perfect gift for every age and interest.</p>
          
          <Link to="/shop" className="mt-4 text-sm font-medium text-[#F1641E] border-b border-[#F1641E] pb-0.5 hover:opacity-80 transition-all">
            View All Categories
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={3.5}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          allowTouchMove={false}
          className="pb-0 marquee-swiper"
          breakpoints={{
            640: { slidesPerView: 5.5 },
            1024: { slidesPerView: 8.5 },
            1280: { slidesPerView: 10.5 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="group block h-full select-none cursor-default">
                <div
                  className="rounded-2xl aspect-square flex flex-col items-center justify-between p-2 md:p-3 transition-transform duration-500 hover:scale-105"
                  style={{ backgroundColor: cat.color }}
                >
                  <div className="flex-1 flex items-center justify-center w-full min-h-0 p-1 md:p-2">
                    <img 
                      src={cat.icon} 
                      alt={cat.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-sm" 
                    />
                  </div>
                  <p className="font-kids font-bold text-[9px] md:text-[10px] text-slate-800/80 group-hover:text-toy-blue transition-colors text-center leading-none mt-2 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {cat.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
