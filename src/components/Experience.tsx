import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    duration: "Jan 2023 - Present",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Innovation Labs",
    duration: "Mar 2021 - Dec 2022",
    location: "New York, NY",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    duration: "Jun 2019 - Feb 2021",
    location: "Remote",
    skills: ["Vue.js", "JavaScript", "Sass", "Figma"],
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    duration: "Jan 2018 - May 2019",
    location: "Austin, TX",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

const ExperienceCard = ({ 
  item, 
  index 
}: { 
  item: ExperienceItem; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-12`}
    >
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
            {item.title}
          </h3>
          <p className="text-accent font-medium mb-3">{item.company}</p>
          <p className="text-sm text-muted-foreground mb-2">
            {item.duration} · {item.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />
          
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
