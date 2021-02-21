import React from "react";
import { Button } from "@material-ui/core";

interface bottomTab {
  getListUsingStatus: (status: string) => void;
  text: string;
  variant: any;
  status: string;
}
const BottomTabButtonView: React.FC<bottomTab> = ({
  getListUsingStatus,
  text,
  variant,
  status,
}) => {
  return (
    <Button
      color="primary"
      size="small"
      style={{ borderRadius: "12px" }}
      variant={variant}
      onClick={() => getListUsingStatus(status)}
    >
      {text}
    </Button>
  );
};

export default BottomTabButtonView;
