import React, { useState, useEffect } from "react";

import {
  getCompanyDetails,
  updateCompanyDetails,
} from "../../../../services/apis";

import CompanyTabView from "./companytab.view";

import { CompanyDetail } from "../../settings.model";


const CompanyTab = () => {
  //Const
  const initialCompanyDetail: CompanyDetail = {
    user_details: { is_seller: false, is_active: false },
    company_details: {
      company: "",
      mobile_no1: "",
      mobile_no2: "",
      branch_address_line_1: "",
      branch_address_line_2: "",
      branch_city: "",
      branch_state: "",
      branch_country: "",
      is_permitted: false,
      permission_date: "",
      permission_last_date: "",
    },
  };
  //State
  const [color, setColor] = useState("");
  const [editor, setEditor] = useState(false);
  const [companyDetail, setCompanyDetail] = useState(initialCompanyDetail);

  useEffect(() => {
    getCompanyDetails()
      .then((result) => {
        setCompanyDetail(result);
        if (companyDetail.user_details.is_seller) {
          setColor("red");
        } else {
          setColor("green");
        }
      })
      .catch((error) => console.log(error));
  }, [companyDetail.user_details.is_seller]);

  //Event Handlers
  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editor) {
      const { name, value } = event.target;
      setCompanyDetail({
        company_details: { ...companyDetail.company_details, [name]: value },
        user_details: companyDetail.user_details,
      });
    }
  };
  const handleSubmit = () => {
    updateCompanyDetails({
      ...companyDetail.company_details,
      company_name: companyDetail.company_details.company,
    });
    setEditor(false);
  };
  const cancelChange = () => {
    setEditor(false);
    getCompanyDetails()
      .then((result) => setCompanyDetail(result))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <CompanyTabView
        companyDetail={companyDetail}
        color={color}
        editor={editor}
        setEditor={setEditor}
        handleCompanyChange={handleCompanyChange}
        handleSubmit={handleSubmit}
        cancelChange={cancelChange}
      />
    </>
  );
};

export default CompanyTab;
