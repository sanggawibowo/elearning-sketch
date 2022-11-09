import React from "react";


function NavbarOption({ onClick, text}) {
  return (
    <div 
      onClick={onClick} 
      className= {`
        px-2 py-4 text-sm font-semibold bg-white
        flex flex-row rounded-xl items-center cursor-pointer 
        hover:bg-gray-400 hover:scale-110 transition 
        ease-out 
        `}>
        <h2 className='pl-1'>{text}</h2>
    </div>
  );
}

export default NavbarOption;
