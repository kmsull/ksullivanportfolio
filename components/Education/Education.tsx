import React from "react";

export default function Education() {
  return (
    <div className="w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center text-gray-900 dark:text-white border-4 border-gray-400 p-4">
      <div className="flex flex-col justify-center w-full max-w-md">
        <h1 className="mb-3 font-bold text-lg">Education</h1>
        <div className="space-y-2">
          <h2 className="font-semibold">University of Rhode Island</h2>
          <p className="text-sm">Bachelor of Science in Computer Science</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Graduated: 2024</p>
          <div className="mt-2">
            <p className="text-sm font-semibold">Relevant Coursework:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Data Structures & Algorithms</li>
              <li>Software Engineering</li>
              <li>Database Management Systems</li>
              <li>Web Development</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
