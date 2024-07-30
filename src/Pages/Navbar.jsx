import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-slate-800 text-white flex gap-5 px-10 py-2.5">
      <div>
        <Link to="/">
          <h1>ExcerTracker</h1>
        </Link>
      </div>
      <div>
        <Link to="/allexercises">
          <h1>Exercises</h1>
        </Link>
      </div>
      <div>
        <Link to="/create">
          <h1>Create Exercise Log</h1>
        </Link>
      </div>
      <div>
        <Link to="/user">
          <h1>Create User</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
