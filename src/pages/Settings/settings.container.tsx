import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import SettingsView from "./settings.view";

function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function Settings() {
  //State
  const [value, setValue] = useState(0);
  const history = useHistory();
  const match = useRouteMatch();


  useEffect(() => {
    if ("/settings/setting" === match.path) {
      handleChange(null, 5);
    } else if ("/settings/geolocation" === match.path) {
      handleChange(null, 4);
    }
    else if ("/settings/business" === match.path) {
      handleChange(null, 3);
    } else if ("/settings/company" === match.path) {
      handleChange(null, 2);
    }
    else if ("/settings/personal" === match.path) {
      handleChange(null, 1);
    } else {
      handleChange(null, 0);
    }

  }, [match.path]);

  //Event Handlers
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | any,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <SettingsView
        value={value}
        a11yProps={a11yProps}
        history={history}
        handleChange={handleChange}
      />
    </>
  );
}
