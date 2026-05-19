"use client";

import { NOW } from "@/lib/data";

export default function Now() {
	return (
		<section className="section shell" id="now">
			<div className="section-head">
				<span className="label">/04 — Now</span>
				<span>updated this week</span>
			</div>
			<h2 className="section-title reveal">
				What I&apos;m <em>actually</em> doing right now — not a resume, just the
				honest truth.
			</h2>
			<div className="now reveal">
				<ul className="now-list">
					{NOW.map((it) => (
						<li key={it.when}>
							<div className="when">{it.when}</div>
							<div className="what">{it.what}</div>
						</li>
					))}
				</ul>
				<div className="now-side">
					<h4>Working theory</h4>
					<p className="now-quote">
						&ldquo;I turn ideas into polished, functional products with{" "}
						<em>clean, efficient code</em>. Smooth, scalable solutions that make
						a real impact.&rdquo;
					</p>
					<h4 style={{ marginTop: 32 }}>Currently obsessed with</h4>
					<p className="now-quote" style={{ fontSize: 22 }}>
						Building and shipping entire products from scratch — landing pages,
						dashboards, mobile apps, all the way to the App Store. The full
						loop.
					</p>
				</div>
			</div>
		</section>
	);
}
