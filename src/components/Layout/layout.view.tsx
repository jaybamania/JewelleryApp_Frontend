import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import TopNavBar from "../TopNavBar";
import Sidebar from "../Sidebar";
import Routes from "../../Routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      width: "90%",
    },
  })
);

interface LayoutViewProps {
  name: string;
  isLoginned: boolean;
  is_verified: boolean;
  handleSendOtp: () => void;
  showSideBar: boolean;
  handleDrawer: () => void;
  handleLogout: () => void;
  open: boolean;
}

const LayoutView: React.FC<LayoutViewProps> = ({
  name,
  isLoginned,
  is_verified,
  handleSendOtp,
  showSideBar,
  handleDrawer,
  handleLogout,
  open,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopNavBar
        showSideBar={showSideBar}
        handleDrawer={handleDrawer}
        isLoginned={isLoginned}
        is_verified={is_verified}
        handleSendOtp={handleSendOtp}
      />
      <Sidebar
        open={open}
        showSideBar={showSideBar}
        name={name}
        handleLogout={handleLogout}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
};

export default LayoutView;
