'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-atma hover-lift h-full flex flex-col"
    >
      <div className="space-y-4 flex-grow">
        <h3 className="font-atteron text-2xl md:text-3xl text-atma-navy">
          {service.title}
        </h3>

        <p
          className="text-atma-slate leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />

        {/* Botón para expandir */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-atma-blue hover:text-atma-navy transition-colors text-sm font-medium flex items-center gap-2"
        >
          Conoce más
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2 pt-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-atma-navy">
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="space-y-4 pt-6 mt-6 border-t border-atma-cream">
            <div className="flex items-center justify-between text-sm">
              {service.duration && (
                <div className="flex items-center space-x-2 text-atma-slate">
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{service.duration}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-atma-navy">
                  {service.price}
                </span>
                {service.priceInternational && (
                  <span className="text-sm text-atma-slate">
                    Internacional: {service.priceInternational}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Botón de acción siempre visible */}
      <div className="pt-6 mt-6 border-t border-atma-cream">
        <a
          href={service.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center"
        >
          {service.cta}
        </a>
      </div>
    </motion.div>
  );
}
