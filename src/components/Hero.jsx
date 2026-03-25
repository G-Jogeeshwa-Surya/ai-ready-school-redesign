import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary-100/60 blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-100/60 blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4 text-primary-500" />
          <span>Transforming education for the AI era</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-tight">
          A Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">AI Ecosystem</span> <br className="hidden md:block"/> for K-12 Schools
        </h1>
        
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Everything a school needs to lead the AI era. AI companions for students,
          intelligent tools for teachers, hands-on innovation labs, and secure infrastructure running it all.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://www.aireadyschool.com/demo" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 btn-primary px-8 py-4 rounded-full text-lg font-medium shadow-lg w-full sm:w-auto">
            Schedule a Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#platform" className="inline-flex items-center justify-center gap-2 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto">
            Explore Ecosystem
          </a>
        </div>
        
        {/* Placeholder for dashboard / product preview graphic */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>
          <div className="rounded-2xl border border-slate-200/60 bg-[#E2E8F0]/50 backdrop-blur-sm p-2 shadow-2xl shadow-slate-200/50">
            <img 
              src="https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69100b9b9323d93e57131bf5_main-back-3.png" 
              alt="AI Ready School Dashboard" 
              className="rounded-xl w-full object-cover border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
