import React from "react";

function Navbar() {
  return (
    <div className="w-[full] h-[10vh] bg-white flex flex-row justify-between items-center px-[3vw] font-bold">
      <div className="text-blue-600 text-[36px]">CARRENT</div>
      <div className="flex flex-row gap-[2vw] w-[65vw] justify-start text-[16px]">
        <div>
          <a href="/">HOME</a>
        </div>
        <div>
          <a href="/carstock">CAR</a>
        </div>
        {/* <div>SERVICE</div>
        <div>ABOUT ME</div>
        <div>CONTACT</div> */}
      </div>
      <div>
        <a href="/dashboard"> Dashboard</a>
      </div>
    </div>
  );
}

export default Navbar;
