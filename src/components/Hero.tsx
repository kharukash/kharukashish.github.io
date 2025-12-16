import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import bgLight from "@/assets/bg-light.png";
import bgDark from "@/assets/bg-dark.png";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-6"
    >
      {/* Light mode background */}
      <div
        className="fixed inset-0 w-full h-full -z-10 dark:hidden"
        style={{
          backgroundImage: `url(${bgLight})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark mode background */}
      <div
        className="fixed inset-0 w-full h-full -z-10 hidden dark:block"
        style={{
          backgroundImage: `url(${bgDark})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Light overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-background/30 dark:bg-background/40" />

      <div className="max-w-5xl mx-auto text-center md:text-left">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-12 md:pl-[50px]">
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground font-body"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground"
            >
              Ashish Kharuk
            </motion.h1>
            
            {/* Role with Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4 mt-2"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-body">
                Software Engineer
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kharukash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github size={16} fill="currentColor" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-kharuk-511b841b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} fill="currentColor" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkharuk2001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[180px] h-[180px] rounded-full border-2 border-border overflow-hidden shrink-0"
          >
            <img
              src={profilePhoto}
              alt="Ashish Kharuk"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center gap-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[150px] h-[150px] rounded-full border-2 border-border overflow-hidden shrink-0"
          >
            <img
              src={profilePhoto}
              alt="Ashish Kharuk"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl text-muted-foreground font-body"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl font-heading font-bold text-foreground"
            >
              Ashish Kharuk
            </motion.h1>
          </div>

          {/* Role with Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 mt-2"
          >
            <p className="text-xl text-muted-foreground font-body">
              Software Engineer
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kharukash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <Github size={16} fill="currentColor" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kharuk-511b841b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} fill="currentColor" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishkharuk2001@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
