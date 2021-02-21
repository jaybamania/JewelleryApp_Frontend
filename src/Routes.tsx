import React, { useGlobal } from "reactn";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/Landing";
import Listing from "./pages/Listing";
import Mylisting from "./pages/Mylisting";
import MyBidDetail from "./pages/MyBids";
import Newlisting from "./pages/NewListing";
import Newbid from "./pages/Newbid";
import MyFavourites from "./pages/MyFavourites";
import Settings from "./pages/Settings";
import TermsAndConditions from "./pages/TermsAndConditions";
import VerifyMobile from "./pages/VerifyMobile";
import StoreProfile from "./pages/StoreProfile";
import BankDetail from "./pages/BankDetail";
import ListingDetail from "./pages/Listing/components/ListingDetail";
import HelpAndFaq from "./pages/HelpAndFaq";
import ListingControlPage from "./pages/ListingControl";
import ProductControlView from "./pages/ProductControl";
import UserList from "./pages/UserList";
import AssignAdminPermission from "./pages/AssignAdminPermission";
import AddAdmin from "./pages/AddAdmin";
import StateControl from "./pages/StateControl";
import UserPermission from "./pages/UserPermission";
import UpdateAdmin from "./pages/UpdateAdmin";
import ListingControlState from "./pages/ListingControlState";

const PrivateRoute = ({ children, component: Component, ...rest }: any) => {
  const { isLoginned } = useGlobal("userDetail")[0];

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoginned ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
      }
    />
  );
};
// const AdminRoute = ({ children, component: Component, ...rest }: any) => {
//   const { is_admin, is_superuser } = useGlobal("userDetail")[0];
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         is_admin || is_superuser ? (
//           <Component />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// const SuperUserRoute = ({ children, component: Component, ...rest }: any) => {
//   const { is_superuser } = useGlobal("userDetail")[0];
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         is_superuser ? (
//           <Component />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path={`/register`} component={Landing} />
        <Route exact path={`/login`} component={Landing} />
        <Route exact path={`/loginwithotp`} component={Landing} />
        <Route exact path={`/forgotpassword`} component={Landing} />
        <Route exact path={`/bankdetail`} component={BankDetail} />
        <Route exact path={`/helpandfaq`} component={HelpAndFaq} />
        <Route
          exact
          path={`/termsandconditions`}
          component={TermsAndConditions}
        />
        <PrivateRoute exact path={`/listing/MarketWatch`} component={Listing} />
        <PrivateRoute exact path={`/listing/Search`} component={Listing} />
        <PrivateRoute
          exact
          path={`/listing/:trade/:metal/:id`}
          component={Listing}
        />
        <PrivateRoute exact path={`/verifymobile`} component={VerifyMobile} />
        <PrivateRoute exact path={`/mylisting`} component={Mylisting} />
        <PrivateRoute exact path={`/mybids`} component={MyBidDetail} />
        <PrivateRoute exact path={`/mybids/notifications`} component={MyBidDetail} />
        <PrivateRoute exact path={`/newlisting`} component={Newlisting} />
        <PrivateRoute exact path={`/newbid/:listId`} component={Newbid} />
        <PrivateRoute exact path={`/myfavourites`} component={MyFavourites} />
        <PrivateRoute exact path={`/settings/home`} component={Settings} />
        <PrivateRoute exact path={`/settings/personal`} component={Settings} />
        <PrivateRoute exact path={`/settings/company`} component={Settings} />
        <PrivateRoute exact path={`/settings/business`} component={Settings} />
        <PrivateRoute
          exact
          path={`/settings/geolocation`}
          component={Settings}
        />
        <PrivateRoute exact path={`/settings/setting`} component={Settings} />
        <Route exact path={`/storeprofile`} component={StoreProfile} />
        <PrivateRoute
          exact
          path={`/listdetail/:listId`}
          component={ListingDetail}
        />
        <PrivateRoute
          exact
          path={`/listingcontrol/:state/:id`}
          component={ListingControlPage}
        />
        <PrivateRoute
          exact
          path={`/productcontrol`}
          component={ProductControlView}
        />
        <PrivateRoute exact path={"/userlist"} component={UserList} />
        <PrivateRoute
          exact
          path={"/admin/:id"}
          component={AssignAdminPermission}
        />
        <PrivateRoute exact path={"/edit/admin"} component={UpdateAdmin} />
        <PrivateRoute exact path={"/:type/admin"} component={AddAdmin} />
        <PrivateRoute exact path={"/:type/admin/:id"} component={AddAdmin} />
        <PrivateRoute exact path={"/control/state"} component={StateControl} />
        <PrivateRoute
          exact
          path={"/control/state/:state"}
          component={StateControl}
        />
        <PrivateRoute
          exact
          path={"/control/listing"}
          component={ListingControlState}
        />
        <PrivateRoute exact path={"/:type/:id"} component={UserPermission} />
      </Switch>
    </div>
  );
};

export default Routes;
