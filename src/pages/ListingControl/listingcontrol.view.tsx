import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Box, Button, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { StateCommodity, Data } from "./listingcontrol.model";

//components
import ListingControlForm from "./components/ListingControlForm";
import Card from "./components/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(2),
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      margin: "4% 1%",
    },
    pHeight: {
      minHeight: "auto",
      borderRadius: theme.spacing(2),
      padding: "1%",
      border: "1px solid #000000",
      background: "#FAFAFA",
    },
    outGrid: {
      padding: "3% .5%",
      background: "white",
      border: "1px solid #E0E0E0",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
      margin: "1%",
    },
    fontState: {
      fontSize: "calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)))",
    },
    fontHeader: {
      fontSize: "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);

interface ListingControlViewProps {
  open: boolean;
  addRelation: () => void;
  state: string;
  id: number;
  stateCommodity: StateCommodity[];
  handleIsActive: (commodity: StateCommodity) => void;
  metal: Data[];
  metalcategory: Data[];
  purity: Data[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (commodity: StateCommodity, value: string) => void;
  valueState: any;
  setValueState: React.Dispatch<React.SetStateAction<any>>;
  handleAdd: (commodity: StateCommodity) => void;
  handleNewPurity: (value: string) => void;
  anchorEl: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
}

const ListingControlView: React.FC<ListingControlViewProps> = ({
  open,
  addRelation,
  state,
  id,
  stateCommodity,
  handleIsActive,
  metal,
  metalcategory,
  purity,
  setOpen,
  update,
  setUpdate,
  handleDelete,
  valueState,
  setValueState,
  handleAdd,
  handleNewPurity,
  anchorEl,
  handleClick,
  handleClose,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Paper className={classes.root}>
          <Box py={1}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Button
                  size="large"
                  onClick={() => history.push("/control/listing")}
                >
                  <KeyboardBackspaceIcon />
                </Button>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  align="center"
                  variant="h4"
                  style={{
                    fontSize:
                      "calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
                  }}
                >
                  Listing Control
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  size="large"
                  style={{ fontWeight: "bold" }}
                  color="primary"
                  onClick={() => addRelation()}
                  className={classes.fontHeader}
                >
                  {open === false ? "+ ADD NEW RELATION" : "Cancel"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={10} className={classes.outGrid}>
        <Box my={2} mx={1}>
          <Paper className={classes.pHeight}>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h4"
                className={classes.fontState}
              >
                {state}
              </Typography>
            </Grid>
            <Box>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                {open === true && (
                  <ListingControlForm
                    metal={metal}
                    metalcategory={metalcategory}
                    purity={purity}
                    setOpen={setOpen}
                    update={update}
                    setUpdate={setUpdate}
                    valueState={valueState}
                    setValueState={setValueState}
                  />
                )}
                {stateCommodity.map(
                  (commodity: StateCommodity, index: number) => {
                    return (
                      <Card
                        state={state}
                        stateCommodity={commodity}
                        handleIsActive={handleIsActive}
                        handleDelete={handleDelete}
                        handleAdd={handleAdd}
                        anchorEl={anchorEl}
                        handleClick={handleClick}
                        handleClose={handleClose}
                        purity={purity}
                        handleNewPurity={handleNewPurity}
                      />
                    );
                  }
                )}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ListingControlView;
