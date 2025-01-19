"use client";
import HeaderInfo from "@/constants/HeaderInfo/HeaderInfo";
import profilePicture from "../constants/images/profile.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderInfo />
      <div className="flex flex-row">
        <div className="w-[10%]"></div>
        <div className="containerBorder py-[5%] w-[80%] flex flex-row space-x-[20%] justify-center">
          <div className="p-4 containerBorder">
            <Image
              src={profilePicture}
              alt="Picture of me"
              className="rounded-full"
              width={250}
            />
          </div>
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
}
