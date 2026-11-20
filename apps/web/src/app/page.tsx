"use client";

import Link from "next/link";
import FooterContactDetails from "@/components/footer-contact-details";
import { publicAssetPath } from "@/data/site-config";

const cars = [
  {
    name: "Mercedes C 300",
    className: "Executive",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "BMW 530i",
    className: "Premium",
    price: "$92",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Range Rover Evoque",
    className: "SUV",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Beirut · Lebanon
          </p>
          <h1>
            Move through
            <br />
            Lebanon <em>freely.</em>
          </h1>
          <p className="hero-lead">
            Premium vehicles, effortless pickup, and local expertise for every
            road ahead.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/fleet">
              Explore the fleet <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=90"
              alt="Premium car on a coastal road"
            />
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Service highlights">
        <div>
          <strong>01</strong>
          <span>Airport pickup</span>
        </div>
        <div>
          <strong>02</strong>
          <span>24/7 support</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Flexible rental</span>
        </div>
      </section>

      <section className="fleet-section" id="fleet">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Our fleet
            </p>
            <h2>
              Choose your
              <br />
              <em>way forward.</em>
            </h2>
          </div>
          <a className="text-link" href="#request">
            View all vehicles <span>→</span>
          </a>
        </div>
        <div className="vehicle-grid">
          {cars.map((car, index) => (
            <article className="vehicle-card" key={car.name}>
              <div className="vehicle-image">
                <img src={car.image} alt={car.name} />
                <span>0{index + 1}</span>
              </div>
              <div className="vehicle-meta">
                <div>
                  <small>{car.className}</small>
                  <h3>{car.name}</h3>
                </div>
                <div className="price">
                  <small>from</small>
                  <strong>
                    {car.price}
                    <span>/day</span>
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-copy">
          <p className="eyebrow light">
            <span /> Why Infinity
          </p>
          <h2>
            More than a car.
            <br />
            <em>A better arrival.</em>
          </h2>
        </div>
        <div className="service-list">
          <article>
            <span>01</span>
            <div>
              <h3>Door-to-door</h3>
              <p>Collection and delivery wherever your journey begins.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Local expertise</h3>
              <p>
                Routes, recommendations, and support from people on the ground.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Clear terms</h3>
              <p>
                Transparent pricing and flexible options, with no hidden
                surprises.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer id="contact">
        <a className="brand footer-brand" href="#">
          <img
            className="brand-logo"
            src={publicAssetPath("/brand/Infinity-Logo.webp")}
            alt="Infinity Group Lebanon"
          />
        </a>
        <FooterContactDetails />
        <a className="back-top" href="#">
          ↑
        </a>
      </footer>
    </main>
  );
}
