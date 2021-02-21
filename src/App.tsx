import React, { setGlobal, useGlobal } from "reactn";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import Layout from "./components/Layout";
import SimpleSnackbar from "./components/SimpleSnackbar";
import BackdropLoading from "./components/BackdropLoading";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004a84",
    },
    secondary: {
      main: "#F2994A",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

setGlobal({
  isError: false,
  isWarning: false,
  isInfo: false,
  message: "",
  backDropLoading: false,
  userDetail: {
    name: "",
    mobile_no: "",
    isLoginned: !!localStorage.getItem("ACCESS_TOKEN"),
    is_verified: false,
    is_selller: false,
    is_superuser: false,
    email: "",
    is_admin: false,
  },
});

const App = () => {
  const backDropLoading = useGlobal("backDropLoading")[0];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />
        <SimpleSnackbar />
        <BackdropLoading isLoading={backDropLoading} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
