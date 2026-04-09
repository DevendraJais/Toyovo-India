import { Link } from 'react-router-dom';
import { Search, Heart, Star, User, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Toys', path: '/shop' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Best Sellers', path: '/shop?sort=bestselling' },
        { name: 'On Sale', path: '/shop?filter=sale' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Safety & Quality', path: '/safety' },
        { name: 'Sitemap', path: '/sitemap' },
        { name: 'Store Locations', path: '/locations' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Shipping Policy', path: '/shipping' },
        { name: 'Returns & Refunds', path: '/returns' },
        { name: 'FAQs', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-toy-blue/5 border-t border-toy-blue/10 pt-16 pb-24 lg:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-toy-blue/10 pb-12">
          
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-toy-blue rounded-xl flex items-center justify-center rotate-3 shadow-md">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-kids font-bold text-2xl tracking-tight text-slate-800">Toyovo India</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed">
              Premium minimalist toys designed for the modern child. Safety, quality, and playfulness in every box.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-toy-blue" />
                <span className="font-semibold text-sm">123 Playful Lane, Toyland City</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-toy-blue" />
                <span className="font-semibold text-sm">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="w-5 h-5 text-toy-blue" />
                <span className="font-semibold text-sm">hello@toystore.com</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:ml-auto">
              <h4 className="font-kids font-bold text-xl text-slate-800 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-500 hover:text-toy-blue font-semibold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
          <div className="flex items-center gap-4">
            {[Search, Heart, Star, User].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-toy-blue hover:shadow-md transition-all shadow-sm border border-toy-blue/10"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-slate-500 font-semibold text-sm">
            © {currentYear} Toyovo India. All rights reserved. Built with ❤️ for kids.
          </div>

          <div className="flex items-center gap-4 grayscale opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
