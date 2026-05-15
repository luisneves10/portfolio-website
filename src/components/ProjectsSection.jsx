import { ArrowRight, GithubIcon } from "lucide-react";
import { ProjectDetails } from "./ProjectDetails";
import { useState } from "react";

const projects = [
	{
		id: 1,
		title: "Bakord",
		short: "Order Management App for Pastry Shops.",
		description: "Bakord is a full-stack order management app built for a real pastry shop to replace paper notebooks during high-demand periods like Christmas. It handles order registration, production counting, label printing, and pickup management. Built with React, Django, PostgreSQL, and Docker, it was my first application deployed and used in the real world — and the one that taught me what it actually means to build software for solving real-world problems.",
		image: null,
		video: "/projects/bakord_demo.mov",
		tags: ["Web", "HTML", "TailwindCSS", "React", "Django", "PostgreSQL", "Docker"],
		githubURL: null,
	},

	{
		id: 2,
		title: "Portfolio Website",
		short: "This website... duh.",
		description: "This portfolio was my first real project with React, built to showcase who I am and what I build. It features a light/dark mode toggle, a filterable skills grid, and a projects section with previews. Built with React, TailwindCSS, and Vite, it taught me how to structure a component-based UI, manage state, and think about responsive design from scratch.",
		image: "/projects/portfolio.gif",
		video: null,
		tags: ["Web", "HTML", "TailwindCSS", "React"],
		githubURL: "https://github.com/luisneves10/portfolio-website",
	},

	{
		id: 3,
		title: "ft_transcendence",
		short: "Pong game website.",
		description: "ft_transcendence is a full-stack Pong platform built as the final project of the 42 curriculum. It supports local and online multiplayer, 4-player tournaments, user authentication with 2FA and Google OAuth, and a 3D game engine powered by Babylon.js. Developed in a team of four, I led the frontend and implemented multi-language support (EN/PT/FR). The project taught me how to collaborate on a large codebase using Git workflows, integrate complex backend systems, and ship a real-time web application end to end.",
		image: "/projects/ft_transcendence.gif",
		video: null,
		tags: ["Web", "HTML", "TypeScript", "TailwindCSS", "Node.js", "SQLite", "Docker"],
		githubURL: "https://github.com/isilva-t/42.Transcendence",
	},
	{
		id: 4,
		title: "cub3d",
		short: "3D game inspired in Wolfenstein 3D.",
		description: "cub3d is a 42 group project where we built a basic 3D game engine from scratch in C, inspired by Wolfenstein 3D. It uses raycasting to render a 3D perspective from a 2D map, with texture mapping, player movement, and map parsing. The project deepened my understanding of graphics programming, linear algebra, and writing performance-critical code in C.",
		image: "/projects/cub3d.gif",
		video: null,
		tags: ["C", "Graphics", "Raycasting", "3D Game"],
		githubURL: "https://github.com/luisneves10/cub3d",
	},
]

export const ProjectsSection = () => {
	const [selectedProject, setSelectedProject] = useState(null)
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured <span className="text-primary">Projects</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my projects. Each project hugely contributed to my learning
					journey and to consolidate my skills.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:cursor-pointer"
							onClick={() => setSelectedProject(project)}
						>
							<div className="md:h-42 overflow-hidden">
								{project.image && (
									<img src={project.image} alt={project.title} className="object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
								)}
								{project.video && (
									<video src={project.video} type="video/mov" autoPlay muted loop disablePictureInPicture className="object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
								)}
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, index) => (
										<span key={`${project.id}-${index}`} className="px-2 py-1 text-xs font-medium border rounded-full ">{tag}</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">{project.short}</p>
								
								{project.githubURL && (
									<div className="flex justify-center items-center">
										<a
											href={project.githubURL}
											target="_blank"
											rel="noopener noreferrer"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<GithubIcon size={20} />
										</a>
									</div>
								)}

							</div>
						</div>
					))}
				</div>
				{selectedProject && (
					<ProjectDetails
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				)}

				<p className="mt-12">Want to see more?</p>
				<div className="text-center mt-2">
					<a
						href="https://github.com/luisneves10/"
						target="_blank"
						rel="noopener noreferrer"
						className="primary-button w-fit flex items-center mx-auto gap-2"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>

			</div>
		</section>
	);
};
