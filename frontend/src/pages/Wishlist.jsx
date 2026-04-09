import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Heart, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 px-4">
           <h1 className="font-kids font-bold text-3xl lg:text-5xl text-slate-800 mb-4 flex items-center justify-center gap-3">
             My Wishlist
             <Heart className="w-8 h-8 text-toy-coral fill-toy-coral/10" />
           </h1>
           <p className="text-slate-500 font-medium text-sm lg:text-base leading-relaxed">
             Save your favorite toys here for later. Keep track of what you love!
           </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center justify-center space-y-6 bg-slate-50/50 rounded-toy-lg border-2 border-dashed border-slate-200">
             <div className="w-20 h-20 bg-toy-coral/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-toy-coral" />
             </div>
             <div>
               <h2 className="text-xl font-kids font-bold text-slate-800 mb-2">Your wishlist is empty</h2>
               <p className="text-slate-400 font-medium text-sm max-w-sm mx-auto">Start browsing and save items here.</p>
             </div>
             <Link to="/shop">
               <Button className="h-12 px-8 text-sm flex items-center gap-2 group">
                 Browse Toys
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map(product => (
               <div key={product.id} className="relative group">
                  <ProductCard product={product} />
                  <button 
                    onClick={() => dispatch(removeFromWishlist(product))}
                    className="absolute -top-3 -right-3 p-3 bg-white rounded-full shadow-lg text-toy-coral opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
               </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;
