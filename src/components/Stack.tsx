"use client";

import React from "react";
import { STACK } from "@/lib/data";
import { useTheme } from "@/lib/theme";

export default function Stack() {
	const { theme } = useTheme();

	return (
		<section className="section shell" id="stack">
			<div className="section-head">
				<span className="label">/02 — Stack</span>
				<span>tools, not religions</span>
			</div>
			<h2 className="section-title reveal">
				I&apos;m fluent across the stack — but I&apos;d rather know <em>why</em>{" "}
				than have a strong opinion about every layer.
			</h2>
			<div className="stack-grid reveal">
				{STACK.map((s) => (
					<div className="stack-cell" key={s.cat}>
						<div className="cat">{s.cat}</div>
						<div className="items">
							{theme === "terminal"
								? s.items.map((it) => (
										<div key={it}>
											{it === s.hi ? <b>★ {it}</b> : <>· {it}</>}
										</div>
									))
								: s.items.join(" · ")}
						</div>
					</div>
				))}
			</div>

			<div className="marquee" aria-hidden="true">
				<div className="marquee-track">
					{["a", "b"].map((k) => (
						<React.Fragment key={k}>
							<span>Typography</span>
							<span className="dot">●</span>
							<span>Motion</span>
							<span className="dot">●</span>
							<span>Color theory</span>
							<span className="dot">●</span>
							<span>Information density</span>
							<span className="dot">●</span>
							<span>Latency</span>
							<span className="dot">●</span>
							<span>Edge cases</span>
							<span className="dot">●</span>
							<span>Empty states</span>
							<span className="dot">●</span>
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
