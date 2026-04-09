import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, MessageSquare } from 'lucide-react';
import { blogs } from '../data/mockData';
import { motion } from 'framer-motion';

const BlogList = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-kids font-bold text-4xl lg:text-6xl text-slate-800 mb-6">Parenting & <span className="text-toy-blue underline decoration-4 decoration-toy-blue/20 underline-offset-8">Playtime</span></h1>
          <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed mb-12">
            Explore tips, guides, and stories about childhood development through the power of play.
          </p>
          
          <div className="relative max-w-lg mx-auto">
             <input type="text" placeholder="Search articles..." className="w-full h-16 pl-14 pr-24 rounded-full bg-slate-100 border-0 outline-none focus:ring-4 focus:ring-toy-blue/10 transition-all font-semibold text-slate-700" />
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
             <button className="absolute right-3 top-1/2 -translate-y-1/2 px-6 h-10 bg-white rounded-full text-xs font-black text-toy-blue uppercase tracking-widest shadow-sm hover:shadow-md transition-all">Search</button>
          </div>
        </div>

        {/* Featured Post (Mock) */}
        <div className="mb-24 group cursor-pointer">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-toy-blue/5 p-8 lg:p-12 rounded-toy-lg border border-toy-blue/10 hover:bg-white hover:shadow-premium transition-all duration-700">
              <div className="rounded-toy-lg overflow-hidden h-80 lg:h-[450px] shadow-soft">
                <img src={blogs[0].image} alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="space-y-6">
                <span className="px-4 py-1 bg-toy-blue rounded-full text-white text-[10px] font-black uppercase tracking-widest leading-none">Featured Article</span>
                <h2 className="text-3xl lg:text-5xl font-kids font-bold text-slate-800 group-hover:text-toy-blue transition-colors leading-tight">{blogs[0].title}</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{blogs[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm font-bold text-slate-400">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blogs[0].date}</div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /> By {blogs[0].author}</div>
                </div>
                <Link to="/blog/1" className="inline-flex items-center gap-2 text-toy-blue font-black uppercase tracking-widest text-sm pt-4 group-hover:gap-4 transition-all border-b-2 border-toy-blue/20 pb-2">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
           </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.concat(blogs).map((blog, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -8 }}
               className="group flex flex-col h-full bg-white rounded-toy border border-slate-100 p-4 transition-all hover:shadow-premium"
             >
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-50 mb-8 border-4 border-white shadow-soft">
                   <img src={blog.image} alt="Blog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-grow">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-toy-blue uppercase tracking-widest leading-none">Activity Guide</span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                        <MessageSquare className="w-4 h-4" />
                        <span>12</span>
                      </div>
                   </div>
                   <h3 className="text-2xl font-kids font-bold text-slate-800 group-hover:text-toy-blue transition-colors leading-tight mb-4 flex-grow truncate-ellipsis clamp-2">{blog.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">{blog.excerpt}</p>
                   <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                      <div className="flex items-center gap-2 font-bold text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" /> {blog.date}
                      </div>
                      <Link to="/blog/1" className="w-10 h-10 bg-toy-blue/10 rounded-xl flex items-center justify-center text-toy-blue hover:bg-toy-blue hover:text-white transition-all transform group-hover:scale-110">
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>

        {/* Load More (Mock) */}
        <div className="mt-20 text-center">
           <Button variant="outline" className="h-14 px-12 border-slate-200 text-slate-500 hover:border-toy-blue/30">Load More Articles</Button>
        </div>

      </div>
    </div>
  );
};

export default BlogList;
