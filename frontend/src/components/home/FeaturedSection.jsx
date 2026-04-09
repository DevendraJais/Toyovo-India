import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { products } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

const FeaturedSection = ({ title = 'Featured Products', subtitle = 'Discover our most loved toys of the season.', items = products.slice(0, 4) }) => {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-kids font-black text-2xl lg:text-4xl mb-3 tracking-tight flex flex-wrap gap-x-3 uppercase">
              <span className="text-toy-blue">{title.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')}</span>
              <span className="text-toy-coral">{title.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')}</span>
            </h2>
            <p className="text-slate-500 font-kids font-bold text-sm lg:text-lg tracking-tight leading-relaxed">{subtitle}</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-toy-blue font-black uppercase text-xs lg:text-sm tracking-widest hover:text-toy-coral transition-colors">
            <span className="border-b-2 border-toy-blue group-hover:border-toy-coral transition-colors pb-1">View All Collection</span>
            <span className="text-xl">→</span>
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
