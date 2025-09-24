export const NotFound = () => {
	document.documentElement.classList.add("dark")
	localStorage.setItem("theme", "dark")

	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
			<h2 className="text-3xl md:text-4xl font-bold">
				Page Not Found
			</h2>
		</div>
	)
}
