import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Infinity Group | Car Rental Lebanon",
  description:
    "Premium car rental, airport pickup, and long-term mobility across Lebanon.",
  icons: {
    icon: "/brand/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
