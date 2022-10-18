import React from 'react';



function PageButton({ children, onClick, className }) {
  return (
    <div>
      <button
        className={`font-poppins text-primary text-xs py-3 px-4 border border-primary hover:text-white hover:bg-primary flex items-center  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default PageButton;