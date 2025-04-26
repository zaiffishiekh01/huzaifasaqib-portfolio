
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Code, GraduationCap, Trophy, UserRound } from "lucide-react";

const About = () => {
  const educationDetails = [
    {
      degree: "BS Computer Science",
      institution: "FAST-NUCES, Chiniot-Faisalabad Campus",
      duration: "August 2021 - June 2025",
      gpa: "CGPA: 3.43/4.0",
      courses: [
        "AI", "Machine Learning", "NLP", "Generative AI", "DevOps", "Software for Mobile Devices"
      ]
    }
  ];

  const interestsAndHobbies = [
    "Cricket", "Badminton", "Travelling", "Watching Documentaries", "Islamic History"
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives my passion for technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <UserRound className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Who I Am</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a motivated Computer Science student at FAST-NUCES, I am passionate about AI, 
                  machine learning, backend development, app development, and DevOps. I thrive when 
                  working in teams and am eager to contribute to innovative solutions.
                </p>
                <p>
                  My journey in technology has led me to explore the fascinating world of AI and Machine Learning, 
                  where I've trained neural networks for generative models, worked on API integration, and honed 
                  my skills in Prompt Engineering.
                </p>
                <p>
                  I've gained valuable experience in building and deploying AI models, developing mobile apps with 
                  React Native, and creating Python backend systems with Django. I'm also proficient in utilizing 
                  DevOps practices for efficient deployment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-lg p-6 gradient-border"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                As a recent graduate, I have explored AI and Machine Learning to solve real-world problems 
                and create innovative applications. I have trained neural networks for generative models, 
                worked on API integration and Prompt Engineering, and gained experience in building and deploying 
                AI models, mobile apps with React Native, and Python backend systems with Django, utilizing DevOps for deployment.
              </p>
              
              <p className="text-muted-foreground">
                Committed to continuous learning, I am passionate about applying my skills to drive innovation 
                and deliver impactful solutions that address complex challenges in the tech industry.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              {educationDetails.map((education, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg p-6 gradient-border"
                >
                  <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                  <p className="mb-1">{education.institution}</p>
                  <p className="text-muted-foreground mb-4">{education.duration}</p>
                  <p className="font-medium mb-4">{education.gpa}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Relevant Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-muted/50 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
            </div>
            
            <div className="bg-card rounded-lg p-6 gradient-border">
              <div className="flex flex-wrap gap-3">
                {interestsAndHobbies.map((item, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 bg-muted rounded-md text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
