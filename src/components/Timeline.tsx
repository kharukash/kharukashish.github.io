import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Aspire Digital Technologies",
    location: "Remote",
    duration: "2024 – Present",
    skills: ["SAP CPQ", "IronPython", "Salesforce Integration", "API Development"],
  },
];

const ExperienceCard = ({
  item,
  index,
  side,
}: {
  item: ExperienceItem;
  index: number;
  side: "left" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className={`relative flex items-start ${side === "left" ? "justify-start" : "justify-end"}`}>
      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: side === "left" ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -80 : 80 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`w-[calc(50%-3rem)] ${side === "left" ? "mr-auto" : "ml-auto"}`}
      >
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-medium mt-1">{item.company}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-muted-foreground">{item.duration}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {item.skills.join(", ")}
          </p>
        </div>
      </motion.div>

      {/* Connector line to center */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className={`absolute top-8 h-px bg-border ${
          side === "left" 
            ? "left-[calc(50%-3rem)] right-1/2 origin-right" 
            : "right-[calc(50%-3rem)] left-1/2 origin-left"
        }`}
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
        className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full z-10"
      />
    </div>
  );
};

const Timeline = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Center Title */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />

          {/* Experience items - alternating left and right */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.title + exp.company}
                item={exp}
                index={index}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
