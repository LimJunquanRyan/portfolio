import Image from "next/image";
import me from "../../public/me.jpg";

export default function Index() {
	return (
		<main>
			<div className="grid grid-cols-2 auto-rows-fr w-full h-fit">
				<div className="rounded-3xl overflow-hidden shadow-lg m-32 translate-x-1/2 -translate-y-[12%]">
					<Image
						src={me}
						alt={`Logo`}
						width={128}
						height={128}
						sizes={"100vw"}
						layout="responsive"
					/>
				</div>
				<div className="inline rounded-3xl bg-white shadow-lg m-32 p-16 text-xl -translate-x-1/2 translate-y-[12%]">
					Hello, I'm Ryan! 👋 <br /> I'm a software engineer and I love to build
					things.
				</div>
			</div>
		</main>
	);
}
