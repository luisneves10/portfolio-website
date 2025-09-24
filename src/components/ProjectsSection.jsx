import { ArrowRight, GithubIcon } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Portfolio Website",
		description: "This website... duh.",
		image: "/projects/portfolio.gif",
		tags: ["Web", "HTML", "TailwindCSS", "React"],
		githubURL: "#",
	},

	{
		id: 2,
		title: "ft_transcendence",
		description: "Pong game website.",
		image: "/projects/ft_transcendence.gif",
		tags: ["Web", "HTML", "TypeScript", "TailwindCSS", "Node.js", "SQLite"],
		githubURL: "https://github.com/isilva-t/42.Transcendence",
	},

	{
		id: 3,
		title: "cub3d",
		description: "3D game inspired in Wolfenstein 3D.",
		image: "/projects/cub3d.gif",
		tags: ["C", "Graphics", "Raycasting", "3D Game"],
		githubURL: "https://github.com/luisneves10/cub3d",
	},
]

export const ProjectsSection = () => {
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
					{projects.map((project, key) => (
						<div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
							<div className="md:h-42 overflow-hidden">
								<img src={project.image} alt={project.title} className="object-cover transition-transform duration-500 group-hover:scale-110" />
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full ">{tag}</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">{project.description}</p>

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

							</div>
						</div>
					))}
				</div>

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
