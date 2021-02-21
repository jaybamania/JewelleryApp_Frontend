import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
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
  })
);

interface TopNavBarViewProps {
  showSideBar: boolean;
  handleDrawer: () => void;
  isLoginned: boolean;
  is_verified: boolean;
  handleSendOtp: () => void;
}

const TopNavBarView: React.FC<TopNavBarViewProps> = ({
  showSideBar,
  handleDrawer,
  isLoginned,
  is_verified,
  handleSendOtp,
}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {showSideBar && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.menuButton}>
          Jewellery App
        </Typography>
        <div className={classes.toolbar}>
          {!isLoginned && (
            <>
              {location.pathname.includes("/login") ? (
                <Button color="inherit" component={RouterLink} to="/">
                  Home
                </Button>
              ) : (
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
              )}
            </>
          )}
          {!isLoginned ||
            (!showSideBar && (
              <>
                <Button color="inherit" component={RouterLink} to="/listing">
                  Listing
                </Button>
              </>
            ))}
          {isLoginned && !is_verified && (
            <>
              <Button
                color="inherit"
                component={RouterLink}
                to="/verifymobile"
                onClick={() => handleSendOtp()}
              >
                Verify Mobile
              </Button>
              <Button color="inherit" component={RouterLink} to="/helpandfaq">
                Help/FAQs
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBarView;
