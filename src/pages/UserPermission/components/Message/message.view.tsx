import React from "react";
import {
  Grid,
  Button,
  Typography,
  TextareaAutosize,
  Box,
} from "@material-ui/core";
import { sendMessages } from "../../../../services/models";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { UserDetail } from "./../../userpermission.model"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerFont: {
      fontSize: "calc(12px + (20 - 12) * ((100vw - 300px) / (1600 - 300)))",
    },
  })
);
interface SendMessageViewProps {
  messages: sendMessages;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: any) => void;
  userDetail: UserDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail>>;
}
const MessageView: React.FC<SendMessageViewProps> = ({
  messages,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Box my={1}>
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.headerFont}
            >
              Send out a word to the user by typing below
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            value={messages.message_content}
            aria-label="Message Box"
            rowsMin={5}
            placeholder="Type your message here"
            name="message_content"
            onChange={handleChange}
            id="message_content"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item>
          <Box my={1}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              SEND
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default MessageView;
