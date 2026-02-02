// Types para servicios de Atma
export interface Service {
  id: string;
  title: string;
  description: string;
  duration?: string;
  price: string;
  priceInternational?: string;
  features?: string[];
  cta: string;
  ctaLink: string;
}

export interface Ceremony {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  includes?: string[];
  image?: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date?: string;
  time?: string;
  price?: string;
  modality?: string;
  capacity?: string;
  audience?: string;
  status: 'available' | 'coming-soon' | 'recorded';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  service: string;
  image?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

// Metadata para SEO
export const siteConfig = {
  name: 'Atma - Sanación Álmica',
  description: 'Espacio de sanación holística y terapia álmica en Xalapa. Biodescodificación, Yin Yoga, ceremonias y terapias energéticas para el despertar del alma.',
  url: 'https://atma-sanacion.com',
  ogImage: '/images/og-image.jpg',
  author: 'Tamara',
  keywords: [
    'terapias xalapa',
    'biodescodificación',
    'terapias holísticas',
    'lectura tarot',
    'sanación energética',
    'yin yoga xalapa',
    'terapia álmica',
    'ceremonias de sanación',
    'medicina natural',
    'desarrollo espiritual',
    'biodescodificación xalapa',
    'sanación holística méxico',
  ],
  social: {
    whatsapp: 'https://wa.me/message/UGK4GRQGVSH2D1',
    youtube: '',
  },
  contact: {
    whatsapp: '+52 XXXXXXXXXX',
    email: 'contacto@atma-sanacion.com',
  },
};
