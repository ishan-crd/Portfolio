"use client";

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { TWEAK_DEFAULTS } from "./tweaks";

type Theme = "studio" | "terminal";

interface ThemeContextValue {
	theme: Theme;
	setTheme: (t: Theme) => void;
	toggleTheme: () => void;
	accentStudio: string;
	accentTerminal: string;
}

const ThemeContext = createContext<ThemeContextValue>({
	theme: "studio",
	setTheme: () => {},
	toggleTheme: () => {},
	accentStudio: TWEAK_DEFAULTS.accentStudio,
	accentTerminal: TWEAK_DEFAULTS.accentTerminal,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(TWEAK_DEFAULTS.theme);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem("portfolio-theme") as Theme | null;
		if (stored === "studio" || stored === "terminal") {
			setThemeState(stored);
		}
		setMounted(true);
	}, []);

	const setTheme = useCallback((t: Theme) => {
		setThemeState(t);
		localStorage.setItem("portfolio-theme", t);
		document.documentElement.setAttribute("data-theme", t);
		const accent =
			t === "studio"
				? TWEAK_DEFAULTS.accentStudio
				: TWEAK_DEFAULTS.accentTerminal;
		document.documentElement.style.setProperty("--accent", accent);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme(theme === "studio" ? "terminal" : "studio");
	}, [theme, setTheme]);

	useEffect(() => {
		if (!mounted) return;
		document.documentElement.setAttribute("data-theme", theme);
		const accent =
			theme === "studio"
				? TWEAK_DEFAULTS.accentStudio
				: TWEAK_DEFAULTS.accentTerminal;
		document.documentElement.style.setProperty("--accent", accent);
	}, [theme, mounted]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
				accentStudio: TWEAK_DEFAULTS.accentStudio,
				accentTerminal: TWEAK_DEFAULTS.accentTerminal,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
