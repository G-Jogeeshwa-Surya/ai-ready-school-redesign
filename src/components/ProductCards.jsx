import { useState, useRef } from 'react';
import { Bot, LineChart, Cpu, Beaker, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Cypher',
    badge: 'AI for Students',
    description: 'Personalized learning companion that builds independent thinkers. Guides thinking through Socratic questioning rather than just providing answers.',
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-100',
    borderColor: 'border-blue-200',
    link: 'https://www.aireadyschool.com/cypher'
  },
  {
    name: 'Morpheus',
    badge: 'AI Teaching Agent',
    description: 'Reduces educator workload with AI-powered lesson planning, dynamic content creation, and real-time visibility into learning gaps.',
    icon: <Bot className="h-6 w-6 text-purple-600" />,
    color: 'bg-purple-100',
    borderColor: 'border-purple-200',
    link: 'https://www.aireadyschool.com/morpheus'
  },
  {
    name: 'Zion',
    badge: 'AI Tool Suite',
    description: 'An all-in-one toolkit of 30+ fully integrated AI tools to support everyday schoolwork, research, and creative projects securely.',
    icon: <LineChart className="h-6 w-6 text-emerald-600" />,
    color: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    link: 'https://www.aireadyschool.com/zion'
  },
  {
    name: 'NEO',
    badge: 'AI Innovation Lab',
    description: 'A physical lab space where students build with AI, robotics, and XR—developing real-world skills through interactive project-based learning.',
    icon: <Beaker className="h-6 w-6 text-orange-600" />,
    color: 'bg-orange-100',
    borderColor: 'border-orange-200',
    link: 'https://www.aireadyschool.com/neo'
  },
  {
    name: 'Matrix',
    badge: 'AI Infrastructure',
    description: 'Local AI servers and models running directly on your campus, ensuring complete data privacy and supporting AI-powered campus intelligence.',
    icon: <Cpu className="h-6 w-6 text-slate-600" />,
    color: 'bg-slate-200',
    borderColor: 'border-slate-300',
    link: 'https://www.aireadyschool.com/matrix'
  }
];

const ProductCardItem = ({ product }) => {
  const [canClick, setCanClick] = useState(false);
  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setCanClick(true);
    }, 250);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
    setCanClick(false);
  };

  const handleClick = (e) => {
    if (!canClick) {
      e.preventDefault();
    }
  };

  return (
    <a 
      id={product.name.toLowerCase()}
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group flex flex-col pt-8 px-8 pb-10 ed-card relative overflow-hidden z-0 cursor-pointer`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${product.color} rounded-bl-full -z-10 opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 origin-top-right`}></div>
      
      <div className="mb-6 flex justify-between items-start">
        <div className={`p-4 rounded-2xl ${product.color} self-start`}>
          {product.icon}
        </div>
        <div className="text-xs font-semibold tracking-wider uppercase bg-slate-100 text-slate-600 py-1.5 px-3 rounded-full">
          {product.badge}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
      <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
        {product.description}
      </p>
      
      <div className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:text-primary-600 transition-colors mt-auto w-fit">
        Learn More 
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

const ProductCards = () => {
  return (
    <section id="platform" className="py-24 bg-[#CBD5E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            A Fully Integrated Ecosystem
          </h2>
          <p className="text-xl text-slate-600">
            Our platform connects every part of the educational journey, serving students, teachers, and administrators with specialized AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <ProductCardItem key={product.name} product={product} />
          ))}
          
          {/* Summary/Bridge card */}
          <div className="group flex flex-col justify-center items-center text-center p-8 ed-card bg-white">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Sparkles className="h-8 w-8 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">All Working Together</h3>
            <p className="text-slate-600 mb-8">
              Every tool in our ecosystem integrates seamlessly, providing a unified experience for your entire school.
            </p>
            <a href="https://www.aireadyschool.com/demo" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-full font-medium shadow-sm">
              See it in action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
