CREATE TABLE cars (
  slug text PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  engine text,
  transmission text,
  fuel text,
  color text NOT NULL,
  price text NOT NULL,
  image text NOT NULL,
  category text NOT NULL CHECK (
    category IN ('small', 'medium', 'large', 'seven-seaters', 'wedding-car', 'off-road-4x4')
  ),
  available boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE enquiries (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  car_slug text NOT NULL REFERENCES cars (slug) ON DELETE RESTRICT,
  customer_name text NOT NULL,
  contact text NOT NULL,
  pickup_date date NOT NULL,
  return_date date NOT NULL CHECK (return_date > pickup_date),
  pickup_location text NOT NULL,
  message text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX enquiries_car_slug_idx ON enquiries (car_slug);
CREATE INDEX enquiries_created_at_idx ON enquiries (created_at DESC);

INSERT INTO cars (slug, name, description, color, price, image, category, available)
VALUES
  (
    'mercedes-c-300',
    'Mercedes C 300',
    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    'Black',
    '$85',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    'medium',
    true
  ),
  (
    'bmw-530i',
    'BMW 530i',
    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    'Black',
    '$92',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85',
    'large',
    true
  ),
  (
    'range-rover-evoque',
    'Range Rover Evoque',
    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    'Black',
    '$110',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85',
    'off-road-4x4',
    true
  );
