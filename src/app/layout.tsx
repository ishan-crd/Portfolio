import type { Metadata } from "next";
import GridOverlay from "@/components/GridOverlay";
import Nav from "@/components/Nav";
import RevealProvider from "@/components/RevealProvider";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
	title: "Ishan Gupta — Portfolio",
	description:
		"Founding Engineer at Clipstake. Full-stack developer shipping production products end-to-end — Web3, AI, mobile, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="studio" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline script prevents theme FOUC */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('portfolio-theme')||'studio';document.documentElement.setAttribute('data-theme',t);var a=t==='studio'?'#c25c2a':'#ff5c8a';document.documentElement.style.setProperty('--accent',a)})();`,
					}}
				/>
			</head>
			<body>
				<ThemeProvider>
					<GridOverlay />
					<Nav />
					<RevealProvider />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
