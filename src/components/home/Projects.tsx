import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "FiberFlow – Apparel PLM",
    description: "Engineered a full-stack Apparel PLM platform with admin-user dashboards for order, product, and user management. Integrated YOLO-based fabric defect detection via Flask, with real-time camera stream processing for automated textile quality control.",
    technologies: ["Next.js", "Django", "YOLO"],
  },
  {
    title: "ClinicalBrain – AI with a Medical Mind",
    description: "Implemented a RAG-based clinical Q&A tool using MIMIC-IV data with LLMs and Streamlit. Enabled context-aware medical responses with real-time document retrieval.",
    technologies: ["RAG", "LangChain", "Streamlit"],
  },
  {
    title: "BillBot – Speak and Let AI Create Your Bill",
    description: "Developed an AI-powered invoicing tool that converts voice input into structured invoice data using speech recognition and LLMs. Integrated PDF generation and WhatsApp delivery for real-time, professional billing.",
    technologies: ["NLP", "API Integration", "Speech Recognition"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col h-full bg-card rounded-lg overflow-hidden gradient-border"
    >
      <div className="bg-muted/30 h-48 flex items-center justify-center">
        <h3 className="text-xl font-bold title-gradient px-4 text-center">{project.title}</h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and projects I've contributed to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
