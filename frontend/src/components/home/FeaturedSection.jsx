import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { products } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

const FeaturedSection = ({ title = 'Featured Products', subtitle = 'Discover our most loved toys of the season.', items = products.slice(0, 4) }) => {
  return (
    <section className="pt-8 lg:pt-10 pb-8">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl lg:text-3xl text-[#222222] font-semibold tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg">{subtitle}</p>
          
          <Link to="/shop" className="mt-4 text-sm font-medium text-[#F1641E] border-b border-[#F1641E] pb-0.5 hover:opacity-80 transition-all">
            View All Collection
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
