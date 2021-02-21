import React, { useGlobal } from "reactn";

import SimpleSnackbarView from "./simplesnackbar.view";

const SimpleSnackbar = () => {
  const [isInfo, setIsInfo] = useGlobal("isInfo");
  const [isError, setIsError] = useGlobal("isError");
  const [message, setMessage] = useGlobal("message");

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (isError) setIsError(false);
    if (isInfo) setIsInfo(false);
    setMessage("");
  };
  const isOpen = isError || isInfo;

  return (
    <SimpleSnackbarView
      isOpen={isOpen}
      message={message}
      handleClose={handleClose}
    />
  );
};

export default SimpleSnackbar;
