"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ShowreelPreview({
	image,
	video,
	alt,
}: {
	image?: string;
	video: string;
	alt: string;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [hovering, setHovering] = useState(false);

	const handleEnter = () => {
		setHovering(true);
		videoRef.current?.play();
	};

	const handleLeave = () => {
		setHovering(false);
		const v = videoRef.current;
		if (v) {
			v.pause();
			v.currentTime = 0;
		}
	};

	return (
		<div
			className="showreel"
			role="img"
			aria-label={alt}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			{/* Static poster image — visible when not hovering */}
			{image && (
				<Image
					src={image}
					alt={alt}
					fill
					style={{
						objectFit: "contain",
						opacity: hovering ? 0 : 1,
						transition: "opacity 0.3s ease",
					}}
				/>
			)}

			{/* Video layer — always visible if no poster, fade in on hover if poster */}
			<video
				ref={videoRef}
				src={video}
				muted
				loop
				playsInline
				preload="auto"
				aria-label={alt}
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "contain",
					opacity: image ? (hovering ? 1 : 0) : 1,
					transition: "opacity 0.3s ease",
				}}
			/>

			{/* Showreel play icon */}
			<div className="showreel-icon" style={{ opacity: hovering ? 0 : 1 }}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke="none"
					aria-hidden="true"
				>
					<polygon points="5 3 19 12 5 21 5 3" />
				</svg>
				<span>showreel</span>
			</div>
		</div>
	);
}
