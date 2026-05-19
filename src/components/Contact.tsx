"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme";

export default function Contact() {
	const { theme } = useTheme();
	const [copied, setCopied] = useState(false);

	const copy = () => {
		navigator.clipboard?.writeText("ishangupta3121@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 1600);
	};

	return (
		<footer className="contact shell" id="contact">
			<h2 className="contact-title reveal">
				{theme === "studio" ? (
					<>
						Let&apos;s <em>build</em>
						<br />
						something good.
					</>
				) : (
					<>
						let&apos;s_build
						<br />
						<em>./something_good</em>
					</>
				)}
			</h2>
			<button type="button" className="contact-email" onClick={copy}>
				<span style={{ color: "var(--accent)" }}>●</span>
				ishangupta3121@gmail.com
				<span style={{ fontSize: 12, color: "var(--ink-3)", marginLeft: 8 }}>
					{copied ? "[copied]" : "[click to copy]"}
				</span>
			</button>

			<div className="contact-meta">
				<div>© 2026 — Ishan Gupta</div>
				<div className="contact-links">
					<a
						href="https://github.com/ishan-crd"
						target="_blank"
						rel="noreferrer"
					>
						GitHub ↗
					</a>
					<a
						href="https://www.linkedin.com/in/ishan2131/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn ↗
					</a>
					<a href="https://x.com/ishancrd" target="_blank" rel="noreferrer">
						Twitter ↗
					</a>
				</div>
				<div>Designed & built by Ishan Gupta</div>
			</div>
		</footer>
	);
}
