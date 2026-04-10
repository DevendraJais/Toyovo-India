import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist } from '../../store/slices/wishlistSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col gap-3"
    >
      {/* Image Container with Rounded Corners */}
      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#F7F7F7]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay (Optional, but hidden by default) */}
        <div className="absolute inset-x-0 bottom-4 px-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}
            className="w-full py-3 bg-white text-[#222222] font-bold rounded-2xl shadow-xl hover:bg-[#222222] hover:text-white transition-colors text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Content - Minimalist Shopify Style */}
      <div className="px-1 flex flex-col gap-1">
        <Link to={`/product/${product.id}`} className="group-hover:opacity-70 transition-opacity">
          <h3 className="text-sm md:text-base font-medium text-[#222222] line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex flex-col">
          <span className="text-base md:text-lg font-bold text-[#222222]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          
          {product.oldPrice && (
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-500">
              <span className="line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
              <span className="font-medium text-[#F1641E]">
                ({Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% off)
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
