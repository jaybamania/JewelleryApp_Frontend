import React from "react";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  ListItemIcon,
  Grid,
} from "@material-ui/core";

import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import BusinessIcon from "@material-ui/icons/Business";

const ContactView: React.FC = () => {
  return (
    <Container fixed>
      <Typography style={{ textAlign: "center" }} variant="h4">
        Contact Us
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <List>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>abcd@gmail.com</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText>+9101234 56789</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText>
                Door No, Cross, Main/Street
                <br />
                Area/Locality, Town
                <br />
                City - 570021
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactView;
