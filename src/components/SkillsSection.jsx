import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
	{ name: "Bash", icon: "/src/assets/bash.svg", category: "programming" },
	{ name: "C", icon: "/src/assets/c.svg", category: "programming" },
	{ name: "C++", icon: "/src/assets/cplusplus.svg", category: "programming" },
	{ name: "HTML", icon: "/src/assets/html5.svg", category: "programming" },
	{ name: "Tailwind CSS", icon: "/src/assets/tailwindcss.svg", category: "programming" },
	{ name: "JavaScript", icon: "/src/assets/javascript.svg", category: "programming" },
	{ name: "TypeScript", icon: "/src/assets/typescript.svg", category: "programming" },
	{ name: "React", icon: "/src/assets/react.svg", category: "programming" },
	{ name: "SQLite", icon: "/src/assets/sqlite.svg", category: "programming" },
	{ name: "Python", icon: "/src/assets/python.svg", category: "programming" },

	{ name: "Git", icon: "/src/assets/git.svg", category: "tools" },
	{ name: "Github", icon: "/src/assets/github.svg", category: "tools" },
	{ name: "Docker", icon: "/src/assets/docker.svg", category: "tools" },
	{ name: "Figma", icon: "/src/assets/figma.svg", category: "tools" },
	{ name: "VS Code", icon: "/src/assets/vscode.svg", category: "tools" },
	{ name: "Neovim", icon: "/src/assets/neovim.svg", category: "tools" },

	{ name: "AutoCAD", icon: "/src/assets/autocad.svg", category: "CAD" },
	{ name: "SolidWorks", icon: "/src/assets/solidworks.svg", category: "CAD" },
	{ name: "3D Studio MAX", icon: "/src/assets/threedsmax.svg", category: "CAD" },
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
