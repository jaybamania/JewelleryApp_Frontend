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
export interface Group {
  id: number;
  name: string;
}
