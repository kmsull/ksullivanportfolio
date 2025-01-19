import React from "react";
import profilePicture from "../images/profile.png";
import Image from "next/image";

export default function MyInfoCard() {
  return (
    <div className="w-[50%] h-[50%] bg-gray-800 rounded-lg flex flex-col justify-center items-center text-white border-4 border-gray-400 m-[1%]">
      <div className=" flex justify-center items-center">
        <Image
          src={profilePicture}
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "25%", height: "auto" }}
          className="rounded-full border-4 border-red-500 " // optional
        />
      </div>

      <div className=" text-center mt-[1%] mb-[1%] text-lg font-bold text-white ">
        <h2>Kenneth Sullivan</h2>
      </div>

      <div className="text-center text-white text-md">
        <p>
          Computer Science graduate from the University of Rhode Island.
          Passionate developer focused on innovative solutions and continuous
          learning. Dedicated to mastering new technologies and taking on
          complex challenges.
        </p>
      </div>
    </div>
  );
}
