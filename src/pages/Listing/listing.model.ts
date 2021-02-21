export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
export interface ListDetail {
  delivery_time: String;
  id: Number;
  metal: String;
  metal_category: String;
  metal_purity: String;
  payment_type: String;
  premium_type: String;
  premium_value: Number;
  trade: String;
}
export interface ListData {
  id: Number;
  trade: String;
  payment_type: String;
  metal: String;
  metal_category: String;
  metal_purity: String;
  quantity: Number;
  premium_value: Number;
  user: Number;
  delivery_time: Number;
}
export interface CompanyData {
  company: String;
  branch_address_line_1: String;
  branch_address_line_2: String;
  branch_city: String;
  branch_pincode: Number;
  branch_state: String;
  branch_country: String;
}
export interface ActiveTradeMetal {
  trade: String;
  metal: String;
}
export interface ProductOptions {
  delivery_time: [];
  payment_type: [];
  product_options: {};
  product_options_id: {
    metal: [];
    metal_category: [];
    metal_purity: [];
  };
}
