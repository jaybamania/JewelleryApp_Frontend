import React, { useState, useEffect } from "react";

import {
  getSettingsDetails,
  updateSettingsDetails,
} from "../../../../services/apis";
import SettingTabView from "./settingtab.view";

import { SettingsDetail } from "../../settings.model";

const SettingsTab = () => {
  //Const
  const initialSettingsDetail: SettingsDetail = {
    user_details: { id: "", is_seller: false, is_active: false },
    company_details: {
      is_analytical: false,
      is_permitted: false,
      delivery_time: "",
      min_value: "",
      cash_percentage: "",
      permission_last_date: "",
      permission_date: "",
    },
  };

  //State
  const [settingsDetail, setSettingsDetail] = useState(initialSettingsDetail);
  const [color, setColor] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [openCash, setOpenCash] = useState(false);

  useEffect(() => {
    getSettingsDetails()
      .then((result) => {
        setSettingsDetail(result);
        const time = result.company_details.delivery_time.split("...");
        setSelectedStartDate(time[0]);
        setSelectedEndDate(time[1]);
        if (settingsDetail.user_details.is_seller) {
          setColor("red");
        } else {
          setColor("green");
        }
      })
      .catch((error) => console.log(error));
  }, [settingsDetail.user_details.is_seller]);

  //EventHandlers
  const handleStartDateChange = (date: React.SetStateAction<Date>) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date: React.SetStateAction<Date>) => {
    setSelectedEndDate(date);
  };
  const handleDeliveryClickOpen = () => {
    setOpenDelivery(true);
  };
  const handleOrderClickOpen = () => {
    setOpenOrder(true);
  };
  const handleCashClickOpen = () => {
    setOpenCash(true);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSettingsDetail({
      user_details: { ...settingsDetail.user_details },
      company_details: { ...settingsDetail.company_details, [name]: value },
    });
  };
  const handleSubmit = () => {
    const { min_value, cash_percentage } = settingsDetail.company_details;
    updateSettingsDetails({
      delivery_time: `${selectedStartDate}...${selectedEndDate}`,
      min_value,
      cash_percentage,
    });
    setOpenCash(false);
    setOpenOrder(false);
    setOpenDelivery(false);
  };
  const cancelChange = () => {
    getSettingsDetails()
      .then((result) => {
        setSettingsDetail(result);
        const time = result.company_details.delivery_time.split("...");
        setSelectedStartDate(time[0]);
        setSelectedEndDate(time[1]);
      })
      .catch((error) => console.log(error));
    setOpenCash(false);
    setOpenOrder(false);
    setOpenDelivery(false);
  };
  return (
    <>
      <SettingTabView
        settingsDetail={settingsDetail}
        color={color}
        selectedStartDate={selectedStartDate}
        handleStartDateChange={handleStartDateChange}
        selectedEndDate={selectedEndDate}
        handleEndDateChange={handleEndDateChange}
        openDelivery={openDelivery}
        handleDeliveryClickOpen={handleDeliveryClickOpen}
        openOrder={openOrder}
        handleOrderClickOpen={handleOrderClickOpen}
        openCash={openCash}
        handleCashClickOpen={handleCashClickOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelChange={cancelChange}
      />
    </>
  );
};

export default SettingsTab;
