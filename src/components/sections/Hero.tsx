
import Image from "next/image";
import {
  Award,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Hero() {
  const serviceCities = [
    "Mathura",
    "Agra",
    "Noida",
    "Delhi",
    "Gurgaon",
    "Etawah",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-700 dark:text-blue-400 text-sm font-medium">
              <ShieldCheck size={16} />
              Certified Orthodontist & Clear Aligner Specialist
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Creating
              <span className="text-blue-600"> Beautiful </span>
              Smiles Through Advanced Orthodontics
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-8">
              Dr. Taruna Pratap Singh (BDS, MDS – Orthodontics &
              Dentofacial Orthopaedics) is a specialist orthodontist
              dedicated to creating healthy, confident smiles through
              braces, clear aligners, lingual orthodontics, and
              advanced jaw correction therapies for children,
              adolescents, and adults.
            </p>

            {/* Qualification Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                BDS
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                MDS Orthodontics
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                AIIMS Delhi Certified
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                Reg. No. A23844
              </span>
            </div>

            {/* Service Cities */}
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceCities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all"
              >
                <Calendar size={18} />
                Book Appointment
              </a>

              <a
                href="tel:+918218466101"
                className="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  BDS
                </h3>
                <p className="text-slate-500 text-sm">
                  Dental Surgeon
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  MDS
                </h3>
                <p className="text-slate-500 text-sm">
                  Orthodontics
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  A23844
                </h3>
                <p className="text-slate-500 text-sm">
                  UP Dental Council
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  AIIMS
                </h3>
                <p className="text-slate-500 text-sm">
                  Certified Course
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full" />

            <Image
              src="/images/doctor/doctor.jpeg"
              alt="Dr. Taruna Pratap Singh"
              width={650}
              height={800}
              priority
              className="relative rounded-[40px] shadow-2xl object-cover mx-auto"
            />

            {/* Doctor Card */}
            <div className="absolute -bottom-8 left-4 md:left-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 max-w-sm">
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" />

                <div>
                  <h3 className="font-bold text-lg">
                    Dr. Taruna Pratap Singh
                  </h3>

                  <p className="text-sm text-slate-500">
                    Orthodontist & Dentofacial Orthopaedist
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500"
                  />
                  <span className="text-sm">
                    Registration No. A23844
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500"
                  />
                  <span className="text-sm">
                    BDS, MDS Orthodontics
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500"
                  />
                  <span className="text-sm">
                    AIIMS Delhi Certified
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-blue-600"
                  />
                  <span className="text-sm">
                    Mathura, Uttar Pradesh
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-4 text-yellow-500">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />

                <span className="ml-2 text-slate-600 dark:text-slate-400 text-sm">
                  Trusted Orthodontic Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

