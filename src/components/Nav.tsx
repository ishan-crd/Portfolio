"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

export default function Nav() {
	const { theme, toggleTheme } = useTheme();
	const [time, setTime] = useState("");
	const [showHint, setShowHint] = useState(false);

	useEffect(() => {
		const u = () => {
			const d = new Date();
			const h = String(d.getHours()).padStart(2, "0");
			const m = String(d.getMinutes()).padStart(2, "0");
			const s = String(d.getSeconds()).padStart(2, "0");
			setTime(`${h}:${m}:${s} IST`);
		};
		u();
		const id = setInterval(u, 1000);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (sessionStorage.getItem("theme-hint-dismissed")) return;
		const t = setTimeout(() => setShowHint(true), 1200);
		return () => clearTimeout(t);
	}, []);

	const dismissHint = () => {
		setShowHint(false);
		sessionStorage.setItem("theme-hint-dismissed", "1");
	};

	return (
		<>
			<nav className="nav">
				<div className="nav-logo">
					<span className="nav-logo-mark" />
					ISHAN&nbsp;GUPTA / {theme === "studio" ? "STUDIO" : "TERMINAL"}
				</div>
				<div className="nav-links">
					<Link href="/#work">Work</Link>
					<Link href="/#stack">Stack</Link>
					<Link href="/#path">Path</Link>
					<Link href="/#now">Now</Link>
					<Link href="/#contact">Contact</Link>
					<button
						type="button"
						onClick={toggleTheme}
						className="theme-toggle-btn"
					>
						[{theme === "studio" ? "→ terminal" : "→ studio"}]
					</button>
				</div>
				<div className="nav-time">{time}</div>
			</nav>

			{showHint && (
				<div className="theme-hint">
					<div className="theme-hint-dot" />
					<span>
						You&apos;re viewing in{" "}
						<strong>{theme === "studio" ? "Studio" : "Terminal"}</strong> mode.
						Try switching to{" "}
						<button
							type="button"
							className="theme-hint-switch"
							onClick={() => {
								toggleTheme();
								dismissHint();
							}}
						>
							{theme === "studio" ? "Terminal" : "Studio"}
						</button>{" "}
						for a different vibe.
					</span>
					<button
						type="button"
						className="theme-hint-close"
						onClick={dismissHint}
						aria-label="Dismiss"
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>
			)}
		</>
	);
}
