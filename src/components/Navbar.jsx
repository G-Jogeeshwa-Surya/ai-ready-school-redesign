import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">AI Ready School</span>
            </a>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6 relative">
                {/* Mega Menu Trigger */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowPlatformDropdown(true)}
                  onMouseLeave={() => setShowPlatformDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">
                    Our AI Platform <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  {showPlatformDropdown && (
                    <div className="absolute top-full left-0 w-[650px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6 flex transition-all duration-200">
                      {/* Left Column - Tools */}
                      <div className="w-3/5 pr-6 border-r border-slate-200 border-dashed">
                        <p className="text-sm font-medium text-slate-400 mb-4 px-3">A Complete Set of AI Tools</p>
                        <div className="space-y-1">
                          <a href="https://www.aireadyschool.com/learning-hub" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <h4 className="font-bold text-slate-900">Learning Hub</h4>
                            <p className="text-sm text-slate-500">AI Learning Tools for Education</p>
                          </a>
                          <a href="https://www.aireadyschool.com/creative-hub" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <h4 className="font-bold text-slate-900">Creative Hub</h4>
                            <p className="text-sm text-slate-500">Image, Video, Audio AI Tools and More</p>
                          </a>
                          <a href="https://www.aireadyschool.com/project-hub" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <h4 className="font-bold text-slate-900">Project Hub</h4>
                            <p className="text-sm text-slate-500">Coding & Model Playgrounds</p>
                          </a>
                          <a href="https://www.aireadyschool.com/research-hub" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <h4 className="font-bold text-slate-900">Research Hub</h4>
                            <p className="text-sm text-slate-500">Research Facilitators</p>
                          </a>
                        </div>
                      </div>
                      
                      {/* Right Column - Secondary links */}
                      <div className="w-2/5 pl-6 flex flex-col">
                        <p className="text-sm font-medium text-slate-400 mb-4">Also Check</p>
                        <a href="https://www.aireadyschool.com/become-a-partner" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold mb-4 hover:text-primary-700">Become a Partner</a>
                        <a href="https://www.aireadyschool.com/our-partners" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-semibold mb-6 hover:text-primary-600">Our Clients</a>
                        
                        {/* Highlights Card */}
                        <a href="https://www.aireadyschool.com/why-ai-ready-school" target="_blank" rel="noopener noreferrer" className="mt-auto block bg-slate-50 rounded-xl p-4 border border-slate-100 text-center relative overflow-hidden group hover:bg-slate-100 transition-colors">
                          <h5 className="font-bold text-slate-900 mb-1">Why AI Ready School?</h5>
                          <p className="text-xs text-slate-500 relative z-10">The one and only AI Platform for Schools</p>
                          <div className="mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            {/* Simple generic building icon as illustration */}
                            <svg className="w-full h-16 text-slate-300 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10v10h2V10H4zm6 0v10h2V10h-2zm-8-4v2h20V6H2zm16 4v10h2V10h-2zM12 2L2 7v2h20V7L12 2zm2 8v10h2V10h-2z"/></svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* AI For Schools -> explicitly points to #platform */}
                <a href="#platform" className="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">AI For Schools</a>
                <a href="https://www.aireadyschool.com/use-cases" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">Use Cases</a>
                <a href="https://www.aireadyschool.com/blog" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors">Blog</a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.aireadyschool.com/sign-in" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#0F172A] font-medium px-4 py-2">Sign in</a>
            <a href="https://www.aireadyschool.com/demo" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-6 py-2.5 font-medium shadow-sm">
              Schedule a Call
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#platform" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">AI For Schools (Ecosystem)</a>
            <a href="https://www.aireadyschool.com/use-cases" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Use Cases</a>
            <a href="https://www.aireadyschool.com/blog" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Blog</a>
          </div>
          <div className="pt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-3 px-5">
              <a href="https://app.aireadyschool.com/sign-in" target="_blank" rel="noopener noreferrer" className="block text-center text-base font-medium text-slate-600 hover:text-slate-900">Sign in</a>
              <a href="https://www.aireadyschool.com/demo" target="_blank" rel="noopener noreferrer" className="block btn-primary text-center px-4 py-3 rounded-xl font-medium">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
