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
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-atma-cream/30 to-white"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-atma-blue/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-atma-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-atma-navy mb-2">Reduce el Estrés</h3>
                <p className="text-sm text-atma-slate">
                  Libera tensiones acumuladas y encuentra paz interior
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-atma-cream/30 to-white"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-atma-blue/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-atma-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-atma-navy mb-2">Conecta Contigo</h3>
                <p className="text-sm text-atma-slate">
                  Reconecta con tu esencia y tu sabiduría interior
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-atma-cream/30 to-white"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-atma-blue/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-atma-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-atma-navy mb-2">Claridad Mental</h3>
                <p className="text-sm text-atma-slate">
                  Calma la mente y encuentra claridad en tus pensamientos
                </p>
              </motion.div>
            </div>
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
