'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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

          {/* Contenedor con scroll horizontal y flechas */}
          <div className="relative group">
            {/* Flecha izquierda */}
            <button
              onClick={() => scroll('left')}
              aria-label="Testimonio anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-atma-cream flex items-center justify-center text-atma-blue hover:bg-atma-blue hover:text-white transition-all duration-300 hover:scale-110 -translate-x-2 md:-translate-x-4 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              onClick={() => scroll('right')}
              aria-label="Siguiente testimonio"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-atma-cream flex items-center justify-center text-atma-blue hover:bg-atma-blue hover:text-white transition-all duration-300 hover:scale-110 translate-x-2 md:translate-x-4 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
            >
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
                          &ldquo;{testimonial.text}&rdquo;
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

            {/* Indicadores de scroll con hint */}
            <div className="flex justify-center mt-6 gap-2 items-center">
              <svg className="w-4 h-4 text-atma-blue/50 animate-pulse" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-atma-blue/30"
                />
              ))}
              <svg className="w-4 h-4 text-atma-blue/50 animate-pulse" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
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