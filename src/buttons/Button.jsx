import React from "react";

function Button({ onButtonClick, children, myClass }) {
  return (
    <div>
      <button
        className={`lg:px-2 py-1 bg-primary rounded-lg text-white uppercase lg:text-sm ${myClass}`}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
