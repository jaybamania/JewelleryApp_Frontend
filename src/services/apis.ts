import {
  sendPOSTRequest,
  setTokens,
  sendGETRequestWithToken,
  sendGETRequest,
  sendPOSTRequestWithToken,
  sendPUTRequestWithToken,
} from "./utils";

import {
  LoginData,
  RegisterData,
  NewProductData,
  OtpData,
  WithOtpData,
  BusinessDetail,
  CompanyDetail,
  ProfileDetail,
  PersonalDetail,
  SettingsDetail,
  UpdateCompanyDetail,
  ListingDetail,
  UpdateBusinessDetail,
  UpdateSettingDetail,
  ResetUserPass,
  ResLogin,
  Message,
  ProductListing,
  ResListing,
  MyListingDetail,
  ResMyListing,
  Coordinates,
  AdminDetail,
  UpdateAdminDetail,
  UserList,
  // AdminPreviewDetail,
  StateData,
  AdminPermission,
  Data,
  StateCommodity,
  UpdateStateCommodity,
  AddStateCommodity,
  sendMessages,
} from "./models";
import { AdminPreviewDetail } from "../pages/AddAdmin/addadmin.model";
export const login = async (loginData: LoginData) => {
  try {
    const data: ResLogin = await sendPOSTRequest("user/login/", loginData);
    setTokens(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (registerData: RegisterData) => {
  try {
    const data: ResLogin = await sendPOSTRequest(
      "user/register/",
      registerData
    );
    setTokens(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetail = async () => {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    return sendGETRequestWithToken("user/detail/");
  } else return {};
};

export const getProductOptions = async () => {
  return sendGETRequest("product/options/");
};

export const setStoreFavorite = async (
  branch: number,
  status: boolean | string
) => {
  status = status ? "add" : "remove";
  return sendGETRequestWithToken(
    `product/favouritesoper/?c_branch=${branch}&status=${status}`
  );
};

export const getMyFavorites = async () => {
  return sendGETRequestWithToken(`product/myfavourites/`);
};

export const getMyBids = async () => {
  return sendGETRequestWithToken(`product/mybid/`);
};

export const sendOtp = async () => {
  const response: Message = await sendPOSTRequestWithToken(
    "user/sendotp/",
    null
  );
  return response;
};

export const verifyOtp = async (otp: string) => {
  const response: Message = await sendPOSTRequestWithToken("user/verifyotp/", {
    otp,
  });
  return response;
};

export const getProductListings = async (queryObject: any = {}) => {
  let query = Object.keys(queryObject).length === 0 ? "" : "?";
  for (let i in queryObject) {
    if (query !== "?") query += "&";
    query += `${i}=${queryObject[i]}`;
  }
  const response: ProductListing = await sendGETRequest(
    `product/list/${query}`
  );
  return response;
};

export const addProduct = async (newProductData: NewProductData) => {
  const response: ResListing = await sendPOSTRequestWithToken(
    "product/",
    newProductData
  );
  return response;
};

export const sendLoginOTP = async (loginData: OtpData) => {
  try {
    const response: Message = await sendPOSTRequest(
      "user/sendloginotp/",
      loginData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const validateLoginOTP = async (loginData: WithOtpData) => {
  try {
    const response: Message = await sendPOSTRequest(
      "user/loginwithotp/",
      loginData
    );
    setTokens(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendForgotPasswordOTP = async (data: OtpData) => {
  try {
    const response: Message = await sendPOSTRequest(
      "user/forgotpass/sendotp/",
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const validateForgotPasswordOTP = async (data: WithOtpData) => {
  try {
    return await sendPOSTRequest("user/forgotpass/verifyotp/", data);
  } catch (error) {
    throw error;
  }
};

export const resetPasswordWithOtp = async (loginData: any) => {
  try {
    return await sendPOSTRequest("user/resetpass/", loginData);
  } catch (error) {
    throw error;
  }
};

export const getUserListings = async (status?: string) => {
  let query = "";
  if (status) {
    query = `?status=${status}`;
  }
  const response: ResMyListing = await sendGETRequestWithToken(
    `product/mylisting/${query}`
  );
  return response;
};

export const getUserListingDetail = async (id: number) => {
  const response: MyListingDetail = await sendGETRequestWithToken(
    `product/mylisting/${id}/`
  );
  return response;
};

export const updateListingStatus = async (id: number, status: string) => {
  const response: Message = await sendPUTRequestWithToken(
    `product/mylisting/${id}/?status=${status}`,
    null
  );
  return response;
};

export const getProfileDetails = async () => {
  const response: ProfileDetail = await sendGETRequestWithToken(
    "user/profile/"
  );
  return response;
};

export const getPersonalDetails = async () => {
  const response: PersonalDetail = await sendGETRequestWithToken(
    "user/personaldetails/"
  );
  return response;
};

export const updatePersonalDetails = async (
  personaldetails: PersonalDetail
) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/personaldetails/",
    personaldetails
  );
  return response;
};

export const getCompanyDetails = async () => {
  const response: CompanyDetail = await sendGETRequestWithToken(
    "user/companydetails/"
  );
  return response;
};

export const updateCompanyDetails = async (
  companydetails: UpdateCompanyDetail
) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/companydetails/",
    companydetails
  );
  return response;
};

export const getBusinessDetails = async () => {
  const response: BusinessDetail = await sendGETRequestWithToken(
    "user/businessdetails/"
  );
  return response;
};

export const updateBusinessDetails = async (
  businessDetails: UpdateBusinessDetail
) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/businessdetails/",
    businessDetails
  );
  return response;
};

export const getListDetail = async (listId: number) => {
  const response: ListingDetail = await sendGETRequestWithToken(
    `product/list/${listId}/`
  );
  return response;
};

export const getSettingsDetails = async () => {
  const response: SettingsDetail = await sendGETRequestWithToken(
    "user/settingdetails/"
  );
  return response;
};

export const updateSettingsDetails = async (
  settingsDetails: UpdateSettingDetail
) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/settingdetails/",
    settingsDetails
  );
  return response;
};

export const resetUserPassword = async (password: ResetUserPass) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/profileresetpass/",
    password
  );
  return response;
};

export const getStoreDetail = async (storeId: number) => {
  const response: any = await sendGETRequestWithToken(
    "product/storedetails/?store=" + storeId
  );
  return response;
};

export const getGeoLocationDetail = async () => {
  const response: Coordinates = await sendGETRequestWithToken(
    "user/geolocationdetails/"
  );
  return response;
};

export const updateGeoLocationDetail = async (coordinates: any) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/geolocationdetails/",
    coordinates
  );
  return response;
};

export const addAdminUser = async (adminDetail: AdminDetail) => {
  const response: any = await sendPOSTRequestWithToken(
    "user/register/admin/",
    adminDetail
  );
  return response;
};
export const editAdminDetails = async (id: number, editAdmin: AdminPreviewDetail) => {
  const response: Message = await sendPUTRequestWithToken(
    `user/admin/${id}/?edit=profile`,
    editAdmin
  );
  return response;
};
export const editAdminUser = async (adminDetail: UpdateAdminDetail) => {
  const response: Message = await sendPUTRequestWithToken(
    "user/admin/edit/",
    adminDetail
  );
  return response;
};

export const getAllUserList = async () => {
  const response: UserList = await sendGETRequestWithToken("user/list/");
  return response;
};

export const getFilterUserList = async (filter: string) => {
  const response: UserList = await sendGETRequestWithToken(
    `user/list/?status=${filter}`
  );
  return response;
};

export const getAdminDetail = async (id: string) => {
  const response: AdminPreviewDetail = await sendGETRequestWithToken(
    `user/admin/${id}/`
  );
  return response;
};

export const getUserPreviewDetail = async (id: string) => {
  const response: any = await sendGETRequestWithToken(`user/list/${id}/`);
  return response;
};

export const getStateListDetail = async () => {
  const response: StateData[] = await sendGETRequestWithToken(
    `product/state/list/`
  );
  return response;
};
export const getUpdatedAdminDetail = async () => {
  const response: UpdateAdminDetail = await sendGETRequestWithToken(
    "user/admin/edit/"
  );
  return response;
};
export const updateAdminDetail = async (
  id: string,
  adminDetail: AdminPermission
) => {
  const response: Message = await sendPUTRequestWithToken(
    `user/admin/${id}/?edit=status`,
    adminDetail
  );
  return response;
};

export const getMetals = async (tab: string) => {
  const response: Data[] = await sendGETRequestWithToken(`product/${tab}/`);
  return response;
};

export const updateMetals = async (tab: string, id: number, name: string) => {
  const response: Message = await sendPUTRequestWithToken(
    `product/${tab}/?id=${id}`,
    { name }
  );
  return response;
};

export const addMetals = async (tab: string, name: string) => {
  const response: Message = await sendPOSTRequestWithToken(`product/${tab}/`, {
    name,
  });
  return response;
};

export const addCity = async (state: string, city: string) => {
  const response: Message = await sendPOSTRequestWithToken(`product/state/`, {
    state,
    city,
  });
  return response;
};

export const updateUserPreviewDetail = async (
  id: string,
  is_active: boolean,
  is_permitted: boolean
) => {
  const response: Message = await sendPUTRequestWithToken(`user/list/${id}/`, {
    is_active,
    is_permitted,
  });
  return response;
};

export const getStateCommodity = async (id: number) => {
  const response: StateCommodity[] = await sendGETRequestWithToken(
    `product/commodity/?state=${id}`
  );
  return response;
};

export const updateStateCommodity = async (
  id: number,
  stateCommodity: UpdateStateCommodity
) => {
  const response: Message = await sendPUTRequestWithToken(
    `product/commodity/?id=${id}`,
    stateCommodity
  );
  return response;
};

export const addStateCommodity = async (stateCommodity: AddStateCommodity) => {
  const response: Message = await sendPOSTRequestWithToken(
    `product/commodity/`,
    stateCommodity
  );
  return response;
};
export const sendMessage = async (message: Message) => {
  const response: Message = await sendPOSTRequestWithToken(
    "user/send/message/",
    message
  );
  return response;
};
export const sendMessageDetails = async (message: sendMessages) => {
  const response: any = await sendPOSTRequestWithToken(
    "user/message/notifications/",
    message
  );
  return response;
};
export const updateMessageDetails = async (message: sendMessages, id: number) => {
  const response: sendMessages[] = await sendPUTRequestWithToken(
    `user/message/notifications/${id}/`,
    message
  );
  return response;
};
export const getMessageNotifications = async () => {
  const response: sendMessages[] = await sendGETRequestWithToken(
    `user/message/notifications/`
  );
  return response;
};
