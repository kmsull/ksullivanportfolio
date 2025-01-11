"use client";
import Image from "next/image";
import profilePicture from '../constants/images/profile.png'
import InfoCard from "@/constants/infoCard";


export default function Home() {
  return (
    <div> 
      <div className="containerBorder px-[10%] py-[5%] flex flex-row  justify-content-center items-center">
      <Image src={profilePicture}
       alt="Picture of me"
        width={150} height={150}
        className="rounded-full" />
        <div className="ml-[5%]">
          <h1 className="text-4xl "> Kenneth Sullivan </h1>
          <h1 className="mt-3 text-gray-400">Computer Science, BA</h1>
          <h1 className="mt-3 text-gray-400">University of Rhode Island</h1>
        </div>
      </div>
        <div className="containerBorder px-40 py-20 flex flex-row space-x-8 place-content-center justify-content-center items-center">
            <InfoCard title="Project 1" content="wow!"/>
            <InfoCard title="Project 2" content="wow!"/>
            <InfoCard title="Project 3" content="wow!"/>
        </div>
    </div>
  );
}
