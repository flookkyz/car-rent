import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    doc,
    deleteDoc,
} from "firebase/firestore";
import moment from "moment";

function Test() {
    const [value, setValue] = useState(0);
    const [addpopup, setAddpopup] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const [form, setForm] = useState({});
    const [data, setData] = useState([]);

    const roitaiRef = collection(db, "coffeedata");

    useEffect(() => {
        const unsubscribe = loadRealtime();
        return () => {
            unsubscribe();
        };
    }, []);

    const loadRealtime = () => {
        const unsubscribe = onSnapshot(roitaiRef, (snapshot) => {
            const newData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(newData);
        });
        return () => {
            unsubscribe();
        };
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            date: moment().format("DD/MM/YYYY"),
            [e.target.name]: e.target.value,
        });
    };
    const handleAddData = async () => {
        await addDoc(roitaiRef, form)
            .then(() => { })
            .catch((err) => console.log(err));
        setAddpopup(false);
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(roitaiRef, id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        let sumvalue = 0;
        data.forEach((element) => {
            sumvalue = sumvalue + Number(element.price);
            setValue(sumvalue);
        });
    }, [data]);
    return (
        <div>

        </div>
    )
}

export default Test
