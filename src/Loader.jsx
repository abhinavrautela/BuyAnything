import React from 'react';

function Loader({size}) {
     let mySize = "w-[40%] sm:w-[30%] h-56"
     let myClass = "min-h-screen my-40"
    if(size == "small"){
        mySize = "w-full"
        myClass = "h-max mx-auto"
    }
     if (size == "xs") {
       mySize = "w-full h-48";
       myClass = "w-[20%] mx-auto my-auto";
     }
    return (
       
        <div className={myClass}>
     <img className={mySize + " object-cover mx-auto"} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
       </div>
    );
}

export default Loader;