"use client";

import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
	return (
		<section className="section shell" id="path">
			<div className="section-head">
				<span className="label">/03 — Path</span>
				<span>building since 2025</span>
			</div>
			<h2 className="section-title reveal">
				From founding engineer to contract work — shipping production code at
				every stop.
			</h2>
			<div className="exp-list">
				{EXPERIENCE.map((e) => (
					<div className="exp reveal" key={e.at}>
						<div className="exp-when">{e.when}</div>
						<div className="exp-role">
							{e.role}{" "}
							<span className="at">
								@ <em>{e.at}</em>
							</span>
						</div>
						<div className="exp-desc">{e.desc}</div>
					</div>
				))}
			</div>
		</section>
	);
}
