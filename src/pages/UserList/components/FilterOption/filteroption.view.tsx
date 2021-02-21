import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Button, useMediaQuery, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      fontSize: "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
      minWidth: "15%",
    },

  })
);

interface FilterOptionViewProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterOptionView: React.FC<FilterOptionViewProps> = ({
  filter,
  setFilter,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        direction="row"
        item
        xs={matches ? 6 : 12}
      >
        <Button
          variant={filter === "" ? "contained" : "outlined"}
          onClick={() => setFilter("")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          All
        </Button>
        <Button
          variant={filter === "user" ? "contained" : "outlined"}
          onClick={() => setFilter("user")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          Normal
        </Button>
        <Button
          variant={filter === "seller" ? "contained" : "outlined"}
          onClick={() => setFilter("seller")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          Seller
        </Button>
        <Button
          variant={filter === "admin" ? "contained" : "outlined"}
          onClick={() => setFilter("admin")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          Admin
        </Button>
        <Button
          variant={filter === "deleted" ? "contained" : "outlined"}
          onClick={() => setFilter("deleted")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          Deleted
        </Button>
        <Button
          variant={filter === "permit" ? "contained" : "outlined"}
          onClick={() => setFilter("permit")}
          color="primary"
          size="small"
          className={classes.buttons}
        >
          Permit
        </Button>
      </Grid>
    </>
  );
};
export default FilterOptionView;
