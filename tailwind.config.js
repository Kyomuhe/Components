/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
	  extend: {
		colors: {
		  'custom-blue': 'var(--blue)',
		  'custom-blue-700': 'var(--blue-700)',
		  'gray-50': 'var(--gray-50)',
		  'gray-200': 'var(--gray-200)',
		  'gray-300':'var(--gray-300)',
		  'gray-800': 'var(--gray-800)',
		  'red-600': 'var(--red-600)',
		  'red-700': 'var(--red-700)',
		  'green-600': 'var(--green-600)',
		  'green-700': 'var(--green-700)',
		  'yellow-500': 'var(--yellow-500)',
		  'yellow-600': 'var(--yellow-600)',
		  'cyan-500':'var(--cyan-500)',
		  'cyan-600': 'var(--cyan-600)',
		  'gray': 'var(--gray)',
		  'grey': 'var(--grey)',





		},
	  },
	},
	plugins: [],
  };