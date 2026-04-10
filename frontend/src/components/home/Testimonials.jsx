import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Parent of 2',
    avatar: 'https://i.pravatar.cc/150?img=32',
    content: 'My kids absolutely love the wooden blocks! They stay engaged for hours, and the quality is just outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Kindergarten Teacher',
    avatar: 'https://i.pravatar.cc/150?img=12',
    content: 'The educational toys here are top-tier. They actually help children develop critical thinking skills through play.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Miller',
    role: 'Eco-conscious Mom',
    avatar: 'https://i.pravatar.cc/150?img=26',
    content: "I love that these toys are sustainable and safe. It's rare to find such high-quality products that are also beautiful.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-12 bg-[#F9F9F9]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-3xl text-[#222222] font-semibold tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            What parents are saying
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            See why thousands of parents trust Toyovo India for their children's playtime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-toy shadow-soft border border-toy-blue/10 relative group hover:shadow-premium transition-all duration-300"
            >
              <div className="absolute top-5 right-6 text-toy-blue/20 group-hover:text-toy-blue/40 transition-colors">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              <div className="flex gap-1 mb-3 text-toy-yellow-dark">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed mb-4 italic">
                "{testi.content}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-50 pt-3">
                <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-toy-blue-light shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm tracking-tight leading-tight">{testi.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
