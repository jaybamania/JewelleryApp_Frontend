import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Paper, Container, Grid, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

//Components Imports
import FilterOptions from "./components/FilterOptions";
import FilterButton from "./components/FilterButton";
import SearchComponent from "./components/Search";
import MarketWatchTab from "./components/MarketWatch";
import FilterTabPanel from "./components/FilterTabPanel";

import { TabPanelProps } from "./listing.model";

import { ActiveTradeMetal } from "./listing.model";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  listingContainer: {
    margin: "2em auto",
  },
  fontRoboto: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
}));
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

interface ListingViewProps {
  TRADE: string[];
  handleApplyFilter: () => void;
  handleFilterCheck: (value: any, attribute: any) => void;
  handleMetalCategoryChange: (trade: any, metal: any) => void;
  handleChange:
    | ((event: React.ChangeEvent<{}> | undefined, value: any) => void)
    | undefined;
  productOptions: any;
  value: Number;
  filterOpen: boolean;
  activeTradeMetal: ActiveTradeMetal;
  isUpdateList: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  filterOptions: any;
  history: any;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isFilter: boolean;
  setFilterOptions: React.Dispatch<React.SetStateAction<any>>;
  initialFilterOptions: any;
}
const ListingView: React.FC<ListingViewProps> = ({
  TRADE,
  handleApplyFilter,
  handleFilterCheck,
  handleMetalCategoryChange,
  handleChange,
  productOptions,
  value,
  filterOpen,
  activeTradeMetal,
  isUpdateList,
  setFilterOpen,
  setIsUpdateList,
  filterOptions,
  history,
  show,
  setShow,
  isFilter,
  setFilterOptions,
  initialFilterOptions,
}) => {
  const classes = useStyles();

  let lastIndex = 0;
  const renderTabList = (): any => {
    const tabs: any = [];
    const tabsPanel: any = [];
    let count = 0;
    productOptions.product_options_id.metal.forEach((val: any, index: any) => {
      TRADE.forEach((trade: any) => {
        count++;
        tabs.push(
          <Tab
            className={classes.fontRoboto}
            key={trade + index}
            label={trade + " " + val[1]}
            {...a11yProps(1)}
            onClick={() => {
              handleMetalCategoryChange(trade, val);
              history.push(`/listing/${trade}/${val[1]}/${val[0]}`);
              setShow(false);
              setFilterOpen(false);
            }}
          />
        );

        tabsPanel.push(
          <TabPanel key={trade + index} value={value} index={count}>
            <FilterTabPanel
              activeTradeMetal={activeTradeMetal}
              filterOptions={filterOptions}
              isUpdateList={isUpdateList}
              setIsUpdateList={setIsUpdateList}
              show={show}
              setShow={setShow}
            />
          </TabPanel>
        );
      });
    });
    lastIndex = ++count;
    return [tabs, tabsPanel];
  };

  if (!productOptions.product_options_id) return <p>loading...</p>;
  const tabAndTabPanelArray = renderTabList();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs"
        >
          <Tab
            label="Market Watch"
            {...a11yProps(0)}
            className={classes.fontRoboto}
            onClick={() => {
              setFilterOpen(false);
              history.push(`/listing/MarketWatch`);
            }}
          />
          {tabAndTabPanelArray[0]}
          <Tab
            className={classes.fontRoboto}
            icon={<SearchIcon />}
            aria-label="Search"
            {...a11yProps(5)}
            onClick={() => {
              setFilterOpen(false);
              history.push(`/listing/Search`);
            }}
          />
        </Tabs>
      </AppBar>
      <Container className={classes.listingContainer}>
        {value !== 0 && (
          <Paper
            style={{
              padding: "1em",
              marginBottom: "1em",
            }}
          >
            <Grid container justify="space-between">
              <Grid item container xs={7}>
                <SearchComponent />
              </Grid>
              <Grid item xs={4}>
                <FilterButton
                  filterOpen={filterOpen}
                  setFilterOpen={setFilterOpen}
                />
              </Grid>
              <Grid item xs={1} sm={1}>
                {isFilter && (
                  <Button
                    style={{ borderRadius: "20px" }}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setFilterOptions(initialFilterOptions);
                      setIsUpdateList(true);
                    }}
                  >
                    CLEAR
                  </Button>
                )}
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item xs={12} md={6}>
                {filterOpen === true && (
                  <FilterOptions
                    handleFilterCheck={handleFilterCheck}
                    productOptions={productOptions}
                    filterOptions={filterOptions}
                    handleApplyFilter={handleApplyFilter}
                  />
                )}
              </Grid>
            </Grid>
          </Paper>
        )}
        <TabPanel value={value} index={0}>
          <MarketWatchTab />
        </TabPanel>
        {tabAndTabPanelArray[1]}
        <TabPanel value={value} index={lastIndex}>
          Search
        </TabPanel>
      </Container>
    </div>
  );
};
export default ListingView;
