import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Usercreate = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mern-project-2-q9pc.onrender.com/user")
      .then(() => {
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    if (username != "") {
      const newUser = { userName: username };
      axios
        .post("https://mern-project-2-q9pc.onrender.com/user/add", newUser)
        .then(() => console.log("Successfully added"))
        .catch((err) => console.log(err));
      navigate("/");
    } else {
      alert("Please enter a the name");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isloading ? (
        <Loading />
      ) : (
        <div className="bg-sky-200 px-10 py-10 flex flex-col items-center gap-10 rounded-3xl">
          <h1 className="text-2xl font-bold">Create Users</h1>
          <div className="flex gap-4">
            <label>Enter User name :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-sky-600 text-white px-5 py-2 rounded-xl"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usercreate;
