import "reactn";

interface UserDetail {
  name: string;
  mobile_no: string;
  isLoginned: boolean;
  is_verified: boolean;
  is_seller: boolean;
  is_superuser: boolean;
  is_admin: boolean;
  email: string;
}

declare module "reactn/default" {
  export interface Reducers {
    append: (
      global: State,
      dispatch: Dispatch,
      ...strings: any[]
    ) => Pick<State, "value">;

    increment: (
      global: State,
      dispatch: Dispatch,
      i: number
    ) => Pick<State, "count">;

    doNothing: (global: State, dispatch: Dispatch) => null;
  }

  export interface State {
    isError: boolean;
    isInfo: boolean;
    message: string;
    backDropLoading: boolean;
    userDetail: UserDetail;
  }
}
