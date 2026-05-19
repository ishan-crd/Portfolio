"use client";

import { useEffect, useState } from "react";

export function CounterDemo() {
	const [n, setN] = useState(2148);
	return (
		<div className="live-demo">
			<div className="demo-counter">
				<div className="num">{n.toLocaleString()}</div>
				<div style={{ display: "flex", gap: 8 }}>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setN((v) => v + 1);
						}}
					>
						+1
					</button>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setN((v) => v + 100);
						}}
					>
						+100
					</button>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setN(2148);
						}}
					>
						reset
					</button>
				</div>
			</div>
		</div>
	);
}

export function PaletteDemo() {
	const colors = ["#c25c2a", "#e8b89c", "#14110d", "#8a8478", "#f3efe7"];
	const colorsT = ["#ff5c8a", "#b35a6e", "#0a0b0d", "#5a6068", "#e7e9ec"];
	const [active, setActive] = useState(2);
	const [isTerminal, setIsTerminal] = useState(false);

	useEffect(() => {
		setIsTerminal(
			document.documentElement.getAttribute("data-theme") === "terminal",
		);
		const obs = new MutationObserver(() => {
			setIsTerminal(
				document.documentElement.getAttribute("data-theme") === "terminal",
			);
		});
		obs.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"],
		});
		return () => obs.disconnect();
	}, []);

	const palette = isTerminal ? colorsT : colors;
	return (
		<div className="live-demo">
			<div className="demo-palette">
				{palette.map((c, i) => (
					// biome-ignore lint/a11y/noStaticElementInteractions: decorative hover effect
					<div
						key={c}
						onMouseEnter={() => setActive(i)}
						style={{
							background: c,
							flex: active === i ? 3 : 1,
						}}
					/>
				))}
			</div>
		</div>
	);
}

export function WaveDemo() {
	const [bars, setBars] = useState(() =>
		Array.from({ length: 28 }, (_, i) => 20 + Math.abs(Math.sin(i * 0.5)) * 50),
	);

	useEffect(() => {
		let f = 0;
		const id = setInterval(() => {
			f += 0.3;
			setBars((prev) =>
				prev.map(
					(_, i) =>
						12 + Math.abs(Math.sin(i * 0.3 + f)) * 70 + Math.random() * 12,
				),
			);
		}, 120);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="live-demo">
			<div className="demo-wave">
				{bars.map((h, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: dynamic animated bars with no stable id
					<span key={i} style={{ height: `${h}%` }} />
				))}
			</div>
		</div>
	);
}

export function CmdDemo() {
	const [q, setQ] = useState("");
	const [sel, setSel] = useState(0);
	const items = [
		{ label: "Open project", k: "↵" },
		{ label: "Toggle theme", k: "T" },
		{ label: "Copy email", k: "E" },
		{ label: "Visit GitHub", k: "G" },
	];
	const filtered = items.filter((x) =>
		x.label.toLowerCase().includes(q.toLowerCase()),
	);

	return (
		<div className="live-demo">
			<div className="demo-cmd">
				<input
					placeholder="Type a command…"
					value={q}
					onClick={(e) => e.preventDefault()}
					onChange={(e) => {
						setQ(e.target.value);
						setSel(0);
					}}
					onKeyDown={(e) => {
						if (e.key === "ArrowDown")
							setSel((s) => Math.min(s + 1, filtered.length - 1));
						if (e.key === "ArrowUp") setSel((s) => Math.max(s - 1, 0));
					}}
				/>
				<div
					style={{
						marginTop: 6,
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
					{filtered.length === 0 && (
						<div style={{ opacity: 0.5, padding: "6px 8px" }}>No results</div>
					)}
					{filtered.map((it, i) => (
						<div
							key={it.label}
							role="option"
							tabIndex={0}
							aria-selected={i === sel}
							className={`row ${i === sel ? "sel" : ""}`}
							onMouseEnter={() => setSel(i)}
						>
							{it.label}
							<span className="k">{it.k}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function DemoRenderer({ type }: { type: string }) {
	switch (type) {
		case "wave":
			return <WaveDemo />;
		case "counter":
			return <CounterDemo />;
		case "palette":
			return <PaletteDemo />;
		case "cmd":
			return <CmdDemo />;
		default:
			return null;
	}
}
