//TODO : replace with database values
export const categories = [
  { id: "small", label: "Small" },
  { id: "medium", label: "Medium" },
  { id: "large", label: "Large" },
  { id: "seven-seaters", label: "7 seaters" },
  { id: "wedding-car", label: "Wedding car" },
  { id: "off-road-4x4", label: "Off-road 4x4" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type FleetCar = {
  slug: string;
  name: string;
  description?: string;
  engine?: string;
  transmission?: string;
  fuel?: string;
  color: string;
  price: string;
  image: string;
  category: CategoryId;
  available: boolean;
};

export const cars: FleetCar[] = [
  {
    slug: "mercedes-c-300",
    name: "Mercedes C 300",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    price: "$85",
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    category: "medium",
    available: true,
  },
  {
    slug: "bmw-530i",
    name: "BMW 530i",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    price: "$92",
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    category: "large",
    available: true,
  },
  {
    slug: "range-rover-evoque",
    name: "Range Rover Evoque",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    price: "$110",
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
    category: "off-road-4x4",
    available: true,
  },
];
