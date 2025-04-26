
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden rounded-lg gradient-border"
          >
            <div className="aspect-w-4 aspect-h-3 bg-muted/50 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold title-gradient mb-4">BS Computer Science</h3>
                <p className="text-lg mb-2">FAST-NUCES, Chiniot-Faisalabad Campus</p>
                <p className="text-muted-foreground">August 2021 - June 2025</p>
                <p className="mt-4 font-semibold">CGPA: 3.43/4.0</p>
                <div className="mt-6 p-4 bg-background/50 rounded-md">
                  <h4 className="font-medium mb-2">Key Courses:</h4>
                  <p className="text-muted-foreground">
                    AI, Machine Learning, NLP, Generative AI, DevOps, Software for Mobile Devices
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-6">
              With my undergraduate degree just around the corner, I have explored AI and Machine Learning to solve real-world problems 
              and create innovative applications. I have trained neural networks for generative models, 
              worked on API integration and Prompt Engineering, and gained experience in building and deploying 
              AI models, mobile apps with React Native, and Python backend systems with Django, utilizing DevOps for deployment.
            </p>
            <p className="text-muted-foreground mb-6">
              Committed to continuous learning, I am passionate about applying my skills to drive innovation and deliver impactful solutions.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {["Cricket", "Badminton", "Travelling", "Watching Documentaries", "Islamic History"].map((item) => (
                  <span key={item} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/about">
              <Button 
                variant="outline" 
                className="gradient-border" 
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
