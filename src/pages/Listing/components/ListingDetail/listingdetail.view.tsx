import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { getListDetail } from "../../../../services/apis";

import { ListData, CompanyData } from "../../listing.model";

const useStyles = makeStyles({
  m_t: {
    marginLeft: "5px",
  },
  nobBottomMargin: {
    marginBottom: 0,
  },
  colorGreen: {
    color: "#388e3c",
  },
  alignRight: {
    textAlign: "right",
  },
  colorSecondary: {
    color: "#aaaaaa ",
  },
  mB: {
    marginBottom: "1em",
  },
});
const ListingDetail = () => {
  const classes = useStyles();

  //Const
  const { listId } = useParams();
  const initialListData: ListData = {
    id: 0,
    trade: "",
    payment_type: "",
    metal: "",
    metal_category: "",
    metal_purity: "",
    quantity: 0,
    premium_value: 0,
    user: 0,
    delivery_time: 0,
  };
  const initialCompanyData: CompanyData = {
    company: "",
    branch_address_line_1: "",
    branch_address_line_2: "",
    branch_city: "",
    branch_pincode: 0,
    branch_state: "",
    branch_country: "",
  };

  //State
  const [isLoading, setIsLoading] = useState(true);
  const [companyData, setCompanyData] = useState(initialCompanyData);
  const [listData, setListData] = useState(initialListData);
  useEffect(() => {
    getListDetail(listId)
      .then((result) => {
        alert(JSON.stringify(result));
        setCompanyData(result.company_data);
        setListData(result.list_data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Container maxWidth="lg">
      <Paper
        style={{
          border: "2px solid #0198E1",
          marginLeft: "0",
          marginTop: "0.8em",
        }}
      >
        <Grid container className={classes.m_t} spacing={3}>
          <Grid item xs={10}>
            <h3 className={classes.nobBottomMargin}>
              {listData.metal} {listData.metal_category} {listData.metal_purity}
              <span
                className={classes.colorGreen}
                style={{ float: "right", marginRight: "5px" }}
              >
                <b>3900</b> <br />
                <span className={classes.colorSecondary}>Sell Rate</span>
              </span>
            </h3>
            <span>
              <b>₹</b>{" "}
              <span className={classes.colorGreen}>
                {listData.payment_type}{" "}
              </span>
              <AccessTimeIcon
                style={{
                  padding: "0",
                  margin: 0,
                  width: "1rem",
                  height: "0.8rem",
                }}
              />
              <span className={classes.colorGreen}>
                {" "}
                T+{listData.delivery_time}
              </span>
            </span>
            <div>
              <h4 className={classes.colorSecondary}>SELLER</h4>
              <Button
                component={RouterLink}
                to={"/storeprofile?store=" + listId}
                style={{
                  border: "none",
                  color: "#0198E1",
                  margin: 0,
                  padding: 0,
                  clear: "right",
                  float: "right",
                  textAlign: "right",
                }}
              >
                View Detail
              </Button>
              <div style={{ marginTop: 0 }}>
                <span>{companyData.company}</span>
                <br />
                <span>
                  {companyData.branch_address_line_1}{" "}
                  {companyData.branch_address_line_2}, {companyData.branch_city}
                </span>
              </div>
            </div>
            <div>
              <h4 className={classes.colorSecondary}>PURITY</h4>
              <h5 style={{ marginTop: 0 }}>
                <span>{}</span>
              </h5>
            </div>
            <div>
              <h4 className={classes.colorSecondary}>DELIVERY DATE (T+1)</h4>
              <h5 style={{ marginTop: 0 }}>
                <span>{}</span>
              </h5>
            </div>
            <div>
              <h4 className={classes.colorSecondary}>ORDER LIMIT</h4>
              <h4 style={{ marginTop: 0 }}>
                <span>
                  <span className={classes.colorSecondary}>Min </span>
                  <b>50gm, </b>
                  <span className={classes.colorSecondary}>Max </span>
                  <b> 1000gm, </b>
                </span>
              </h4>
            </div>
            <div>
              <h4 className={classes.colorSecondary}>PRICE BREAKUP</h4>
              <div style={{ marginTop: 0 }}>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>MCX</h5>
                <span>
                  Gold 05FEB20
                  <span style={{ float: "right" }}>39000</span>
                </span>
                <h6 style={{ marginTop: 0, marginBottom: 0 }}>
                  PREMIUM
                  <span style={{ float: "right" }}>
                    <span className={classes.colorGreen}>+ </span>
                    {listData.premium_value}
                  </span>
                </h6>
              </div>
              <h3>
                TOTAL
                <span style={{ float: "right" }}>
                  {listData.premium_value + `39000`}
                </span>
              </h3>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "0 auto",
                marginBottom: "1em",
              }}
            >
              <Button
                variant="contained"
                color="default"
                style={{ background: "#004a84", color: "white", float: "left" }}
                startIcon={<ArrowBackIosIcon />}
                component={RouterLink}
                to={"/listing"}
              >
                BACK
              </Button>
              <Button
                component={RouterLink}
                to={"/newbid/" + listData.id}
                variant="contained"
                style={{ color: "#004a84" }}
              >
                BID
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "green",
                  color: "white",
                  marginLeft: "2rem",
                }}
              >
                CALL
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ListingDetail;
