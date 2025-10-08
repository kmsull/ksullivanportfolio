import React from "react";
import profilePicture from "../images/profile.png";
import Image from "next/image";

export default function MyInfoCard() {
  return (
    <div className="w-full lg:w-[50%] h-auto lg:h-[50%] bg-gray-100 dark:bg-gray-800 rounded-2xl flex flex-col justify-center items-center text-gray-900 dark:text-white border-4 border-gray-400 p-4 lg:p-0">
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

      <div className=" text-center mt-[1%] mb-[1%] text-lg font-bold text-gray-900 dark:text-white ">
        <h2>Kenneth Sullivan</h2>
      </div>

      <div className="text-center text-gray-900 dark:text-white text-md px-4 lg:px-0 max-w-md">
        <p className="mb-2">
          Computer Science graduate from the University of Rhode Island.
          Passionate full-stack developer with expertise in web development,
          automation, and game development. Experienced in building scalable
          applications using modern frameworks and technologies.
        </p>
        <p className="text-sm mt-3">
          <strong>📧 Email:</strong> kenneth_sullivan@uri.edu
        </p>
        <p className="text-sm">
          <strong>📍 Location:</strong> Rhode Island, USA
        </p>
      </div>
    </div>
  );
}
