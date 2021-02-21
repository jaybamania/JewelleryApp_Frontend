import React, { useState } from "react";

import TabContainerView from "./tabcontainer.view";

const TabContainer = () => {
  // State
  const [value, setValue] = useState(0);

  // Event Handlers
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <TabContainerView value={value} handleChange={handleChange} />;
};

export default TabContainer;
