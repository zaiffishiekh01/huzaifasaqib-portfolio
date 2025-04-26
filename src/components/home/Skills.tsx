
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const skillsData = [
  {
    category: "AI & Machine Learning",
    skills: ["Supervised & Unsupervised Learning", "Regression", "Classification", "Clustering", "Ensemble Methods", "Model Evaluation", "Feature Engineering", "Hyperparameter Tuning"]
  },
  {
    category: "Deep Learning & Generative AI",
    skills: ["Neural Networks", "CNNs", "RNNs", "GANs", "Transformers", "Transfer Learning", "Reinforcement Learning", "BERT", "GPT", "NLP", "Fine-Tuning", "Embeddings", "RAG", "TensorFlow", "PyTorch"]
  },
  {
    category: "API Integration",
    skills: ["RESTful APIs", "Integration with Backend Services", "Authentication", "Endpoint Management", "API Testing", "Data Integration", "AI-driven APIs"]
  },
  {
    category: "Prompt Engineering",
    skills: ["Prompt Design", "Zero-shot/Few-shot Learning", "Chain-of-Thought", "In-context Learning", "Instruction-based Prompts", "Specificity", "Hallucination Reduction", "Prompt Chaining"]
  },
  {
    category: "Development & DevOps",
    skills: ["Backend (Django)", "DevOps", "CI/CD", "Docker", "Kubernetes", "Cloud", "Mobile App Dev (React Native)", "Frontend (React, Next.js)"]
  }
];

const SkillCard = ({ category, skills, index }: { category: string; skills: string[]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-card rounded-lg p-6 gradient-border"
    >
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 text-sm rounded-full bg-muted text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.slice(0, 3).map((category, index) => (
            <SkillCard 
              key={category.category} 
              category={category.category} 
              skills={category.skills} 
              index={index} 
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/skills">
            <Button className="gradient-border">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
