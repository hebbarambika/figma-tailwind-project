// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
		  boxShadow: {
			'custom-light': '0px 4px 6px rgba(0, 0, 0, 0.1)',
			'custom-dark': '0px 4px 6px rgba(0, 0, 0.8, 0.8)',
			// Add more custom shadows here
		  },
		},
	  },
	plugins: [],
};
