import React, { useState } from "react";
import i1 from '../assets/img1.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Gallery = () => {
    const [images, setImages] = useState([i1]); // Start with i1 image

    const addImage = () => {
        // Add the same image (i1) again
        setImages([...images, i1]);
    };

    const goBack = () => {
        // Logic for the back button
        alert('Going back!');
    };

    const goForward = () => {
        // Logic for the forward button
        alert('Going forward!');
    };

    return (
        <div className='bg-gray-800 text-white p-5 rounded-md shadow-lg m-4'>
            <div className='flex items-center'>
                <button className='bg-black py-2 px-4 rounded-lg mr-4'>
                    Gallery
                </button>
                <button 
                    onClick={addImage} 
                    className='bg-gray-500 py-2 px-4 rounded-lg ml-auto mr-2 shadow-custom-dark'
                >
                    + ADD IMAGE
                </button>
                <div className='flex items-center'>
                    <button 
                        onClick={goBack} 
                        className='bg-gray-900 text-white p-2 rounded-full mr-1'
                    >
                        <ChevronLeftIcon className='h-6 w-6' />
                    </button>
                    <button 
                        onClick={goForward} 
                        className='bg-gray-900 text-white p-2 rounded-full'
                    >
                        <ChevronRightIcon className='h-6 w-6' />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
                {images.map((img, index) => (
                    <div key={index} className="bg-gray-700 w-24 h-24 flex-shrink-0">
                        <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;



// import React, { useState } from "react";
// import i1 from '../assets/img1.jpg';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// const Gallery = () => {
//     const [images, setImages] = useState([i1]); // Start with i1 image

//     const addImage = () => {
//         // Add the same image (i1) again
//         setImages([...images, i1]);
//     };

//     const goBack = () => {
//         // Logic for the back button
//         alert('Going back!');
//     };

//     const goForward = () => {
//         // Logic for the forward button
//         alert('Going forward!');
//     };

//     return (
//         <div className='bg-gray-800 text-white p-5 rounded-md shadow-lg mt-6'>
//             <div className='flex justify-between items-center'>
                
//                 <button className='bg-black py-2 px-4 rounded-lg'>Gallery</button>
//                 <button onClick={addImage} className='bg-gray-500 py-2 px-4 rounded-lg'>
//                     + ADD IMAGE
//                 </button>
// 				<button onClick={goBack} className='bg-gray-900 text-white p-2 rounded-full'>
//                     <ChevronLeftIcon className='h-6 w-6' />
//                 </button>
//                 <button onClick={goForward} className='bg-gray-900 text-white p-2 rounded-full'>
//                     <ChevronRightIcon className='h-6 w-6' />
//                 </button>
//             </div>

//             <div className="flex flex-wrap gap-4 mt-4">
//                 {images.map((img, index) => (
//                     <div key={index} className="bg-gray-700 w-24 h-24 flex-shrink-0">
//                         <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;
