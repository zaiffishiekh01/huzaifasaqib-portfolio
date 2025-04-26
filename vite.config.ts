import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  // Log loaded environment variables (only in development)
  if (mode === 'development') {
    console.log('Loaded environment variables:', {
      VITE_EMAILJS_PUBLIC_KEY: !!env.VITE_EMAILJS_PUBLIC_KEY,
      VITE_EMAILJS_SERVICE_ID: !!env.VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID: !!env.VITE_EMAILJS_TEMPLATE_ID,
    });
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Make env variables available
    define: {
      'process.env': env
    }
  };
});
