import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createexe = () => {
  const [userList, setUserList] = useState([]);
  const [exeUser, setExeUser] = useState("");
  const [exeDescription, SetExeDescription] = useState("");
  const [exeDuration, SetExeDuration] = useState("");
  const [exeDate, SetExeDate] = useState(new Date());
  const navigate = useNavigate("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => setUserList(res.data.map((users) => users.userName)))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    if (
      exeUser == "" ||
      exeDescription == "" ||
      exeDuration == "" ||
      exeDate == ""
    ) {
      alert("Enter all the details ...");
    } else {
      const newExercise = {
        userName: exeUser,
        description: exeDescription,
        duration: Number(exeDuration),
        date: new Date(exeDate),
      };
      console.log(newExercise);
      axios
        .post("http://localhost:5000/exercise/add", newExercise)
        .then(() => {
          console.log("Added successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-sky-300 gap-5 p-10 px-12 flex flex-col items-center">
        <h1>Create New Exercise Log</h1>
        <div className="w-full bg-slate-200 rounded-xl p-2">
          <h1>Username : </h1>
          <select
            className="w-full text-black"
            onChange={(e) => setExeUser(e.target.value)}
            value={exeUser}
            defaultValue={userList[0]}
          >
            {userList.map((ele, index) => {
              return (
                <option value={ele} className="text-black">
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full bg-slate-200 rounded-xl p-2">
          <h1>Description : </h1>
          <input
            type="text"
            value={exeDescription}
            onChange={(e) => SetExeDescription(e.target.value)}
          />
        </div>
        <div className="w-full bg-slate-200 rounded-xl p-2">
          <h1>Duration (in minute) : </h1>
          <input
            type="number"
            value={exeDuration}
            onChange={(e) => SetExeDuration(e.target.value)}
          />
        </div>
        <div className="w-full bg-slate-200 rounded-xl p-2">
          <h1>Date : </h1>
          <DatePicker
            selected={exeDate}
            onChange={(newDate) => SetExeDate(newDate)}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-slate-300 px-3 py-2 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createexe;
