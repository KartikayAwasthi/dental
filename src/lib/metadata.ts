import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Dr. Taruna | Orthodontist & Smile Specialist",
    template: "%s | Dr. Taruna",
  },

  description:
    "Expert orthodontic care, braces, aligners, smile design and advanced dental treatments.",

  keywords: [
    "Orthodontist",
    "Dentist",
    "Braces",
    "Aligners",
    "Smile Design",
    "Dental Clinic",
    "Kanpur Dentist",
  ],

  openGraph: {
    title:
      "Dr. Taruna Orthodontics",
    description:
      "Advanced orthodontic treatments and smile transformation.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Taruna Orthodontics",
    description:
      "Expert smile correction and orthodontic care.",
  },
};