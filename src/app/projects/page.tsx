import projects from "@/controller/projects.controller";
import Image from "next/image";

export default function Projects() {
	const projectList = projects();
	return (
		<main>
			<div className="h-full w-full grid grid-cols-3 auto-rows-fr bg-white first:aspect-square">
				{projectList.map((item, index) => (
					<div
						key={index}
						className="relative h-auto w-auto bg-slate-200 overflow-hidden transition-transform group hover:scale-95">
						<Image
							src={item}
							alt="project"
							sizes="100vw"
							fill={true}
							className="object-cover"
						/>
						<div className="absolute w-full h-full bg-black opacity-60 text-white text-center pt-32 hidden group-hover:block"></div>
					</div>
				))}
			</div>
		</main>
	);
}
