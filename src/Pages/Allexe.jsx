import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Allexe = () => {
  const [allExe, setAllExe] = useState([]);
  const [deletedside, setDeleteside] = useState(false);
  const [deletepage, setDeletdpage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercise")
      .then((res) => {
        setAllExe(res.data);
        console.log(allExe);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    setDeleteside(true);
    setDeletdpage(id);
  };

  const handleDeleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercise/${id}`).then(() => {
      console.log("Deleted Successfully").catch((err) => console.log(err));
    });
    setDeleteside(false);
    window.location.reload();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-5">
        {allExe.map((exe, index) => {
          return (
            <div key={index} className="bg-sky-300 rounded-2xl p-5">
              <h1 className="font-bold text-xl">{exe.userName}</h1>
              <div className="w-full min-h-[2.5px] my-2 bg-white"></div>
              <div className="flex gap-3">
                <h1 className="font-bold">Description : </h1>
                <h1>{exe.description}</h1>
              </div>
              <div className="flex gap-3">
                <h1 className="font-bold">Duration : </h1>
                <h1>{exe.duration}</h1>
              </div>
              <div className="flex gap-3">
                <h1 className="font-bold">Date : </h1>
                <h1>{new Date(exe.date).toDateString()}</h1>
              </div>
              <div className="w-full flex justify-center gap-4 mt-5">
                <Link to={`/edit/${exe._id}`}>
                  <button>Edit</button>
                </Link>
                <h1>|</h1>
                <button onClick={() => handleDelete(exe._id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      {deletedside ? (
        <div className="absolute w-screen h-screen flex justify-center items-center bg-slate-500/50">
          <div className="bg-white px-4 py-5 rounded-xl">
            <h1>Are you want to deleted this ?</h1>
            <div className="w-full flex py-4 justify-center gap-4">
              <button
                onClick={() => handleDeleteExercise(deletepage)}
                className="bg-red-400 rounded-lg p-2"
              >
                Yes I'do
              </button>
              <button
                onClick={() => setDeleteside(false)}
                className="bg-sky-400 rounded-lg p-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Allexe;
