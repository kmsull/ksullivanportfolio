import React from "react";

/**
 * LanguageList Component
 * 
 * Displays a comprehensive list of programming languages, frameworks, and technical skills.
 * Shows the user's technical expertise and proficiency across various technologies.
 * 
 * @component
 * @returns {JSX.Element} A styled card containing a list of technical skills
 * 
 * @example
 * ```tsx
 * <LanguageList />
 * ```
 */
export default function LanguageList() {
  return (
    <div className="w-[100%] h-[50%] bg-gray-800 rounded-lg flex flex-col justify-center items-center text-white border-4 border-gray-400">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4">Languages/Skills:</h1>
        <ul className="list-disc">
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>SQL</li>
          <li>C#</li>
          <li>Shell</li>
          <li>Matlab</li>
          <li>SQL</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Ansible</li>
          <li>API</li>
        </ul>
      </div>
    </div>
  );
}
