import React, { useGlobal } from "reactn";
import {
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import EmailIcon from "@material-ui/icons/Email";
import SearchIcon from "@material-ui/icons/SearchOutlined"
import { MyBidInterface } from "./mybid.models";
import { sendMessages } from "./../../services/models";
import MarketWatch from "./components/MarketWatch"
import Notifications from "./components/MessageNotifications";

interface MyBidInterfaceProps {
  mybids: MyBidInterface[];
  history: any;
  notifications: number;
  handleClick: React.ChangeEvent<HTMLInputElement> | any;
  notifiedMsg: sendMessages[];
  handleNotifications: sendMessages[] | String | any;
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const MyBidDetailView: React.FC<MyBidInterfaceProps> = ({
  mybids,
  history,
  handleClick,
  notifications,
  notifiedMsg,
  handleNotifications,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { name } = globalUserDetail;
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // window.addEventListener('reload', (event) => {
  //   for (let i = 0; i < notifiedMsg.length; i++) {
  //     if (notifiedMsg[i].name === name) {
  //       console.log(notifiedMsg[i].name);
  //       if (notifiedMsg[i].is_detailed === false) {
  //         notifications += 1;
  //         console.log(notifiedMsg[i].name);
  //       }
  //     }
  //   }
  //   console.log('The page has fully loaded');
  // });

  return (
    <div className={classes.root}
      onLoad={handleNotifications(notifiedMsg, name)}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="full width tabs example"
        >

          <Tab label="Market Place"
            style={{ marginLeft: "0" }}
            {...a11yProps(0)}
            onClick={() => history.push(`/mybids`)}
          />
          <Tab label="Buy Gold"
            {...a11yProps(1)}
            onClick={() => history.push(`/mybids`)}
          />
          <Tab label="Sell Gold"
            {...a11yProps(2)}
            onClick={() => history.push(`/mybids`)}
          />
          <Tab label="Buy Silver"
            {...a11yProps(3)}
            onClick={() => history.push(`/mybids`)}
          />
          <Tab label=""
            {...a11yProps(4)}
            icon={<SearchIcon style={{ marginRight: "1em" }} />}
            onClick={() => history.push(`/mybids`)}
          />
          <Tab label=""
            {...a11yProps(5)}
            icon={<Badge color="secondary" badgeContent={notifications}>
              <EmailIcon style={{ marginRight: "0" }} />
            </Badge>}
            onClick={handleClick} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <MarketWatch />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <MarketWatch />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Notifications />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default MyBidDetailView;
