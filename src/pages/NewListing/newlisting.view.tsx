import React from "react";
import NewListingForm from "./components/NewListingForm";
import NewListingPreview from "./components/NewListingPreview";
import { ProductDetailInterface, ProductOptions } from "./newlisting.models";
interface NewListingView {
  productDetail: ProductDetailInterface;
  handleChange: (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => void;
  handleQuantityAdd: (amount: string) => void;
  handlePreview: () => void;
  productOptions: ProductOptions;
  handleSubmit: () => void;
  handleNewListing: () => void;
  step: string;
}

const NewListingView: React.FC<NewListingView> = ({
  productDetail,
  handleChange,
  handleQuantityAdd,
  handlePreview,
  productOptions,
  handleSubmit,
  handleNewListing,
  step,
}) => {
  return (
    <div>
      {step === "NewListing" && (
        <NewListingForm
          productDetail={productDetail}
          handleChange={handleChange}
          handleQuantityAdd={handleQuantityAdd}
          handlePreview={handlePreview}
          productOptions={productOptions}
        />
      )}
      {step === "Preview" && (
        <NewListingPreview
          handleSubmit={handleSubmit}
          productDetail={productDetail}
          handleNewListing={handleNewListing}
        />
      )}
    </div>
  );
};

export default NewListingView;
