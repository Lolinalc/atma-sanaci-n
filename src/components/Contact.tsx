'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-atma">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-atteron text-4xl md:text-6xl text-atma-navy mb-8">
            Contacto
          </h2>
          
          <p className="text-xl text-atma-slate mb-12 leading-relaxed">
            Si tu alma te ha guiado hasta aquí, es porque hay algo en ti que está listo para despertar. Te escucho con el corazón abierto.
          </p>

          <div className="card-atma">
            <div className="space-y-8">
              {/* Redes Sociales */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="font-atteron text-2xl text-atma-navy mb-4 text-center">
                  Sígueme en redes
                </h3>
                <p className="text-atma-slate mb-6 text-center">
                  Comparto meditaciones, reflexiones y contenido para tu camino de sanación
                </p>
                <div className="flex justify-center gap-6">
                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@atma.sanacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-full bg-atma-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-atma-blue group-hover:scale-110">
                      <svg className="w-6 h-6 text-atma-blue transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-atma-slate mt-2 text-center">TikTok</p>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtu.be/NMlFGGQ_0cY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-12 h-12 rounded-full bg-atma-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-atma-blue group-hover:scale-110">
                      <svg className="w-6 h-6 text-atma-blue transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <p className="text-xs text-atma-slate mt-2 text-center">YouTube</p>
                  </a>
                </div>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-atma-cream"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-atma-slate">Contacto directo</span>
                </div>
              </div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-atma-blue/10 mb-4">
                  <svg className="w-8 h-8 text-atma-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="font-atteron text-2xl text-atma-navy mb-4">
                  Escríbeme por WhatsApp
                </h3>
                <p className="text-atma-slate mb-6">
                  Es el mejor canal para coordinar sesiones, resolver dudas y comenzar tu proceso.
                </p>
                <a
                  href="https://wa.me/529993676677?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>¡Escríbeme! </span>
                </a>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-atma-cream"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-atma-slate">Ubicación</span>
                </div>
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-atma-blue/10">
                  <svg className="w-6 h-6 text-atma-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-atma-slate">
                  Xalapa, Veracruz, México
                </p>
                <p className="text-sm text-atma-slate/70">
                  Sesiones online disponibles para todo el mundo
                </p>
              </motion.div>
            </div>
          </div>

          {/* Additional message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-atma-blue/10 to-atma-cream/30 rounded-2xl"
          >
            <p className="text-lg text-atma-navy italic font-light">
             Atma: Del sánscrito, “ser verdadero” o chispa divina individual.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
