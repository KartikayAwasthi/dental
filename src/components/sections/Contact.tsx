
import AppointmentForm from "../ui/AppointmentForm";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Calendar,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium">
            Consultation & Appointments
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Book a Specialist Orthodontic Consultation
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Dr. Taruna Pratap Singh is available for
            orthodontic consultations, treatment planning,
            braces treatment, clear aligner cases, jaw
            correction therapies, and specialist referrals
            by prior appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <div>
            <AppointmentForm />
          </div>

          {/* Consultant Information */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Consultant Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Contact Number
                    </h4>

                    <a
                      href="tel:+918218466101"
                      className="text-slate-600 dark:text-slate-300"
                    >
                      +91 8218466101
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Email Address
                    </h4>

                    <a
                      href="mailto:tarunapratapsingh@gmail.com"
                      className="text-slate-600 dark:text-slate-300 break-all"
                    >
                      tarunapratapsingh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Base Location
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300">
                      Mathura, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Consultation Availability
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300">
                      By Prior Appointment Only
                    </p>

                    <p className="text-slate-600 dark:text-slate-300">
                      Available for Specialist Orthodontic
                      Consultations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Service Areas
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300">
                      Mathura, Agra, Noida, Delhi,
                      Gurgaon & Etawah
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-blue-600 mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Registration
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300">
                      UP Dental Council
                    </p>

                    <p className="text-slate-600 dark:text-slate-300">
                      Registration No. A23844
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
