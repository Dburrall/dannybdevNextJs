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
		}, 3000); // Change slide every 3 seconds

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
							className='w-full h-auto object-cover'
						/>
					</div>
				))}
			</div>
			{/* Optional: Add indicators to show current slide */}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<span
						key={index}
						className={`block w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-gray-800" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
