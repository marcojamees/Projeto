import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-8 text-gradient">Sobre Mim</h2>
          
          <div className="glass p-8 rounded-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              Sou um Analista de Dados apaixonado por transformar dados complexos em insights
              acionáveis. Com experiência em análise estatística, visualização de dados e
              machine learning, ajudo empresas a tomar decisões baseadas em dados.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Minha abordagem combina rigor analítico com criatividade para descobrir padrões
              ocultos e criar soluções inovadoras. Estou sempre em busca de novos desafios
              que me permitam crescer profissionalmente e contribuir para o sucesso dos projetos.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;