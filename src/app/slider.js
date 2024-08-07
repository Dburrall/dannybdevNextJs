"use client";
import { useEffect, useRef, useState } from "react";

// Replace these with the paths to your actual images
const slides = ["/Gubagoo.png", "/Law.png", "/Reyrey.png", "/Shopsmith.png"];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slidesContainerRef = useRef(null);

	useEffect(() => {
		// Set up automatic sliding
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000);

		return () => clearInterval(interval); // Clear interval on component unmount
	}, []);

	useEffect(() => {
		// Update the carousel position
		if (slidesContainerRef.current) {
			slidesContainerRef.current.style.transform = `translateX(-${
				currentIndex * 100
			}%)`;
		}
	}, [currentIndex]);

	return (
		<div className='relative w-full max-w-md overflow-hidden'>
			<div
				className='flex transition-transform duration-500 ease-in-out'
				ref={slidesContainerRef}>
				{slides.map((src, index) => (
					<div
						key={index}
						className='min-w-full'>
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							className='w-auto h-auto object-cover' // Set width and height as needed
						/>
					</div>
				))}
			</div>
			{/* Optional: Add indicators to show current slide */}
		</div>
	);
};

export default Carousel;
