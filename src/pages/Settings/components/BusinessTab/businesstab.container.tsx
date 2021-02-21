import React, { useState, useEffect } from "react";
import {
  getBusinessDetails,
  updateBusinessDetails,
} from "../../../../services/apis";
import BusinessTabView from "./businesstab.view";

import { BusinessDetail } from "../../settings.model";

const BusinessTab = () => {
  //Const
  const initialBusinessDetail: BusinessDetail = {
    user_details: {
      is_seller: false,
      name: "",
      father_name: "",
      mobile_no: "",
      address_line_1: "",
      address_line_2: "",
      pincode: "",
      city: "",
      state: "",
      email: "",
      aadhar_no: "",
      pan_no: "",
      is_active: false,
    },
    company: {
      company_name: "",
      company_type: "",
      company_pan_no: "",
      cin_no: "",
    },
    company_branch_details: {
      mobile_no1: "",
      mobile_no2: "",
      gst_no: "",
    },
  };

  //State
  const [color, setColor] = useState("");
  const [businessDetail, setBusinessDetail] = useState(initialBusinessDetail);
  const [editor, setEditor] = useState(false);
  const validate: any = {
    name: () => (businessDetail.user_details.name ? "Required" : ""),
    father_name: () =>
      businessDetail.user_details.father_name ? "Required" : "",
    mobile_no: () => {
      if (!businessDetail.user_details.mobile_no) {
        return "Required";
      } else if (!businessDetail.user_details.mobile_no.match(/^\d{10}$/)) {
        return "Invalid Mobile Number";
      }
      return "";
    },
    address_line_1: () => {
      if (!businessDetail.user_details.address_line_1) {
        return "Required";
      }
      return "";
    },
    address_line_2: () => {
      if (!businessDetail.user_details.address_line_2) {
        return "Required";
      }
      return "";
    },
    city: () => {
      if (!businessDetail.user_details.city) {
        return "Required";
      }
      return "";
    },
    state: () => {
      if (!businessDetail.user_details.state) {
        return "Required";
      }
      return "";
    },
    pincode: () => {
      if (!businessDetail.user_details.pincode) {
        return "Required";
      }
      return "";
    },
    email: () => {
      if (!businessDetail.user_details.email) {
        return "Required";
      }
      return "";
    },
    aadhar_no: () => {
      if (!businessDetail.user_details.aadhar_no) {
        return "Required";
      }
      return "";
    },
    pan_no: () => {
      if (!businessDetail.user_details.pan_no) {
        return "Required";
      }
      return "";
    },
    company_type: () => {
      if (!businessDetail.company.company_type) {
        return "Required";
      }
      return "";
    },
    company_pan_no: () => {
      if (!businessDetail.company.company_pan_no) {
        return "Required";
      }
      return "";
    },
    cin_no: () => {
      if (!businessDetail.company.cin_no) {
        return "Required";
      }
      return "";
    },
    mobile_no1: () => {
      if (!businessDetail.company_branch_details.mobile_no1) {
        return "Required";
      }
      return "";
    },
    mobile_no2: () => {
      if (!businessDetail.company_branch_details.mobile_no2) {
        return "Required";
      }
      return "";
    },
    gst_no: () => {
      if (!businessDetail.company_branch_details.gst_no) {
        return "Required";
      }
      return "";
    },
  };
  useEffect(() => {
    getBusinessDetails()
      .then((result) => {
        setBusinessDetail(result);
        if (businessDetail.user_details.is_seller) {
          setColor("red");
        } else {
          setColor("green");
        }
      })
      .catch((error) => console.log(error));
  }, [businessDetail.user_details.is_seller]);

  //Event Handlers
  const handleUserDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editor) {
      const { name, value } = event.target;
      setBusinessDetail({
        user_details: { ...businessDetail.user_details, [name]: value },
        company: { ...businessDetail.company },
        company_branch_details: { ...businessDetail.company_branch_details },
      });
    }
  };
  const handleCompanyDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editor) {
      const { name, value } = event.target;
      setBusinessDetail({
        user_details: { ...businessDetail.user_details },
        company: { ...businessDetail.company, [name]: value },
        company_branch_details: { ...businessDetail.company_branch_details },
      });
    }
  };
  const handleCompanyBranchDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editor) {
      const { name, value } = event.target;
      setBusinessDetail({
        user_details: { ...businessDetail.user_details },
        company: { ...businessDetail.company },
        company_branch_details: {
          ...businessDetail.company_branch_details,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = () => {
    var data: any = businessDetail;
    delete data.user_details.is_active;
    delete data.user_details.is_seller;
    data.company.company_type_input = data.company.company_type;
    delete data.company.company_type;
    updateBusinessDetails({
      ...data.user_details,
      ...data.company,
      ...data.company_branch_details,
    });
    setEditor(false);
  };
  const cancelChange = () => {
    setEditor(false);
    getBusinessDetails()
      .then((result) => setBusinessDetail(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <BusinessTabView
        businessDetail={businessDetail}
        color={color}
        handleUserDetailChange={handleUserDetailChange}
        handleCompanyDetailChange={handleCompanyDetailChange}
        handleCompanyBranchDetailChange={handleCompanyBranchDetailChange}
        editor={editor}
        setEditor={setEditor}
        handleSubmit={handleSubmit}
        cancelChange={cancelChange}
        validate={validate}
      />
    </>
  );
};
export default BusinessTab;
