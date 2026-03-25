import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The AI-Ready School App is a game-changer. It simplifies routine tasks like generating worksheets, lesson plans, and assignments, while also helping us create engaging content—images, videos, and presentations—that make complex topics easier to teach.",
    author: "Mansi Sharma",
    role: "TGT English Teacher",
    school: "NH Goel World School",
    avatar: "https://ui-avatars.com/api/?name=Mansi+Sharma&background=3b82f6&color=fff&size=128"
  },
  {
    content: "This AI-driven platform has truly impressed me with its efficiency. It lets me create personalized lesson plans with subtopics, worksheets, anchor charts, and video links—all tailored to the number of days I need. It feels like having multiple smart teaching assistants.",
    author: "Shraddha Tripathy",
    role: "Primary Math Teacher",
    school: "NH Goel World School",
    avatar: "https://ui-avatars.com/api/?name=Shraddha+Tripathy&background=8b5cf6&color=fff&size=128"
  },
  {
    content: "AI Ready School is a one-stop solution that integrates multiple AI-powered tools for educators. It streamlines tasks like creating test papers, generating answer keys, and building activity-based lesson plans.",
    author: "Jayesh Agrawal",
    role: "PGT Physics Teacher",
    school: "Brighton International School",
    avatar: "https://ui-avatars.com/api/?name=Jayesh+Agrawal&background=f97316&color=fff&size=128"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by over 10,000+ <br/> students and teachers</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how educators are saving hours every week and transforming their classrooms with our AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="ed-card p-8 flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 italic flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full border border-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-slate-400 font-medium">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
