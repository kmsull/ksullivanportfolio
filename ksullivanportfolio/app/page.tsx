import Image from "next/image";

export default function Home() {
  return (
    <div className="containerBorder"> 
      <h1>Home</h1>
      <p>Welcome to my portfolio! I am a software engineer with a passion for front-end development. I have experience with React, Next.js, and TypeScript. 
        I am excited to continue to learn and grow as a developer. </p>
      <Image src="/profile.jpg" alt="Picture of me" width={300} height={300} />
    </div>
  );
}
