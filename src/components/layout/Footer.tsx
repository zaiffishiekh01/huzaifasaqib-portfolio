
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold title-gradient">
              Huzaifa Saqib
            </Link>
            <p className="mt-4 text-muted-foreground">
              BS Computer Science student passionate about AI, machine learning, and full-stack development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/zaiffishiekh01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-muted-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-huzaifa-saqib-90a1a9324/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-muted-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:huzaifasaqib420@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="bg-muted-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="tel:+923059314103"
                whileHover={{ scale: 1.1 }}
                className="bg-muted-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-muted-foreground">
              Email: huzaifasaqib420@gmail.com
            </p>
            <p className="text-muted-foreground">
              Phone: +92 305 9314103
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Muhammad Huzaifa Saqib. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
