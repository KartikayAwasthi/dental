
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-5">
        {/* Top CTA */}
        

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold">
              Dr. Taruna Pratap Singh
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Specialist Orthodontist &
              Dentofacial Orthopaedist
              providing advanced orthodontic
              treatments, clear aligners,
              lingual orthodontics, and jaw
              correction therapies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="#about">
                  About Doctor
                </Link>
              </li>

              <li>
                <Link href="#services">
                  Treatments
                </Link>
              </li>

              <li>
                <Link href="#research">
                  Research
                </Link>
              </li>

              <li>
                <Link href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Contact Information
            </h4>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <a href="tel:+918218466101">
                  +91 8218466101
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <a href="mailto:tarunapratapsingh@gmail.com">
                  tarunapratapsingh@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <span>
                  Mathura,
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
              Credentials
            </h4>

            <div className="space-y-4 text-slate-400">
              <div className="flex gap-3">
                <GraduationCap
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <span>
                  BDS, MDS
                  (Orthodontics &
                  Dentofacial Orthopaedics)
                </span>
              </div>

              <div className="flex gap-3">
                <ShieldCheck
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <span>
                  Registration No.
                  A23844
                </span>
              </div>

              <div className="flex gap-3">
                <ShieldCheck
                  size={18}
                  className="text-blue-500 mt-1"
                />

                <span>
                  AIIMS Delhi Certified
                  Clear Aligner Course
                </span>
              </div>
            </div>
          </div>
        </div>

        
        

        {/* Bottom */}
        <div
          className="
          border-t
          border-slate-800
          py-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >
          <p className="text-slate-500 text-center md:text-left">
            © 2026 Dr. Taruna Pratap Singh.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="
              h-10 w-10
              rounded-full
              bg-slate-800
              flex items-center justify-center
              hover:bg-blue-600
              transition
              "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="
              h-10 w-10
              rounded-full
              bg-slate-800
              flex items-center justify-center
              hover:bg-blue-600
              transition
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/918218466101"
              target="_blank"
              className="
              h-10 w-10
              rounded-full
              bg-slate-800
              flex items-center justify-center
              hover:bg-green-600
              transition
              "
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

