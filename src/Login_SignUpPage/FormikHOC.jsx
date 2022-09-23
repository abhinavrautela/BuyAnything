import { useField } from "formik";
import React from "react";

const FormikHOC = (Input) => {
  return ({ name, ...rest }) => {
    const [{ ...data }, { ...meta }] = useField(name);
    return <Input {...rest} {...data} {...meta} />;
  };
};
export default FormikHOC;
