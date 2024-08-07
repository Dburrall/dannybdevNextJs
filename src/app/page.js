import Carousel from "./slider";
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<nav>
				<p>DannyBdev</p>
			</nav>

			<h1>Mine Name is Daniel B, & I'm a Dev.</h1>

			<h2>Sites I've worked on</h2>

			<Carousel />

			<h3>Explore some of many (unfinished) projects</h3>

			<a
				href='https://github.com'
				target='_blank'
				rel='noopener noreferrer'>
				<img
					src='/github-logo.png' // Adjust the path if necessary
					alt='GitHub Logo'
					className='w-16 h-16 bg-slate-200' // Adjust size as needed
				/>
			</a>

			<footer>Version 2.0.0</footer>
		</main>
	);
}
