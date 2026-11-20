"use client";

import { type SubmitEvent, useState } from "react";
import { whatsappNumber } from "@/data/contact";

type EnquiryFormProps = {
  carName: string;
};

export default function EnquiryForm({ carName }: EnquiryFormProps) {
  const [dateError, setDateError] = useState("");

  function sendEnquiry(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const pickupDate = String(formData.get("pickup"));
    const returnDate = String(formData.get("return"));

    if (returnDate <= pickupDate) {
      setDateError("The return date must be after the pickup date.");
      return;
    }

    setDateError("");
    const message = [
      "Hello Infinity Group, I’d like to enquire about a rental.",
      `Vehicle: ${carName}`,
      `Name: ${formData.get("name")}`,
      `Contact: ${formData.get("contact")}`,
      `Pickup date: ${pickupDate}`,
      `Return date: ${returnDate}`,
      `Preferred pickup location: ${formData.get("location")}`,
      `Additional details: ${formData.get("message") || "None"}`,
    ].join("\n");

    const query = new URLSearchParams({ text: message });
    window.location.assign(`https://wa.me/${whatsappNumber}?${query}`);
  }

  return (
    <div className="car-enquiry-form">
      <p className="eyebrow">
        <span /> Rental enquiry
      </p>
      <h2>Tell us about your trip</h2>
      <p className="car-enquiry-note">
        Share your details and we’ll open a prefilled WhatsApp message. It won’t
        be sent until you choose to send it in WhatsApp.
      </p>
      <form onSubmit={sendEnquiry}>
        <label>
          Full name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
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
        <div className="car-enquiry-dates">
          <label>
            Pickup date
            <input required name="pickup" type="date" />
          </label>
          <label>
            Return date
            <input required name="return" type="date" />
          </label>
        </div>
        {dateError && (
          <p className="car-enquiry-error" role="alert">
            {dateError}
          </p>
        )}
        <label>
          Preferred pickup location
          <input
            required
            name="location"
            autoComplete="address-level2"
            placeholder="City or location"
          />
        </label>
        <label>
          Message <span className="optional-label">(optional)</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Any questions or special requirements?"
          />
        </label>
        <label className="car-enquiry-consent">
          <input required type="checkbox" name="consent" />
          <span>
            I agree to share these details with Infinity Group to respond to my
            enquiry.
          </span>
        </label>
        <button type="submit" className="primary-button">
          Continue to WhatsApp <span>→</span>
        </button>
      </form>
    </div>
  );
}
