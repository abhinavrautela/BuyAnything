import React from 'react';

function Pic({img}) {
    return (

          <img className="w-72 h-72 sm:h-96 sm:w-96 object-cover border-2 p-1" src={img} alt="/"/>
   
  );
}

export default Pic;