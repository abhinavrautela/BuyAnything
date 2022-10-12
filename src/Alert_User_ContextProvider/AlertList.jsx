import React from "react";
import { useEffect } from "react";
import Alert from "./Alert";
import { withAlert } from "./withProvider";

const AlertList = ({ alert }) => {
  const Id = alert.id;
  const alerts = {
    Id: { renderComponent: () => <Alert key={Id} /> },
  };

  return <>{alerts.Id.renderComponent()}</>;
};

export default withAlert(AlertList);
           