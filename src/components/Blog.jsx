import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Personalisation Beyond Content: The 4 Dimensions Every School Should Track",
    date: "March 25, 2026",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Teacher First: How AI Should Empower Educators, Not Replace Them",
    date: "March 24, 2026",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Why AI Should Make Children Think, Not Give Them Answers",
    date: "March 24, 2026",
    category: "Pedagogy",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-slate-600">Thoughts, updates, and best practices for AI implementation.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a key={index} href="#" className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-slate-500 mb-3">{post.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
