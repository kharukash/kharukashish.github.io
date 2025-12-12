import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  details?: string[];
}

const experiences: TimelineItem[] = [
  {
    title: "SAP Technical Consultant",
    subtitle: "Aspire Digital Technologies",
    duration: "04/2024 – Present",
    location: "Remote",
    details: [
      "Worked across multiple SAP CPQ environments including Development, QA and Production.",
      "Developed configurable Products, Quote and Custom Tables within SAP CPQ.",
    ],
  },
];

const education: TimelineItem[] = [
  {
    title: "Bachelor of Computer Engineering",
    subtitle: "Terna Engineering College | 9.14 CGPA",
    duration: "2019 – 2023",
    location: "Nerul",
  },
];

const TimelineCard = ({
  item,
  index,
  side,
}: {
  item: TimelineItem;
  index: number;
  side: "left" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -60 : 60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex ${side === "left" ? "justify-start" : "justify-end"} mb-8`}
    >
      {/* Connector dot */}
      <div
        className={`absolute top-4 ${
          side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        } w-3 h-3 bg-accent rounded-full z-10`}
      />
      
      {/* Content */}
      <div className={`w-[calc(50%-2rem)] ${side === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">
          {item.title}
        </h3>
        <p className="text-accent font-medium text-sm md:text-base">{item.subtitle}</p>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          {item.duration} · {item.location}
        </p>
        {item.details && (
          <ul className={`mt-3 space-y-1 text-xs md:text-sm text-muted-foreground ${side === "left" ? "text-right" : "text-left"}`}>
            {item.details.map((detail, i) => (
              <li key={i} className={side === "left" ? "before:content-['•'] before:mr-2" : "before:content-['•'] before:mr-2"}>
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const SectionLabel = ({
  label,
  side,
  delay,
}: {
  label: string;
  side: "left" | "right";
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -60 : 60 }}
      transition={{ duration: 0.6, delay }}
      className={`relative flex ${side === "left" ? "justify-start" : "justify-end"} mb-8`}
    >
      {/* Connector dot */}
      <div
        className={`absolute top-3 ${
          side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        } w-4 h-4 bg-foreground rounded-full z-10`}
      />
      
      <div className={`w-[calc(50%-2rem)] ${side === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
          {label}
        </h2>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Journey
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />

          {/* Experience section */}
          {experiences.map((exp, index) => (
            <TimelineCard key={exp.title} item={exp} index={index} side="left" />
          ))}
          
          {/* Experience label */}
          <SectionLabel label="Experience" side="left" delay={experiences.length * 0.15} />

          {/* Education label */}
          <SectionLabel label="Education" side="right" delay={(experiences.length + 1) * 0.15} />

          {/* Education section */}
          {education.map((edu, index) => (
            <TimelineCard
              key={edu.title}
              item={edu}
              index={index + experiences.length + 2}
              side="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
