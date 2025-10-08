import React from "react";

export default function Projects() {
  return (
    <div className="w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center text-gray-900 dark:text-white border-4 border-gray-400 p-4">
      <div className="flex flex-col justify-center w-full">
        <h1 className="mb-3 font-bold text-lg">Featured Projects</h1>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-3">
            <h2 className="font-semibold">Personal Portfolio Website</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Built with Next.js, React, and Tailwind CSS. Features dark mode
              toggle, responsive design, and modern UI components.
            </p>
            <p className="text-xs mt-1">
              <strong>Tech:</strong> Next.js, React, TypeScript, Tailwind CSS
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h2 className="font-semibold">Automation Testing Framework</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Developed automated testing solutions using Ansible and Python
              to streamline deployment and quality assurance processes.
            </p>
            <p className="text-xs mt-1">
              <strong>Tech:</strong> Python, Ansible, Shell Scripting
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-3">
            <h2 className="font-semibold">Game Development Projects</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Created interactive games using Unity and C#, implementing game
              mechanics, physics, and user interfaces.
            </p>
            <p className="text-xs mt-1">
              <strong>Tech:</strong> C#, Unity, Game Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
