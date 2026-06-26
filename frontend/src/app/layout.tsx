import "./globals.css";

import ThemeProvider  from "@/components/layout/ThemeProvider";
import LenisProvider  from "@/components/layout/LenisProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop      from "@/components/layout/BackToTop";

import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>
            <ScrollProgress />
            {children}
            <BackToTop />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
