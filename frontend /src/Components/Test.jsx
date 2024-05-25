// Test.jsx
// import React from 'react';

// const Test = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="max-w-full bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Welcome</h1>
//         <p className="text-gray-700">
//           This is a container with a maximum width of 28rem, 
//           making it suitable for content that needs to be 
//           constrained to a medium width.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React from 'react';

// const Test = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Welcome</h1>
//         <p className="text-gray-700">
//           This is a container with a maximum width of 28rem, making it suitable for content that needs to be constrained to a medium width.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React from 'react';

// const Test = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Welcome</h1>
//         <p className="text-gray-700 mb-4">
//           This is a container with a maximum width of 28rem, making it suitable for content that needs to be constrained to a medium width.
//         </p>
//         <button className="w-fit bg-blue-500 text-white py-2 px-4 rounded">
//           Click Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Test;

import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

const Test = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="group flex items-center bg-white p-6 rounded-lg shadow-md">
        <span className="mr-4 text-xl">Hover over me</span>
        <span className="transform transition-transform group-hover:rotate-90 duration-300">
          <RiArrowRightSLine size={25} />
        </span>
      </div>
    </div>
  );
};

export default Test;
