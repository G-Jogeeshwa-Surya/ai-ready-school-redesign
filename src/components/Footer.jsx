const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <span className="font-bold text-xl text-white tracking-tight">AI Ready School</span>
            </a>
            <p className="text-sm">
              A Complete AI Ecosystem for K-12 Schools. Leading the transformation in education.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.aireadyschool.com/cypher" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Cypher (Students)</a></li>
              <li><a href="https://www.aireadyschool.com/morpheus" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Morpheus (Teachers)</a></li>
              <li><a href="https://www.aireadyschool.com/zion" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Zion (Tools)</a></li>
              <li><a href="https://www.aireadyschool.com/neo" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">NEO (Labs)</a></li>
              <li><a href="https://www.aireadyschool.com/matrix" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Matrix (Servers)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.aireadyschool.com/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="https://www.aireadyschool.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="https://www.aireadyschool.com/testimonials" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="https://www.aireadyschool.com/our-partners" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Our Partners</a></li>
              <li><a href="https://www.aireadyschool.com/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.aireadyschool.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.aireadyschool.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 LEARNIA.AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Powered By</span>
            <span className="text-white font-semibold">LEARNIA.AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
