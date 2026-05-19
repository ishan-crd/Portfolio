"use client";

import { useTheme } from "@/lib/theme";
import Typed from "./Typed";

export default function Hero() {
	const { theme } = useTheme();

	return (
		<header className="hero shell" id="top">
			<div className="hero-meta reveal">
				<span>
					<span className="dot-mark" /> Ishan Gupta · Portfolio
				</span>
				<a
					href="/IshanGupta_Resume.pdf"
					download="IshanGupta_Resume"
					className="resume-btn"
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
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
					Resume
				</a>
			</div>

			{theme === "studio" ? (
				<h1 className="hero-title">
					<span className="lift">
						<span>Developer</span>
					</span>{" "}
					<span className="lift">
						<span>
							<em>with an eye</em>
						</span>
					</span>
					<br />
					<span className="lift">
						<span>for design.</span>
					</span>
				</h1>
			) : (
				<h1 className="hero-title">
					<span className="lift">
						<span>build_things</span>
					</span>{" "}
					<span className="lift">
						<span>
							<em>./</em>
						</span>
					</span>
					<br />
					<span className="lift">
						<span>that_feel_right</span>
					</span>
				</h1>
			)}

			<div className="hero-row">
				{theme === "studio" ? (
					<p className="hero-bio reveal">
						I&apos;m <strong>Ishan</strong> — founding engineer at{" "}
						<strong>Clipstake</strong>, building creator economy tools. I ship
						full-stack products end-to-end with{" "}
						<span className="ornament">clean code</span>, sharp logic, and fast
						execution — from AI-powered apps to Web3 platforms to native mobile.
					</p>
				) : (
					<div className="hero-terminal reveal">
						<div className="hero-terminal-bar">
							<div className="dots">
								<span />
								<span />
								<span />
							</div>
							<span>~/ishan — zsh</span>
						</div>
						<Typed
							lines={[
								{ kind: "in", text: "whoami" },
								{
									kind: "out",
									text: "ishan_gupta · full-stack dev · ui/ux designer",
								},
								{ kind: "in", text: "cat status.txt" },
								{
									kind: "out",
									text: "founding engineer @ clipstake · shipping fast",
								},
								{ kind: "in", text: "ls projects/" },
								{
									kind: "out",
									text: "clipstake · den.show · edwance · unmesa · bounties · +more",
								},
							]}
						/>
					</div>
				)}

				<div className="hero-status reveal" style={{ justifySelf: "end" }}>
					<div>
						<span className="dot" /> Available for work
					</div>
					<div style={{ marginTop: 12, color: "var(--ink-3)" }}>
						↘ scroll to see the work
					</div>
				</div>
			</div>
		</header>
	);
}
