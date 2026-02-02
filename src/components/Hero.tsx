'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-atma-cream/30 to-atma-blue/10">
      {/* Imagen de fondo con transparencia */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/TarotXalapa.JPG"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
        </div>
      </div>

      {/* Elementos decorativos - líneas de movimiento */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
        >
          <motion.path
            d="M0,400 Q360,200 720,400 T1440,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,500 Q360,300 720,500 T1440,500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#91bdd0" />
              <stop offset="100%" stopColor="#566574" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#566574" />
              <stop offset="100%" stopColor="#91bdd0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-atma relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 pt-20">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/images/logoatma.png"
                alt="Atma - Sanación Álmica"
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-contain animate-breath"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-xl md:text-2xl text-atma-navy/80 leading-relaxed">
              Bienvenidas sean todas las almas que desean profundizar en su experiencia humana y espiritual.
            </p>

            <p className="text-lg md:text-xl text-atma-slate/90 italic">
              Atma es el recuerdo del Ser divino que somos, es volver al centro
            </p>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8 space-y-4"
          >
            <p className="text-2xl md:text-3xl font-atteron text-atma-navy">
              - Este es un espacio para ir despertando la memoria del alma -
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#experiencias" className="btn-primary">
                Explorar Experiencias
              </a>
              <a href="#contacto" className="btn-secondary">
                Agenda tu Sesión
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}
