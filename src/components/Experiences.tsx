'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import { services, ceremonies, workshops } from '@/lib/data';

export default function Experiences() {
  const [expandedCeremony, setExpandedCeremony] = useState<string | null>(null);

  const toggleCeremony = (id: string) => {
    setExpandedCeremony(expandedCeremony === id ? null : id);
  };
  return (
    <section id="experiencias" className="section-padding bg-gradient-to-br from-white via-atma-cream/30 to-atma-blue/10">
      <div className="container-atma breathe-space">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-atteron text-4xl md:text-6xl text-atma-navy mb-6">
            Experiencias
          </h2>
          <p className="text-xl text-atma-slate leading-relaxed">
            En este espacio podrás reconocer los mensajes sutiles del alma, sanar emociones, dolencias físicas, patrones repetitivos o conflictos personales.
          </p>
          <p className="text-lg text-atma-blue mt-4 font-medium">
            Te acompaño a conocer la fuerza de tu vulnerabilidad y reconocer el susurro de tu alma.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Ceremonias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-atteron text-3xl md:text-5xl text-atma-navy mb-8 text-center">
            Ceremonias
          </h3>
          <p className="text-center text-atma-slate max-w-2xl mx-auto mb-12">
            Espacios para sanar en colectivo, siempre reconociendo tu proceso personal. Disfrutamos de espacios sagrados compartiendo rituales, cacao y otras medicinas naturales.
          </p>

          {/* Contenedor con scroll horizontal */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
              {ceremonies.map((ceremony, index) => (
                <motion.div
                  key={ceremony.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex-shrink-0 w-[85vw] md:w-[75vw] lg:w-[70vw] snap-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Imagen */}
                    {ceremony.image && (
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={ceremony.image}
                            alt={ceremony.title}
                            fill
                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 38vw, 35vw"
                            className="object-cover hover-lift"
                          />
                        </div>
                      </div>
                    )}

                    {/* Contenido */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} flex flex-col`}>
                      <div className="space-y-4 flex-grow">
                        <h4 className="font-atteron text-2xl md:text-3xl text-atma-navy">
                          {ceremony.title}
                        </h4>

                        <p className="text-atma-slate leading-relaxed">
                          {ceremony.description}
                        </p>

                        {/* Botón para expandir */}
                        <button
                          onClick={() => toggleCeremony(ceremony.id)}
                          className="text-atma-blue hover:text-atma-navy transition-colors text-sm font-medium flex items-center gap-2"
                        >
                          Conoce más
                          <svg
                            className={`w-4 h-4 transition-transform ${expandedCeremony === ceremony.id ? 'rotate-180' : ''}`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Contenido desplegable */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedCeremony === ceremony.id ? 'auto' : 0,
                            opacity: expandedCeremony === ceremony.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {ceremony.includes && (
                            <div className="mb-4">
                              <p className="font-semibold text-sm text-atma-navy mb-2">Incluye:</p>
                              <ul className="space-y-2">
                                {ceremony.includes.map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2 text-sm text-atma-slate">
                                    <svg
                                      className="w-5 h-5 text-atma-blue flex-shrink-0 mt-0.5"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="pt-4 border-t border-atma-cream space-y-2">
                            <div className="flex items-center text-sm text-atma-slate space-x-2">
                              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{ceremony.duration}</span>
                            </div>
                            <p className="font-semibold text-lg text-atma-navy">{ceremony.price}</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Botón de acción */}
                      <div className="pt-4 mt-auto">
                        <a
                          href={`https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20${encodeURIComponent(ceremony.title)}.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex"
                        >
                          Consultar
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicadores de scroll */}
            <div className="flex justify-center mt-6 gap-2">
              {ceremonies.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-atma-blue/30"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Talleres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-atteron text-3xl md:text-5xl text-atma-navy mb-8 text-center">
            Talleres
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-atma text-center ${workshop.status === 'available' ? 'ring-2 ring-atma-blue' : ''}`}
              >
                {workshop.status === 'available' && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-atma-blue text-white mb-3">
                    ¡Inscripciones abiertas!
                  </span>
                )}

                <h4 className="font-atteron text-lg text-atma-navy mb-3">
                  {workshop.title}
                </h4>
                <p className="text-xs text-atma-slate mb-4">
                  {workshop.description}
                </p>

                {workshop.status === 'available' && (
                  <div className="space-y-2 mb-4 text-sm text-atma-slate">
                    {workshop.date && (
                      <p className="font-medium text-atma-navy">{workshop.date}</p>
                    )}
                    {workshop.time && (
                      <p>{workshop.time}</p>
                    )}
                    {workshop.modality && (
                      <p>{workshop.modality}</p>
                    )}
                    {workshop.capacity && (
                      <p className="text-atma-blue font-medium">{workshop.capacity}</p>
                    )}
                    {workshop.audience && (
                      <p className="text-xs">{workshop.audience}</p>
                    )}
                    {workshop.price && (
                      <p className="text-lg font-semibold text-atma-navy mt-2">{workshop.price}</p>
                    )}
                  </div>
                )}

                {workshop.status !== 'available' && workshop.date && (
                  <p className="text-sm font-medium text-atma-blue mb-2">
                    {workshop.date}
                  </p>
                )}

                {workshop.status === 'available' ? (
                  <a
                    href={`https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20el%20${encodeURIComponent(workshop.title)}.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Inscribirme
                  </a>
                ) : (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    workshop.status === 'coming-soon'
                      ? 'bg-atma-cream text-atma-navy'
                      : 'bg-atma-blue/20 text-atma-blue'
                  }`}>
                    {workshop.status === 'coming-soon' ? 'Próximamente' : 'Grabado'}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
