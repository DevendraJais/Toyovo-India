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
      whileHover={{ y: -8 }}
      className="card-toy group relative overflow-hidden flex flex-col h-full"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.badge && (
          <span className="bg-toy-blue text-white text-[8px] lg:text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="bg-toy-coral text-white text-[8px] lg:text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
            SALE
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-toy-blue/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 hover:bg-toy-coral hover:text-white"
          >
            <Heart className="w-4.5 h-4.5" />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-toy-blue hover:text-white"
          >
            <Eye className="w-4.5 h-4.5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{product.category}</span>
          <div className="flex items-center gap-1 text-toy-yellow-dark">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="font-kids font-bold text-base sm:text-lg text-slate-800 line-clamp-1 group-hover:text-toy-blue transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-x-1 gap-y-2 border-t border-slate-50 pt-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="bg-slate-50 text-slate-500 text-[9px] font-black uppercase px-2 py-0.5 rounded-md shrink-0 border border-slate-100">{product.age}</span>
            <span className="font-kids font-bold text-sm lg:text-lg text-slate-800 tracking-tighter leading-none shrink-0">₹{product.price}</span>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-9 h-9 lg:w-10 lg:h-10 bg-toy-blue/10 rounded-xl flex items-center justify-center text-toy-blue hover:bg-toy-blue hover:text-white transition-all transform active:scale-95 shadow-sm shrink-0"
          >
            <ShoppingCart className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
