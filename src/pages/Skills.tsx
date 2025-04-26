
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const skillsData = [
  {
    category: "AI & Machine Learning",
    description: "Expertise in various machine learning techniques and methodologies for building intelligent systems.",
    skills: [
      "Supervised & Unsupervised Learning", 
      "Regression", 
      "Classification", 
      "Clustering", 
      "Ensemble Methods", 
      "Model Evaluation", 
      "Feature Engineering", 
      "Hyperparameter Tuning"
    ]
  },
  {
    category: "Deep Learning & Generative AI",
    description: "Experience with neural networks and deep learning models for complex AI applications.",
    skills: [
      "Neural Networks", 
      "CNNs", 
      "RNNs", 
      "GANs", 
      "Transformers", 
      "Transfer Learning", 
      "Reinforcement Learning", 
      "Multiclass Classification", 
      "BERT", 
      "GPT", 
      "NLP", 
      "Fine-Tuning", 
      "Embeddings", 
      "RAG", 
      "TensorFlow", 
      "PyTorch"
    ]
  },
  {
    category: "API Integration",
    description: "Proficiency in connecting applications through APIs and creating seamless data flows.",
    skills: [
      "RESTful APIs", 
      "Integration with Backend Services", 
      "Authentication", 
      "Endpoint Management", 
      "API Testing", 
      "Data Integration", 
      "AI-driven APIs"
    ]
  },
  {
    category: "Prompt Engineering",
    description: "Skilled in crafting effective prompts for generative AI models to produce desired outputs.",
    skills: [
      "Prompt Design", 
      "Zero-shot/Few-shot Learning", 
      "Chain-of-Thought", 
      "In-context Learning", 
      "Instruction-based Prompts", 
      "Specificity", 
      "Hallucination Reduction", 
      "Prompt Chaining"
    ]
  },
  {
    category: "Backend Development",
    description: "Experience building server-side applications and APIs to power web applications.",
    skills: [
      "Django",
      "Python",
      "RESTful API Design",
      "Database Management",
      "Server Configuration",
      "Authentication & Authorization"
    ]
  },
  {
    category: "DevOps",
    description: "Knowledge of tools and practices for continuous integration and deployment of applications.",
    skills: [
      "CI/CD", 
      "Docker", 
      "Kubernetes", 
      "Automation", 
      "Cloud", 
      "Version Control", 
      "Infrastructure as Code", 
      "Scripting", 
      "Monitoring", 
      "Deployment"
    ]
  },
  {
    category: "Mobile App Development",
    description: "Building cross-platform mobile applications with modern frameworks.",
    skills: [
      "React Native",
      "Mobile UI/UX Design",
      "Native API Integration",
      "App Performance Optimization",
      "App State Management",
      "Navigation Flows"
    ]
  },
  {
    category: "Frontend Development",
    description: "Creating responsive and interactive user interfaces for web applications.",
    skills: [
      "React", 
      "Next.js",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "Responsive Design",
      "UI Component Libraries",
      "State Management"
    ]
  }
];

const SkillCard = ({ category, description, skills, index }: { 
  category: string; 
  description: string;
  skills: string[]; 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden gradient-border"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{category}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
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
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills & Expertise</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, capabilities, and areas of expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard 
                key={skill.category} 
                category={skill.category} 
                description={skill.description}
                skills={skill.skills} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
