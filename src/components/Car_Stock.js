import React from "react";
import koenigsegg from "../pic/koenigsegg.png";
import gtr from "../pic/gtr.png";
import rollsroyce from "../pic/rollsroyce.png";
import rush from "../pic/rush.png";
import terios from "../pic/terios.png";
import crv from "../pic/crv.png";
import excite from "../pic/excite.png";
import mgzs from "../pic/mgzs.png";
import gas from "../pic/gas.png";
import gear from "../pic/gear.png";
import profile2 from "../pic/profile-2user.png";

function Car_Stock() {
  const popcar_data = [
    {
      name: "koenigsegg",
      namecar: "koenigsegg",
      typecar: "Spot",
      piccar: "s",
      oiltank: "90",
      gear: "Manual",
      people: "2",
      price: 99,
      pic: koenigsegg,
    },
    {
      name: "gtr",
      namecar: "Nissan GT - R",
      typecar: "Spot",
      piccar: "s",
      oiltank: "80",
      gear: "Manual",
      people: "2",
      price: 80,
      pic: gtr,
    },
    {
      name: "rollsroyce",
      namecar: "Rolls - Royce",
      typecar: "Sedan",
      piccar: "s",
      oiltank: "70",
      gear: "Manual",
      people: "4",
      price: 96,
      pic: rollsroyce,
    },
    {
      name: "rush",
      namecar: "All New Rush",
      typecar: "SUV",
      piccar: "s",
      oiltank: "70",
      gear: "Manual",
      people: "6",
      price: 72,
      pic: rush,
    },
    {
      name: "terios",
      namecar: "All New Terios",
      typecar: "SUV",
      piccar: "s",
      oiltank: "90",
      gear: "Manual",
      people: "6",
      price: 74,
      pic: terios,
    },
    {
      name: "excite",
      namecar: "MG ZX Excite",
      typecar: "Hatchback",
      piccar: "s",
      oiltank: "90",
      gear: "Manual",
      people: "4",
      price: 74,
      pic: excite,
    },
    {
      name: "mgzs",
      namecar: "New MG ZS",
      typecar: "SUV",
      piccar: "s",
      oiltank: "80",
      gear: "Manual",
      people: "6",
      price: 80,
      pic: mgzs,
    },
    {
      name: "crv",
      namecar: "CR - V",
      typecar: "SUV",
      piccar: "s",
      oiltank: "80",
      gear: "Manual",
      people: "6",
      price: 80,
      pic: crv,
    },
  ];
  return (
    <div className="w-[full] bg-zinc-100 flex flex-row">
      <div className="bg-white w-[15vw] h-[190vh] mt-[2px] px-[1vw] py-[2vh] flex flex-col justify-start font-bold">
        <div className="flex flex-col justify-between h-[30vh] ">
          <p className="text-zinc-500 text-sm">TYPE</p>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">Sport</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">SUV</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">MPV</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">Sedan</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">Coupe</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">Hatchback</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[20vh] mt-[5vh]">
          <p className="text-zinc-500 text-sm">CAPACITY</p>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">2 Person</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">4 Person</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">6 Person</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" /> <p className="ml-[10px]">8 or More</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[85vw]">
        <div className="grid grid-cols-3 gap-x-[5vw] gap-y-[2vw] w-[60vw] h-[full] mt-[2px]">
          {typeof popcar_data !== "undefined" && Array.isArray(popcar_data)
            ? popcar_data.map((items, index) => (
                <>
                  <div className="bg-white w-[20vw] rounded-[10px] flex flex-col px-[1vw] py-[2vw]">
                    <p className="font-bold text-[18px]">{items.namecar}</p>
                    <p className="text-zinc-500">{items.typecar}</p>
                    <img className="py-[4vw]" src={items.pic} />
                    <div className="flex flex-row justify-between text-zinc-500 py-[2vw]">
                      <div className="flex flex-row">
                        <img src={gas} />
                        <p>{items.oiltank}L</p>
                      </div>
                      <div className="flex flex-row">
                        <img src={gear} />
                        <p>{items.gear}</p>
                      </div>
                      <div className="flex flex-row">
                        <img src={profile2} />
                        <p>{items.people} People</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row">
                        <p>${items.price}</p>/
                        <p className="text-zinc-500 ml-2">day</p>
                      </div>
                      <button className="bg-blue-600 px-[1vw] py-[1vh] rounded-[10px] text-white">
                        <a href={`/payment/${items.name}`}>Rent Now</a>
                      </button>
                    </div>
                  </div>
                </>
              ))
            : void 0}
        </div>
        <div className="my-[2vh] text-white flex flex-row items-center font-bold">
          <button className="bg-blue-600 w-[2vw] h-[2vw] rounded-full">
            &lt;
          </button>
          <p className="text-black mx-[1vw] text-xl">1</p>
          <button className="bg-blue-600 w-[2vw] h-[2vw] rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car_Stock;
