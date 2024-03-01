/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import koenigsegg from "../pic/koenigsegg.png";
import gtr from "../pic/gtr.png";
import rollsroyce from "../pic/rollsroyce.png";
import rush from "../pic/rush.png";
import terios from "../pic/terios.png";
import crv from "../pic/crv.png";
import excite from "../pic/excite.png";
import mgzs from "../pic/mgzs.png";

function Rent() {
  let { id } = useParams();
  const [carpic, setCarpic] = useState();
  const [cardata, setCardata] = useState({});

  useEffect(() => {
    if (id === "gtr") {
      setCarpic(gtr);
      setCardata({
        name: "gtr",
        namecar: "Nissan GT - R",
        typecar: "Spot",
        piccar: "s",
        oiltank: "80",
        gear: "Manual",
        people: "2",
        price: 80,
        pic: gtr,
      });
    }
    if (id === "koenigsegg") {
      setCarpic(koenigsegg);
      setCardata({
        name: "koenigsegg",
        namecar: "Koenigsegg",
        typecar: "Spot",
        piccar: "s",
        oiltank: "90",
        gear: "Manual",
        people: "2",
        price: 99,
        pic: koenigsegg,
      });
    }
    if (id === "rollsroyce") {
      setCarpic(rollsroyce);
      setCardata({
        name: "rollsroyce",
        namecar: "Rolls - Royce",
        typecar: "Sedan",
        piccar: "s",
        oiltank: "70",
        gear: "Manual",
        people: "4",
        price: 96,
        pic: rollsroyce,
      });
    }
    if (id === "rush") {
      setCarpic(rush);
      setCardata({
        name: "rush",
        namecar: "All New Rush",
        typecar: "SUV",
        piccar: "s",
        oiltank: "70",
        gear: "Manual",
        people: "6",
        price: 72,
        pic: rush,
      });
    }
    if (id === "terios") {
      setCarpic(terios);
      setCardata({
        name: "terios",
        namecar: "All New Terios",
        typecar: "SUV",
        piccar: "s",
        oiltank: "90",
        gear: "Manual",
        people: "6",
        price: 74,
        pic: terios,
      });
    }
    if (id === "crv") {
      setCarpic(crv);
      setCardata({
        name: "crv",
        namecar: "CR - V",
        typecar: "SUV",
        piccar: "s",
        oiltank: "80",
        gear: "Manual",
        people: "6",
        price: 80,
        pic: crv,
      });
    }
    if (id === "excite") {
      setCarpic(excite);
      setCardata({
        name: "excite",
        namecar: "MG ZX Excite",
        typecar: "Hatchback",
        piccar: "s",
        oiltank: "90",
        gear: "Manual",
        people: "4",
        price: 74,
        pic: excite,
      });
    }
    if (id === "mgzs") {
      setCarpic(mgzs);
      setCardata({
        name: "mgzs",
        namecar: "New MG ZS",
        typecar: "SUV",
        piccar: "s",
        oiltank: "80",
        gear: "Manual",
        people: "6",
        price: 80,
        pic: mgzs,
      });
    }
    console.log(carpic);
  }, [id]);

  return (
    <>
      <div className="w-[full] h-[full] flex justify-center bg-zinc-100 py-[4vh]">
        <div className="flex flex-row gap-[5vw]">
          <div className="w-[40vw] h-[30vw] bg-blue-600 rounded-[10px] flex flex-col p-[2vw] text-white">
            <p className="font-bold text-[24px]">
              Sports car with the best <br /> design and acceleration
            </p>
            <p className="mt-[1vw]">
              Safety and comfort while driving a <br /> futuristic and elegant
              sports car
            </p>
            <div className="flex justify-center mt-[3vw]">
              <img className="w-[30vw]" src={carpic} />
            </div>
          </div>
          <div className="w-[40vw] h-[30vw] bg-white rounded-[10px] p-[2vw] flex flex-col">
            <p className="font-bold text-[24px]">{cardata.namecar}</p>
            <p className="mt-[1vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <div className="flex flex-row justify-between w-[100%] mt-[2vw]">
              <p className="text-zinc-400 w-[15%] text-start">TypeCar</p>
              <p className="w-[15%] text-end">{cardata.typecar}</p>
              <p className="text-zinc-400 w-[15%] text-start">Capacity</p>
              <p className="w-[15%] text-end">{cardata.people} Person</p>
            </div>
            <div className="flex flex-row justify-between w-[100%] mt-[2vw]">
              <p className="text-zinc-400 w-[15%] text-start">Steering</p>
              <p className="w-[15%] text-end">{cardata.gear}</p>
              <p className="text-zinc-400 w-[15%] text-start">Gasoiline</p>
              <p className="w-[15%] text-end">{cardata.oiltank} L</p>
            </div>
            <div className="flex flex-row justify-between mt-[7vw]">
              <div>${cardata.price}.00/days</div>
              <div>
                <button className="bg-blue-600 py-[1vw] px-[2vw] text-white rounded-[10px]">
                  <a href={`/payment/${id}`}>Rent Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rent;
