import React from "react";

function Button({ onButtonClick, children, myClass, disabled}) {
  return (
    <div>
      <button
        className={`lg:px-2 py-1 bg-primary rounded-lg text-white uppercase lg:text-sm ${myClass}`}
        onClick={onButtonClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
