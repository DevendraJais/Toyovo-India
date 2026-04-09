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
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />

      <aside className={`
        fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-auto w-[85%] max-w-[320px] lg:w-72 bg-white lg:bg-transparent z-[70] lg:z-0 p-6 lg:p-0 transition-transform duration-300 shadow-2xl lg:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-toy-blue rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
            <h2 className="text-xl font-kids font-black text-slate-800 uppercase tracking-tight">Filters</h2>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="overflow-y-auto lg:overflow-visible h-[calc(100vh-120px)] lg:h-auto pr-2 scrollbar-toy">
          
          {/* Category Filter */}
          <FilterSection title="Categories">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded-lg border-2 border-slate-200 text-toy-blue focus:ring-0 checked:bg-toy-blue checked:border-toy-blue transition-all" 
                  onChange={() => toggleFilter(cat.name)}
                />
                <span className="text-slate-600 font-bold group-hover:text-toy-blue transition-colors">{cat.name}</span>
              </label>
            ))}
          </FilterSection>

          {/* Age Group Filter */}
          <FilterSection title="Age Group">
            {ages.map(age => (
              <label key={age} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded-lg border-2 border-slate-200 text-toy-blue focus:ring-0 transition-all" 
                  onChange={() => toggleFilter(age)}
                />
                <span className="text-slate-600 font-bold group-hover:text-toy-blue transition-colors">{age}</span>
              </label>
            ))}
          </FilterSection>

          {/* Price Range Filter */}
          <FilterSection title="Price Range">
            {prices.map(price => (
              <label key={price} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded-lg border-2 border-slate-200 text-toy-blue focus:ring-0 transition-all" 
                  onChange={() => toggleFilter(price)}
                />
                <span className="text-slate-600 font-bold group-hover:text-toy-blue transition-colors">{price}</span>
              </label>
            ))}
          </FilterSection>

          {/* Color Swatches */}
          <FilterSection title="Color Theme">
            <div className="flex flex-wrap gap-3 pt-1">
              {colors.map(color => (
                <button 
                  key={color} 
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl shadow-sm border-4 border-white transition-all hover:scale-110 hover:shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </FilterSection>

          {/* Rating Filter */}
          <FilterSection title="Rating">
            {[5, 4, 3].map(rating => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200" />
                <div className="flex gap-1 text-toy-yellow-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-slate-100'}`} />
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">& Up</span>
              </label>
            ))}
          </FilterSection>

          <div className="pb-8 lg:hidden">
            <button className="w-full btn-primary" onClick={onClose}>
              Show Results
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
