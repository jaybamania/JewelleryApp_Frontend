export interface UserDetail {
  id: number;
  name: string;
  email: string;
  mobile_no: string;
  is_verified: boolean;
  is_seller: boolean;
  is_active: boolean;
}
export interface CompanyDetail {
  company: string;
  branch_city: string;
  branch_state: string;
  branch_country: string;
  is_permitted: boolean;
  permission_date: string;
  permission_last_date: string;
}
