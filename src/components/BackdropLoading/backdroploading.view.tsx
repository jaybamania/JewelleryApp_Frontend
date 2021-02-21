import React from "react";

import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

interface BackdropLoadingViewProps {
  isLoading: boolean;
}

const BackdropLoadingView: React.FC<BackdropLoadingViewProps> = ({
  isLoading,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default BackdropLoadingView;
