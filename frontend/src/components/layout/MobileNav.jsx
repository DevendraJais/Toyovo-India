import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { useSelector } from 'react-redux';

const MobileNav = () => {
  const location = useLocation();
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/shop' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', count: cartTotalQuantity },
    { icon: Heart, label: 'Wishlist', path: '/wishlist' },
    { icon: User, label: 'Account', path: '/login' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-toy-blue/10 px-4 py-3 flex items-center justify-around z-50 rounded-t-3xl shadow-2xl">
      {navItems.map((item) => (
        <Link 
          key={item.label} 
          to={item.path} 
          className={`relative flex flex-col items-center gap-1 transition-all ${location.pathname === item.path ? 'text-toy-blue scale-110' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <item.icon className={`w-6 h-6 ${location.pathname === item.path ? 'fill-toy-blue/10' : ''}`} />
          <span className="text-[10px] font-bold tracking-tight uppercase">{item.label}</span>
          
          {item.count > 0 && (
            <span className="absolute -top-1 -right-1 bg-toy-coral text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
              {item.count}
            </span>
          )}

          {location.pathname === item.path && (
            <div className="absolute -bottom-1 w-1 h-1 bg-toy-blue rounded-full shadow-[0_0_8px_rgba(144,202,249,0.8)]" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
