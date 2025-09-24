import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
	{ name: "Bash", icon: "/assets/bash.svg", category: "programming" },
	{ name: "C", icon: "/assets/c.svg", category: "programming" },
	{ name: "C++", icon: "/assets/cplusplus.svg", category: "programming" },
	{ name: "HTML", icon: "/assets/html5.svg", category: "programming" },
	{ name: "Tailwind CSS", icon: "/assets/tailwindcss.svg", category: "programming" },
	{ name: "JavaScript", icon: "/assets/javascript.svg", category: "programming" },
	{ name: "TypeScript", icon: "/assets/typescript.svg", category: "programming" },
	{ name: "React", icon: "/assets/react.svg", category: "programming" },
	{ name: "SQLite", icon: "/assets/sqlite.svg", category: "programming" },
	{ name: "Python", icon: "/assets/python.svg", category: "programming" },

	{ name: "Git", icon: "/assets/git.svg", category: "tools" },
	{ name: "Github", icon: "/assets/github.svg", category: "tools" },
	{ name: "Docker", icon: "/assets/docker.svg", category: "tools" },
	{ name: "Figma", icon: "/assets/figma.svg", category: "tools" },
	{ name: "VS Code", icon: "/assets/vscode.svg", category: "tools" },
	{ name: "Neovim", icon: "/assets/neovim.svg", category: "tools" },

	{ name: "AutoCAD", icon: "/assets/autocad.svg", category: "CAD" },
	{ name: "SolidWorks", icon: "/assets/solidworks.svg", category: "CAD" },
	{ name: "3D Studio MAX", icon: "/assets/threedsmax.svg", category: "CAD" },
];

const categories = ["all", "programming", "tools", "CAD"];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

	return (
		<section
			id="skills"
			className="py-24 px-4 relative"
		>
			<div className="container mx-auto max-w-lg sm:max-w-3xl lg:max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					Technical <span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-8 mb-12">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={cn("transition-colors duration-300 capitalize hover:cursor-pointer",
								activeCategory === category ? "primary-button" : "secondary-button")}
						>
							{category}
						</button>
					))}

				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-5">
							<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
								<img src={skill.icon} alt={skill.name} className="w-10 h-10 filter-primary" />
							</div>
							<h3 className="font-semibold text-lg">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
