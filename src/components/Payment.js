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
import star from "../pic/star.png";
import starempy from "../pic/start-empy.png";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import moment from "moment";
import Swal from "sweetalert2";

function Payment() {
  const [paymentdata, setPaymentdata] = useState({});
  let { id } = useParams();
  const [carpic, setCarpic] = useState();
  const [cardata, setCardata] = useState({});
  const collections = collection(db, id);
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
  const handleChange = (e) => {
    setPaymentdata({
      ...paymentdata,
      date: moment().format("DD/MM/YYYY"),
      [e.target.name]: e.target.value,
    });
  };
  const handleAddData = async () => {
    await addDoc(collections, paymentdata)
      .then(() => {})
      .catch((err) => console.log(err));
    Swal.fire({
      title: "Success !!",
      icon: "success",
    });
  };

  return (
    <div className="w-[full] py-[4vh] px-[3vw] bg-zinc-100 flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="bg-white w-[60vw] h-[full] rounded-[10px] flex flex-col p-[1vw]">
          <p className="font-bold">Billing Info</p>
          <div className="flex flex-row justify-between text-zinc-400 mt-[5px]">
            <p>Please enter your billing info</p>
            <p>Step 1 of 3</p>
          </div>
          <div className="flex flex-row justify-between mt-[10px]">
            <div>
              <p className="mb-[0.3vw] font-bold">Name</p>
              <input
                name="name"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <p className="mb-[0.3vw] font-bold">Phone Number</p>
              <input
                name="phone"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[2vw]">
            <div>
              <p className="mb-[0.3vw] font-bold">Address</p>
              <input
                name="address"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Address"
              />
            </div>
            <div>
              <p className="mb-[0.3vw] font-bold">Town / City</p>
              <input
                name="town"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Town or city"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-[60vw] h-[full] rounded-[10px] flex flex-col p-[1vw] mt-[2vw]">
          <p className="font-bold">Rental Info</p>
          <div className="flex flex-row justify-between text-zinc-400 mt-[5px]">
            <p>Please select your rental date</p>
            <p>Step 2 of 3</p>
          </div>
          <div className="flex flex-row justify-between mt-[10px]">
            <div>
              <p className="mb-[0.3vw] font-bold">Locations</p>
              <input
                name="pickup_location"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Locations"
              />
            </div>
            <div>
              <p className="mb-[0.3vw] font-bold">Date</p>
              <input
                name="pickup_date"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="date"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[2vw]">
            <div>
              <p className="mb-[0.3vw] font-bold">Time</p>
              <input
                name="pickup_time"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="time"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[3vw]">
            <div>
              <p className="mb-[0.3vw] font-bold">Locations</p>
              <input
                name="dropoff_location"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <p className="mb-[0.3vw] font-bold">Date</p>
              <input
                name="dropoff_date"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-[2vw]">
            <div>
              <p className="mb-[0.3vw] font-bold">Time</p>
              <input
                name="dropoff_time"
                onChange={(e) => handleChange(e)}
                className="border-none bg-zinc-100 rounded-lg py-[0.6vw] px-[1vw] w-[26vw]"
                placeholder="Address"
              />
            </div>
            <button
              onClick={() => handleAddData()}
              className="px-[1vw] py-[1vh] bg-sky-300 rounded-[10px] mt-[2vw]"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-[30vw] h-[50vh] rounded-[10px] divide-y flex flex-col px-[2vw] py-[1vw]">
        <div className="mb-[1vw]">
          <p className="font-bold text-[1.2vw] mb-[10px]">Rental Summary</p>
          <p className="text-zinc-400">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex flex-row items-center mt-[2vw]">
            <div className="bg-blue-600 px-[1vw] py-[3vw] rounded-[10px]">
              {" "}
              <img className="w-[10vw]" src={carpic} />
            </div>
            <div className="flex flex-col ml-[1vw]">
              <p className="font-bold text-[1.5vw] mb-[10px]">{cardata.namecar}</p>
              <div className="flex flex-row gap-[2px]">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starempy} />
                <p className="text-zinc-400 ml-[0.5vw]">440+ Reviewer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[1vw] flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>${cardata.price}.00</p>
          </div>
          <div className="mt-[1vw] flex flex-row justify-between">
            <p>Tax</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
