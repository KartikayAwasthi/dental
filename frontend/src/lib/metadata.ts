import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://drtaruna.com"),

  title: {
    default: "Dr. Taruna Pratap Singh | MDS Orthodontist | Mathura, UP",
    template: "%s | Dr. Taruna Pratap Singh",
  },

  description:
    "MDS Consultant Orthodontist (KGMU), Mathura — specialist referrals for braces, clear aligners, lingual orthodontics & jaw correction across UP and Delhi NCR.",

  keywords: [
    "Dr Taruna Pratap Singh",
    "Dr Taruna orthodontist",
    "Taruna Pratap Singh Mathura",
    "Taruna Pratap Singh orthodontist",
    "Consultant Orthodontist Mathura",
    "Orthodontist Mathura UP",
    "MDS Orthodontics KGMU",
    "Orthodontic Specialist UP",
    "Clear Aligner Specialist Mathura",
    "Lingual Orthodontics UP",
    "Orthodontic Referral UP",
    "Jaw Correction Specialist India",
    "Braces Specialist Mathura",
    "Orthodontist Agra",
    "Orthodontist Noida Delhi NCR",
    "Dental Referral Mathura",
    "Dentofacial Orthopaedics KGMU",
    "Invisible Braces UP",
    "Invisalign Provider UP",
    "Pediatric Orthodontics UP",
    "Surgical Orthodontics India",
    "KGMU Orthodontist",
    "UP Dental Council A23844",
    "Indian Orthodontic Society",
    "Specialist Orthodontic Referral",
  ],

  authors: [{ name: "Dr. Taruna Pratap Singh", url: "https://drtaruna.com" }],
  creator: "Dr. Taruna Pratap Singh",
  publisher: "Dr. Taruna Pratap Singh",
  category: "Health & Medical",

  alternates: {
    canonical: "https://drtaruna.com",
    languages: {
      "en-IN": "https://drtaruna.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Dr. Taruna Pratap Singh | MDS Consultant Orthodontist | Mathura",
    description:
      "Specialist Consultant Orthodontist (MDS, KGMU) in Mathura — accepting referrals from dentists and doctors across UP and Delhi NCR for braces, clear aligners, lingual orthodontics & jaw correction.",
    type: "website",
    locale: "en_IN",
    url: "https://drtaruna.com",
    siteName: "Dr. Taruna Pratap Singh — Consultant Orthodontist",
    images: [
      {
        url: "/images/doctor/doctor.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Taruna Pratap Singh — MDS Consultant Orthodontist, Mathura",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Taruna Pratap Singh | MDS Consultant Orthodontist | Mathura",
    description:
      "MDS Specialist Orthodontist (KGMU) accepting referrals across UP & Delhi NCR. Braces, clear aligners, lingual orthodontics, jaw correction.",
    images: ["/images/doctor/doctor.jpeg"],
  },

  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Mathura, Uttar Pradesh, India",
    "geo.position": "27.4924;77.6737",
    ICBM: "27.4924, 77.6737",
    "DC.title": "Dr. Taruna Pratap Singh — Consultant Orthodontist",
    "DC.description":
      "MDS Consultant Orthodontist (KGMU) in Mathura. Specialist referrals for braces, clear aligners, lingual orthodontics, jaw correction.",
    "DC.subject": "Orthodontics, Dentofacial Orthopaedics",
    "DC.creator": "Dr. Taruna Pratap Singh",
    "DC.language": "en",
    "DC.coverage":
      "Mathura, Agra, Noida, Delhi, Gurgaon, Etawah, Uttar Pradesh, India",
    "DC.rights": "Dr. Taruna Pratap Singh",
  },
};
