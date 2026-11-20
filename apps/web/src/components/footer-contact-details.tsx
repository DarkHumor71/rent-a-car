import { phoneNumber } from "../data/contact";
export default function FooterContactDetails() {
  return (
    <>
      <div>
        <small>Visit us</small>
        <p>Hadath, Saint Therese Main Street, Beirut, Lebanon</p>
      </div>
      <div>
        <small>Telephone</small>
        <p>
          <a href={`tel:${phoneNumber.replaceAll(" ", "")}`}>{phoneNumber}</a>
        </p>
      </div>
    </>
  );
}
