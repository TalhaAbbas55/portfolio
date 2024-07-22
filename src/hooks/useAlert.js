import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }) => {
    console.log("show alert", text, type);
    setAlert({
      show: true,
      text,
      type,
    });
  };

  const hideAlert = () => {
    setAlert({
      ...alert,
      show: false,
    });
  };
  return { alert, showAlert, hideAlert };
};

export default useAlert;
