export const PROJECTS = [
	{
		n: "01",
		name: "Clipstake",
		desc: "Full-stack creator economy platform — landing page, dashboards (creator, brand, admin), and a native mobile app shipped on the App Store with light + dark mode.",
		tags: ["Next.js", "React Native", "TypeScript", "Full Product"],
		tag: "live · founding engineer",
		demo: "wave",
		link: "https://clipstake.com/",
		image: "/clipstake/clipstakeweb.png",
		video: "/clipstake/Clipstake1.mov",
	},
	{
		n: "02",
		name: "Den.Show",
		desc: "Production-grade Web3 streaming platform scaled to 20,000+ users. Built the entire frontend & PWA from scratch with blockchain wallet integration and on-chain tipping.",
		tags: ["Web3", "Next.js", "TypeScript", "Mux Player"],
		tag: "live · shipped",
		demo: "counter",
		link: "https://den.show/",
		image: "/images/denshow/denshow.png",
	},
	{
		n: "03",
		name: "Edwance.ai",
		desc: "Full-stack learning platform with AI-powered academic chat, authentication, role-based access, and dashboards for students, teachers, and admins.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
		tag: "live",
		demo: "palette",
		link: "https://www.edwance.ai/",
		image: "/images/edwance/edwance-landingnobg.png",
	},
	{
		n: "04",
		name: "UnmesaAI",
		desc: "AI-driven accountability productivity app delivering contextual performance evaluations with an OpenAI-powered reflection analysis pipeline.",
		tags: ["React Native", "TypeScript", "OpenAI API", "PostgreSQL"],
		tag: "shipped",
		demo: "cmd",
		image: "/images/unmesa/unmesa-laptop.png",
	},
	{
		n: "05",
		name: "FoodScan",
		desc: "AI grocery intelligence iOS app — ingredient scanner classifying products via multilingual NLP with automated pricing through web scraping.",
		tags: ["Swift", "OpenAI API", "iOS", "NLP"],
		tag: "shipped",
		demo: "palette",
		video: "/foodscan/FoodScan.mp4",
	},
	{
		n: "06",
		name: "Bounties",
		desc: "Decentralized task marketplace enabling trustless payouts via on-chain escrow smart contracts with wallet authentication.",
		tags: ["Next.js", "Solidity", "Privy", "Smart Contracts"],
		tag: "web3",
		demo: "wave",
	},
];

export const STACK = [
	{
		cat: "Languages",
		items: ["JavaScript", "TypeScript", "Python", "Swift", "Solidity"],
		hi: "TypeScript",
	},
	{
		cat: "Frontend",
		items: ["React", "Next.js", "React Native", "Tailwind CSS"],
		hi: "Next.js",
	},
	{
		cat: "Backend",
		items: ["Node.js", "Express.js", "REST APIs"],
		hi: "Node.js",
	},
	{
		cat: "AI / ML",
		items: ["OpenAI APIs", "YOLOv26", "Prompt Engineering", "Computer Vision"],
		hi: "OpenAI APIs",
	},
	{
		cat: "Web3",
		items: ["Solidity", "Smart Contracts", "Privy"],
		hi: "Solidity",
	},
	{ cat: "Databases", items: ["PostgreSQL", "MongoDB"], hi: "PostgreSQL" },
	{
		cat: "Tools",
		items: ["Git", "Docker", "Firebase", "App Store Connect", "Claude Code"],
		hi: "Docker",
	},
	{ cat: "Infra", items: ["Vercel", "Figma", "Postman", "AWS"], hi: "Vercel" },
];

export const EXPERIENCE = [
	{
		when: "Mar 2026 — Present",
		role: "Founding Engineer",
		at: "Clipstake",
		desc: "Led the complete revamp of the web platform, rebuilding core frontend systems. Developed and shipped the company's first mobile app on the App Store. Engineered a YOLOv26-powered logo tracking system for brand placement detection.",
		link: "https://clipstake.com/",
	},
	{
		when: "May 2025 — Feb 2026",
		role: "Software Engineer (Contract)",
		at: "Gennext IT Management & Consulting",
		desc: "Built and maintained full-stack web applications, dashboards, and internal systems for enterprise clients. Developed scalable APIs, automation workflows, and backend services optimized for production environments.",
	},
	{
		when: "Oct 2025 — Dec 2025",
		role: "Full Stack Developer Intern",
		at: "Den.show",
		desc: "Architected core platform from 0 to production, scaling to 20,000+ users and onboarding 50+ streamers. Built blockchain-enabled transaction flows and reduced API latency by ~30%.",
		link: "https://den.show/",
	},
	{
		when: "Aug 2025 — Nov 2025",
		role: "Full Stack Developer Intern",
		at: "Edwance.ai",
		desc: "Built full-stack learning platform with authentication, role-based access, and scalable backend services. Engineered AI-powered academic chat and designed dashboards with responsive PWA support.",
		link: "https://www.edwance.ai/",
	},
];

