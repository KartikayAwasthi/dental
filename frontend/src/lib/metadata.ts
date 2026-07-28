import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://drtaruna.com"),

  title: {
    default: "Dr. Taruna Pratap Singh | MDS Orthodontist | Mathura, UP",
    template: "%s | Dr. Taruna Pratap Singh",
  },

  description:
    "Dr. Taruna Pratap Singh, MDS Orthodontics & Dentofacial Orthopaedics — dental and orthodontic care in Mathura, UP. Braces, clear aligners, root canal, restorative & preventive dental care.",

  keywords: [
    "Dr Taruna Pratap Singh",
    "Dr Taruna orthodontist",
    "Taruna Pratap Singh Mathura",
    "Taruna Pratap Singh orthodontist",
    "Orthodontist Mathura UP",
    "Dentist Mathura",
    "MDS Orthodontics Dentofacial Orthopaedics",
    "Clear Aligner Therapy Mathura",
    "Braces Mathura",
    "Root Canal Treatment Mathura",
    "Pediatric Dental Care Mathura",
    "Saraswati Dental Care Goverdhan",
    "Shree Siyaram Multispeciality Dental Care Mathura",
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
    title: "Dr. Taruna Pratap Singh | MDS Orthodontist | Mathura",
    description:
      "Dr. Taruna Pratap Singh (MDS Orthodontics & Dentofacial Orthopaedics) provides dental and orthodontic care in Mathura — braces, clear aligners, root canal, restorative & preventive dental care.",
    type: "website",
    locale: "en_IN",
    url: "https://drtaruna.com",
    siteName: "Dr. Taruna Pratap Singh — Dental & Orthodontic Care",
    images: [
      {
        url: "/images/doctor/doctor.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Taruna Pratap Singh — MDS Orthodontist, Mathura",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Taruna Pratap Singh | MDS Orthodontist | Mathura",
    description:
      "MDS Orthodontist & Dental Surgeon in Mathura. Braces, clear aligners, root canal, restorative & preventive dental care.",
    images: ["/images/doctor/doctor.jpeg"],
  },

  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Mathura, Uttar Pradesh, India",
    "geo.position": "27.4924;77.6737",
    ICBM: "27.4924, 77.6737",
    "DC.title": "Dr. Taruna Pratap Singh — Dental & Orthodontic Care",
    "DC.description":
      "MDS Orthodontist & Dental Surgeon in Mathura. Braces, clear aligners, root canal, restorative & preventive dental care.",
    "DC.subject": "Orthodontics, Dentofacial Orthopaedics, General Dentistry",
    "DC.creator": "Dr. Taruna Pratap Singh",
    "DC.language": "en",
    "DC.coverage": "Mathura, Goverdhan, Uttar Pradesh, India",
    "DC.rights": "Dr. Taruna Pratap Singh",
  },
};
