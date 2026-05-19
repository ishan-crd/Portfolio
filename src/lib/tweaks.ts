// Tweaks panel configuration — DEV ONLY
// This file is NOT rendered in the frontend.
// It serves as a reference for all tweakable values and their options.
// Developers can modify defaults here and they'll be picked up by the theme system.

export const TWEAK_DEFAULTS = {
	theme: "studio" as "studio" | "terminal",
	accentStudio: "#c25c2a",
	accentTerminal: "#ff5c8a",
	showGrid: true,
	headline: "Developer with an eye for design",
};

export const TWEAK_OPTIONS = {
	theme: [
		{ value: "studio", label: "Studio" },
		{ value: "terminal", label: "Terminal" },
	],
	accentStudio: {
		label: "Studio accent",
		options: ["#c25c2a", "#1d4f8a", "#3a6b3a", "#7a3a8a", "#0a0a0a"],
	},
	accentTerminal: {
		label: "Terminal accent",
		options: ["#ff5c8a", "#b3ff5c", "#ffae3a", "#5cf0ff", "#ffffff"],
	},
	showGrid: {
		label: "Background grid (terminal)",
	},
};
