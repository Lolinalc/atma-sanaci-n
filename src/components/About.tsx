'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/lib/data';

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-gradient-to-br from-atma-cream/20 to-white">
      <div className="container-atma">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-atteron text-4xl md:text-6xl text-atma-navy mb-12 text-center">
            Sobre Mí
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-atma-blue font-medium text-center italic mb-12"
          >
            {aboutContent.intro}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 mb-12">
            {/* Columna izquierda: Imagen + Credenciales */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Sanaciondelalma.JPG"
                    alt="Tamara - Sanación Álmica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-atma"
              >
                <h3 className="font-atteron text-xl md:text-2xl text-atma-navy mb-4 text-center">
                  Con más de 10 años acompañando procesos personales
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {aboutContent.credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-atma-cream/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-atma-blue flex-shrink-0" />
                      <span className="text-atma-navy text-sm md:text-base">{credential}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Columna derecha: Story completa */}
            <div className="space-y-6 text-atma-slate leading-relaxed flex flex-col justify-center">
              {aboutContent.story.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-base md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8 space-y-6"
          >
            <p className="text-xl md:text-2xl font-atteron text-atma-navy">
              ¿Cómo obrar milagros?
            </p>
            <p className="text-lg text-atma-slate max-w-2xl mx-auto leading-snug">
              No hay nada en ti que no tenga sentido<br />
              no importa el camino que elijas,<br />
              el fin siempre serás tu.<br />
              Ven a reconocer la fuerza de tu atma*
            </p>
            <a
              href="#contacto"
              className="btn-primary inline-block"
            >
              Quiero agendar una sesión
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
