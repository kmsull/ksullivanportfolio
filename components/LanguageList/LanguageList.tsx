import React from "react";

export default function LanguageList() {
  return (
    <div className="w-full h-auto lg:h-[50%] bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center text-gray-900 dark:text-white border-4 border-gray-400 p-4 lg:p-0">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 font-bold">Technical Skills</h1>
        <div className="space-y-3">
          <div>
            <h2 className="font-semibold text-sm mb-1">Programming Languages:</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Shell</li>
              <li>Matlab</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Frameworks & Tools:</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Ansible</li>
              <li>REST API</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
