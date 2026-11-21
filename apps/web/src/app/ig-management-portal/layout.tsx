import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Portal | Infinity Group",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ManagementPortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
