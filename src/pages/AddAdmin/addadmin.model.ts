export interface AdminDetail {
  name: string;
  country_code: string;
  mobile_no: string;
  email: string;
  password: string;
  address_line_1: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  is_seller: boolean;
}
export interface StateList {
  id: number;
  state_name: string;
  city: string[];
}
export interface Group {
  id: number;
  name: string;
}
export interface AdminPreviewDetail {
  id: number;
  name: string;
  email: string;
  mobile_no: string;
  country_code?: string;
  password?: string;
  address_line_1?: string;
  city: string;
  pincode?: string;
  state?: string;
  country?: string;
  is_verified: boolean;
  is_admin: boolean;
  is_active: boolean;
  is_seller?: boolean;
  groups: Group[];
}
