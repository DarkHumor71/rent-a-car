"use client";

import { type SubmitEvent } from "react";
import Link from "next/link";
import { whatsappNumber } from "@/data/contact";
import FooterContactDetails from "@/components/footer-contact-details";
export default function ContactPage() {
  function sendWhatsAppMessage(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      `Hello Infinity Group, my name is ${formData.get("name")}.`,
      `You can reach me at ${formData.get("contact")}.`,
      "",
      formData.get("message"),
    ].join("\n");
    const query = new URLSearchParams({ text: message });

    window.location.assign(`https://wa.me/${whatsappNumber}?${query}`);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow">
            <span /> We’re here to help
          </p>
          <h1>
            Let’s get you
            <br />
            <em>on your way.</em>
          </h1>
          <p className="contact-hero-lead">
            Questions about a vehicle, a pickup, or your plans in Lebanon? Our
            local team is just a message away.
          </p>
        </div>
        <div className="contact-map">
          <iframe
            title="Map to Infinity Group in Hadath, Beirut"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.10639159970214!2d35.526154429485146!3d33.845788106956476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1780c1f28d99%3A0xf7793fe49fcf498e!2sInfinity!5e0!3m2!1sen!2slb!4v1514609536644"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="contact-content" aria-label="Contact Infinity Group">
        <div className="contact-details">
          <p className="eyebrow">
            <span /> Get in touch
          </p>
          <h2>
            Good journeys
            <br />
            start <em>with a hello.</em>
          </h2>
          <p className="contact-intro">
            Speak with our team about availability, airport pickup, or anything
            else you need for your trip.
          </p>

          <div className="contact-methods">
            <a
              className="contact-method"
              href="https://maps.google.com/?q=Hadath%2C+Saint+Therese+Main+Street%2C+Beirut%2C+Lebanon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method-icon" aria-hidden="true">
                •
              </span>
              <span>
                <small>Visit us</small>
                <strong>
                  Hadath, Saint Therese Main Street, Beirut, Lebanon
                </strong>
              </span>
            </a>
            <a className="contact-method" href="tel:+9615462555">
              <span className="contact-method-icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <small>Telephone</small>
                <strong>+961 5 462 555</strong>
              </span>
            </a>
            <a
              className="contact-method"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method-icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <small>Mobile &amp; WhatsApp</small>
                <strong>+961 3 462 555</strong>
              </span>
            </a>
            <div className="contact-method">
              <span className="contact-method-icon" aria-hidden="true">
                •
              </span>
              <span>
                <small>Hotlines</small>
                <a href="tel:+9613062555">+961 3 062 555</a>
                <a href="tel:+9613063555">+961 3 063 555</a>
                <a href="tel:+9613064555">+961 3 064 555</a>
              </span>
            </div>
            <div className="contact-method">
              <span className="contact-method-icon" aria-hidden="true">
                @
              </span>
              <span>
                <small>Email</small>
                <a href="mailto:info@infinitygroup-lb.com">
                  info@infinitygroup-lb.com
                </a>
                <a href="mailto:infinitygroup.lb@gmail.com">
                  infinitygroup.lb@gmail.com
                </a>
              </span>
            </div>
            <div className="contact-method">
              <span className="contact-method-icon" aria-hidden="true">
                •
              </span>
              <span>
                <small>Fax</small>
                <strong>+961 5 471 355</strong>
              </span>
            </div>
          </div>
          <p className="contact-hours">Local support, available 24/7.</p>
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">
            <span /> Send an enquiry
          </p>
          <h2>How can we help?</h2>
          <p className="contact-form-note">
            Complete the form to open a WhatsApp message. It won’t be sent until
            you choose to send it in WhatsApp.
          </p>
          <form onSubmit={sendWhatsAppMessage}>
            <label>
              Your name
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Full name"
              />
            </label>
            <label>
              Phone or email
              <input
                required
                name="contact"
                autoComplete="email"
                placeholder="+961 00 000 000"
              />
            </label>
            <label>
              Your message
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us what you have in mind..."
              />
            </label>
            <button type="submit" className="primary-button">
              Continue to WhatsApp <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-cta">
        <p className="eyebrow light">
          <span /> Planning a trip?
        </p>
        <h2>
          Your next road
          <br />
          is waiting.
        </h2>
        <Link className="primary-button" href="/fleet">
          Explore the fleet <span>→</span>
        </Link>
      </section>

      <footer>
        <Link
          className="brand footer-brand"
          href="/"
          aria-label="Infinity Group home"
        >
          <img
            className="brand-logo"
            src="/brand/infinity-logo.webp"
            alt="Infinity Group Lebanon"
          />
        </Link>
        <FooterContactDetails />
        <Link className="back-top" href="/#top" aria-label="Back to home">
          ↑
        </Link>
      </footer>
    </main>
  );
}
