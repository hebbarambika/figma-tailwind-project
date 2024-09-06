// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//       <div className="App">
//       <h1 className="text-center text-2xl text-gray-800">Figma Tailwind Design</h1>
//       {/* Add your component code here */}
//     </div>
   
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import TabNavigation from './components/TabNavigation';
import Gallery from './components/Gallery';

function App() {
  return (
    // <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center">
    //   <div className="w-full max-w-4xl flex">
    //     {/* Left empty half */}
    //     <div className="w-1/2"></div>

    //     {/* Right half with two widgets */}
    //     <div className="w-1/2">
    //       <TabNavigation />
    //       <Gallery />
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
  <div className="w-full lg:w-1/2 bg-gray-800 p-5 rounded-md shadow-lg m-4"></div>
  <div className="w-full lg:w-1/2">
    <TabNavigation />
    <Gallery />
  </div>
</div>
  );
}

export default App;
