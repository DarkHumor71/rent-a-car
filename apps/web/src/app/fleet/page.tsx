"use client";

import Link from "next/link";
import { useState } from "react";
import { cars, categories, type CategoryId } from "@/data/fleet";
import SiteHeader from "@/components/site-header";
import FooterContactDetails from "@/components/footer-contact-details";

export default function FleetPage() {
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>(
    [],
  );
  const filteredCars = cars.filter(
    (car) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(car.category),
  );

  function toggleCategory(category: CategoryId) {
    setSelectedCategories((selected) =>
      selected.includes(category)
        ? selected.filter((item) => item !== category)
        : [...selected, category],
    );
  }

  return (
    <main className="fleet-page">
      <SiteHeader activePage="fleet" />

      <section className="fleet-page-intro">
        <p className="eyebrow">
          <span /> The Infinity fleet
        </p>
        <h1>
          Find your
          <br />
          <em>way forward.</em>
        </h1>
        <p>
          Browse our cars and filter by the kind of journey you have in mind.
        </p>
      </section>

      <section className="fleet-browser" aria-label="Browse vehicles">
        <aside className="fleet-filter-sidebar">
          <div className="fleet-filter-heading">
            <div>
              <p className="eyebrow">
                <span /> Refine
              </p>
              <h2>Filter by type</h2>
            </div>
            {selectedCategories.length > 0 && (
              <button
                className="fleet-clear-filters"
                type="button"
                onClick={() => setSelectedCategories([])}
              >
                Clear
              </button>
            )}
          </div>
          <fieldset>
            <legend className="visually-hidden">Vehicle type</legend>
            {categories.map((category) => (
              <label className="fleet-filter-option" key={category.id}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                />
                <span>{category.label}</span>
              </label>
            ))}
          </fieldset>
        </aside>

        <div className="fleet-results">
          <div className="fleet-results-heading">
            <h2>Our cars</h2>
            <span>
              {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}
            </span>
          </div>
          {filteredCars.length > 0 ? (
            <div className="fleet-listing-grid">
              {filteredCars.map((car) => (
                <article className="fleet-listing-card" key={car.name}>
                  <Link
                    className="fleet-listing-card-link"
                    href={`/fleet/${car.slug}`}
                    aria-label={`View ${car.name} and enquire`}
                  >
                    <div className="fleet-listing-image">
                      <img src={car.image} alt={car.name} />
                    </div>
                    <div className="fleet-listing-info">
                      <div className="fleet-listing-meta">
                        <div>
                          <h3>{car.name}</h3>
                        </div>
                        <div className="fleet-listing-price">
                          <small>from</small>
                          <strong>
                            {car.price}
                            <span>/day</span>
                          </strong>
                        </div>
                      </div>
                      <span className="fleet-reserve-link">
                        Enquire about this car <span>→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="fleet-empty-state">
              <h3>No cars match those filters yet.</h3>
              <p>Try another type or clear your filters to see all cars.</p>
              <button
                className="text-link"
                type="button"
                onClick={() => setSelectedCategories([])}
              >
                Show all cars <span>→</span>
              </button>
            </div>
          )}
        </div>
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
        <Link className="back-top" href="/" aria-label="Back to home">
          ↑
        </Link>
      </footer>
    </main>
  );
}
