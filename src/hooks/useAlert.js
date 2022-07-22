import { useState } from "react";

function useAlert() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShow = () => {
    setShowSnackbar(true);
  };

  const handleClose = () => {
    setShowSnackbar(false);
  };

  return {
    showSnackbar,
    handleShow,
    handleClose,
  };
}

export default useAlert;
