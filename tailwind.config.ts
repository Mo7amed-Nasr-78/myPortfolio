import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "0.5rem",
                sm: "1rem",
                xl: "4rem",
            },
        },
        extend: {
            colors: {
                primaryColor: "#1E1E1E",
                secondaryColor: "#ECF0F1",
                accentColor: "#3498DB",
                cherryPie: "#21005D",
                darkMintGreen: "#2ECC71",
                lightGold: "#F9DD51",
                richMaroom: "#A12B5A",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                hero_image: "url(./Focal_Point.svg)",
            },
            width: {
                "custom-100/8": "calc(100% - 8rem)",
                "custom-100/2": "calc(100% - 2rem)",
                "custom-100/1": "calc(100% - 1rem)",
                "custom-100/0.5": "calc(100% - 0.5rem)",
                "custom-50/2": "calc(50% - 2rem)",
                "custom-50/0.5": "calc(50% - 0.5rem)",
            },
            keyframes: {
                backForth: {
                    "20%": {
                        left: "0",
                    },
                    "50%": {
                        left: "50%",
                    },
                    "80%, 100%": {
                        left: "100%",
                    },
                },
                shadowAnimate: {
                    "0%": {
                        background:
                            "linear-gradient(0deg, #3498DB, #21005D, #F9DD51)",
                    },
                    "33%": {
                        background:
                            "linear-gradient(120deg, #F9DD51, #21005D, #3498DB)",
                    },
                    "66%": {
                        background:
                            "linear-gradient(240deg, #3498DB, #21005D, #F9DD51)",
                    },
                    "100%": {
                        background:
                            "linear-gradient(360deg, #F9DD51, #21005D, #3498DB)",
                    },
                },
                bounceX: {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateX(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            animation: {
                backForth: "backForth 5s steps(10) infinite",
                shadowAnimate: "shadowAnimate 5s linear infinite",
                bounceX: "bounceX 1s infinite"
            },
            backgroundSize: {
                "md-size": "620px",
            },
        },
    },
    plugins: [],
};
export default config;
