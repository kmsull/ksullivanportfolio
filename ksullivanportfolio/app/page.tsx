import Image from "next/image";
import profilePicture from '../constants/images/profile.png'
<meta name="viewport" content="width=device-width, initial-scale=1.0">

export default function Home() {
  return (
    <div> 
      <div className="containerBorder px-[10%] py-[5%] flex flex-row  justify-content-center items-center">
      <Image src={profilePicture}
       alt="Picture of me"
        className="rounded-full w-150 h-150 sm:w-50 sm:h-50 md:w-100 md:h-100" />
        <div className="ml-[5%]">
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
