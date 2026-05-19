"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useCallback, useEffect, useState } from "react";
import ShowreelPreview from "@/components/ShowreelPreview";
import { PROJECT_DETAILS, PROJECT_ORDER } from "@/lib/data";

export default function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
	const [lightbox, setLightbox] = useState<string | null>(null);

	const closeLightbox = useCallback(() => setLightbox(null), []);

	useEffect(() => {
		if (!lightbox) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeLightbox();
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [lightbox, closeLightbox]);
	const p = PROJECT_DETAILS[id] || PROJECT_DETAILS["01"];
	const idx = PROJECT_ORDER.indexOf(p.n);
	const prev =
		PROJECT_ORDER[(idx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length];
	const next = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length];

	return (
		<main className="pd-shell">
			<Link href="/#work" className="pd-back">
				<span className="arr" /> Back to portfolio
			</Link>

			<div className="pd-meta">
				<span>
					Project / {p.n} of {String(PROJECT_ORDER.length).padStart(2, "0")}
				</span>
				<span className="mid">{p.em}</span>
				<span>Case study</span>
			</div>

			<h1 className="pd-title reveal">
				{p.name
					.split(" ")
					.map((w, i, a) =>
						i === a.length - 1 ? (
							<em key={w}>{w}</em>
						) : (
							<span key={w}>{w} </span>
						),
					)}
			</h1>

			<p className="pd-lede reveal">{p.lede}</p>

			<div className="pd-info-grid reveal">
				{p.info.map((c) => (
					<div className="pd-info-cell" key={c.k}>
						<div className="k">{c.k}</div>
						<div className="v">{c.v}</div>
					</div>
				))}
			</div>

			<div
				className="pd-hero-img reveal"
				style={{ position: "relative", overflow: "hidden" }}
			>
				{p.heroVideo ? (
					<ShowreelPreview
						image={p.heroPoster || p.images?.[0]}
						video={p.heroVideo}
						alt={p.name}
					/>
				) : p.images?.[0] ? (
					<Image
						src={p.images[0]}
						alt={p.name}
						fill
						style={{ objectFit: "contain" }}
					/>
				) : (
					<span className="tag">hero / 16:9 placeholder</span>
				)}
			</div>

			<section className="pd-section">
				<div className="pd-section-head">
					<span className="l">/01 — Overview</span>
					<span>read time · 2 min</span>
				</div>
				<h2 className="pd-h2 reveal">
					What it is, and why it <em>exists</em>.
				</h2>
				<div className="pd-prose reveal">
					<div className="side">Background</div>
					<div className="body">
						{p.overview.map((para) => (
							<p key={para.slice(0, 40)}>{para}</p>
						))}
					</div>
				</div>
			</section>

			<section className="pd-section">
				<div className="pd-section-head">
					<span className="l">/02 — What&apos;s interesting</span>
					<span>4 details</span>
				</div>
				<h2 className="pd-h2 reveal">
					Four things I&apos;d point at if you asked me to{" "}
					<em>walk you through</em> it.
				</h2>
				<div className="pd-feature-list reveal">
					{p.features.map((f) => (
						<div className="pd-feature" key={f.n}>
							<div className="num">/ {f.n}</div>
							<h4>{f.h}</h4>
							<p>{f.p}</p>
						</div>
					))}
				</div>
			</section>

			{p.images && p.images.length > 1 && (
				<section className="pd-section">
					<div className="pd-section-head">
						<span className="l">/03 — Visuals</span>
						<span>{p.images.length - 1} screenshots</span>
					</div>
					<div
						className={`pd-gallery reveal${p.heroVideo ? " pd-gallery-row" : " pd-gallery-auto"}`}
					>
						{p.images.slice(1).map((img) => (
							<button
								type="button"
								className="pd-gal-img"
								key={img}
								style={{
									position: "relative",
									overflow: "hidden",
									cursor: "pointer",
								}}
								onClick={() => setLightbox(img)}
							>
								<Image
									src={img}
									alt={`${p.name} screenshot`}
									fill
									style={{ objectFit: "contain" }}
								/>
							</button>
						))}
					</div>
				</section>
			)}

			<blockquote className="pd-quote reveal">
				{p.quote.t}
				<span className="who">{p.quote.who}</span>
			</blockquote>

			<section className="pd-section">
				<div className="pd-section-head">
					<span className="l">/04 — Stack</span>
					<span>tools, in honest order</span>
				</div>
				<div className="pd-stack-row reveal">
					{p.stack.map((s) => (
						<span key={s}>{s}</span>
					))}
				</div>
			</section>

			{p.link && (
				<div
					className="pd-links reveal"
					style={{ display: "flex", gap: 16, marginBottom: 48 }}
				>
					<a
						href={p.link}
						target="_blank"
						rel="noreferrer"
						className="pd-link-btn"
					>
						View live ↗
					</a>
				</div>
			)}

			<nav className="pd-nav">
				<Link href={`/project/${prev}`}>
					<span className="dir">← Previous</span>
					<span className="name">{PROJECT_DETAILS[prev].name}</span>
				</Link>
				<Link href={`/project/${next}`} className="next">
					<span className="dir">Next →</span>
					<span className="name">{PROJECT_DETAILS[next].name}</span>
				</Link>
			</nav>
			{lightbox && (
				<div
					className="lightbox"
					role="dialog"
					onClick={closeLightbox}
					onKeyDown={(e) => {
						if (e.key === "Escape") closeLightbox();
					}}
				>
					<button
						type="button"
						className="lightbox-close"
						onClick={closeLightbox}
					>
						<svg
							width="24"
							height="24"
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
					<div
						className="lightbox-img"
						role="img"
						aria-label="Screenshot preview"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => e.stopPropagation()}
					>
						<Image
							src={lightbox}
							alt="Screenshot"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			)}
		</main>
	);
}
