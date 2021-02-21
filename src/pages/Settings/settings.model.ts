export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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
    delivery_time: string;
    min_value: string;
    cash_percentage: string;
    permission_last_date: string;
    permission_date: string;
  };
}
export interface Coordinates {
  lat: Number;
  lng: Number;
}
export interface GeolocationDetail {
  geo_latitude: Number;
  geo_longitude: Number;
}

export interface sendMessages {
  user_id?: number;
  message_content: string;
  current_time: string;
  is_detailed: boolean;
}
