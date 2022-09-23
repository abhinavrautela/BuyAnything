import { useField } from "formik";
import React from "react";

const FormikHOC = (Input) => {
  const FormikCostomizedInput = ({ name, ...rest }) => {
    const [{ ...data }, { error, touched }] = useField(name);
    let borderClass = "border-gray-500";

    if (error && touched) {
      borderClass = "border-red-500";
    }
    return <Input {...rest} {...data} error={error} touched={touched} />;
  };
  return FormikCostomizedInput;
};
export default FormikHOC;
