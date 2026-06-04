import Image from "next/image";
import {
  CheckCircle,
  Award,
  GraduationCap,
  MapPin,
} from "lucide-react";

const highlights = [
  "BDS (Bachelor of Dental Surgery)",
  "MDS - Orthodontics & Dentofacial Orthopaedics",
  "UP Dental Council Registration No. A23844",
  "Mastering Clear Aligner Course - AIIMS Delhi",
  "Clear Aligner Specialist",
  "Lingual Orthodontics Expert",
  "Functional & Orthopaedic Jaw Correction",
  "Serving Mathura, Agra, Noida, Delhi, Gurgaon & Etawah",
];

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <Image
              src="/images/doctor/doctor.jpeg"
              alt="Dr. Taruna Pratap Singh"
              width={600}
              height={750}
              className="rounded-[32px] shadow-2xl object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-950 p-5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" />

                <div>
                  <h4 className="font-bold">
                    Registration No.
                  </h4>

                  <p className="text-sm text-slate-500">
                    A23844
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Doctor
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Meet Dr. Taruna Pratap Singh
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
              Dr. Taruna Pratap Singh is a highly qualified
              Orthodontist and Dentofacial Orthopaedist
              committed to helping patients achieve healthy,
              functional, and confident smiles through
              evidence-based orthodontic care.

              She specializes in fixed orthodontic
              treatments, clear aligners, lingual
              orthodontics, and jaw growth modification
              therapies for children, adolescents, and
              adults.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
              With advanced training in clear aligner
              therapy from AIIMS Delhi, she combines
              clinical expertise with modern orthodontic
              technology to deliver precise, comfortable,
              and personalized treatment outcomes.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-blue-600 mt-1 shrink-0"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Qualification Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <div className="bg-white dark:bg-slate-950 p-5 rounded-2xl shadow-md">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" />

                  <div>
                    <h4 className="font-semibold">
                      Qualification
                    </h4>

                    <p className="text-sm text-slate-500">
                      BDS, MDS Orthodontics
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-5 rounded-2xl shadow-md">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />

                  <div>
                    <h4 className="font-semibold">
                      Location
                    </h4>

                    <p className="text-sm text-slate-500">
                      Mathura, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

