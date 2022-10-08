import React from "react";
import { AlertContext, UserContext } from "./Contexts";
import { useContext } from "react";

const withProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};
export default withProvider;

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
