import Script from "next/script";

import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import ChatBot         from "@/components/ui/ChatBot";

import Hero            from "@/components/sections/Hero";
import AboutDoctor     from "@/components/sections/AboutDoctor";
import Milestones      from "@/components/sections/Milestones";
import Services        from "@/components/sections/Services";
import WhyChooseUs     from "@/components/sections/WhyChooseUs";
import Availability    from "@/components/sections/Availability";
import Research        from "@/components/sections/Research";
import Gallery         from "@/components/sections/Gallery";
import Testimonials    from "@/components/sections/Testimonials";
import FAQs            from "@/components/sections/FAQs";
import ReferralSection from "@/components/sections/ReferralSection";
import Contact         from "@/components/sections/Contact";

const BASE = "https://drtaruna.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "Physician"],
      "@id": `${BASE}/#doctor`,
      name: "Dr. Taruna Pratap Singh",
      givenName: "Taruna",
      familyName: "Pratap Singh",
      honorificPrefix: "Dr.",
      honorificSuffix: "MDS",
      jobTitle: "Orthodontist & Dental Surgeon",
      description:
        "MDS in Orthodontics & Dentofacial Orthopaedics, practising comprehensive dental and orthodontic care in Mathura, Uttar Pradesh. Experienced in fixed braces, clear aligner therapy, root canal treatment, restorative dentistry, and preventive dental care.",
      url: BASE,
      image: {
        "@type": "ImageObject",
        url: `${BASE}/images/doctor/doctor.jpeg`,
        description: "Dr. Taruna Pratap Singh — Orthodontist & Dental Surgeon",
      },
      telephone: "+918218466101",
      email: "tarunapratapsingh@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mathura",
        addressLocality: "Mathura",
        addressRegion: "Uttar Pradesh",
        postalCode: "281001",
        addressCountry: "IN",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Atal Bihari Vajpayee Medical University, Lucknow",
        },
        {
          "@type": "EducationalOrganization",
          name: "KD Dental College, Mathura",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "MDS — Orthodontics & Dentofacial Orthopaedics",
          credentialCategory: "degree",
          educationalLevel: "Postgraduate",
          recognizedBy: { "@type": "Organization", name: "Atal Bihari Vajpayee Medical University, Lucknow" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "BDS — Bachelor of Dental Surgery",
          credentialCategory: "degree",
          educationalLevel: "Undergraduate",
          recognizedBy: { "@type": "Organization", name: "KD Dental College, Mathura" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Mastering Clear Aligners: Advanced Orthodontic Practice",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "AIIMS Delhi" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Clinical Application of Lasers in Dentistry",
          credentialCategory: "certificate",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Max Emergency Life Support Course",
          credentialCategory: "certificate",
        },
      ],
      medicalSpecialty: "Orthodontics",
      knowsAbout: [
        "Orthodontics",
        "Dentofacial Orthopaedics",
        "Clear Aligners",
        "Fixed Braces",
        "Root Canal Treatment",
        "Restorative Dentistry",
        "Preventive Dental Care",
        "Pediatric Dental Procedures",
      ],
      areaServed: [
        { "@type": "City", name: "Mathura" },
        { "@type": "City", name: "Goverdhan" },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Orthodontist & Dental Surgeon",
        occupationLocation: { "@type": "City", name: "Mathura" },
        skills: "Orthodontics, Dentofacial Orthopaedics, Clear Aligners, Root Canal Treatment, Restorative Dentistry, Preventive Dental Care",
      },
      publishingPrinciples: `${BASE}/#doctor`,
      workExample: [
        {
          "@type": "ScholarlyArticle",
          headline: "Evaluation of Anterior Alveolar Dimension in North Indian Population",
          publisher: { "@type": "Organization", name: "Asian Journal of Dental Sciences" },
        },
      ],
    },

    {
      "@type": ["MedicalClinic", "Dentist", "LocalBusiness"],
      "@id": `${BASE}/#clinic`,
      name: "Dr. Taruna Pratap Singh — Dental & Orthodontic Care",
      description:
        "Dental and orthodontic care in Mathura, Uttar Pradesh, provided by Dr. Taruna Pratap Singh (MDS Orthodontics & Dentofacial Orthopaedics) at Saraswati Dental Care, Goverdhan, and Shree Siyaram Multispeciality Dental Care, Mathura.",
      url: BASE,
      telephone: "+918218466101",
      email: "tarunapratapsingh@gmail.com",
      image: `${BASE}/images/doctor/doctor.jpeg`,
      logo: `${BASE}/images/doctor/doctor.jpeg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mathura",
        addressLocality: "Mathura",
        addressRegion: "Uttar Pradesh",
        postalCode: "281001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "27.4924",
        longitude: "77.6737",
      },
      hasMap: "https://maps.google.com/?q=Mathura,Uttar+Pradesh",
      medicalSpecialty: "Orthodontics",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Card",
      areaServed: [
        { "@type": "City", name: "Mathura" },
        { "@type": "City", name: "Goverdhan" },
      ],
      employee: { "@id": `${BASE}/#doctor` },
      availableService: [
        { "@type": "MedicalProcedure", name: "Fixed Orthodontic Treatment (Metal & Ceramic Braces)" },
        { "@type": "MedicalProcedure", name: "Clear Aligner Therapy" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Restorative Dentistry & Crown Preparation" },
        { "@type": "MedicalProcedure", name: "Scaling, Polishing & Preventive Dental Care" },
        { "@type": "MedicalProcedure", name: "Extractions & Pediatric Dental Procedures" },
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Dr. Taruna Pratap Singh — Dental & Orthodontic Care",
      description:
        "Official website of Dr. Taruna Pratap Singh, MDS Orthodontics & Dentofacial Orthopaedics, practising in Mathura, Uttar Pradesh.",
      publisher: { "@id": `${BASE}/#doctor` },
      inLanguage: "en-IN",
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Dr. Taruna",
          item: `${BASE}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${BASE}/#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "How to Book",
          item: `${BASE}/#process`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: `${BASE}/#contact`,
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What treatments does Dr. Taruna offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Taruna provides fixed orthodontic treatment with metal and ceramic braces, clear aligner therapy, root canal treatment, restorative dentistry and crown preparation, scaling and preventive dental care, and extractions — including pediatric dental procedures.",
          },
        },
        {
          "@type": "Question",
          name: "Do you treat children as well as adults?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. General dental care and pediatric dental procedures are offered alongside orthodontic treatment, so patients of all ages can be seen.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer clear aligners in addition to braces?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Alongside traditional metal and ceramic fixed braces, clear aligner therapy is offered as a more discreet treatment option depending on the case.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can call or WhatsApp directly, use the appointment form on this website, or send an email. Appointments are confirmed based on availability at the clinic.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Dr. Taruna practise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Taruna practises at Saraswati Dental Care, Goverdhan, and Shree Siyaram Multispeciality Dental Care, Mathura.",
          },
        },
        {
          "@type": "Question",
          name: "What happens at the first visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first visit includes a comprehensive oral examination, diagnosis, and treatment planning, along with guidance on oral hygiene and preventive care.",
          },
        },
        {
          "@type": "Question",
          name: "Is an appointment required, or can I walk in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A prior appointment is recommended to avoid waiting time, though the clinics can also be contacted directly for same-day availability.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <Hero />
        <AboutDoctor />
        <Milestones />
        <Services />
        <WhyChooseUs />
        <Availability />
        <Research />
        <Gallery />
        <Testimonials />
        <FAQs />
        <ReferralSection />
        <Contact />
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}
