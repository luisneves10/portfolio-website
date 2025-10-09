import { Handshake, RefreshCw, Ruler, Search } from "lucide-react";

export const AboutSection = () => {
	return (
		<section
			id="about"
			className="py-24 px-4 relative"
		>
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary">Me</span>
				</h2>

				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Left Section */}
						<div className="space-y-6">
							<p>
								I'm a 25-year-old software developer from Portugal.
							</p>
							<p>
								Before discovering code, I worked in furniture design, which sharpened my eye
								for detail and taught me how creativity and structure can come together.
							</p>
							<p>
								Today, I bring that same mindset into software developement, wether I'm building
								applications, solving technical problems or collaborating with a team. I enjoy
								tackling challenges, finding solutions and continuously learning new tools and approaches.
							</p>
							<p>
								For me, coding is about crafting reliable systems, improving user experiences and working
								with others to turn ideas into reality.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
								<a href="#contact" className="primary-button">
									Get in Touch
								</a>
							</div>
						</div>

						{/* Right Section */}
						<div className="grid grid-cols-1 gap-6">
							<div className="gradient-border p-6 card-hover">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10">
										<Handshake className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg">
											Teamwork
										</h4>
										<p>
											Good things happen when ideas are shared and solutions are built together.
										</p>
									</div>
								</div>
							</div>
							<div className="gradient-border p-6 card-hover">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10">
										<Search className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-bold text-lg">
											Attention to Detail
										</h4>
										<p>
											Careful with details that shape the bigger picture.
										</p>
									</div>
								</div>
							</div>
							<div className="gradient-border p-6 card-hover">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10">
										<Ruler className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg">
											Rigor
										</h4>
										<p>
											Focused on quality and consistency in everything I build.
										</p>
									</div>
								</div>
							</div>
							<div className="gradient-border p-6 card-hover">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10">
										<RefreshCw className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg">
											Adaptability
										</h4>
										<p>
											Confortable in adapting to new tools and environments.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
