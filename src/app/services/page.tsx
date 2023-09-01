export default function Services() {
	return (
		<main>
			<div className="flex h-screen w-full p-8 space-x-8 text-delftBlue">
				<div className="h-full w-full bg-linen shadow-lg rounded-3xl py-6 px-5">
					<div className="font-bold text-xl">Web Development</div>
					<div>
						<br />
						Ranges from: <br />
						<ul className="list-disc pl-4">
							<li>Static Websites</li>
							<li>Dynamic Websites</li>
							<li>Full Stack Applications</li>
						</ul>
					</div>
				</div>
				<div className="h-full w-full bg-linen shadow-lg rounded-3xl py-6 px-5">
					<div className="font-bold text-xl">Tutoring</div>
					<div>
						<br />
						Ranges from: <br />
						<ul className="list-disc pl-4">
							<li>Primary School Science</li>
							<li>Primary School Mathematics</li>
							<li>Elementary Mathematics</li>
							<li>Additional Mathematics</li>
							<li>Physics</li>
							<li>Chemistry</li>
							<li>Programming</li>
						</ul>
					</div>
				</div>
				<div className="h-full w-full bg-linen shadow-lg rounded-3xl py-6 px-5">
					<div className="font-bold text-xl ">Ad-Hoc Requests</div>
					<div>
						<br /> Anything that you can think of! <br /> Reach out to{" "}
						<a href="mailto:ryanljq@gmail.com" className="underline">
							me
						</a>{" "}
						to discuss more.
					</div>
				</div>
			</div>
		</main>
	);
}
