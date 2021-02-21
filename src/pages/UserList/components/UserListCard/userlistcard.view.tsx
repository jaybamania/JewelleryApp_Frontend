import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";

import { User } from "../../userlist.model";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    headerFont: {
      fontSize: "calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);

interface UserListCardViewProps {
  data: User;
  showDate: boolean;
}

const UserListCardView: React.FC<UserListCardViewProps> = ({
  data,
  showDate,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Grid container xs={12}>
        {showDate && (
          <Grid container xs={12} direction="row" justify="flex-start">
            <Box mx={2}>
              <Grid item>
                <Typography variant="subtitle1">
                  {new Date(data.timestrap).toDateString()}
                </Typography>
              </Grid>
            </Box>
          </Grid>
        )}
        <List component="nav" className={classes.root}>
          <ListItem
            button
            onClick={() => {
              if (data.is_admin) {
                history.push(`/admin/${data.id}`);
              } else if (data.is_seller) {
                history.push(`/seller/${data.id}`);
              } else {
                history.push(`/user/${data.id}`);
              }
            }}
          >
            <ListItemText>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={3}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.headerFont}
                  >
                    {data.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={3}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.headerFont}
                  >
                    {data.id}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={3}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.headerFont}
                  >
                    {data.city}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  xs={3}
                >
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.headerFont}
                  >
                    {data.is_seller
                      ? "Seller"
                      : data.is_admin
                        ? "Admin"
                        : "Normal"}
                  </Typography>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </>
  );
};
export default UserListCardView;
