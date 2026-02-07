import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8 text-gradient">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Estou sempre aberto a novos desafios e oportunidades. Entre em contato!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <motion.a
                whileHover={{ scale: 1.1, boxShadow: "var(--shadow-glow)" }}
                href="mailto:james@example.com"
                className="flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-full smooth-transition"
              >
                <Mail className="text-primary" />
                <span>james@example.com</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, boxShadow: "var(--shadow-glow)" }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-full smooth-transition"
              >
                <Linkedin className="text-primary" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, boxShadow: "var(--shadow-glow)" }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-full smooth-transition"
              >
                <Github className="text-primary" />
                <span>GitHub</span>
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold flex items-center gap-3 mx-auto smooth-transition"
            >
              <Send size={20} />
              Enviar Mensagem
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground"
          >
            © 2024 James Marco Souza Pereira. Todos os direitos reservados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
