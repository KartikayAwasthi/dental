import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";

import Hero from "@/components/sections/Hero";
import AboutDoctor from "@/components/sections/AboutDoctor";
import Stats from "@/components/sections/Stats";

import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Expertise from "@/components/sections/Expertise";

import Credentials from "@/components/sections/Credentials";
import Research from "@/components/sections/Research";
import Collaboration from "@/components/sections/Collaboration";

import Gallery from "@/components/sections/Gallery";

import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/FAQs";

import Availability from "@/components/sections/Availability";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Script from "next/script";
import ChatBot from "@/components/ui/ChatBot";
export default function HomePage() {
  return (
    <>
     <Script
    id="doctor-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr. Taruna",
        "medicalSpecialty": "Orthodontics",
        "telephone": "+91XXXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mathura",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "India"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mathura"
          },
          {
            "@type": "City",
            "name": "Agra"
          },
          {
            "@type": "City",
            "name": "Noida"
          },
          {
            "@type": "City",
            "name": "Delhi"
          },
          {
            "@type": "City",
            "name": "Gurgaon"
          },
          {
            "@type": "City",
            "name": "Etawah"
          }
        ]
      }),
    }}
  />
      <Navbar />

      <main>
  <Hero />
  <AboutDoctor />
  <Stats />

  <Services />
  <WhyChooseUs />
  <Expertise />

  


<Credentials />
<Research />
<Collaboration />

<Gallery />

<Testimonials />

<FAQs />

<Availability />



<Contact />
</main>

      <Footer />
      <ChatBot />
      {/* <FloatingWhatsapp /> */}
    </>
  );
}