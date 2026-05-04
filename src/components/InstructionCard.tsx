import React from 'react';

export const InstructionCard: React.FC = () => (
  <div className="bg-white p-8 rounded-sm shadow-2xl max-w-sm h-fit shrink-0">
    <h3 className="font-bold text-xl mb-4 text-black">For each option,</h3>
    <ul className="space-y-4 text-gray-700 list-disc pl-5 leading-relaxed text-sm font-medium">
      <li>allow user to select the body type and color</li>
      <li>Update the graphic in the center using the provided assets and the user's selection</li>
      <li>Match the design and functionality 1:1</li>
      <li>Add interaction design, good UX with micro animations, hover states, transition animations, etc.</li>
      <li>Basically, the user is able to build a custom avatar choosing their own head, eyes, hair, and the color for each.</li>
    </ul>
  </div>
);
