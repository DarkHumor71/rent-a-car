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
  engine?: string | null;
  transmission?: string | null;
  fuel?: string | null;
  color: string;
  price: string;
  image: string;
  category: CategoryId;
  available: boolean;
};
