import React from "react";

import { AppBar, Tabs, Tab } from "@material-ui/core";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabAppBarViewProps {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const TabAppBarView: React.FC<TabAppBarViewProps> = ({
  value,
  handleChange,
}) => {
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Product control Tabs"
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="METAL" {...a11yProps(0)} />
        <Tab label="CATEGORY" {...a11yProps(1)} />
        <Tab label="PURITY" {...a11yProps(2)} />
        <Tab label="DELIVERY TIME" {...a11yProps(3)} />
        <Tab label="PAYMENT" {...a11yProps(4)} />
      </Tabs>
    </AppBar>
  );
};

export default TabAppBarView;
