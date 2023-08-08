/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brightBlue: "#3A7CFD",
				cyan: "#57DDFF",
				purple: "#C058F3",
				oval: "#E3E4F1",
        footerText: "#9495A5",
				light: {
					text: "hsl(235, 21%, 11%)",
					bodyBackground: "hsl(0, 0%, 98%)",
					todoBackground: "hsl(236, 33%, 92%)",
					todoBorder: "hsl(233, 11%, 84%)",
					checkboxBorder: "hsl(236, 9%, 61%)",
					placeholderAndCompletedTask: "hsl(236, 9%, 61%)",
					clearCompletedBtnHover: "hsl(235, 19%, 35%)",
					filtersBtnHover: "hsl(235, 21%, 11%)",
				},
				dark: {
					text: "hsl(234, 39%, 85%)",
					bodyBackground: "hsl(235, 21%, 11%)",
					todoBackground: "hsl(235, 24%, 19%)",
					todoBorder: "hsl(237, 14%, 26%)",
					checkboxBorder: "hsl(234, 11%, 52%)",
					placeholderAndCompletedTask: "hsl(234, 11%, 52%)",
					clearCompletedBtnHover: "hsl(234, 39%, 85%)",
					filtersBtnHover: "hsl(236, 33%, 92%)",
				},
			},
			backgroundImage: {
				"light-desktop": "url('/src/assets/images/bg-desktop-light.jpg')",
				"light-mobile": "url('/src/assets/images/bg-mobile-light.jpg')",
				"dark-desktop": "url('/src/assets/images/bg-desktop-dark.jpg')",
				"dark-mobile": "url('/src/assets/images/bg-mobile-dark.jpg')",
			},
			backgroundSize: {
				40: "100% 40vh",
			},
			letterSpacing: {
				15: "50px",
			},
			borderWidth: {
				1: "1px",
			},
			boxShadow: {
				todoShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
			},
      spacing: {
        60: "60px",
        120: "120px",
      },
		},
	},
	plugins: [],
};
