import React, { useGlobal } from "reactn";
import { Link as RouterLink } from "react-router-dom";

import {
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";

import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PaymentIcon from "@material-ui/icons/Payment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { DRAWER_WIDTH } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
  })
);

interface SidebarViewProps {
  name: string;
  showSideBar: boolean;
  open: boolean;
  handleLogout: () => void;
}

const SidebarView: React.FC<SidebarViewProps> = ({
  name,
  showSideBar,
  open,
  handleLogout,
}) => {
  const classes = useStyles();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { is_superuser, is_admin, is_seller } = globalUserDetail;
  return (
    <>
      {showSideBar && (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div>
            <Toolbar />
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={name || "Anonymous"} />
              </ListItem>
            </List>

            <Divider />

            <List>
              {(is_admin || is_superuser) && (
                <ListItem button component={RouterLink} to="/userlist">
                  <ListItemIcon>
                    <AssignmentIndIcon />
                  </ListItemIcon>
                  <ListItemText primary={"User List"} />
                </ListItem>
              )}
              {is_superuser && (
                <ListItem button component={RouterLink} to="/add/admin">
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Add Admin"} />
                </ListItem>
              )}
              {(is_superuser || is_admin) && (
                <ListItem button component={RouterLink} to="/productcontrol">
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Product Control"} />
                </ListItem>
              )}
              {(is_superuser || is_admin) && (
                <ListItem button component={RouterLink} to="/control/listing">
                  <ListItemIcon>
                    <PlaylistAddIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Listing Control"} />
                </ListItem>
              )}
              <ListItem button component={RouterLink} to="/listing/MarketWatch">
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={"Listing"} />
              </ListItem>
              {is_seller && (
                <ListItem button component={RouterLink} to="/mylisting">
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Listing"} />
                </ListItem>
              )}
              {is_seller && (
                <ListItem button component={RouterLink} to="/mybids">
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Bids"} />
                </ListItem>
              )}
              {is_seller && (
                <ListItem button component={RouterLink} to="/myfavourites">
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Favourites"} />
                </ListItem>
              )}
              {!is_superuser && !is_admin && (
                <ListItem button component={RouterLink} to="/settings/home">
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItem>
              )}
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default SidebarView;
