import React from "react";

/**
 * InterestsList Component
 * 
 * Displays a list of professional interests and areas of passion.
 * This component shows the user's key interests in technology and development.
 * 
 * @component
 * @returns {JSX.Element} A styled card containing a list of interests
 * 
 * @example
 * ```tsx
 * <InterestsList />
 * ```
 */
export default function PasssionList() {
  return (
    <div className="w-[100%] h-[50%] bg-gray-800 rounded-lg flex flex-col justify-center items-center text-white border-4 border-gray-400">
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
