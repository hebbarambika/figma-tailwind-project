// src/components/TabNavigation.js
// import React, { useState } from "react";
// import AboutMe from "./AboutMe";
// import Experiences from "./Experiences";
// import Recommended from "./Recommended";

// const TabNavigation = () => {
// 	const [activeTab, setActiveTab] = useState("about");

// 	return (
// 		<div className='bg-gray-800 text-white p-5 rounded-md shadow-lg'>
// 			<div className=' bg-black flex items-center space-x-4 mb-4 rounded-xl'>
// 				<button
// 					className={`py-2 px-4 rounded-xl ${
// 						activeTab === "about" ? "bg-gray-900" : "bg-gray-700"
// 					}`}
// 					onClick={() => setActiveTab("about")}
// 				>
// 					About Me
// 				</button>
// 				<button
// 					className={`py-2 px-4 rounded-xl ${
// 						activeTab === "experiences" ? "bg-gray-900" : "bg-gray-700"
// 					}`}
// 					onClick={() => setActiveTab("experiences")}
// 				>
// 					Experiences
// 				</button>
// 				<button
// 					className={`py-2 px-4 rounded-xl ${
// 						activeTab === "recommended" ? "bg-gray-900" : "bg-gray-700"
// 					}`}
// 					onClick={() => setActiveTab("recommended")}
// 				>
// 					Recommended
// 				</button>
// 			</div>

// 			<div>
// 				{activeTab === "about" && <AboutMe />}
// 				{activeTab === "experiences" && <Experiences />}
// 				{activeTab === "recommended" && <Recommended />}
// 			</div>
// 		</div>
// 	);
// };

// export default TabNavigation;





import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className='bg-gray-800 text-white p-5 rounded-md shadow-lg m-4'>
            <div className='bg-black flex items-center justify-center w-auto mx-auto mb-4 rounded-xl p-1'>
                <button
                    className={`py-2 px-8 rounded-xl ${
                        activeTab === "about" ? "bg-gray-900" : "bg-gray-700"
                    }`}
                    onClick={() => setActiveTab("about")}
                >
                    About Me
                </button>
                <button
                    className={`py-2 px-8 rounded-xl mx-4 ${
                        activeTab === "experiences" ? "bg-gray-900" : "bg-gray-700"
                    }`}
                    onClick={() => setActiveTab("experiences")}
                >
                    Experiences
                </button>
                <button
                    className={`py-2 px-8 rounded-xl ${
                        activeTab === "recommended" ? "bg-gray-900" : "bg-gray-700"
                    }`}
                    onClick={() => setActiveTab("recommended")}
                >
                    Recommended
                </button>
            </div>

            <div>
                {activeTab === "about" && <AboutMe />}
                {activeTab === "experiences" && <Experiences />}
                {activeTab === "recommended" && <Recommended />}
            </div>
        </div>
    );
};

export default TabNavigation;
