export const setUserDetailReducer = (
  global: any,
  dispatch: any,
  payload: any
) => {
  if (!Object.keys(payload).length) {
    payload = {
      name: "",
      mobile_no: "",
      isLoginned: false,
      is_verified: false,
      is_selller: false,
      is_superuser: false,
      email: "",
      is_admin: false,
    };
  }

  return {
    ...global,
    userDetail: {
      ...payload,
      isLoginned: !!localStorage.getItem("ACCESS_TOKEN"),
    },
  };
};
