import React, { useGlobal } from "reactn";

import {
  Paper,
  Grid,
  Typography,
  Dialog,
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Link } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import { SettingsDetail } from "../../settings.model";

import { makeStyles, Theme, createStyles } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pad: {
      padding: "10px",
    },
    flexend: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
      right: "20px",
    },
    paper: {
      borderRadius: theme.spacing(2),
    },
  })
);

interface SettingsTabViewProps {
  settingsDetail: SettingsDetail;
  color: any;
  selectedStartDate: Date;
  handleStartDateChange: (date: React.SetStateAction<Date>) => void;
  selectedEndDate: Date;
  handleEndDateChange: (date: React.SetStateAction<Date>) => void;
  openDelivery: boolean;
  handleDeliveryClickOpen: () => void;
  openOrder: boolean;
  handleOrderClickOpen: () => void;
  openCash: boolean;
  handleCashClickOpen: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  cancelChange: () => void;
}

const SettingTabView: React.FC<SettingsTabViewProps> = ({
  settingsDetail,
  color,
  selectedStartDate,
  handleStartDateChange,
  selectedEndDate,
  handleEndDateChange,
  openDelivery,
  handleDeliveryClickOpen,
  openOrder,
  handleOrderClickOpen,
  openCash,
  handleCashClickOpen,
  handleChange,
  handleSubmit,
  cancelChange,
}: any) => {
  const classes = useStyles();
  const globalUserDetail = useGlobal("userDetail")[0];
  const { is_seller } = globalUserDetail;
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Paper style={{ padding: "1em" }} className={classes.paper}>
          <Grid container>
            <Grid item container xs={12} justify="center">
              <Grid item>
                <Typography
                  color="primary"
                  variant="h6"
                  style={{ borderBottom: "2px solid black", padding: "5px" }}
                >
                  SETTINGS
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item container xs={12} className={classes.pad}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> User ID</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" className={classes.flexend}>
                    {settingsDetail.user_details.id}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.pad}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Account Type</Typography>
                </Grid>
                <Grid item xs={6} className={classes.flexend}>
                  <Typography variant="subtitle1">
                    {settingsDetail.user_details.is_seller ? "Trader" : "Buyer"}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} className={classes.pad}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1"> Account Status</Typography>
                </Grid>
                <Grid item xs={6} className={classes.flexend}>
                  <Typography variant="subtitle1" style={{ color }}>
                    {settingsDetail.user_details.is_active
                      ? "Active"
                      : "Inactive"}
                  </Typography>
                </Grid>
              </Grid>
              {is_seller ? <>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1"> Analytics Status</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.flexend}>
                    <Typography variant="subtitle1" style={{ color }}>
                      {settingsDetail.company_details.is_analytical
                        ? "Active"
                        : "Inactive"}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Listing Permission
                  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      className={classes.flexend}
                      style={{ color }}
                    >
                      {settingsDetail.company_details.is_permitted
                        ? "Active"
                        : "Inactive"}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Listing Validity Starting Date
                  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" className={classes.flexend}>
                      {settingsDetail.company_details.permission_date.slice(
                        0,
                        10
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Listing Validity Expiring on
                  </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" className={classes.flexend}>
                      {settingsDetail.company_details.permission_last_date.slice(
                        0,
                        10
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Delivery Timing</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" className={classes.flexend}>
                      {selectedStartDate &&
                        selectedEndDate &&
                        `${new Date(selectedStartDate)
                          .toTimeString()
                          .toString()
                          .slice(0, 5)} to ${new Date(selectedEndDate)
                            .toTimeString()
                            .toString()
                            .slice(0, 5)}`}
                    </Typography>
                    <Link
                      to="/settings/setting"
                      style={{ color: "orange" }}
                      className={classes.flexend}
                      onClick={handleDeliveryClickOpen}
                    >
                      <small>Edit</small>
                    </Link>
                    <Dialog
                      open={openDelivery}
                      onClose={cancelChange}
                      maxWidth="xs"
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Delivery Timings
                    </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Enter the time suitable for product delivery
                      </DialogContentText>
                        <Box m={2}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                              <KeyboardTimePicker
                                margin="normal"
                                id="deliver_start_time"
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                KeyboardButtonProps={{
                                  "aria-label": "Start Time",
                                }}
                                style={{ width: "8rem" }}
                              />
                              <KeyboardTimePicker
                                margin="normal"
                                id="delivery_end_time"
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                KeyboardButtonProps={{
                                  "aria-label": "End Time",
                                }}
                                style={{ width: "8rem" }}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>
                        </Box>
                        <Box m={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Button
                              onClick={handleSubmit}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              SAVE
                          </Button>
                            <Button
                              onClick={cancelChange}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              CANCEL
                          </Button>
                          </div>
                        </Box>
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Minimum Order Quantity
                  </Typography>
                    <Typography>
                      <small>(In gm.)</small>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" className={classes.flexend}>
                      {settingsDetail.company_details.min_value}
                    </Typography>
                    <Link
                      to="/settings/setting"
                      style={{ color: "orange" }}
                      className={classes.flexend}
                      onClick={handleOrderClickOpen}
                    >
                      <small>Edit</small>
                    </Link>
                    <Dialog
                      open={openOrder}
                      onClose={cancelChange}
                      maxWidth="xs"
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Minimum Order Quantity
                    </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <Typography variant="subtitle1">
                            Enter the minimum quantity order requirement
                        </Typography>
                        </DialogContentText>
                        <Box m={2}>
                          <TextField
                            id="min_value"
                            name="min_value"
                            size="small"
                            label="Units in grams"
                            onChange={handleChange}
                            value={settingsDetail.company_details.min_value}
                          />
                        </Box>
                        <Box m={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Button
                              onClick={handleSubmit}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              SAVE
                          </Button>
                            <Button
                              onClick={cancelChange}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              CANCEL
                          </Button>
                          </div>
                        </Box>
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.pad}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      Minimum Handling Charge
                  </Typography>
                    <Typography>
                      <small>(In %)</small>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" className={classes.flexend}>
                      {settingsDetail.company_details.cash_percentage}
                    </Typography>
                    <Link
                      to="/settings/setting"
                      style={{ color: "orange" }}
                      className={classes.flexend}
                      onClick={handleCashClickOpen}
                    >
                      <small>Edit</small>
                    </Link>
                    <Dialog
                      open={openCash}
                      onClose={cancelChange}
                      maxWidth="xs"
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Minimum Handling Charge
                    </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <Typography variant="subtitle1">
                            Enter the percent charge over sell rate that would
                            cost for cash hab
                        </Typography>
                        </DialogContentText>
                        <Box m={2}>
                          <TextField
                            id="cash_percentage"
                            name="cash_percentage"
                            size="small"
                            type="number"
                            label="Enter in %"
                            onChange={handleChange}
                            value={settingsDetail.company_details.cash_percentage}
                          />
                        </Box>
                        <Box m={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Button
                              onClick={handleSubmit}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              SAVE
                          </Button>
                            <Button
                              onClick={cancelChange}
                              color="primary"
                              variant="contained"
                              style={{ width: "15ch" }}
                            >
                              CANCEL
                          </Button>
                          </div>
                        </Box>
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </Grid>
              </> : <></>}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default SettingTabView;
