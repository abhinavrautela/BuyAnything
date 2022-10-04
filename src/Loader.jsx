import React, { memo } from 'react';
function Loader({size}) {
     let mySize = "w-[40%] sm:w-[30%] h-56"
     let myClass = "min-h-screen my-40"
    if(size == "small"){
        mySize = "w-full "
        myClass = "h-96 flex items-center lg:block lg:h-max lg:mx-auto "
    }
     if (size == "xs") {
       mySize = "w-full h-48";
       myClass = "w-[20%] mx-auto my-auto ";
     }
     if (size == "full"){
      myClass="h-screen bg-gray-100 justify-center bg-gray-50"
      mySize = "w-[40%] sm:w-[30%] pt-56";
     }
    return (
       
        <div className={myClass }>
     <img className={mySize + " object-cover mx-auto"} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
       </div>
    );
}

export default memo(Loader);