import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryForm from "./enquiry-form";
import { categories } from "@/data/fleet";
import { getCar } from "@/lib/db";
import FooterContactDetails from "@/components/footer-contact-details";
import { publicAssetPath } from "@/data/site-config";

type EnquiryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: EnquiryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCar(slug);

  return {
    title: car
      ? `Enquire about ${car.name} | Infinity Group`
      : "Vehicle not found | Infinity Group",
  };
}

export default async function EnquiryPage({ params }: EnquiryPageProps) {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    notFound();
  }

  const category = categories.find((item) => item.id === car.category);

  return (
    <main className="car-enquiry-page">
      <section className="car-enquiry-content">
        <div className="car-enquiry-vehicle">
          <Link className="car-enquiry-breadcrumb" href="/fleet">
            Fleet <span>/</span> {car.name}
          </Link>
          <div className="car-enquiry-image">
            <Image
              src={car.image}
              alt={car.name}
              width={1200}
              height={800}
              priority
              unoptimized
            />
          </div>
          <p className="eyebrow">
            <span /> {category?.label}
          </p>
          <h1>{car.name}</h1>
          <p className="car-description">{car.description}</p>
          <p className="car-color">
            <span>Color:</span>
            <span
              className="car-color-swatch"
              style={{ backgroundColor: car.color }}
              aria-hidden="true"
            />
            <strong>{car.color}</strong>
          </p>

          <div className="car-price">
            <span>Starting from </span>
            <strong>
              {car.price}
              <small>/ day</small>
            </strong>
          </div>
        </div>

        <EnquiryForm carName={car.name} carSlug={car.slug} />
      </section>

      <footer>
        <Link
          className="brand footer-brand"
          href="/"
          aria-label="Infinity Group home"
        >
          <img
            className="brand-logo"
            src={publicAssetPath("/brand/Infinity-Logo.webp")}
            alt="Infinity Group Lebanon"
          />
        </Link>
        <FooterContactDetails />
        <Link className="back-top" href="/fleet" aria-label="Back to fleet">
          ↑
        </Link>
      </footer>
    </main>
  );
}
