'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-atma-cream/20 to-white">
      <div className="container-atma">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-atteron text-4xl md:text-6xl text-atma-navy mb-6 text-center">
            Historias del Alma
          </h2>

          <p className="text-center text-atma-slate max-w-2xl mx-auto mb-16 text-lg">
            Compartiendo el camino de sanación y transformación
          </p>

          {/* Contenedor con scroll horizontal */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] snap-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Contenido del testimonio */}
                    <div className="flex items-center">
                      <div className="card-atma h-full flex flex-col justify-center">
                        <div className="flex items-start space-x-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-atma-blue"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <blockquote className="text-atma-slate italic text-base md:text-lg leading-relaxed mb-6">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Información del cliente */}
                        <div className="mt-auto pt-4 border-t border-atma-cream">
                          <p className="font-semibold text-atma-navy">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-atma-blue">
                            {testimonial.service}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Imagen */}
                    {testimonial.image && (
                      <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.service}
                          fill
                          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 35vw, 30vw"
                          className="object-cover hover-lift"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicadores de scroll */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-atma-blue/30"
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-atma-blue font-medium italic text-lg">
              Cada experiencia es única y personal
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
