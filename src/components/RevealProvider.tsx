"use client";

import { useEffect } from "react";

export default function RevealProvider() {
	useEffect(() => {
		const observe = () => {
			const els = document.querySelectorAll(".reveal, .lift");
			const io = new IntersectionObserver(
				(entries) => {
					entries.forEach((e) => {
						if (e.isIntersecting) {
							e.target.classList.add("in");
							io.unobserve(e.target);
						}
					});
				},
				{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
			);
			for (const el of els) io.observe(el);
			return io;
		};

		// Initial observe
		let io = observe();

		// Re-observe on route changes (MutationObserver catches new elements)
		const mo = new MutationObserver(() => {
			io.disconnect();
			io = observe();
		});
		mo.observe(document.body, { childList: true, subtree: true });

		return () => {
			io.disconnect();
			mo.disconnect();
		};
	}, []);

	return null;
}
