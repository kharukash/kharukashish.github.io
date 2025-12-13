import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/kharukash",
    label: "GitHub",
    fill: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ashish-kharuk-511b841b9/",
    label: "LinkedIn",
    fill: true,
  },
  {
    icon: Twitter,
    href: "http://x.com/KharukAshish",
    label: "Twitter",
    fill: true,
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ashishkharuk2001@gmail.com",
    label: "Email",
    fill: false,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
          
          <p className="text-muted-foreground mb-10">
            Feel free to reach out. I'm always open to discussing new opportunities.
          </p>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label={social.label}
              >
                {social.fill ? (
                  <social.icon size={22} fill="currentColor" />
                ) : (
                  <social.icon size={22} />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
