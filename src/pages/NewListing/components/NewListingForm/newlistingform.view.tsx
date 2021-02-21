import React from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  Box,
} from "@material-ui/core";

import MyDropDownView from "../MyDropdown";
import {
  ProductDetailInterface,
  ProductOptions,
} from "../../newlisting.models";

interface NewListingFormView {
  productDetail: ProductDetailInterface;
  handleChange: (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => void;
  handleQuantityAdd: (amount: string) => void;
  handlePreview: () => void;
  productOptions: ProductOptions;
}
const NewListingFormView: React.FC<NewListingFormView> = ({
  productDetail,
  handleChange,
  handleQuantityAdd,
  handlePreview,
  productOptions,
}) => {
  const {
    type,
    metal,
    metal_category,
    purity,
    quantity,
    delivery_time,
    payment_option,
    premium_value,
    premium_type,
  } = productDetail;

  return (
    <div>
      <Paper>
        <Container>
          <Box py={3}>
            <Grid
              container
              alignContent="space-between"
              style={{ minHeight: "80vh" }}
            >
              <Grid>
                <Typography>I want to </Typography>
              </Grid>
              <Grid container justify="space-between">
                <MyDropDownView
                  value={type}
                  name="type"
                  handleChange={handleChange}
                  options={["Sell", "Buy"]}
                  label="Type"
                />
                <MyDropDownView
                  value={metal}
                  name="metal"
                  handleChange={handleChange}
                  // options={["Gold", "Silver"]}
                  options={productOptions.metal}
                  label="Metal"
                />
                <MyDropDownView
                  value={metal_category}
                  name="metal_category"
                  handleChange={handleChange}
                  // options={["Bar", "Coil"]}
                  options={productOptions.category}
                  label="Metal Category"
                />
              </Grid>
              <Grid container justify="center">
                <MyDropDownView
                  value={purity}
                  name="purity"
                  handleChange={handleChange}
                  // options={["995", "999"]}
                  options={productOptions.purity}
                  label="Purity"
                />

                <Grid item container xs={12} sm={8} justify="center">
                  <Grid item xs={10} sm={9}>
                    <TextField
                      id="quantity"
                      label="Quantity"
                      value={quantity}
                      type="number"
                      name="quantity"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <Box mt={3}>
                      {["50", "100", "500", "1000"].map((value, index) => {
                        return (
                          <Button
                            key={index}
                            variant="outlined"
                            size="small"
                            color="primary"
                            onClick={() => handleQuantityAdd(value)}
                          >
                            +{value}
                          </Button>
                        );
                      })}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="space-between">
                <MyDropDownView
                  value={delivery_time}
                  name="delivery_time"
                  handleChange={handleChange}
                  options={productOptions.delivery_time}
                  // options={["T+0", "T+1"]}
                  label="Delivery Time"
                />
                <MyDropDownView
                  value={payment_option}
                  name="payment_option"
                  handleChange={handleChange}
                  options={productOptions.payment_type}
                  // options={["Cash", "Bank"]}
                  label="Payment Option"
                />
              </Grid>
              <Grid container justify="space-between">
                <Grid item xs={12}>
                  <Typography variant="h6">MCX</Typography>
                </Grid>
                <Grid item container xs={12} justify="space-between">
                  <Grid item xs={3}>
                    <TextField
                      id="gold"
                      value="GOLD"
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="id1"
                      value="05JUN20"
                      InputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>39000</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="space-between">
                <Grid item xs={12}>
                  <Typography variant="h6">PREMIUM</Typography>
                </Grid>
                <Grid item container xs={12} justify="space-between">
                  <Grid item xs={3}>
                    <MyDropDownView
                      variant="standard"
                      value={premium_type}
                      name="premium_type"
                      handleChange={handleChange}
                      options={["-ve", "+ve"]}
                      style={{ minWidth: 50 }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="premium_value"
                      label="Price"
                      type="number"
                      value={premium_value}
                      name="premium_value"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>39000</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Grid container style={{ textAlign: "center" }}>
                  <Grid item xs={12}>
                    <Typography>You're Selling Gold 995 @MCX + 100</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      onClick={handlePreview}
                    >
                      Done
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

export default NewListingFormView;
