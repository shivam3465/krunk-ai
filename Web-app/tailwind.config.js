/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"background-gradient":
					"linear-gradient(150deg, #e6eeff 0%, #e6eeff 60%, white 93%)",
        "chat-gradient": "linear-gradient(90deg, #e6eeff 0%, #e6eeff 50%, #fafcff 100%)",
			},
			fontFamily: {				
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
