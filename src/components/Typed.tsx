"use client";

import { useEffect, useState } from "react";

interface TypedLine {
	kind: "in" | "out";
	text: string;
}

interface TypedProps {
	lines: TypedLine[];
	speed?: number;
	startDelay?: number;
}

export default function Typed({
	lines,
	speed = 30,
	startDelay = 200,
}: TypedProps) {
	const [shown, setShown] = useState<TypedLine[]>([]);

	useEffect(() => {
		let cancelled = false;
		let timeoutId: ReturnType<typeof setTimeout>;

		async function run() {
			await new Promise<void>((r) => {
				timeoutId = setTimeout(r, startDelay);
			});
			for (let i = 0; i < lines.length; i++) {
				if (cancelled) return;
				const line = lines[i];
				for (let j = 0; j <= line.text.length; j++) {
					if (cancelled) return;
					setShown((prev) => {
						const copy = [...prev];
						copy[i] = { ...line, text: line.text.slice(0, j) };
						return copy;
					});
					await new Promise<void>((r) => {
						timeoutId = setTimeout(r, speed);
					});
				}
				await new Promise<void>((r) => {
					timeoutId = setTimeout(r, 180);
				});
			}
		}

		run();
		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	}, [lines, speed, startDelay]);

	return (
		<>
			{shown.map((l, i) => (
				<div key={`${l.kind}-${l.text.slice(0, 20)}`}>
					{l.kind === "in" && <span className="prompt">$ </span>}
					{l.kind === "out" && <span className="prompt">› </span>}
					<span className={l.kind === "out" ? "out" : ""}>{l.text}</span>
					{i === shown.length - 1 && shown.length < lines.length && (
						<span className="caret" />
					)}
				</div>
			))}
			{shown.length === lines.length && shown.length > 0 && (
				<div>
					<span className="prompt">$ </span>
					<span className="caret" />
				</div>
			)}
		</>
	);
}
