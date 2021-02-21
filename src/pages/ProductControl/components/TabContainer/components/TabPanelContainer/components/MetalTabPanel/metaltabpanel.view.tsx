import React from "react";

import { Box, Grid } from "@material-ui/core";

import AddMetalForm from "./components/AddMetalForm";
import MetalDisplayCard from "./components/MetalDisplayCard";

import { Data } from "../../../../tabcontainer.model";

interface MetalTabPanelViewProps {
  newData: string;
  handleChange: any;
  handleAddMetal: any;
  data: Data[];
  type: number;
  product: string;
}

const MetalTabPanelView: React.FC<MetalTabPanelViewProps> = ({
  newData,
  handleChange,
  handleAddMetal,
  data,
  type,
  product,
}) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <AddMetalForm
          newData={newData}
          handleChange={handleChange}
          handleAddMetal={handleAddMetal}
          product={product}
        />
      </Grid>

      <Grid item xs={12} md={10}>
        <Box mt={4}>
          {data[0].name !== "" &&
            data.map((value: any, index: number) => {
              return (
                <MetalDisplayCard
                  value={
                    value.name
                      ? value.name
                      : value.payment_type
                      ? value.payment_type
                      : value.time
                  }
                  key={index}
                  type={type}
                  id={value.id}
                  product={product}
                />
              );
            })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MetalTabPanelView;
