import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      </div>
    </section>
  );
};

export default About;
