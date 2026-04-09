import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist } from '../store/slices/wishlistSlice';
import { products } from '../data/mockData';
import { Star, Truck, ShieldCheck, RefreshCcw, Heart, ShoppingCart, Minus, Plus, ChevronRight, Share2 } from 'lucide-react';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Mock fetching product by ID
    const found = products.find(p => p.id === id) || products[0];
    setProduct(found);
  }, [id]);

  if (!product) return <div className="pt-40 text-center">Loading product...</div>;

  const images = [product.image, ...Array(3).fill(product.image)]; // Mock gallery

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="container-custom">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-12 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-toy-blue transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link to="/shop" className="hover:text-toy-blue transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-slate-800 truncate">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          
          {/* Left: Image Gallery */}
          <div className="space-y-6 sticky top-32">
            <motion.div 
              layoutId={product.id}
              className="relative rounded-toy-lg overflow-hidden aspect-[4/5] bg-toy-blue/5 border-8 border-white shadow-soft"
            >
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-zoom-in"
              />
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all">
                <Share2 className="w-5 h-5 text-slate-700" />
              </button>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${selectedImage === i ? 'border-toy-blue scale-95 shadow-md' : 'border-white hover:border-toy-blue/20'}`}
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-toy-blue/10 text-toy-blue text-[10px] font-black uppercase tracking-widest rounded-full">{product.category}</span>
                <span className="px-3 py-1 bg-toy-mint/10 text-toy-mint-dark text-[10px] font-black uppercase tracking-widest rounded-full">In Stock</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-kids font-bold text-slate-800 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex gap-1 text-toy-yellow-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 fill-current ${i < Math.floor(product.rating) ? '' : 'text-slate-200'}`} />
                  ))}
                </div>
                <span className="font-bold text-slate-400 text-sm">{product.reviews} Customer Reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-kids font-bold text-slate-900">${product.price}</span>
              {product.oldPrice && (
                <span className="text-2xl text-slate-300 font-bold line-through">${product.oldPrice}</span>
              )}
            </div>

            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              {product.description || "Thoughtfully designed for curious minds, this premium toy encourages creative play, motor skills development, and endless fun."}
            </p>

            {/* Variation Placeholder */}
            <div className="space-y-6 pt-4">
              <div>
                <span className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Recommended Age</span>
                <p className="font-kids font-bold text-slate-800 text-xl">{product.age}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center bg-slate-50 rounded-toy p-1 border-2 border-slate-100 min-w-[140px] justify-between">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white hover:shadow-sm text-slate-400 hover:text-toy-blue transition-all"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-bold text-xl text-slate-800 w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white hover:shadow-sm text-slate-400 hover:text-toy-blue transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <Button className="flex-grow h-14 text-lg flex items-center justify-center gap-3">
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart
                </Button>
                
                <button 
                  onClick={() => dispatch(addToWishlist(product))}
                  className="w-14 h-14 flex items-center justify-center rounded-toy border-2 border-slate-100 text-slate-400 hover:text-toy-coral hover:border-toy-coral/30 hover:bg-toy-coral/5 transition-all"
                >
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Trusts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-toy-blue/10 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-toy-blue" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-toy-mint/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-toy-mint-dark" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-toy-yellow/10 rounded-full flex items-center justify-center">
                  <RefreshCcw className="w-5 h-5 text-toy-yellow-dark" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">30 Day Returns</span>
              </div>
            </div>

          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-32">
          <div className="flex items-center border-b border-slate-100 mb-12 gap-8 lg:gap-16 overflow-x-auto whitespace-nowrap pb-1">
            {['description', 'specifications', 'reviews'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-6 font-kids font-bold text-xl lg:text-2xl capitalize transition-all ${activeTab === tab ? 'text-toy-blue' : 'text-slate-300 hover:text-slate-500'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-toy-blue rounded-full shadow-[0_0_12px_rgba(144,202,249,0.8)]" />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl min-h-[300px]">
             {activeTab === 'description' && (
               <div className="animate-fade-in space-y-6">
                 <p className="text-slate-500 font-medium text-lg leading-relaxed">
                   Delight your little one with our premium {product.name}. Crafted from sustainable materials and finished with child-safe paints, this toy is built to last through generations of play. 
                 </p>
                 <ul className="grid sm:grid-cols-2 gap-4">
                   {['BPA-Free Materials', 'Sustainable Wood', 'Certified Safe Paints', 'Easy to Clean'].map(f => (
                     <li key={f} className="flex items-start gap-2 font-bold text-slate-600">
                       <span className="w-2 h-2 rounded-full bg-toy-blue mt-2 shrink-0" />
                       {f}
                     </li>
                   ))}
                 </ul>
               </div>
             )}
             {activeTab === 'specifications' && (
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {Object.entries({ Material: 'Wood', Weight: '0.5kg', Dimensions: '20x15cm', Recommended: product.age }).map(([k, v]) => (
                    <div key={k} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{k}</span>
                      <p className="font-bold text-slate-800">{v}</p>
                    </div>
                  ))}
               </div>
             )}
             {activeTab === 'reviews' && (
               <div className="text-center py-12 bg-slate-50 rounded-toy border-2 border-dashed border-slate-200">
                  <Star className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="font-bold text-slate-400">No reviews yet for this product. Be the first!</p>
                  <Button variant="outline" className="mt-6 border-slate-300 text-slate-500">Write a Review</Button>
               </div>
             )}
          </div>
        </div>

        {/* Related Products */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="font-kids font-bold text-3xl lg:text-4xl text-slate-800">You Might Also Love</h2>
            <Link to="/shop" className="btn-secondary h-12 px-8 flex items-center gap-2">View Collections</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
