import Hero from '../components/home/Hero';
import CategorySlider from '../components/home/CategorySlider';
import FeaturedSection from '../components/home/FeaturedSection';
import PromoBlocks from '../components/home/PromoBlocks';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { products } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <CategorySlider />
      
      <FeaturedSection 
        title="Trending Toys" 
        subtitle="Our most loved, eco-friendly toys handpicked just for your little ones."
        items={products.slice(0, 4)}
      />
      
      <PromoBlocks />
      
      <FeaturedSection 
        title="New Arrivals" 
        subtitle="Fresh, creative, and ready to spark imagination. Check out our latest drops."
        items={products.slice(2, 6)}
      />
      
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