export const NOW = [
	{
		when: "BUILDING",
		what: "Clipstake — rebuilding the web platform, shipping mobile apps, and building AI-powered logo tracking.",
	},
	{
		when: "SHIPPING",
		what: "Full-stack products end-to-end. Clean code, sharp logic, fast practical execution.",
	},
	{
		when: "EXPLORING",
		what: "Computer vision (YOLOv26), AI integrations, Web3 smart contracts, and native iOS with Swift.",
	},
	{
		when: "OPEN TO",
		what: "Founding engineer roles · interesting collaborations · freelance projects · saying hi.",
	},
];

export interface ProjectDetail {
	n: string;
	name: string;
	em: string;
	lede: string;
	info: { k: string; v: string }[];
	overview: string[];
	features: { n: string; h: string; p: string }[];
	quote: { t: string; who: string };
	stack: string[];
	images: string[];
	link?: string;
	github?: string;
	heroVideo?: string;
	heroPoster?: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
	"01": {
		n: "01",
		name: "Clipstake",
		em: "Full Product",
		lede: "Full-stack creator economy platform — a polished landing page, full-suite dashboards for creators, brands, and admins, and a native mobile app shipped on the App Store with light + dark mode. Every pixel, every endpoint, every screen built from scratch.",
		info: [
			{ k: "Role", v: "Founding Engineer" },
			{ k: "Year", v: "Mar 2026 — Present" },
			{ k: "Type", v: "Creator economy platform" },
			{ k: "Status", v: "Live in production" },
		],
		overview: [
			"Led the complete revamp of the web platform, rebuilding core frontend systems and improving product experience. Developed and shipped the company's first mobile application, successfully publishing it on the App Store.",
			"Engineered a YOLOv26-powered logo tracking system capable of detecting brand placements in videos with visibility and dimensional analytics. Designed and built 3 full dashboards (creator, brand, admin) and a native mobile app with dual-theme support.",
		],
		features: [
			{
				n: "01",
				h: "Web platform revamp",
				p: "Complete rebuild of core frontend systems, improving product experience and user flows across the platform.",
			},
			{
				n: "02",
				h: "Mobile app (App Store)",
				p: "Developed and shipped the company's first mobile application with full light and dark mode support.",
			},
			{
				n: "03",
				h: "YOLOv26 logo tracking",
				p: "Engineered AI-powered brand placement detection in videos with visibility and dimensional analytics.",
			},
			{
				n: "04",
				h: "3 dashboard systems",
				p: "Creator dashboard for content/analytics, brand dashboard for campaigns, and admin dashboard for platform oversight.",
			},
		],
		quote: {
			t: "Founding engineer means owning everything — from the Web dashboard pixel to the App Store submission.",
			who: "— the job description",
		},
		stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"React Native",
			"Node.js",
			"Figma",
		],
		images: [
			"/images/clipstake/clipstakeiphone1.png",
			"/images/clipstake/clipstakeiphone2.png",
			"/images/clipstake/clipstakeiphone3.png",
			"/images/clipstake/clipstakeiphone4.png",
			"/images/clipstake/clipstakeiphone5.png",
		],
		link: "https://clipstake.com/",
		github: "https://github.com/ishan-crd",
		heroVideo: "/clipstake/Clipstake1.mov",
		heroPoster: "/clipstake/clipstakeweb.png",
	},
	"02": {
		n: "02",
		name: "Den.Show",
		em: "Web3 Streaming",
		lede: "Architected the core platform from 0 to production, scaling to 20,000+ users and onboarding 50+ streamers. Built blockchain-enabled transaction flows and reduced API latency by ~30%.",
		info: [
			{ k: "Role", v: "Full Stack Developer Intern" },
			{ k: "Year", v: "Oct — Dec 2025" },
			{ k: "Type", v: "Web3 streaming platform" },
			{ k: "Users", v: "20,000+" },
		],
		overview: [
			"Architected core platform from 0 to production, scaling to 20,000+ users and onboarding 50+ streamers. Built the entire frontend and PWA architecture from scratch — a highly responsive and performant progressive web application optimized for desktop and mobile.",
			"Built blockchain-enabled transaction flows and smart contract integrations for creator monetization. Led wallet integrations connecting multiple Web3 wallets with secure on-chain payment and tipping logic. Reduced API latency by ~30% through backend and database optimization.",
		],
		features: [
			{
				n: "01",
				h: "0 to production",
				p: "Architected the entire platform from scratch, scaling to 20,000+ users and 50+ streamers in production.",
			},
			{
				n: "02",
				h: "Blockchain transactions",
				p: "Built blockchain-enabled transaction flows and smart contract integrations for creator monetization.",
			},
			{
				n: "03",
				h: "30% latency reduction",
				p: "Reduced API latency by ~30% through backend and database optimization.",
			},
			{
				n: "04",
				h: "PWA architecture",
				p: "Built a responsive progressive web app with Mux Player stream clipping and multi-wallet support.",
			},
		],
		quote: {
			t: "Scaling from 0 to 20K users taught me more about production engineering than any course ever could.",
			who: "— real talk",
		},
		stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Mux Player API",
			"Web3 Wallets",
			"Alchemy",
		],
		images: [
			"/images/denshow/denshow.png",
			"/images/denshow/denshow2.png",
			"/images/denshow/denshow3.png",
			"/images/denshow/denshow4phone.png",
			"/images/denshow/denshow5phone.png",
		],
		link: "https://den.show/",
		github: "https://github.com/ishan-crd",
	},
	"03": {
		n: "03",
		name: "Edwance.ai",
		em: "AI Education",
		lede: "Built a full-stack learning platform with authentication, role-based access, AI-powered academic chat, and dashboards for students, teachers, and admins with responsive PWA support.",
		info: [
			{ k: "Role", v: "Full Stack Developer Intern" },
			{ k: "Year", v: "Aug — Nov 2025" },
			{ k: "Type", v: "AI education platform" },
			{ k: "Status", v: "Live in production" },
		],
		overview: [
			"Built a full-stack learning platform with authentication, role-based access, and scalable backend services. Engineered AI-powered academic chat for contextual student assistance.",
			"Designed dashboards for students, teachers, and admins with responsive PWA support. Created a modern, responsive interface that effectively communicates the platform's AI capabilities with clear user flows and intuitive navigation.",
		],
		features: [
			{
				n: "01",
				h: "Full-stack platform",
				p: "Built complete learning platform with authentication, role-based access, and scalable backend services.",
			},
			{
				n: "02",
				h: "AI academic chat",
				p: "Engineered AI-powered contextual student assistance for personalized learning support.",
			},
			{
				n: "03",
				h: "Multi-role dashboards",
				p: "Designed dashboards for students, teachers, and admins with responsive PWA support.",
			},
			{
				n: "04",
				h: "Scalable architecture",
				p: "Built with performance-first approach ensuring optimal experience across all devices.",
			},
		],
		quote: {
			t: "The best EdTech doesn't replace teachers — it gives them superpowers.",
			who: "— building principle",
		},
		stack: ["Next.js", "TypeScript", "Tailwind CSS"],
		images: ["/images/edwance/edwance-landingnobg.png"],
		link: "https://www.edwance.ai/",
		github: "https://github.com/ishan-crd",
	},
	"04": {
		n: "04",
		name: "UnmesaAI",
		em: "AI Productivity",
		lede: "AI-driven accountability productivity app delivering contextual performance evaluations and accountability feedback through an OpenAI-powered reflection analysis pipeline.",
		info: [
			{ k: "Role", v: "Full Stack Developer" },
			{ k: "Year", v: "2024 — 2025" },
			{ k: "Type", v: "AI productivity app" },
			{ k: "Stack", v: "React Native + OpenAI" },
		],
		overview: [
			"Built an AI-driven productivity app delivering contextual performance evaluations and accountability feedback. The app uses OpenAI to analyze user reflections and provide meaningful, personalized execution scoring.",
			"Engineered the full OpenAI-powered reflection analysis pipeline — from user input capture to contextual AI evaluation. Built with React Native and TypeScript for cross-platform performance, backed by PostgreSQL for reliable data persistence.",
		],
		features: [
			{
				n: "01",
				h: "AI performance evaluations",
				p: "Contextual, personalized performance evaluations powered by OpenAI for meaningful accountability feedback.",
			},
			{
				n: "02",
				h: "Reflection analysis pipeline",
				p: "Engineered end-to-end OpenAI-powered pipeline for analyzing user reflections and scoring execution.",
			},
			{
				n: "03",
				h: "Cross-platform app",
				p: "Built with React Native and TypeScript for seamless performance on both iOS and Android.",
			},
			{
				n: "04",
				h: "Data-driven insights",
				p: "PostgreSQL-backed data layer for reliable persistence and meaningful progress tracking.",
			},
		],
		quote: {
			t: "Accountability apps fail when they nag. They work when they understand.",
			who: "— product insight",
		},
		stack: ["React Native", "TypeScript", "OpenAI API", "PostgreSQL"],
		images: [
			"/images/unmesa/unmesa-laptop.png",
			"/images/unmesa/unmesa-post1.png",
			"/images/unmesa/unmesa-post2.png",
			"/images/unmesa/unmesa-post3.png",
		],
		github: "https://github.com/ishan-crd",
	},
	"05": {
		n: "05",
		name: "FoodScan",
		em: "AI iOS App",
		lede: "AI grocery intelligence iOS app — an ingredient scanner that classifies products via multilingual NLP interpretation with automated product pricing through web scraping.",
		info: [
			{ k: "Role", v: "Solo developer" },
			{ k: "Year", v: "2025" },
			{ k: "Type", v: "iOS native app" },
			{ k: "Stack", v: "Swift + OpenAI" },
		],
		overview: [
			"Developed an AI ingredient scanner that classifies grocery products via multilingual NLP interpretation. The app uses OpenAI to analyze ingredient lists and provide health insights regardless of the language on the packaging.",
			"Built an automated product pricing system using web scraping and HTML parsing, allowing users to compare prices across sources directly within the app.",
		],
		features: [
			{
				n: "01",
				h: "AI ingredient scanner",
				p: "Classifies grocery products via OpenAI-powered multilingual NLP interpretation of ingredient lists.",
			},
			{
				n: "02",
				h: "Multilingual support",
				p: "Handles ingredient labels in multiple languages through intelligent NLP parsing and translation.",
			},
			{
				n: "03",
				h: "Automated pricing",
				p: "Built web scraping and HTML parsing system for real-time product price comparisons.",
			},
			{
				n: "04",
				h: "Native iOS",
				p: "Built natively in Swift for optimal performance and seamless iOS user experience.",
			},
		],
		quote: {
			t: "The best health app is the one you use at the grocery store, not after.",
			who: "— design motivation",
		},
		stack: ["Swift", "OpenAI API"],
		images: [],
		github: "https://github.com/ishan-crd",
		heroVideo: "/foodscan/FoodScan.mp4",
	},
	"06": {
		n: "06",
		name: "Bounties",
		em: "Web3 DApp",
		lede: "Decentralized task marketplace enabling trustless payouts via on-chain escrow smart contracts with wallet authentication and secure blockchain transaction flows.",
		info: [
			{ k: "Role", v: "Full Stack Developer" },
			{ k: "Year", v: "2025" },
			{ k: "Type", v: "Web3 DApp" },
			{ k: "Stack", v: "Next.js + Solidity" },
		],
		overview: [
			"Built a Web3 bounty platform enabling trustless payouts via on-chain escrow contracts. The platform allows users to post tasks with crypto bounties, and smart contracts handle the escrow and payout logic automatically.",
			"Implemented wallet authentication using Privy and secure blockchain transaction flows. The entire payment lifecycle — from bounty creation to task completion and payout — is handled trustlessly on-chain.",
		],
		features: [
			{
				n: "01",
				h: "On-chain escrow",
				p: "Smart contracts handle trustless bounty escrow — funds are locked on creation and released on task completion.",
			},
			{
				n: "02",
				h: "Wallet authentication",
				p: "Integrated Privy for seamless wallet-based authentication and user management.",
			},
			{
				n: "03",
				h: "Secure transactions",
				p: "End-to-end blockchain transaction flows with proper error handling and confirmation states.",
			},
			{
				n: "04",
				h: "Task marketplace",
				p: "Full marketplace UI for posting, discovering, and completing bounties with on-chain verification.",
			},
		],
		quote: {
			t: "Trustless doesn't mean careless — the UX still has to feel effortless.",
			who: "— Web3 principle",
		},
		stack: ["Next.js", "Solidity", "Privy", "Smart Contracts"],
		images: [],
		github: "https://github.com/ishan-crd",
	},
};

export const PROJECT_ORDER = ["01", "02", "03", "04", "05", "06"];
