import React, { useGlobal } from "reactn";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import BusinessIcon from "@material-ui/icons/Business";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import RoomIcon from "@material-ui/icons/Room";
import SettingsIcon from "@material-ui/icons/Settings";

//Components
import HomeTabComponent from "./components/HomeTab";
import PersonalTabComponent from "./components/PersonalTab";
import CompanyTabComponent from "./components/CompanyTab";
import BusinessTabComponent from "./components/BusinessTab";
import GeolocationTabComponent from "./components/GeolocationTab";
import SettingsTabComponent from "./components/SettingTab";

import { TabPanelProps } from "./settings.model";

import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  wrapper: {
    flexDirection: "row",
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >

      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

interface SettingsViewProps {
  value: number;
  a11yProps: (index: number) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | any,
    newValue: number
  ) => void;
  history: any;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  value,
  a11yProps,
  handleChange,
  history,
}) => {
  const classes = useStyles();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { is_seller } = globalUserDetail;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            style={{ flexDirection: "row" }}
            label="Home"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<HomeIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(0)}
            onClick={() => history.push("/settings/home")}
          />
          <Tab
            style={{ flexDirection: "row" }}
            label="Personal"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<PersonIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(1)}
            onClick={() => history.push("/settings/personal")}
          />

          <Tab
            style={{ flexDirection: "row", display: is_seller ? "block" : "none" }}
            label="Company"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<BusinessIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(2)}
            onClick={() => history.push("/settings/company")}

          />

          <Tab
            style={{ flexDirection: "row", display: is_seller ? "block" : "none" }}
            label="Business"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<BusinessCenterIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(3)}
            onClick={() => history.push("/settings/business")}
          />
          <Tab
            style={{ flexDirection: "row" }}
            label="Geolocation"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<RoomIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(4)}
            onClick={() => history.push("/settings/geolocation")}
          />
          <Tab
            style={{ flexDirection: "row" }}
            label="Settings"
            classes={{
              wrapper: classes.wrapper,
            }}
            icon={<SettingsIcon style={{ marginRight: "1em" }} />}
            {...a11yProps(5)}
            onClick={() => history.push("/settings/setting")}
          />

        </Tabs>
      </AppBar>

      {/* {is_seller ? <> */}
      <TabPanel value={value} index={0}>
        <HomeTabComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalTabComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompanyTabComponent />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BusinessTabComponent />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GeolocationTabComponent />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SettingsTabComponent />
      </TabPanel>
    </div>
  );
};
export default SettingsView;
