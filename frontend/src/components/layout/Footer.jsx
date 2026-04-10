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
    <footer className="bg-toy-blue/5 border-t border-toy-blue/10 pt-8 pb-28 lg:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 border-b border-toy-blue/10 pb-6">

          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F1641E] rounded-xl flex items-center justify-center rotate-3 shadow-md">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-kids font-bold text-2xl tracking-tight text-[#F1641E]">Toyovo India</span>
            </Link>
            <p className="text-gray-600 font-medium leading-relaxed">
              Premium minimalist toys designed for the modern child. Safety, quality, and playfulness in every box.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-[#F1641E]" />
                <span className="font-semibold text-sm">123 Playful Lane, Toyland City</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-[#F1641E]" />
                <span className="font-semibold text-sm">+91 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-[#F1641E]" />
                <span className="font-semibold text-sm">hello@toyovoindia.com</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:ml-auto">
              <h4 className="text-xl text-[#222222] font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-[#F1641E] font-medium transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
          <div className="flex items-center gap-3">
            {[Search, Heart, Star, User].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-[#F1641E] hover:shadow-md transition-all shadow-sm border border-gray-100"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>

          <div className="text-gray-500 font-medium text-xs">
            © {currentYear} Toyovo India. All rights reserved.
          </div>

          <div className="flex items-center gap-3 grayscale opacity-60 scale-90">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
