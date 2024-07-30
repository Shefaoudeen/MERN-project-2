import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Editexercise = () => {
  const [exeDetail, setExeDetail] = useState({});
  const [userName, setUserName] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mern-project-2-q9pc.onrender.com/exercise/${id}`)
      .then((res) => {
        setExeDetail();
        console.log("testing");
        setUserName(res.data.userName);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(res.data.date);
        console.log(exeDetail);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    const edited = {
      userName: userName,
      description: description,
      duration: Number(duration),
      date: new Date(date),
    };
    axios
      .post(
        `https://mern-project-2-q9pc.onrender.com/exercise/update/${id}`,
        edited
      )
      .then(() => console.log("Editted successfully"))
      .catch((err) => {
        console.log(err);
      });
    navigate("/allexercises");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-5">
        <div className="bg-sky-300 rounded-2xl p-5 flex flex-col gap-5">
          <div className="flex gap-5">
            <h1 className="font-bold text-2xl">Username :</h1>
            <input
              className="font-bold text-xl"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-full min-h-[2.5px] my-2 bg-white"></div>
          <div className="flex gap-3">
            <h1 className="font-bold">Description : </h1>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <h1 className="font-bold">Duration : </h1>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <h1 className="font-bold">Date : </h1>
            <DatePicker
              selected={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-slate-300 p-2 rounded-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editexercise;
