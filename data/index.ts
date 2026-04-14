import { IconType } from "react-icons";
import { 
    PiFacebookLogo,
    PiInstagramLogo,
    PiXLogo,
    PiLinkedinLogo 

} from "react-icons/pi";

export const navItems = [
	{ title: "home", link: "#home" },
	{ title: "services", link: "#services" },
	{ title: "about", link: "#about" },
	{ title: "projects", link: "#projects" },
	{ title: "contact", link: "#contact" },
];

export const heroCards = [
	{
		title: "design",
		des: "If you want to make a design of your website",
		illustration: "./Design.svg",
	},
	{
		title: "code",
		des: "If you have a design and want to get it reality",
		illustration: "./Code.svg",
	},
];

type SocialIcon = {
    id: number,
    title: string,
    icon: IconType,
    link: string
}

export const socialIcons: SocialIcon[] = [
	{
		id: 1,
		title: "linkedin",
		icon: PiLinkedinLogo,
		link: "https://www.linkedin.com/in/mohamed-nasr-1682ab239",
	},
	{
		id: 2,
		title: "facebook",
		icon: PiFacebookLogo,
		link: "https://www.facebook.com/profile.php?id=100081452508411",
	},
	{
		id: 3,
		title: "twitter-x",
		icon: PiXLogo,
		link: "https://x.com/Mohamed_nasr_78",
	},
	{
		id: 4,
		title: "instagram",
		icon: PiInstagramLogo,
		link: "https://www.instagram.com/mo7amed_nasr_74/",
	},
];

export const servicesCards = [
	{
		title: "web dev",
		des: "As a full-stack developer, I handle both front-end and back-end development—creating fast, responsive interfaces and powerful server-side systems that work together seamlessly.",
		icon: "./web-dev.svg",
	},
	{
		title: "web test & deploy",
		des: "I test your website for performance, functionality, and reliability, then deploy it with precision to guarantee a secure, optimized, and hassle-free online experience — fast, seamless, dependable.",
		icon: "./web-test.svg",
	},
	{
		title: "UI/UX",
		des: "I design clean, user-centered interfaces that focus on clarity, usability, and smooth interaction. From wireframes to final layouts, I ensure every screen feels natural and engaging.",
		icon: "./ui-ux.svg",
	},
];

export const aboutTabs = [
	{
		tab: "front & backend end",
		title: "Developing scalable and high-performance applications",
		desc: "I focus on creating intuitive, visually appealing interfaces based on usability, clarity, and flow. My goal is to ensure every screen feels natural, functional, and visually consistent.",
		skills: [
			{
				alt: "html_icon",
				icon: "./html-5.svg"
			},
			{
				alt: "css_icon",
				icon: "./css-3.svg"
			}, 
			{
				alt: "react_icon",
				icon: "./react.svg"
			}, 
			{
				alt: "javascript_icon",
				icon: "./js.svg"
			}, 
			{
				alt: "next_icon",
				icon: "./next_.svg",
			},
			{
				alt: "nodejs_icon",
				icon: "./nodejs.svg"
			}, 
			{
				alt: "expressjs_icon",
				icon: "./express.svg"
			}, 
			{
				alt: "nestjs_icon",
				icon: "./nest.svg"
			}, 
			{
				alt: "mysql_icon",
				icon: "./mysql.svg"
			}, 
			{
				alt: "microsoftsqlserver_icon",
				icon: "./microsoftsqlserver.svg"
			}, 
			{
				alt: "mongoDB_icon",
				icon: "./mongodb.svg"
			}, 
			{
				alt: "postgresql_icon",
				icon: "./postgresql.svg"
			}, 
			],
		cvPath: './docs/MERN Developer.pdf'
	},
	{
		tab: "dev ops",
		title: "Ensuring smooth deployment, monitoring, and scalability",
		desc: "I manage hosting, CI/CD pipelines, testing, and cloud services to guarantee reliable delivery and continuous performance for every project.",
		skills: [],
		cvPath: './docs/ui-ux.pdf'
	},
	{
		tab: "ui/ux",
		title: "Designing meaningful digital experiences",
		desc: "I focus on creating intuitive, visually appealing interfaces based on usability, clarity, and flow. My goal is to ensure every screen feels natural, functional, and visually consistent.",
		skills: [
			{
				alt: "illustrator_icon",
				icon: "./illustrator.svg"
			},
			{
				alt: "xd_icon",
				icon: "./xd.svg"
			}, 
			{
				alt: "photoshop_icon",
				icon: "./photoshop.svg"
			}, 
			{
				alt: "figma_icon",
				icon: "./figma.svg"
			}, 
			{
				alt: "sketch_icon",
				icon: "./sketch.svg",
			},
			{
				alt: "miro_icon",
				icon: "./miro.svg"
			}, 
			],
		cvPath: './docs/ui-ux.pdf'
	}
]

export const projectCards = [
	{
		id: 1,
		title: "real estate",
		des: "you can visit the project live and i’m going to be glad with your feedback",
		gitIcon: "./github.svg",
		whatsIcon: "./whats.svg",
		img: "./Project_two.png",
		rep: "https://github.com/Mo7amed-Nasr-78/CarWebsite",
		link: "https://mo7amed-nasr-78.github.io/CarWebsite/",
	},
	{
		id: 2,
		title: "carOwnerShip",
		des: "you can visit the project live and i’m going to be glad with your feedback",
		gitIcon: "./github.svg",
		whatsIcon: "./whats.svg",
		img: "./Project_one.png",
		rep: "https://github.com/Mo7amed-Nasr-78/RealEstates_site",
		link: "https://mo7amed-nasr-78.github.io/RealEstates_site/",
	},
	{
		id: 3,
		title: "portfolio",
		des: "you can visit the project live and i’m going to be glad with your feedback",
		gitIcon: "./github.svg",
		whatsIcon: "./whats.svg",
		img: "./Portfolio_Poster_2.png",
		rep: "https://github.com/Mo7amed-Nasr-78/myPortfolio",
		link: "https://mo7amed-nasr-78.github.io/myPortfolio/",
	},
	{
		id: 4,
		title: "furniture",
		des: "you can visit the project live and i’m going to be glad with your feedback",
		gitIcon: "./github.svg",
		whatsIcon: "./whats.svg",
		img: "./Project_Four.png",
		rep: "",
		link: "",
	},
];

// export const inputFields = [
// 	{ id: 1, title: "name", type: "text", holder: "Enter Your Name" },
// 	{ id: 2, title: "email", type: "text", holder: "Enter Your Email" },
// 	{
// 		id: 3,
// 		title: "feel free to tell us what’s your vision:",
// 		type: "text",
// 		holder: "Write Your Message Down Here",
// 	},
// 	{ id: 4, title: "name", type: "submit", holder: "Send" },
// ];
