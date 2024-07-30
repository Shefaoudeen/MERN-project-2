import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Loading = () => {
  useGSAP(() => {
    gsap.to("#ring", {
      rotate: 360,
      repeat: -1,
      duration: 2,
      ease: "sine",
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div
          id="ring"
          className="mb-10 max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] border-4 border-t-sky-400 rounded-full"
        ></div>
      </div>
      <h1>Wait for few minutes to fetch the details from cloud server...</h1>
    </div>
  );
};

export default Loading;
