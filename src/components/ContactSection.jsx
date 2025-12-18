import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
	return (
		<section id="contact" className=" py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary">Touch</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-around gap-3">
					<a
						href="mailto:luisneves10@gmail.com"
						className="hover:scale-105 hover:text-primary transition ease-in-out duration-300"
					>
						<div className="flex items-center space-x-2">
							<div className="p-3 rounded-full bg-primary/10">
								<Mail className="h-6 w-6 text-primary" />
							</div>
							<p className="text-muted-foreground font-medium transition-colors">
								luisneves10@gmail.com
							</p>
						</div>
					</a>
					<a
						href="https://linkedin.com/in/luisfbneves"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-105 hover:text-primary transition ease-in-out duration-300"
					>
						<div className="flex items-center space-x-2">
							<div className="p-3 rounded-full bg-primary/10">
								<Linkedin className="h-6 w-6 text-primary" />
							</div>
							<p className="text-muted-foreground font-medium transition-colors">
								luisfbneves
							</p>
						</div>
					</a>
					<a
						href="https://github.com/luisneves10/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-105 hover:text-primary transition ease-in-out duration-300"
					>
						<div className="flex items-center space-x-2">
							<div className="p-3 rounded-full bg-primary/10">
								<Github className="h-6 w-6 text-primary" />
							</div>
							<p className="text-muted-foreground font-medium transition-colors">
								luisneves10
							</p>
						</div>
					</a>
				</div>
			</div>
		</section >
	);
}
