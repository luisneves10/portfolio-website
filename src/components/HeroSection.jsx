import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center px-4 gap-5"
		>
			<div className="container max-w-4xl mx-auto text-center z-10">
				<div className="space-y-6 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						<span className="opacity-0 animate-fade-in">Hi, I'm</span>
						<span className="text-primary opacity-0 animate-fade-in-delay-1"> Luís</span>
						<span className="text-gradient opacity-0 animate-fade-in-delay-2"> Neves</span>
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
						a Software Developer from Porto, Portugal.
					</p>
					<div className="hidden md:flex opacity-0 animate-fade-in-delay-4 primary-button cursor-pointer">
						<a href="#projects">
							View My Work
						</a>
					</div>
				</div>
			</div>
			<div className="md:hidden flex flex-col gap-3 opacity-0 animate-fade-in-delay-4">
				<img src="/cv_qrcode.svg" className="w-100 rounded-4xl shadow-md" />
				<p className="text-sm text-foreground/80 mx-auto opacity-0 animate-fade-in-delay-3">
					Scan the QR code to get my CV, or click <span className="underline">
						<a href="/CV_LuisNeves.pdf" target="_blank" rel="noopener noreferrer">
							here
						</a>
					</span>
				</p>
			</div>

			<div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-sm">Get to know me</span>
				<ArrowDown className="h-5 w-5 text-primary" />
			</div>

		</section>)
}
