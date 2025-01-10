import Image from "next/image";
import profilePicture from '../constants/images/profile.png'

export default function Home() {
  return (
    <div> 
      <div className="containerBorder px-[15%] py-[10%] flex flex-row  justify-content-center items-center">
      <Image src={profilePicture}
       alt="Picture of me"
        width={150} height={150}
        className="rounded-full" />
        <div className="ml-16">
          <h1 className="text-4xl "> Kenneth Sullivan </h1>
          <h1 className="mt-3 text-gray-400">Computer Science, BA</h1>
          <h1 className="mt-3 text-gray-400">University of Rhode Island</h1>
        </div>
      </div>
        <div className="containerBorder px-40 py-20 flex flex-row  justify-content-center items-center">
          
        </div>
    </div>
  );
}
