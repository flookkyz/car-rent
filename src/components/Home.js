/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import swap from "../pic/Swap.png";
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
function Home() {
  const popcar_data = [
    {
      name: "koenigsegg",
      namecar: "Koenigsegg",
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
  ];
  const recomcar_data = [
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
      name: "koenigsegg",
      namecar: "Koenigsegg",
      typecar: "Spot",
      piccar: "s",
      oiltank: "90",
      gear: "Manual",
      people: "2",
      price: 99,
      pic: koenigsegg,
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
  ];
  return (
    <div className="w-[full] px-[3vw] py-[4vh] bg-zinc-100">
      <div className="flex flex-row justify-center gap-[5vw] mb-[30px]">
        <div className="bg-sky-300 p-[3vw] w-[50vw] h-[50vh] rounded-[10px] text-white">
          <p className="font-bold text-[36px] mb-[10px]">
            The Best Platform <br />
            for Car Rental
          </p>
          <p className="text-[18px]">
            Ease of doing a car rental safely and
            <br /> reliably. Of course at a low price.
          </p>
          <button className="px-[1vw] py-[1vh] bg-blue-600 rounded-[10px] mt-[2vw]">
            <a href="/carstock">Rental Car</a>
          </button>
          <img className="flex justify-center ml-[12vw]" src={koenigsegg} />
        </div>
        <div className="bg-blue-600 p-[3vw] w-[50vw] h-[50vh] rounded-[10px] text-white">
          <p className="font-bold text-[36px] mb-[10px]">
            Easy way to rent a<br /> car at a low price
          </p>
          <p className="text-[18px]">
            Providing cheap car rental services
            <br /> and safe and comfortable facilities.
          </p>
          <button className="px-[1vw] py-[1vh] bg-sky-300 rounded-[10px] mt-[2vw]">
            <a href="/carstock">Rental Car</a>
          </button>
          <img className="flex justify-center ml-[15vw]" src={gtr} />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-[5vw] mb-[30px]">
        <div className="bg-white p-[1vw] w-[40vw] rounded-[10px] font-bold">
          <div className="flex flex-row items-center">
            <div className="w-[15px] h-[15px] bg-blue-600 rounded-full border-4 border-blue-300 mr-2"></div>
            <p>Pick - Up</p>
          </div>
          <div class="grid grid-cols-3 divide-x mt-4">
            <div>Locations</div>
            <div className="px-[1vw]">Date</div>
            <div className="px-[1vw]">Time</div>
          </div>
        </div>
        <div className="bg-blue-600 w-[3vw] h-[3vw] rounded-[10px] flex justify-center items-center">
          {" "}
          <img src={swap} />{" "}
        </div>
        <div className="bg-white p-[1vw] w-[40vw] rounded-[10px] font-bold">
          <div className="flex flex-row items-center">
            <div className="w-[15px] h-[15px] bg-sky-400 rounded-full border-4 border-sky-200 mr-2"></div>
            <p>Drop - Off</p>
          </div>
          <div class="grid grid-cols-3 divide-x mt-4">
            <div>Locations</div>
            <div className="px-[1vw]">Date</div>
            <div className="px-[1vw]">Time</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-[3vw] mb-[1vw]">
        <p>Popular Car</p>
        <p className="text-blue-600 font-bold">View All</p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-[5vw] gap-y-[2vw]">
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
                        <a href={`/rent/${items.name}`}>Rent Now</a>
                      </button>
                    </div>
                  </div>
                </>
              ))
            : void 0}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-[3vw] mb-[1vw]">
        <p>Recomendation Car</p>
        <p className="text-blue-600 font-bold">View All</p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-[5vw] gap-y-[2vw]">
          {typeof recomcar_data !== "undefined" && Array.isArray(recomcar_data)
            ? recomcar_data.map((items, index) => (
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
                        <a href={`/rent/${items.name}`}>Rent Now</a>
                      </button>
                    </div>
                  </div>
                </>
              ))
            : void 0}
        </div>
      </div>
    </div>
  );
}

export default Home;
