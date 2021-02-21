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

export interface UserDetail {
  name?: string;
  mobile_no?: string;
  isLoginned: boolean;
  is_seller: boolean;
  is_verified: boolean;
  is_superuser: boolean;
  is_admin: boolean;
  email: string;
}
export interface LoginData {
  mobile_no: string;
  password: string;
}
export interface RegisterData {
  city: string;
  country: string;
  country_code: string;
  firm_name: string;
  is_seller: boolean;
  is_terms_and_condition_readed: boolean;
  mobile_no: string;
  name: string;
  password: string;
  state: string;
}
export interface NewProductData {
  delivery_time: number;
  metal: number;
  metal_category: number;
  metal_purity: string[];
  payment_type: number;
  premium_type: string;
  premium_value: string;
  quantity: string;
  trade: string;
}
export interface OtpData {
  mobile_no: string;
}
export interface WithOtpData {
  mobile_no: string;
  otp: string;
}
export interface BusinessDetail {
  user_details: {
    is_seller: boolean;
    name: string;
    father_name: string;
    mobile_no: string;
    address_line_1: string;
    address_line_2: string;
    pincode: string;
    city: string;
    state: string;
    email: string;
    aadhar_no: string;
    pan_no: string;
    is_active: false;
  };
  company: {
    company_name: string;
    company_type: string;
    company_pan_no: string;
    cin_no: string;
  };
  company_branch_details: {
    mobile_no1: string;
    mobile_no2: string;
    gst_no: string;
  };
}
export interface CompanyDetail {
  user_details: { is_seller: boolean; is_active: boolean };
  company_details: {
    company: string;
    mobile_no1: string;
    mobile_no2: string;
    branch_address_line_1: string;
    branch_address_line_2: string;
    branch_city: string;
    branch_state: string;
    branch_country: string;
    is_permitted: boolean;
    permission_date: string;
    permission_last_date: string;
  };
}
export interface ProfileDetail {
  user_details: {
    name: string;
    mobile_no: string;
    is_verified: boolean;
    is_seller: boolean;
    is_active: boolean;
  };
  company_details: {
    company: string;
    branch_address_line_1: string;
    branch_address_line_2: string;
    branch_city: string;
    branch_state: string;
    branch_country: string;
    is_permitted: boolean;
    permission_date: string;
    permission_last_date: string;
  };
}
export interface PersonalDetail {
  name: string;
  mobile_no: string;
  home_address: string;
  city: string;
  state: string;
  country: string;
}
export interface SettingsDetail {
  user_details: { id: string; is_seller: boolean; is_active: boolean };
  company_details: {
    is_analytical: boolean;
    is_permitted: boolean;
    delivery_time: any;
    min_value: string;
    cash_percentage: string;
    permission_last_date: string;
    permission_date: string;
  };
}
export interface UpdateCompanyDetail {
  branch_address_line_1: string;
  branch_address_line_2: string;
  branch_city: string;
  branch_country: string;
  branch_state: string;
  company: string;
  company_name: string;
  is_permitted: boolean;
  mobile_no1: string;
  mobile_no2: string;
  permission_date: string;
  permission_last_date: string;
}
export interface ListingDetail {
  list_data: {
    id: number;
    trade: string;
    payment_type: string;
    metal: string;
    metal_category: string;
    metal_purity: string;
    quantity: number;
    premium_value: number;
    user: number;
    delivery_time: number;
  };
  company_data: {
    company: string;
    branch_address_line_1: string;
    branch_address_line_2: string;
    branch_city: string;
    branch_pincode: number;
    branch_state: string;
    branch_country: string;
  };
}
export interface UpdateBusinessDetail {
  aadhar_no: string;
  address_line_1: string;
  address_line_2: string;
  cin_no: string;
  city: string;
  company_name: string;
  company_pan_no: string;
  company_type_input: string;
  email: string;
  father_name: string;
  gst_no: string;
  mobile_no: string;
  mobile_no1: string;
  mobile_no2: string;
  name: string;
  pan_no: string;
  pincode: string;
  state: string;
}
export interface UpdateSettingDetail {
  cash_percentage: string;
  delivery_time: string;
  min_value: string;
}
export interface ResetUserPass {
  new_password: string;
  old_password: string;
}
export interface ResLogin {
  refresh: string;
  access: string;
}
export interface Message {
  id?: number;
  message: string;
}
export interface sendMessages {
  id: number;
  message_content: string;
  current_date: string;
  is_detailed: boolean;
  name: string;
}
export interface List {
  id: number;
  trade: string;
  metal: string;
  metal_category: string;
  metal_purity: string;
  payment_type: string;
  premium_value: number;
  premium_type: string;
  delivery_time: string;
}
export interface ProductListing {
  count: 20;
  next: string;
  previous: string;
  results: [List];
}
export interface ResListing {
  user: number;
  quantity: number;
  premium_value: number;
  premium_type: string;
  trade: string;
  metal: number;
  metal_purity: number;
  delivery_time: number;
  payment_type: number;
  metal_category: number;
}
export interface MyListingDetail {
  id: number;
  trade: string;
  payment_type: string;
  delivery_time: string;
  metal: string;
  metal_category: string;
  metal_purity: string;
  quantity: number;
  premium_value: number;
  is_active: boolean;
  is_deleted: boolean;
}
export interface ListingListInterface {
  delivery_time: string;
  id: number;
  is_active: boolean;
  is_deleted: boolean;
  metal: string;
  metal_category: string;
  metal_purity: string;
  payment_type: string;
  premium_value: number;
  quantity: number;
  premium_type: any;
  trade: string;
}
export interface ResMyListing {
  count: number;
  next: string;
  previous: string;
  results: ListingListInterface[];
}

export interface Coordinates {
  geo_latitude: string;
  geo_longitude: string;
}
export interface ResStoreProfile {
  store_details: {
    details: {
      id: number;
      company: string;
      branch_address_line_1: string;
      branch_address_line_2: string;
      mobile_no1: number;
      mobile_no2: number;
      geo_latitude: string;
      geo_longitude: string;
      branch_city: string;
      branch_pincode: any;
      branch_state: string;
      branch_country: string;
      delivery_time: string;
    };
    is_favourite: boolean;
  };
  list_details: [List];
}
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
export interface UpdateAdminDetail {
  name: string;
  mobile_no: string;
  email: string;
  password: string;
}
export interface User {
  id: number;
  name: string;
  mobile_no: string;
  city: string;
  is_seller: boolean;
  is_admin: boolean;
  timestrap: Date;
}
export interface UserList {
  count: number;
  next: any;
  previous: any;
  results: [User];
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
  is_verified: boolean;
  is_admin: boolean;
  is_active: boolean;
  groups: Group[];
}
export interface StateData {
  id: number;
  state_name: string;
  city: string[];
}
export interface AdminPermission {
  name: string;
  email: string;
  mobile_no: string;
  is_active: boolean;
  groups_id: number[];
}
export interface Data {
  id: number;
  name?: string;
  payment_type?: string;
  time?: string;
}
export interface StateCommodity {
  id: number;
  metal: string;
  metal_category: string;
  purity: string[];
  is_active: boolean;
}
export interface UpdateStateCommodity {
  state_id: number;
  metal: number;
  metal_category: number;
  metal_purity: number[];
  is_active: boolean;
}
export interface AddStateCommodity {
  state_id: number;
  metal: number;
  metal_category: number;
  metal_purity: number[];
}
