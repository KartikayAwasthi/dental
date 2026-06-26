import { Users, Globe, GraduationCap, Building2 } from "lucide-react";

const collaborations = [
  {
    icon: GraduationCap,
    title: "Academic Associations",
    description:
      "Life member of the Indian Orthodontic Society and member of the World Federation of Orthodontists.",
  },
  {
    icon: Globe,
    title: "International Conferences",
    description:
      "Regular participant and presenter at national and international orthodontic conferences.",
  },
  {
    icon: Building2,
    title: "Institutional Collaboration",
    description:
      "Research and educational collaboration with King George Medical University and AIIMS Delhi.",
  },
  {
    icon: Users,
    title: "Clinical Partnerships",
    description:
      "Active referral partnerships with dentists, oral surgeons, prosthodontists, and pediatricians.",
  },
];

export default function Collaboration() {
  return (
    <section className="py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-teal-700 dark:text-teal-400 font-semibold text-sm uppercase tracking-widest">
            Affiliations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white">
            Professional Collaboration
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Building stronger orthodontic outcomes through research, education,
            and professional networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborations.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl text-center hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal-100 transition-colors">
                <Icon size={24} className="text-teal-700 dark:text-teal-400" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
