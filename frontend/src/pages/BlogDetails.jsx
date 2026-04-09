import { useParams, Link } from 'react-router-dom';
import { Calendar, User, MessageSquare, Heart, Star, Share2, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/mockData';
import Button from '../components/common/Button';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[0]; // Mock for now

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="container-custom">
        
        {/* Navigation / Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
           <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-black text-toy-blue uppercase tracking-widest leading-none mb-10 hover:gap-4 transition-all group">
             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
             Back to Blog
           </Link>
           <div className="flex items-center justify-center gap-4 text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-8">
              <span>Toy Guide</span>
              <div className="w-1.5 h-1.5 rounded-full bg-toy-blue/20 shrink-0" />
              <span>5 Min Read</span>
           </div>
           <h1 className="text-4xl lg:text-7xl font-kids font-bold text-slate-800 leading-tight mb-10 tracking-tight">{blog.title}</h1>
           <div className="flex items-center justify-center gap-8 text-sm font-bold text-slate-500">
             <div className="flex items-center gap-3">
               <img src="https://i.pravatar.cc/100?img=32" alt="Sarah" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
               <span>By {blog.author}</span>
             </div>
             <div className="flex items-center gap-2">
               <Calendar className="w-4 h-4 text-toy-blue" />
               {blog.date}
             </div>
           </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] lg:h-[600px] rounded-toy-lg overflow-hidden shadow-premium border-8 border-white mb-16 lg:mb-24 scale-105">
           <img src={blog.image} alt="Blog Detail" className="w-full h-full object-cover pulse-soft" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 relative items-start">
           
           {/* Left: Sidebar Sharing */}
           <div className="hidden lg:flex flex-col gap-6 sticky top-40 lg:col-span-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none text-center transform -rotate-90 origin-center mb-8">Share Link</span>
              {[MessageSquare, Heart, Star, Share2].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-white hover:text-toy-blue hover:shadow-soft transition-all active:scale-95">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
           </div>

           {/* Center: Main Article Content */}
           <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none prose-slate prose-headings:font-kids prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed prose-strong:text-slate-800 prose-blockquote:border-toy-blue prose-blockquote:bg-toy-blue/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:font-bold">
                 <p className="text-xl font-bold text-slate-800 mb-10 leading-relaxed italic border-l-4 border-toy-blue pl-6">
                   "{blog.excerpt}"
                 </p>
                 
                 <h2 className="text-3xl lg:text-4xl text-slate-800 mb-8 pt-6">The Importance of Playful Learning</h2>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 </p>
                 <p>
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>

                 <div className="grid sm:grid-cols-2 gap-8 my-16">
                    <div className="rounded-2xl overflow-hidden shadow-soft h-64 border-4 border-white">
                       <img src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=600" alt="Sub Image" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-soft h-64 border-4 border-white">
                       <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600" alt="Sub Image" className="w-full h-full object-cover" />
                    </div>
                 </div>

                 <h3 className="text-2xl lg:text-3xl text-slate-800 mb-6">Choosing the Right Toy</h3>
                 <p>
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                 <ul className="space-y-4 pt-4">
                    {['Understand age appropriateness', 'Check for safety certifications', 'Prioritize sustainable materials', 'Focus on open-ended play'].map(f => (
                       <li key={f} className="flex items-start gap-4 font-bold text-slate-700">
                          <div className="w-2.5 h-2.5 rounded-full bg-toy-blue mt-2 shrink-0 shadow-[0_0_8px_rgba(144,202,249,0.8)]" />
                          {f}
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Author Bio Card */}
              <div className="bg-slate-50 p-10 lg:p-14 rounded-toy border border-slate-100 flex flex-col md:flex-row items-center gap-10 mt-24 shadow-inner relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-toy-blue/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
                 <img src="https://i.pravatar.cc/150?img=32" alt="Author" className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-soft shrink-0" />
                 <div className="text-center md:text-left space-y-4">
                    <span className="text-[10px] font-black text-toy-blue uppercase tracking-widest leading-none bg-white px-3 py-1 rounded-full border border-toy-blue/10">About Author</span>
                    <h4 className="text-2xl font-kids font-bold text-slate-800">{blog.author}</h4>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                      Sarah is a child psychologist and a fan of wooden toys. She believes in the power of slow play and minimalist childhoods. 
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                       <Link to="#" className="text-toy-blue font-bold hover:underline underline-offset-4">Read more from Sarah</Link>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Related Posts / Popular (Desktop) */}
           <div className="lg:col-span-3 space-y-12 sticky top-40">
              <div className="space-y-6">
                 <h4 className="font-kids font-bold text-2xl text-slate-800 border-b border-slate-100 pb-4">Popular Articles</h4>
                 <div className="space-y-10">
                    {blogs.concat(blogs).slice(0, 3).map((b, i) => (
                       <Link key={i} to="/blog/1" className="group flex flex-col gap-4">
                          <div className="aspect-[16/10] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                             <img src={b.image} alt="Related" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <h5 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-toy-blue transition-colors line-clamp-2">{b.title}</h5>
                       </Link>
                    ))}
                 </div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetails;
