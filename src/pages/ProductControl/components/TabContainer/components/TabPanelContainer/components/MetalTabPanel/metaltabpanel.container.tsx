import React, { useState, useEffect, useGlobal } from "reactn";

import MetalTabPanelView from "./metaltabpanel.view";

import { Data } from "../../../../tabcontainer.model";

import { getMetals, addMetals } from "../../../../../../../../services/apis";

interface MetalTabPanelProps {
  value: number;
}

const MetalTabPanel: React.FC<MetalTabPanelProps> = ({ value }) => {
  // Const
  const initialData: Data[] = [
    {
      id: 0,
      name: "",
    },
  ];
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];
  const [newData, setNewData] = useState("");
  const [data, setData] = useState(initialData);
  const [product, setProduct] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewData(value);
  };

  const handleAddMetal = () => {
    addMetals(product, newData)
      .then((message) => {
        setMessage(message.message);
        setData([...data, { id: data.length + 1, name: newData }]);
        setIsInfo(true);
      })
      .catch((message) => {
        setMessage(message.message);
        setIsError(true);
      });
    setNewData("");
    console.log("New Data: ", newData);
  };
  useEffect(() => {
    if (value === 0) {
      setProduct("metal");
    } else if (value === 1) {
      setProduct("metalcategory");
    } else if (value === 2) {
      setProduct("metalpurity");
    } else if (value === 3) {
      setProduct("deliverytime");
    } else if (value === 4) {
      setProduct("paymenttype");
    }
    getMetals(product)
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  }, [value, product]);
  return (
    <MetalTabPanelView
      newData={newData}
      handleChange={handleChange}
      handleAddMetal={handleAddMetal}
      data={data}
      type={value}
      product={product}
    />
  );
};

export default MetalTabPanel;
