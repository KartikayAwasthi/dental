import Image from "next/image";
import {
  CheckCircle,
  ShieldCheck,
  Award,
  GraduationCap,
} from "lucide-react";

export default function Expertise() {
  return (
    <section
      className="
      py-24
      bg-slate-50
      dark:bg-slate-900
      "
    >
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/services/expertise.jpg"
              alt="Orthodontic Expertise"
              width={650}
              height={700}
              className="
              rounded-[32px]
              shadow-2xl
              object-cover
              "
            />

            <div
              className="
              absolute
              bottom-6
              left-6
              bg-white
              dark:bg-slate-950
              p-5
              rounded-2xl
              shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" />

                <div>
                  <h4 className="font-bold">
                    AIIMS Delhi
                  </h4>

                  <p className="text-sm text-slate-500">
                    Clear Aligner Certification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Clinical Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Advanced Orthodontic Care For Every Age Group
            </h2>

            <p
              className="
              mt-6
              text-slate-600
              dark:text-slate-300
              leading-8
              "
            >
              Dr. Taruna Pratap Singh specializes in
              diagnosing, preventing, and correcting
              irregularities of teeth and jaws using
              evidence-based orthodontic treatments and
              modern digital techniques.
            </p>

            <p
              className="
              mt-4
              text-slate-600
              dark:text-slate-300
              leading-8
              "
            >
              Every treatment plan is individually
              designed to improve dental alignment,
              facial aesthetics, oral function, and
              long-term oral health.
            </p>

            {/* Expertise Areas */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Metal Bracket Fixed Orthodontic Treatment
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Ceramic Bracket Fixed Orthodontic Treatment
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Self-Ligating Bracket Orthodontics
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Clear Aligner Therapy
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Functional & Orthopaedic Jaw Correction
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={20}
                />

                <span>
                  Lingual Orthodontics
                </span>
              </div>
            </div>

            {/* Qualification Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <div
                className="
                bg-white
                dark:bg-slate-950
                p-5
                rounded-2xl
                shadow-md
                "
              >
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

              <div
                className="
                bg-white
                dark:bg-slate-950
                p-5
                rounded-2xl
                shadow-md
                "
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" />

                  <div>
                    <h4 className="font-semibold">
                      Registration
                    </h4>

                    <p className="text-sm text-slate-500">
                      A23844 (UP Dental Council)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              gap-2
              mt-8
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              transition
              "
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

