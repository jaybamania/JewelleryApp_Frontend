// Register Component
export interface RegisterDetail {
  name: string;
  firm_name: string;
  mobile_no: string;
  country_code: string;
  is_seller: false;
  country: string;
  state: string;
  city: string;
  is_terms_and_condition_readed: boolean;
  password: string;
}

export interface Passwords {
  password1: string;
  password2: string;
}

// Login Component
export interface LoginDetail {
  mobile_no: string;
  password: string;
}

// Forgot Password component's
export interface ForgotPasswordDetail {
  mobile_no: string;
  otp: string;
  password: string;
}

// Login With Otp Compoent's
export interface LoginWithOtpDetail {
  mobile_no: string;
  otp: string;
}

export interface StateList {
  id: number;
  state_name: string;
  city: string[];
}
