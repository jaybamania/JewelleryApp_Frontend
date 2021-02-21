export interface NewListingInterface {
  delivery_time: string;
  id: number;
  metal: string;
  metal_category: string;
  metal_purity: string;
  payment_type: string;
  premium_type: string;
  premium_value: number;
  trade: string;
}
export interface ProductDetailInterface {
  type: string;
  metal: string;
  metal_category: string;
  purity: string;
  quantity: string;
  delivery_time: string;
  payment_option: string;
  premium_value: string;
  premium_type: string;
}
export interface CategoryOptions {
  [key: string]: string[];
}

export interface MetalOptions {
  [key: string]: CategoryOptions;
}

export interface ProductOptionsId {
  metal: [][];
  metal_category: [][];
  metal_purity: [][];
}

export interface ProductOptions {
  delivery_time: [][];
  payment_type: [][];
  product_options: MetalOptions;
  product_options_id: ProductOptionsId;
  metal: string[];
  category: string[];
  purity: string[];
}
export interface ProductOptionsResult {
  data: ProductOptions;
}
export interface ProductDetailObjectInterface {
  delivery_time: number;
  metal: number;
  metal_category: number;
  metal_purity: string[];
  payment_type: number;
  premium_type: string;
  premium_value: string;
  quantity: string;
  trade: string;
  purity: string[];
  type: string;
  payment_option: number;
}
export interface MetalIdInterface {
  metal: [][];
}
