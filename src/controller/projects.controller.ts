export default function projects() {
	const projectList = process.env.projectList?.split(",") || [""];
	return projectList;
}
