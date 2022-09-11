import React from "react";

function Button({ onButtonClick, children, myClass }) {
  return (
    <div>
      <button
        className={`lg:px-5 py-1 bg-primary rounded-lg text-white uppercase  sm:text-base tracking-tighter ${myClass}`}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
