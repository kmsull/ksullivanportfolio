import React from "react";

export default function PasssionList() {
  return (
    <div className="w-full h-auto lg:h-[50%] bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center text-gray-900 dark:text-white border-4 border-gray-400 p-4 lg:p-0">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4">Interests:</h1>
        <ul className="list-disc">
          <li>Web/App Development</li>
          <li>Video Game Development</li>
          <li>Automation Design and Testing</li>
        </ul>
      </div>
    </div>
  );
}
