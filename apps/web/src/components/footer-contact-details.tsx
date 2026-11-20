import {
  phoneNumber,
  location,
  instagramUrl,
  facebookUrl,
} from "../data/contact";
export default function FooterContactDetails() {
  return (
    <>
      <div>
        <small>Visit us</small>
        <p>{location}</p>
      </div>
      <div>
        <small>Telephone</small>
        <p>
          <a href={`tel:${phoneNumber.replaceAll(" ", "")}`}>{phoneNumber}</a>
        </p>
      </div>
      <div>
        <small>Socials</small>
        <div className="footer-social-links">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="6"
                y="6"
                width="12"
                height="12"
                rx="3.5"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.8" r="1.1" fill="white" />
            </svg>
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 320 512" aria-hidden="true">
              <path
                fill="white"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0C152.77 0 105.1 44.38 105.1 124.72v70.62H24.92V288h80.18v224h99.2V288z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
