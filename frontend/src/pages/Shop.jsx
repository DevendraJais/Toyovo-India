import { useState } from 'react';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/mockData';
import { SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';

const Shop = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-center md:text-left items-center md:items-start">
          <div className="max-w-xl">
            <h1 className="font-kids font-bold text-3xl lg:text-5xl text-slate-800 mb-4">Our Collection</h1>
            <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed">
              Explore our wide range of premium, safe, and imaginative toys for kids of all ages. 
              Find the perfect companion for your child's playtime.
            </p>
          </div>
          
          {/* Sorting Dropdown (Mock) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="hidden lg:flex items-center bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shadow-sm">
              <button 
                onClick={() => setIsGridView(true)} 
                className={`p-2.5 rounded-xl transition-all ${isGridView ? 'bg-white text-toy-blue shadow-sm shadow-toy-blue/10' : 'text-slate-400'}`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsGridView(false)} 
                className={`p-2.5 rounded-xl transition-all ${!isGridView ? 'bg-white text-toy-blue shadow-sm shadow-toy-blue/10' : 'text-slate-400'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="relative group min-w-[200px] w-full md:w-[240px]">
              <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-toy font-bold text-slate-700 shadow-soft cursor-pointer hover:border-toy-blue/30 transition-all text-sm lg:text-base">
                Sort by: Featured
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden w-full flex items-center justify-center gap-3 py-4 px-6 bg-toy-blue text-white font-bold rounded-2xl shadow-lg shadow-toy-blue/20 mb-6 active:scale-95 transition-all"
          >
            <SlidersHorizontal className="w-5 h-5" />
            FILTER & SORT
          </button>

          {/* Filter Sidebar */}
          <FilterSidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />

          {/* Product Grid */}
          <div className="flex-grow w-full">
            <div className={`grid gap-4 md:gap-8 ${isGridView ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
              {products.concat(products).map((product, i) => (
                <ProductCard key={`${product.id}-${i}`} product={product} />
              ))}
            </div>
            
            {/* Pagination (Mock) */}
            <div className="mt-16 lg:mt-20 flex items-center justify-center gap-2 sm:gap-3">
              {[1, 2, 3].map(page => (
                <button 
                  key={page} 
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full font-bold transition-all shadow-sm text-sm sm:text-base ${page === 1 ? 'bg-toy-blue text-white shadow-toy-blue/20' : 'bg-white text-slate-400 hover:bg-toy-blue-light hover:text-toy-blue'}`}
                >
                  {page}
                </button>
              ))}
              <span className="text-slate-300 font-bold px-1 sm:px-2">...</span>
              <button className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-slate-400 font-bold shadow-sm hover:bg-toy-blue-light hover:text-toy-blue transition-all text-sm sm:text-base">8</button>
              <button className="px-5 sm:px-8 h-10 sm:h-14 rounded-full bg-white text-toy-blue font-bold shadow-sm hover:bg-toy-blue-light transition-all text-sm sm:text-base">Next</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;
