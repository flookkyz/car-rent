import React, { useState, useEffect } from "react";
import DonutChart from "react-donut-chart";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Dashboard() {
  const roitaiRefcrv = collection(db, "crv");
  const roitaiRefgrt = collection(db, "gtr");
  const roitaiRefkoenigsegg = collection(db, "koenigsegg");
  const roitaiRefrollsroyce = collection(db, "rollsroyce");
  const roitaiRefrush = collection(db, "rush");
  const roitaiRefterios = collection(db, "terios");
  const roitaiRefexcite = collection(db, "excite");
  const roitaiRefmgzs = collection(db, "mgzs");
  const [datacrv, setDatacrv] = useState([]);
  const [datagtr, setDatagtr] = useState([]);
  const [datakoenigsegg, setDatakoenigsegg] = useState([]);
  const [datarollsroyce, setDatarollsroyce] = useState([]);
  const [datarush, setDatarush] = useState([]);
  const [dataterios, setDataterios] = useState([]);
  const [dataexcite, setDataexcite] = useState([]);
  const [datamgzs, setDatamgzs] = useState([]);
  const [totalprice, setTotalprice] = useState([]);

  useEffect(() => {
    const unsubscribecrv = loadRealtimecrv();
    const unsubscribegtr = loadRealtimegtr();
    const unsubscribekoenigsegg = loadRealtimekoenigsegg();
    const unsubscriberollsroyce = loadRealtimerollsroyce();
    const unsubscriberush = loadRealtimerush();
    const unsubscribeterios = loadRealtimeterios();
    const unsubscribeexcite = loadRealtimeexcite();
    const unsubscribemgzs = loadRealtimemgzs();
    let price =
      datacrv.length * 80 +
      datagtr.length * 80 +
      datakoenigsegg.length * 99 +
      datarollsroyce.length * 96 +
      datarush.length * 72 +
      dataterios.length * 74 +
      dataexcite.length * 76 +
      datamgzs.length * 80;
    setTotalprice(price);
    return () => {
      unsubscribecrv();
      unsubscribegtr();
      unsubscribekoenigsegg();
      unsubscriberollsroyce();
      unsubscriberush();
      unsubscribeterios();
      unsubscribeexcite();
      unsubscribemgzs();
    };
  }, []);

  const loadRealtimecrv = () => {
    const unsubscribecrv = onSnapshot(roitaiRefcrv, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDatacrv(newData);
    });
    return () => {
      unsubscribecrv();
    };
  };

  const loadRealtimegtr = () => {
    const unsubscribegtr = onSnapshot(roitaiRefgrt, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDatagtr(newData);
    });
    return () => {
      unsubscribegtr();
    };
  };
  const loadRealtimekoenigsegg = () => {
    const unsubscribekoenigsegg = onSnapshot(
      roitaiRefkoenigsegg,
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatakoenigsegg(newData);
      }
    );
    return () => {
      unsubscribekoenigsegg();
    };
  };
  const loadRealtimerollsroyce = () => {
    const unsubscriberollsroyce = onSnapshot(
      roitaiRefrollsroyce,
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDatarollsroyce(newData);
      }
    );
    return () => {
      unsubscriberollsroyce();
    };
  };
  const loadRealtimerush = () => {
    const unsubscriberush = onSnapshot(roitaiRefrush, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDatarush(newData);
    });
    return () => {
      unsubscriberush();
    };
  };
  const loadRealtimeterios = () => {
    const unsubscribeterios = onSnapshot(roitaiRefterios, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataterios(newData);
    });
    return () => {
      unsubscribeterios();
    };
  };
  const loadRealtimeexcite = () => {
    const unsubscribeexcite = onSnapshot(roitaiRefexcite, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataexcite(newData);
    });
    return () => {
      unsubscribeexcite();
    };
  };
  const loadRealtimemgzs = () => {
    const unsubscribemgzs = onSnapshot(roitaiRefmgzs, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDatamgzs(newData);
    });
    return () => {
      unsubscribemgzs();
    };
  };

  return (
    <div className="w-[full] px-[3vw] py-[4vh] bg-zinc-100 flex flex-row justify-between">
      <div className="w-[48%] bg-white rounded-lg flex flex-col justify-center items-center py-[5vw]">
        <DonutChart
          data={[
            {
              label: "CR - V",
              value: datacrv.length,
            },
            {
              label: "Nissan GT - R",
              value: datagtr.length,
            },
            {
              label: "Koenigsegg",
              value: datakoenigsegg.length,
            },
            {
              label: "All New Rush",
              value: datarush.length,
            },
            {
              label: "Rolls - Royce",
              value: datarollsroyce.length,
            },
            {
              label: "Koenigsegg",
              value: dataterios.length,
            },
            {
              label: "MG ZX Excite",
              value: dataexcite.length,
            },
            {
              label: "New MG ZS",
              value: datamgzs.length,
            },
          ]}
          height={300}
          width={450}
        />
      </div>
      <div className="w-[48%] bg-white rounded-lg flex flex-col justify-center items-center">
        <div className="flex items-center mb-[2vw] px-[5vw]">
          <p className="text-[3vw] font-bold mr-[2vw]">Total</p>
          <p className="text-[2vw] font-bold">$ {totalprice}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-[5vw] gap-y-[1vw]">
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">Koenigsegg</p>
            <p className="text-[1.5vw] font-bold">$ {datakoenigsegg.length * 99}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">Nissan GT - R</p>
            <p className="text-[1.5vw] font-bold">$ {datagtr.length * 80}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">CR - V</p>
            <p className="text-[1.5vw] font-bold">$ {datacrv.length * 80}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">Rolls - Royce</p>
            <p className="text-[1.5vw] font-bold">$ {datarollsroyce.length * 96}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">All New Rush</p>
            <p className="text-[1.5vw] font-bold">$ {datarush.length * 72}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">All New Terios</p>
            <p className="text-[1.5vw] font-bold">$ {dataterios.length * 74}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">MG ZX Excite</p>
            <p className="text-[1.5vw] font-bold">$ {dataexcite.length * 76}</p>
          </div>
          <div className="flex items-center w-[18vw] justify-between">
            <p className="text-[1.5vw] font-bold mr-[2vw]">New MG ZS</p>
            <p className="text-[1.5vw] font-bold">$ {datamgzs.length * 80}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
