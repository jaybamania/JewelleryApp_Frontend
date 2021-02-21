import React, { useGlobal } from "reactn";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  Card,
  Theme,
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { sendMessages } from "./../../../../services/models";

interface NotificationProps {
  notifications: sendMessages[];
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  messageBox: {
    background: "#F5FBFF",
    borderRadius: "5px",
    height: "auto",
    padding: "0.5%",
    marginBottom: "3%",
    overflowX: "auto",
  }
}));
const NotificationView: React.FC<NotificationProps> = ({ notifications }) => {
  const classes = useStyles();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { name } = globalUserDetail;
  return (
    <>
      <Paper
        style={{ height: "auto", minHeight: "100vh" }}
        className="rounded"
      >
        <Grid container xl={10} xs={12} md={11} sm={12} className={classes.root}>
          <Grid item xs={2} xl={2}>
            <Button size="large" href="#">
              <KeyboardBackspaceIcon />
            </Button>
          </Grid>
          <Grid item xs={10} xl={10} style={{ margin: "auto", }}>
            <Typography variant="h5" align="center">Notifications</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ margin: "0 1%", marginTop: "1rem", width: "95%" }}
        >
          <Grid item xs={12}>
            {notifications.map((messages: sendMessages) => (
              messages.name === name ?
                (<Card
                  className={classes.messageBox}
                >
                  {/* {const {current_time} = MyFunction(messages.current_date)} */}
                  {/* {const {current_time} = new Date({messages.current_date})} */}
                  {}
                  <Typography variant="subtitle1">{messages.current_date.replace("T", " ")}</Typography>
                  <Typography variant="h6">Dear {messages.name}</Typography>
                  <Typography ><pre style={{ overflowX: "auto", whiteSpace: "pre-wrap" }}>{messages.message_content}</pre></Typography>
                </Card>) : ""
            ))}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NotificationView;
