export interface CardProps {
  state: string;
  metalPurity: string;
  metalCategory: string;
  metalType: string;
}
export interface ListingControlFormViewProps {
  valueState: {
    metalavailability: string;
    category: string;
    metalpurity: string;
  };
  metalAvailabilityOptions: string[];
  categoryOptions: string[];
  metalPurityOptions: string[];
  validateMetalAvailability: () => string;
  validateCategory: () => string;
  validateMetalPurity: () => string;
  storeValues: () => void;
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}

export interface StateCommodity {
  id: number;
  metal: string;
  metal_category: string;
  purity: string[];
  is_active: boolean;
}
export interface Data {
  id: number;
  name: string;
}