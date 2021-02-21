import React from "react";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StateCommodity, Data } from "../../listingcontrol.model";

const useStyles = makeStyles({
  root: {
    width: "98%",
    border: "1px solid #000000",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: "1rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
  btnColorDis: {
    color: "#F44336",
    background: "#FFE5E3",
    borderRadius: "4px",
    float: "right",
    padding: "0.5rem",

    minWidth: "30%",
  },
  btnColorEnb: {
    color: "#27AE60",
    background: "#F0F8FF",
    borderRadius: "4px",
    float: "right",
    padding: "0.5rem",
    minWidth: "30%",
  },
  fontSizes: {
    marginTop: "0.5rem",
    fontSize: "calc(11px + (25 - 11) * ((100vw - 300px) / (1600 - 300)))",
  },
  chip: {
    margin: "0.5em 0.25em",
  },
});

interface ListProps {
  state: string;
  handleChange: () => void;
  handleIsActive: (commodity: StateCommodity) => void;
  stateCommodity: StateCommodity;
  handleDelete: (commodity: StateCommodity, value: string) => void;
  handleAdd: (commodity: StateCommodity) => void;
  anchorEl: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: () => void;
  purity: Data[];
  handleNewPurity: (value: string) => void;
}

const CardView: React.FC<ListProps> = ({
  state,
  handleChange,
  handleIsActive,
  stateCommodity,
  handleDelete,
  handleAdd,
  anchorEl,
  handleClick,
  handleClose,
  purity,
  handleNewPurity,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center">
          <Grid item xl={3} xs={3} md={3} sm={3} justify="center">
            <Typography align="left" variant="h5" className={classes.fontSizes}>
              {stateCommodity.metal}
            </Typography>
          </Grid>
          <Grid item xl={3} xs={3} md={3} sm={3} justify="center">
            <Typography align="left" variant="h5" className={classes.fontSizes}>
              {stateCommodity.metal_category}
            </Typography>
          </Grid>
          <Grid item xl={3} xs={3} md={3} sm={3} justify="center">
            <Typography align="left" variant="h5" className={classes.fontSizes}>
              {stateCommodity.purity.map((data) => {
                return (
                  <Chip
                    label={data}
                    className={classes.chip}
                    onDelete={() => {
                      handleDelete(stateCommodity, data);
                    }}
                  />
                );
              })}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                size="small"
                variant="contained"
                onClick={(e) => {
                  handleClick(e);
                  handleAdd(stateCommodity);
                }}
              >
                + ADD
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {purity.map((data, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleNewPurity(data.name)}
                  >
                    {data.name}
                  </MenuItem>
                ))}
              </Menu>
            </Typography>
          </Grid>
          <Grid item xl={3} xs={3} md={3} sm={3}>
            <Grid item xs={12} justify="center">
              {!stateCommodity.is_active ? (
                <Button
                  variant="outlined"
                  className={classes.btnColorDis}
                  color="secondary"
                  onClick={() => handleIsActive(stateCommodity)}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize:
                        "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
                    }}
                  >
                    DISABLE
                  </Typography>
                </Button>
              ) : (
                  <Button
                    variant="outlined"
                    className={classes.btnColorEnb}
                    color="primary"
                    onClick={() => handleIsActive(stateCommodity)}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize:
                          "calc(8px + (20 - 8) * ((100vw - 300px) / (1600 - 300)))",
                      }}
                    >
                      ENABLE
                  </Typography>
                  </Button>
                )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardView;
