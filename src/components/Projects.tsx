"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { DemoRenderer } from "./Demos";
import ShowreelPreview from "./ShowreelPreview";

export default function Projects() {
	const wrapRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const fillRef = useRef<HTMLDivElement>(null);
	const [activeIdx, setActiveIdx] = useState(0);

	useEffect(() => {
		const wrap = wrapRef.current;
		const track = trackRef.current;
		if (!wrap || !track) return;

		let trackWidth = 0;
		let viewportWidth = 0;
		let maxTranslate = 0;

		const measure = () => {
			viewportWidth = window.innerWidth;
			trackWidth = track.scrollWidth;
			maxTranslate = Math.max(0, trackWidth - viewportWidth);
			wrap.style.height = `${window.innerHeight + maxTranslate}px`;
		};

		let raf: number | null = null;
		const onScroll = () => {
			if (raf) return;
			raf = requestAnimationFrame(() => {
				raf = null;
				if (window.innerWidth <= 900) {
					track.style.transform = "";
					if (fillRef.current) fillRef.current.style.width = "0%";
					return;
				}
				const rect = wrap.getBoundingClientRect();
				const scrolled = Math.min(Math.max(-rect.top, 0), maxTranslate);
				track.style.transform = `translate3d(${-scrolled}px, 0, 0)`;
				const pct = maxTranslate > 0 ? (scrolled / maxTranslate) * 100 : 0;
				if (fillRef.current) fillRef.current.style.width = `${pct}%`;

				const panels = track.querySelectorAll("[data-panel-idx]");
				const center = scrolled + viewportWidth / 2;
				let best = 0;
				let bestDist = Infinity;
				panels.forEach((p) => {
					const el = p as HTMLElement;
					const left = el.offsetLeft;
					const mid = left + el.offsetWidth / 2;
					const d = Math.abs(mid - center);
					if (d < bestDist) {
						bestDist = d;
						best = parseInt(el.getAttribute("data-panel-idx") || "0", 10);
					}
				});
				setActiveIdx(best);
			});
		};

		measure();
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", measure);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", measure);
			if (raf) cancelAnimationFrame(raf);
			wrap.style.height = "";
		};
	}, []);

	const total = PROJECTS.length;
	const shownIdx = Math.min(Math.max(activeIdx - 1, 0), total - 1);

	return (
		<section className="hscroll" id="work" ref={wrapRef}>
			<div className="hscroll-pin">
				<div className="hscroll-bar">
					<span className="label">/01 — Selected Work</span>
					<span className="counter">
						{String(shownIdx + 1).padStart(2, "0")} /{" "}
						{String(total).padStart(2, "0")}
					</span>
					<div className="progress-track">
						<div className="progress-fill" ref={fillRef} />
					</div>
					<span>scroll ↓ → travels →</span>
				</div>

				<div className="hscroll-track" ref={trackRef}>
					<div className="hpanel-intro" data-panel-idx="0">
						<div className="kicker">— Selected Work · 2025–26</div>
						<h2>
							Things I&apos;ve built — from <em>founding engineer</em> work to
							AI apps, Web3 platforms, and smart contracts.
						</h2>
						<div className="scroll-cue">
							<span className="arrow" />
							keep scrolling to travel sideways
						</div>
					</div>

					{PROJECTS.map((p, i) => (
						<Link
							className="hpanel"
							key={p.n}
							data-panel-idx={i + 1}
							href={`/project/${p.n}`}
						>
							<div className="hpanel-head">
								<span className="num">
									PROJECT <span className="slash">/</span> {p.n}{" "}
									<span className="slash">/</span>{" "}
									{String(total).padStart(2, "0")}
								</span>
								<span>
									{p.tags[0]} · {p.tags[1] || ""}
								</span>
							</div>

							<div className="hpanel-info">
								<h3>{p.name}</h3>
								<p>{p.desc}</p>
								<div className="hpanel-tags">
									{p.tags.map((t) => (
										<span key={t}>{t}</span>
									))}
								</div>
							</div>

							<div className="hpanel-preview">
								<span className="hpanel-preview-tag">
									<span className="live" />
									{p.tag}
								</span>
								{p.video ? (
									<ShowreelPreview
										image={p.image}
										video={p.video}
										alt={p.name}
									/>
								) : p.image ? (
									<div className="hpanel-image">
										<Image
											src={p.image}
											alt={p.name}
											fill
											style={{ objectFit: "contain" }}
										/>
									</div>
								) : (
									<DemoRenderer type={p.demo} />
								)}
							</div>

							<div className="hpanel-foot">
								<span>case study · 4 min read</span>
								<span className="open">
									view project <span className="ar" />
								</span>
							</div>
						</Link>
					))}

					<div className="hpanel-end" data-panel-idx={total + 1}>
						<h3>
							That&apos;s the <em>highlight reel</em>. Want to see more?
						</h3>
						<div className="links">
							<a
								href="https://github.com/ishan-crd"
								target="_blank"
								rel="noreferrer"
							>
								<span>All repos on GitHub</span>
								<span>↗</span>
							</a>
							<a
								href="https://www.linkedin.com/in/ishan2131/"
								target="_blank"
								rel="noreferrer"
							>
								<span>Connect on LinkedIn</span>
								<span>↗</span>
							</a>
							<a href="#contact">
								<span>Or just say hi</span>
								<span>↘</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
