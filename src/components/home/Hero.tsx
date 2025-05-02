import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="title-gradient">OGUNLEYE JOHN</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-12">
            <Typewriter
              options={{
                strings: [
                  "AI & ML Enthusiast",
                  "Full Stack Developer",
                  "DevOps Engineer",
                  "Mobile App Developer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Motivated Computer Science student passionate about AI, backend, app development, 
            and DevOps, eager to excel as a team player and create innovative applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button 
                className="px-6 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                className="px-6 py-6 border-primary text-primary hover:bg-primary/10"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src="/profile.jpg" 
            alt="Huzaifa Saqib" 
            className="w-[300px] h-[250px] md:w-[450px] md:h-[350px] lg:w-[600px] lg:h-[450px] rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] object-contain pt-4 md:pt-6 lg:pt-8 pb-2 pr-2 md:ml-12 lg:ml-24"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
