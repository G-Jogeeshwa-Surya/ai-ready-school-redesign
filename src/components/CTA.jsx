const CTA = () => {
  return (
    <section id="demo" className="relative py-24 bg-[#EEF2FF] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-8">
          Start Your Journey Today
        </h2>
        <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto mb-12">
          Let's work together to make your institution a truly AI Ready School. Equip your educators and prepare your students for the future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="btn-primary px-8 py-4 rounded-full text-lg font-bold shadow-lg">
            Book a Free Demo
          </a>
          <a href="#" className="bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] px-8 py-4 rounded-full text-lg font-bold transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
