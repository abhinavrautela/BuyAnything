import { useField } from "formik";
import React from "react";

const FormikHOC =
  (Component) =>
  ({ name, ...rest }) => {
    const [{ ...data }, { ...meta }] = useField(name);
    return <Component {...rest} {...data} {...meta} />;
  };

export default FormikHOC;
