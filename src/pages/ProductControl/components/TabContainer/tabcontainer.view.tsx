import React from "react";

import { Paper } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import TabAppBar from "./components/TabAppBar";
import TabPanelContainer from "./components/TabPanelContainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    pHeight: {
      minHeight: "400px",
      borderRadius: "15px",
    },
  })
);

interface TabContainerViewProps {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const TabContainerView: React.FC<TabContainerViewProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.pHeight}>
      <div className={classes.root}>
        <TabAppBar value={value} handleChange={handleChange} />
        <TabPanelContainer value={value} />
      </div>
    </Paper>
  );
};

export default TabContainerView;
