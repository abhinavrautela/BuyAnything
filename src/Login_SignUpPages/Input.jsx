import { useField } from "formik";
import React from "react";

const Input = ({
  name,
  icon,
  label,
  id,
  type,
  autocomplete,
  required,
  placeholder,
}) => {
  const [{ ...rest }, { error, touched }] = useField(name);
  console.log("rest", { ...rest})
  let borderClass = "border-gray-500";

  if (error && touched) {
    borderClass = "border-red-500";
  }

  return (
    <div className={`border-b-2  py-2 px-1 ${borderClass}`}>
      <div className="relative flex items-center space-x-4">
        {icon}
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          type={type}
          autocomplete={autocomplete}
          required={required}
          {...rest}
          className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
          placeholder={placeholder}
        />
      </div>
      {error && touched && (
        <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
