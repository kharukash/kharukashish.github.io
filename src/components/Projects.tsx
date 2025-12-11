import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team analytics.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    github: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool that generates articles, summaries, and social media posts.",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills with smooth animations and responsive design.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-accent transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View source code"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
