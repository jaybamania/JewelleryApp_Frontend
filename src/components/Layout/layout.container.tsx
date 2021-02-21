import React, { useEffect, useGlobal, useDispatch } from "reactn";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

import { sendOtp, getUserDetail } from "../../services/apis";
import { setUserDetailReducer } from "../../reducers";
import { SIDEBAR_PATH_LIST } from "../../constants";
import LayoutView from "./layout.view";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const setGlobalUserDetail = useDispatch(setUserDetailReducer);
  const globalUserDetail = useGlobal("userDetail")[0];
  const { name, isLoginned, is_verified } = globalUserDetail;

  useEffect(() => {
    (async () => {
      let userData = await getUserDetail();
      setGlobalUserDetail(userData.user || {});
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendOtp = () => {
    sendOtp().then((result) => {
      console.log(result);
    });
  };

  const lisdetailMatch = useRouteMatch("/listdetail/:listId");
  const newBidMatch = useRouteMatch("/newbid/:listId");
  const listingMatch = useRouteMatch("/listing/:trade/:metal/:id");
  const stateControlMatch = useRouteMatch("/control/state/:state");
  const adminMatch = useRouteMatch("/admin/:id");
  const userMatch = useRouteMatch("/:type/:id");

  const showSideBar: boolean =
    SIDEBAR_PATH_LIST.includes(location.pathname) ||
    !!lisdetailMatch ||
    !!newBidMatch ||
    !!listingMatch ||
    !!stateControlMatch ||
    !!adminMatch ||
    !!userMatch;

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear();
    setGlobalUserDetail({});
    history.push("/");
  };

  return (
    <LayoutView
      name={name}
      isLoginned={isLoginned}
      is_verified={is_verified}
      handleSendOtp={handleSendOtp}
      showSideBar={showSideBar}
      handleDrawer={handleDrawer}
      handleLogout={handleLogout}
      open={open}
    />
  );
};

export default Layout;
