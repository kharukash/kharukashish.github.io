import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "SQL", "IronPython", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Version Control",
    skills: ["Git", "Bitbucket"],
  },
  {
    name: "Tools",
    skills: ["SAP CPQ", "Salesforce", "ServiceNow", "Jira", "ALM", "Postman", "VSCode", "Jupyter Notebook", "Power BI"],
  },
];

const About = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const activeSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            About
          </h2>
          <div className="w-12 h-0.5 bg-accent mb-8" />
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-body">
            I'm a passionate Software Engineer with a keen eye for building elegant, 
            scalable solutions. I specialize in crafting seamless digital experiences 
            that bridge the gap between complex systems and intuitive user interfaces. 
            When I'm not coding, you'll find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* Skills Subsection */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            My Skills
          </h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-secondary/50 rounded-xl p-4 text-center hover:bg-secondary transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
