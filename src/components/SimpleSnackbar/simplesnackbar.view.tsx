import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface SimpleSnackbarViewProps {
  isOpen: boolean;
  message: string;
  handleClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => void;
}

const SimpleSnackbarView: React.FC<SimpleSnackbarViewProps> = ({
  isOpen,
  message,
  handleClose,
}) => {
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default SimpleSnackbarView;
