import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cpu } from "lucide-react";

const expertiseAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "I craft responsive, pixel-perfect user interfaces with modern frameworks. Focus on performance, accessibility, and delightful user experiences.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust APIs and scalable server architectures. Experienced in designing efficient database schemas and microservices.",
    techStack: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    icon: Cpu,
    title: "DevOps & Cloud",
    description:
      "Streamlining development workflows with CI/CD pipelines, containerization, and cloud infrastructure for seamless deployments.",
    techStack: ["Docker", "AWS", "Git", "GitHub Actions", "Linux"],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Expertise
          </h2>
          <div className="w-12 h-0.5 bg-accent mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="mb-4">
                  <area.icon
                    size={32}
                    className="text-accent group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
