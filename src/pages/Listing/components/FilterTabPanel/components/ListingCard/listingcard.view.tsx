import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import {
  Paper,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CloseIcon from "@material-ui/icons/Close";

import { ListDetail } from "../../../../listing.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 0),
      background: "#F4F4F4",
    },
    flex: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      margin: theme.spacing(1, 0),
    },
    flexbet: {
      display: "flex",
      justifyContent: "space-between",
    },
    flexcol: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    sflex: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },
    card: {
      padding: theme.spacing(3, 0, 3, 4),
      margin: theme.spacing(3),
    },
    list: {
      padding: "5px !important",
    },
    listIcon: {
      minWidth: "25px !important",
    },
  })
);

interface ListingCardProps {
  listDetail: ListDetail;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: ListDetail;
  setSelectedCard: React.Dispatch<React.SetStateAction<ListDetail>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ListingCard: React.FC<ListingCardProps> = ({
  listDetail,
  show,
  setShow,
  selectedCard,
  setSelectedCard,
  color,
  setColor,
}) => {
  const classes = useStyles();
  const setProductColor = (trade: any) => {
    if (trade === "BUY") {
      return "green";
    }
    return "red";
  };
  setColor(setProductColor(listDetail.trade));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const fontSize = !matches ? "1rem" : "1.35rem";
  return (
    <Paper className={classes.root}>
      <div className={classes.flexbet}>
        <div className={classes.flexcol} style={{ marginLeft: "20px" }}>
          <div className={classes.flex}>
            <Typography
              variant="subtitle2"
              style={{
                marginRight: "20px",
                fontWeight: "lighter",
                fontSize,
              }}
            >
              {listDetail.trade + " -"}
            </Typography>
            <Typography variant="h6" style={{ fontWeight: "bold", fontSize }}>
              Gold Bar 995
            </Typography>
          </div>
          <div className={classes.flex}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs>
                <List>
                  <ListItem className={classes.list}>
                    <ListItemText style={{ color }}>Premium</ListItemText>
                  </ListItem>
                  <ListItem className={classes.list}>
                    <ListItemIcon className={classes.listIcon}>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText>{listDetail.premium_value}</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs>
                <List>
                  <ListItem className={classes.list}>
                    <ListItemIcon className={classes.listIcon}>
                      <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText style={{ color }}>
                      {listDetail.delivery_time}
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs>
                <List>
                  <ListItem className={classes.list}>
                    <ListItemIcon
                      className={classes.listIcon}
                      style={{ fontSize: "1.5rem" }}
                    >
                      {"₹"}
                    </ListItemIcon>
                    <ListItemText style={{ color }}>
                      {listDetail.payment_type}
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        </div>
        {show === false && matches && (
          <div className={classes.flexcol}>
            <Typography variant="h4" style={{ color }}>
              39100
            </Typography>
            <Typography variant="body2">
              {"Lowest " + listDetail.trade + " Rate"}
            </Typography>
          </div>
        )}
        <Button
          style={{ color }}
          onClick={() => {
            if (selectedCard.id === listDetail.id) {
              setShow(show ? false : true);
            } else {
              setShow(true);
              setSelectedCard(listDetail);
              setColor(color);
            }
          }}
        >
          {show && selectedCard.id === listDetail.id ? (
            <CloseIcon />
          ) : (
            <PlayArrowIcon />
          )}
        </Button>
      </div>
    </Paper>
  );
};

export default ListingCard;
