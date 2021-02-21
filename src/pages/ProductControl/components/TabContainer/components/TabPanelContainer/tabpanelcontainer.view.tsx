import React from "react";

import { Box } from "@material-ui/core";

import MetalTabPanel from "./components/MetalTabPanel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

interface TabPanelContainerViewProps {
  value: number;
}

const TabPanelContainerView: React.FC<TabPanelContainerViewProps> = ({
  value,
}) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <MetalTabPanel value={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MetalTabPanel value={value} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MetalTabPanel value={value} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MetalTabPanel value={value} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MetalTabPanel value={value} />
      </TabPanel>
    </>
  );
};

export default TabPanelContainerView;
