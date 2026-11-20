"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { publicAssetPath, siteBasePath } from "@/data/site-config";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const includesBasePath =
    siteBasePath &&
    (pathname === siteBasePath || pathname.startsWith(`${siteBasePath}/`));
  const routePath = includesBasePath
    ? pathname.slice(siteBasePath.length) || "/"
    : pathname;
  const compact = routePath.startsWith("/fleet/");
  const activePage =
    routePath === "/fleet"
      ? "fleet"
      : routePath === "/contact"
        ? "contact"
        : "";

  if (compact) {
    return (
      <header className="nav-shell car-enquiry-header">
        <Link className="brand" href="/" aria-label="Infinity Group home">
          <img
            className="brand-logo"
            src={publicAssetPath("/brand/infinity-logo.webp")}
            alt="Infinity Group Lebanon"
          />
        </Link>
        <Link className="car-enquiry-back" href="/fleet">
          <span aria-hidden="true">←</span> Back to fleet
        </Link>
      </header>
    );
  }

  return (
    <header className="nav-shell">
      <Link className="brand" href="/" aria-label="Infinity Group home">
        <img
          className="brand-logo"
          src={publicAssetPath("/brand/infinity-logo.webp")}
          alt="Infinity Group Lebanon"
        />
      </Link>
      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
      >
        <span />
        <span />
      </button>
      <nav
        id="site-navigation"
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Main navigation"
      >
        <Link
          href="/fleet"
          aria-current={activePage === "fleet" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Fleet
        </Link>
        <Link
          href="/contact"
          aria-current={activePage === "contact" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
