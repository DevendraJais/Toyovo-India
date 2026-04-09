import { useState } from 'react';
import { X, ChevronDown, Star } from 'lucide-react';
import { categories } from '../../data/mockData';

const FilterSidebar = ({ isOpen, onClose }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const ages = ['0-2 Years', '3-5 Years', '6-8 Years', '9+ Years'];
  const prices = ['$0 - $25', '$25 - $50', '$50 - $100', 'Over $100'];
  const colors = ['#E3F2FD', '#FFF9C4', '#E8F5E9', '#FFEBEE', '#FCE4EC', '#F3E5F5'];

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const FilterSection = ({ title, children }) => (
    <div className="mb-10 lg:mb-12">
      <h4 className="font-kids font-bold text-lg text-slate-800 mb-6 flex items-center justify-between group cursor-pointer">
        {title}
        <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-toy-blue transition-colors" />
      </h4>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <aside className={`
      fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-auto w-full lg:w-72 bg-white lg:bg-transparent z-50 lg:z-0 p-8 lg:p-0 transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="flex items-center justify-between mb-8 lg:hidden">
        <h2 className="text-2xl font-bold">Filters</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-y-auto lg:overflow-visible max-h-[calc(100vh-100px)] lg:max-h-none pr-4 scrollbar-toy">
        
        {/* Category Filter */}
        <FilterSection title="Categories">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded-lg border-2 border-toy-blue/20 text-toy-blue focus:ring-0 checked:bg-toy-blue checked:border-toy-blue transition-all" 
                onChange={() => toggleFilter(cat.name)}
              />
              <span className="text-slate-600 font-semibold group-hover:text-toy-blue transition-colors">{cat.name}</span>
            </label>
          ))}
        </FilterSection>

        {/* Age Group Filter */}
        <FilterSection title="Age Group">
          {ages.map(age => (
            <label key={age} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded-lg border-2 border-toy-blue/20 text-toy-blue focus:ring-0 transition-all" 
                onChange={() => toggleFilter(age)}
              />
              <span className="text-slate-600 font-semibold group-hover:text-toy-blue transition-colors">{age}</span>
            </label>
          ))}
        </FilterSection>

        {/* Price Range Filter */}
        <FilterSection title="Price Range">
          {prices.map(price => (
            <label key={price} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded-lg border-2 border-toy-blue/20 text-toy-blue focus:ring-0 transition-all" 
                onChange={() => toggleFilter(price)}
              />
              <span className="text-slate-600 font-semibold group-hover:text-toy-blue transition-colors">{price}</span>
            </label>
          ))}
        </FilterSection>

        {/* Color Swatches */}
        <FilterSection title="Color Theme">
          <div className="flex flex-wrap gap-3 pt-2">
            {colors.map(color => (
              <button 
                key={color} 
                className="w-10 h-10 rounded-xl shadow-sm border-4 border-white transition-all hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </FilterSection>

        {/* Rating Filter */}
        <FilterSection title="Rating">
          {[5, 4, 3].map(rating => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-toy-blue/20" />
              <div className="flex gap-1 text-toy-yellow-dark">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-slate-200'}`} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">& Up</span>
            </label>
          ))}
        </FilterSection>

        <button className="w-full btn-primary mt-8 lg:mt-12 lg:hidden" onClick={onClose}>
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;
