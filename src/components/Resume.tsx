import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Resume.pdf';
    link.download = 'Huzaifa_Saqib_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="py-2">
        <div className="container-custom max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold">Resume</h1>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="w-full h-[calc(100vh-4rem)] bg-card rounded-lg shadow-lg overflow-hidden mb-4">
              <iframe
                src="/assets/Resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume; 