import React, { useState, useEffect, useGlobal } from "reactn";
import NewListingView from "./newlisting.view";
import {
  ProductOptions,
  ProductOptionsResult,
  ProductDetailObjectInterface,
} from "./newlisting.models";
import { useHistory } from "react-router-dom";
import { ProductDetailInterface } from "./newlisting.models";
import { getProductOptions, addProduct } from "../../services/apis";

const NewListingContainer = () => {
  const setIsError = useGlobal("isError")[1];
  const setIsInfo = useGlobal("isInfo")[1];
  const setMessage = useGlobal("message")[1];

  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState("NewListing");
  const history = useHistory();
  const [productDetail, setProductDetail] = useState<ProductDetailInterface>({
    type: "",
    metal: "",
    metal_category: "",
    purity: "",
    quantity: "0",
    delivery_time: "",
    payment_option: "",
    premium_value: "",
    premium_type: "",
  });

  const initialProductOptions: ProductOptions = {
    delivery_time: [],
    payment_type: [],
    product_options: {},
    product_options_id: {
      metal: [],
      metal_category: [],
      metal_purity: [],
    },
    metal: [],
    category: [],
    purity: [],
  };

  const [productOptions, setProductOptions] = useState(initialProductOptions);

  useEffect(() => {
    getProductOptions()
      .then((result: ProductOptionsResult) => {
        console.log("Result", result);
        const _metalOptions: string[] = Object.keys(
          result.data.product_options
        );
        console.log("um => ", productOptions.product_options_id.metal);
        console.log(_metalOptions);
        setProductOptions({
          ...productOptions,
          ...result.data,
          metal: _metalOptions,
        });
        setIsLoading(false);
        // setMetalOptions(_metalOptions)
      })
      .catch((error) => {
        console.log("Error", error);
        console.log("Error in Fetching Product Options");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    // type,
    metal,
    metal_category,
    // purity,
    quantity,
    // delivery_time,
    // payment_option,
    // premium_value,
    // premium_type,
  } = productDetail;

  useEffect(() => {
    console.log(productOptions);

    if (!metal) return;
    const _categoryOptions = Object.keys(productOptions.product_options[metal]);
    setProductOptions({ ...productOptions, category: _categoryOptions });
    console.log(_categoryOptions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metal]);

  useEffect(() => {
    if (!metal_category) return;
    const _purityOptions =
      productOptions.product_options[metal][metal_category];
    setProductOptions({ ...productOptions, purity: _purityOptions });
    console.log(_purityOptions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metal_category]);

  if (isLoading) return <h1>loading...</h1>;

  const handleChange = (event: any) => {
    let { name, value } = event.target;
    setProductDetail({ ...productDetail, [name]: value });
  };

  const handleQuantityAdd = (amount: string) => {
    setProductDetail({
      ...productDetail,
      quantity: (parseFloat(quantity || "0") + parseFloat(amount)).toString(),
    });
  };
  const handlePreview = () => {
    setStep("Preview");
  };
  const handleNewListing = () => {
    setStep("NewListing");
  };

  const handleSubmit = () => {
    const metal_id: any = productOptions.product_options_id.metal.find(
      (val: any) => val[1] === metal
    );
    const category_id: any = productOptions.product_options_id.metal.find(
      (val: any) => val[1] === metal
    );
    const purity_id: any = productOptions.product_options_id.metal.find(
      (val: any) => val[1] === metal
    );
    const productDetailObject: ProductDetailObjectInterface = Object({
      ...productDetail,
    });
    productDetailObject.metal = metal_id[0];
    console.log("met => ", metal_id);
    productDetailObject.metal_category = category_id[0];
    productDetailObject.purity = purity_id[0];
    productDetailObject.trade = productDetailObject.type.toUpperCase();
    productDetailObject.metal_purity = productDetailObject.purity;
    productDetailObject.payment_type = productDetailObject.payment_option;
    delete productDetailObject.type;
    delete productDetailObject.purity;
    delete productDetailObject.payment_option;

    console.log("pr => ", productDetailObject);
    addProduct(productDetailObject)
      .then((result) => {
        console.log("Result", result);
        setMessage("New Listing Added");
        setIsInfo(true);
        history.push("/mylisting");
      })
      .catch((error) => {
        setMessage("Error occured while adding the Product");
        setIsError(true);
        console.log("Error occured while adding the Product", error);
      });
  };
  return (
    <NewListingView
      step={step}
      productDetail={productDetail}
      handleChange={handleChange}
      handleQuantityAdd={handleQuantityAdd}
      handlePreview={handlePreview}
      productOptions={productOptions}
      handleSubmit={handleSubmit}
      handleNewListing={handleNewListing}
    />
  );
};

export default NewListingContainer;
