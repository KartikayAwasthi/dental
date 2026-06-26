import Script from "next/script";

import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import ChatBot         from "@/components/ui/ChatBot";

import Hero            from "@/components/sections/Hero";
import AboutDoctor     from "@/components/sections/AboutDoctor";
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
      jobTitle: "Consultant Orthodontist & Dentofacial Orthopaedist",
      description:
        "MDS-qualified Consultant Orthodontist from King George Medical University, Lucknow. Specialist in braces, clear aligners, lingual orthodontics, jaw correction, and surgical orthodontics. Accepting specialist referrals from dentists and doctors across UP and Delhi NCR.",
      url: BASE,
      image: {
        "@type": "ImageObject",
        url: `${BASE}/images/doctor/doctor.jpeg`,
        description: "Dr. Taruna Pratap Singh — Consultant Orthodontist",
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
          name: "King George Medical University, Lucknow",
          url: "https://www.kgmu.org",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "MDS — Orthodontics & Dentofacial Orthopaedics",
          credentialCategory: "degree",
          educationalLevel: "Postgraduate",
          recognizedBy: { "@type": "Organization", name: "King George Medical University" },
          dateCreated: "2012",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "BDS — Bachelor of Dental Surgery",
          credentialCategory: "degree",
          educationalLevel: "Undergraduate",
          recognizedBy: { "@type": "Organization", name: "King George Medical University" },
          dateCreated: "2008",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Mastering Clear Aligners",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "AIIMS Delhi" },
          dateCreated: "2018",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Certified Invisalign Provider",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "Align Technology" },
          dateCreated: "2018",
        },
      ],
      memberOf: [
        { "@type": "Organization", name: "Indian Orthodontic Society" },
        { "@type": "Organization", name: "World Federation of Orthodontists" },
      ],
      medicalSpecialty: "Orthodontics",
      identifier: {
        "@type": "PropertyValue",
        name: "UP Dental Council Registration",
        value: "A23844",
      },
      knowsAbout: [
        "Orthodontics",
        "Dentofacial Orthopaedics",
        "Clear Aligners",
        "Invisalign",
        "Fixed Braces",
        "Lingual Orthodontics",
        "Surgical Orthodontics",
        "Jaw Correction",
        "Pediatric Orthodontics",
        "Digital Orthodontics",
        "Pre-surgical Orthodontic Planning",
      ],
      areaServed: [
        { "@type": "City", name: "Mathura" },
        { "@type": "City", name: "Agra" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Etawah" },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Orthodontist",
        occupationLocation: { "@type": "City", name: "Mathura" },
        skills: "Orthodontics, Dentofacial Orthopaedics, Clear Aligners, Lingual Orthodontics, Jaw Correction",
      },
      publishingPrinciples: `${BASE}/#doctor`,
      workExample: [
        {
          "@type": "ScholarlyArticle",
          headline: "Comparative Evaluation of Clear Aligners and Conventional Braces",
          datePublished: "2022",
          publisher: { "@type": "Organization", name: "Journal of Clinical Orthodontics" },
        },
        {
          "@type": "ScholarlyArticle",
          headline: "Modern Approaches in Smile Design",
          datePublished: "2021",
          publisher: { "@type": "Organization", name: "International Orthodontic Review" },
        },
        {
          "@type": "ScholarlyArticle",
          headline: "Impact of Early Orthodontic Intervention",
          datePublished: "2020",
          publisher: { "@type": "Organization", name: "Dental Research Journal" },
        },
        {
          "@type": "ScholarlyArticle",
          headline: "Digital Orthodontics and Future Trends",
          datePublished: "2023",
          publisher: { "@type": "Organization", name: "Journal of Dental Innovation" },
        },
      ],
    },

    {
      "@type": ["MedicalClinic", "Dentist", "LocalBusiness"],
      "@id": `${BASE}/#clinic`,
      name: "Dr. Taruna Pratap Singh — Consultant Orthodontist",
      description:
        "Specialist orthodontic referral practice in Mathura, Uttar Pradesh. Consultant Orthodontist (MDS, KGMU) accepting specialist referrals for complex orthodontic cases from dentists and doctors across UP and Delhi NCR.",
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
        { "@type": "City", name: "Agra" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Etawah" },
      ],
      founder: { "@id": `${BASE}/#doctor` },
      employee: { "@id": `${BASE}/#doctor` },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Fixed Orthodontic Treatment (Metal & Ceramic Braces)" },
        { "@type": "MedicalProcedure", name: "Clear Aligner Therapy (Invisalign)" },
        { "@type": "MedicalProcedure", name: "Lingual Orthodontics" },
        { "@type": "MedicalProcedure", name: "Surgical Orthodontics & Pre-Surgical Planning" },
        { "@type": "MedicalProcedure", name: "Early Orthodontic Intervention (Pediatric)" },
        { "@type": "MedicalProcedure", name: "Dentofacial Orthopaedics & Jaw Correction" },
        { "@type": "MedicalProcedure", name: "Self-Ligating Brackets" },
        { "@type": "MedicalProcedure", name: "Digital Orthodontic Planning" },
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Dr. Taruna Pratap Singh — Consultant Orthodontist",
      description:
        "Specialist orthodontic referral website for dentists and doctors in UP and Delhi NCR.",
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
          name: "Referral Process",
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
          name: "What types of cases should I refer to Dr. Taruna?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should refer cases requiring specialist orthodontic assessment — including severe crowding, spacing, skeletal jaw discrepancies, bite problems, patients requesting lingual orthodontics or clear aligners, and any case beyond routine dental management. Early intervention cases in growing children are also welcome.",
          },
        },
        {
          "@type": "Question",
          name: "What clinical information should I include when referring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please share the patient's chief complaint, approximate age, any existing radiographs (OPG, lateral cephalogram if available), intraoral photographs if taken, and your clinical observations. You can submit these details through the referral form and follow up via WhatsApp. No extensive workup is needed before referring.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will my referred patient be seen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Taruna typically responds to new referral submissions within 24 hours to confirm availability. Patient consultations are scheduled by prior appointment and are usually available within 3–7 working days depending on location and case complexity.",
          },
        },
        {
          "@type": "Question",
          name: "Will I receive a case report after the consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After the initial consultation, a detailed case summary — including diagnosis, proposed treatment plan, appliance selection rationale, and estimated treatment duration — is shared with the referring doctor. You remain updated throughout the treatment course.",
          },
        },
        {
          "@type": "Question",
          name: "Do you accept interdisciplinary and surgical orthodontic cases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dr. Taruna has experience in pre-surgical orthodontic planning and coordinates with maxillofacial surgeons for combined orthodontic-surgical cases. Interdisciplinary cases involving periodontics or prosthodontics are also accepted.",
          },
        },
        {
          "@type": "Question",
          name: "Can I discuss a complex case before formally referring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. You can contact Dr. Taruna directly via WhatsApp or phone to discuss a case informally before submitting a formal referral. This is encouraged for unusual or complex presentations to ensure the referral is appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "What is the referral process from start to finish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Submit the referral form on this website with the patient details and case description. Dr. Taruna contacts you within 24 hours to confirm the appointment. The patient attends the consultation. A written case report is then shared with you. You are kept in the loop throughout active treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities do you serve for orthodontic consultations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Taruna currently accepts referrals for patients based in or able to travel to Mathura, Agra, Noida, Delhi, Gurgaon, and Etawah. Consultations are available at the base clinic in Mathura by prior appointment.",
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
