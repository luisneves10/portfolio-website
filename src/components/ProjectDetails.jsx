import { GithubIcon, X } from "lucide-react";
import { useEffect } from "react";

export const ProjectDetails = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    if (!project) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-border"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                    <X size={20} />
                </button>

                <div className="w-full bg-muted flex items-center justify-center overflow-hidden">
                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            disablePictureInPicture
                            className="w-full h-auto max-h-[400px] object-contain"
                        />
                    ) : project.image ? (
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto max-h-[400px] object-contain"
                        />
                    ) : (
                        <div className="py-20 text-muted-foreground">No preview available</div>
                    )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
                        {/* 3. Tags */}
                        <div className="flex flex-wrap gap-2 items-center justify-center">
                            {project.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold border-b border-border pb-2">About the project</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {project.githubURL && (
                        <div className="pt-4">
                            <a 
                                href={project.githubURL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="primary-button inline-flex items-center gap-2"
                            >
                                <GithubIcon size={18} />
                                View More
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};