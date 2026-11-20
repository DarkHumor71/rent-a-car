import type { Metadata } from "next";
import "./globals.scss";
import SiteHeader from "@/components/site-header";
import { publicAssetPath } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Infinity Group | Car Rental Lebanon",
  description:
    "Premium car rental, airport pickup, and long-term mobility across Lebanon.",
  icons: {
    icon: publicAssetPath("/brand/favicon.ico"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
