import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  details: string[];
}

const projects: Project[] = [
  {
    title: "A Machine Learning Approach For Phishing Attack Detection",
    details: [
      "Developed a system using Python that distinguished between legitimate and phishing websites.",
      "Implemented several popular ML algorithms including Logistic Regression, Support Vector Machine, Decision Tree, Random Forest, and XG Boost, as well as an Ensemble Model.",
      "Achieved highest accuracy of 98.80% with Random Forest.",
      "Research Paper is published in Scopus indexed Journal of Artificial Intelligence and Technology.",
    ],
  },
  {
    title: "Super Store Dashboard Using Power BI",
    details: [
      "Created an intuitive appealing dashboard for analyzing the sales and profit of Super Store.",
      "Applied Time Series analysis to generate sales forecast.",
    ],
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
      className="mb-8"
    >
      <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-3">
        {project.title}
      </h3>
      <ul className="space-y-2">
        {project.details.map((detail, i) => (
          <li
            key={i}
            className="text-sm md:text-base text-muted-foreground leading-relaxed flex items-start"
          >
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-foreground rounded-full shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Projects
          </h2>
          <div className="w-full h-px bg-border" />
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
