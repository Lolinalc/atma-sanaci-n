'use client';

import { motion } from 'framer-motion';

export default function Meditation() {
  return (
    <section id="meditacion" className="section-padding bg-gradient-to-br from-atma-blue/5 to-atma-cream/20">
      <div className="container-atma">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-atteron text-4xl md:text-6xl text-atma-navy mb-6 text-center">
            Meditación Guiada
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-atma-slate text-center mb-12 max-w-3xl mx-auto"
          >
            Regálate un momento de paz y conexión contigo mismo. Esta meditación de relajación
            te guiará hacia un estado de calma profunda y reconexión con tu esencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-atma"
          >
           
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NMlFGGQ_0cY"
                title="Meditación de Relajación - Atma Sanación Álmica"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-atma-slate mb-6">
              ¿Te gustaría profundizar en tu proceso de sanación?
            </p>
            <a
              href="#contacto"
              className="btn-primary inline-block"
            >
              Agenda tu Sesión Personalizada
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
