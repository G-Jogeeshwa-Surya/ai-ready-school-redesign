import { Users, BookOpen, ShieldCheck } from 'lucide-react';

const useCases = [
  {
    title: "For Teachers: Supercharged Productivity",
    description: "Automate lesson planning, generate interactive worksheets, and get real-time insights into student learning gaps without spending hours grading.",
    icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
    color: "bg-indigo-50"
  },
  {
    title: "For Students: Personalized Tutoring",
    description: "Every student gets a 1-on-1 AI companion that guides them through complex subjects using Socratic questioning, ensuring they think independently.",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    title: "For Administrators: Campus Intelligence",
    description: "Monitor school-wide engagement, ensure absolute data privacy, and seamlessly integrate new tech infrastructure using local secure AI servers.",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    color: "bg-emerald-50"
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-[#CBD5E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-slate-600">
            See exactly how our end-to-end platform transforms the daily experience for everyone in your school structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <div key={i} className="ed-card p-8 flex flex-col items-start border border-slate-100">
              <div className={`p-4 rounded-xl ${useCase.color} mb-6`}>
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
