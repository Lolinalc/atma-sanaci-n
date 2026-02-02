import { Service, Ceremony, Workshop, Testimonial } from '@/types';

export const services: Service[] = [
  {
    id: 'lectura-tarot',
    title: 'Lectura de Tarot',
    description: 'Este tarot no busca predecir ni alimentar la curiosidad, sino ser una guía que escucha, revela y orienta. A través de las cartas, exploramos lo que se mueve en tu interior: bloqueos, heridas o patrones que requieren atención, y los aprendizajes que emergen en tu camino. Más que ofrecer respuestas externas, esta lectura fomenta un diálogo con tu mundo interno. Las cartas no deciden por ti, sino que te brindan claridad, responsabilidad y poder personal. Perfecto si estás en un momento de introspección y deseas mirarte con honestidad y compasión',
  duration: '1 hora 15 minutos',
    price: '$700 MXN',
    priceInternational: '$900 MXN',
    features: [
      'Lectura personalizada de tarot',
      'Exploración de bloqueos y patrones',
      'Claridad y empoderamiento personal',
      'Diálogo interno honesto',
      'Acompañamiento compasivo',
      'Sesión vía Zoom'
    ],
    cta: 'Inicia tu viaje',
    ctaLink: 'https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20la%20Lectura%20de%20Tarot.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'
  },
   {
    id: 'terapia-almica',
    title: 'Terapia Álmica',
    description: 'Cada sesión es única y todos los procesos son personales. Comenzamos haciendo una lectura álmica para comprender en qué momento evolutivo estás, qué se te invita a trascender y junto con ello herramientas para que puedas aplicar de manera consciente. Te acompaño a liberar el dolor, a reconocer tu fuerza interior, tu propósito y tu camino.',
    duration: '1 hora 15 minutos',
    price: '$700 MXN',
    priceInternational: '$900 MXN',
    features: [
      'Lectura álmica personalizada',
      'Comprensión del momento evolutivo',
      'Herramientas para trascender',
      'Liberación y sanación del dolor',
      'Sesión vía Zoom'
    ],
    cta: 'Agenda tu sesión',
    ctaLink: 'https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20la%20Terapia%20%C3%81lmica.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'
  },
  {
    id: 'yin-yoga-grupal',
    title: 'Yin Yoga - Sesiones Grupales',
    description: 'Nos vemos todos los martes 7:30pm (CDMX) vía Zoom para liberar el cuerpo y junto con ello, nuestra energía estancada. Reconozco el cuerpo como portal para conectar con nuestra energía sutil.',
    duration: 'Martes 7:30pm CDMX',
    price: '$50 MXN',
    features: [
      'Sesiones semanales en vivo',
       'Meditación activa',
      'Liberación de energía estancada',
      'Fortalecimiento mental',
      'Conexión cuerpo-mente'
    ],
    cta: 'Quiero participar',
    ctaLink: 'https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20las%20Sesiones%20Grupales%20de%20Yin%20Yoga.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'
  },
  {
    id: 'yin-yoga-personal',
    title: 'Yin Yoga - Procesos Personalizados',
    description: 'Un espacio pensado para quienes atraviesan síntomas físicos o quienes buscan un proceso íntimo y personalizado de escucha y diálogo con el cuerpo. En los procesos sanamos desde la raíz. He acompañado procesos de tendinitis, hernias, crisis epiléptica, falsa ciática y problemas de movilidad en general.',
    duration: '2-3 sesiones semanales por 1 mes',
    price: '$3,000 - $4,000 MXN',
    features: [
      '2 o 3 sesiones semanales',
      '1 sesión de biodescodificación incluida',
      'Sanación desde la raíz',
      'Recuperación de movilidad',
      'Mejorías y bienestar desde la primera sesión'
    ],
    cta: 'Iniciar proceso',
    ctaLink: 'https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20el%20Proceso%20Personalizado%20de%20Yin%20Yoga.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'
  },
  {
    id: 'sanacion-energetica',
    title: 'Sanación Energética',
    description: 'Un espacio de acompañamiento para quienes atraviesan momentos de carga espiritual, energía estancada o señales del cuerpo que piden atención, y buscan alivio y comprensión profunda.',
    duration: '2 horas',
    price: '$2,300 MXN',
    features: [
      'Limpieza energética profunda',
      'Liberación de bloqueos',
       'Integración del alma',
      'Restauración de energía vital',
    'Reconexión con tu esencia',
      'Presencial o online.',

    ],
    cta: 'Agendar limpieza',
    ctaLink: 'https://wa.me/529993676677?text=Hola%2C%20estoy%20interesada%20en%20la%20Sanaci%C3%B3n%20Energ%C3%A9tica.%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'
  }
];

export const ceremonies: Ceremony[] = [
  {
    id: 'cumpleanos',
    title: 'Ceremonias de Cumpleaños',
    description: 'Honramos tu nacimiento y tu estadía en el presente. Generaremos un espacio ritual para que junto con tus seres queridos honremos tu vida. Utilizamos los elementos de la naturaleza para agradecer el pasado y reconocer tu fuerza y esencia en el presente.',
    duration: '2 horas',
    price: '$1,500 (1-8 personas) + $250 por persona extra',
    includes: [
      'Limpia con sahumo a todos los participantes',
      'Ritual con elementos naturales',
      'Espacio sagrado personalizado',
    'Materiales incluidos'
    ],
    image: '/images/ceremonia-cumpleaños.png'
  },
  {
    id: 'despedida-mascotas',
    title: 'Ceremonia de Despedida de Mascotas',
    description: 'Espacio terapéutico y ritual donde honramos la vida de los animalitos que nos permitieron cuidarles. Es ideal para agradecer y reconocer el propósito que tuvieron en nuestras vidas e integrar todo lo vivido.',
    duration: '2 horas',
    price: '$1,500 por familia',
    includes: [
      'Proceso terapéutico y ritual',
      'Integración amorosa del proceso',
    'Dinámicas de duelo para infancias',
    'Materiales incluidos'
    ],
    image: '/images/Ceremoniaparaelalma.jpeg'
  },
  {
    id: 'colectivas',
    title: 'Ceremonias Colectivas',
    description: 'Creamos espacios sagrados de sanación colectiva, donde la palabra, el encuentro, la música medicina y la meditación se entrelazan para acompañar procesos de sanación.',
    duration: 'Variable',
    price: 'Variable según ceremonia',
    includes: [
      'Ritual de cacao y otras medicinas naturales',
      'Sanación colectiva',
      'Espacio sagrado compartido',
        'Meditación guiada',
    'Soundhealing para equilibrar cuerpo, mente y espíritu',
    'Materiales incluidos'
    ],
    image: '/images/CeremoniasDeSanacion.jpeg'
  }
];

export const workshops: Workshop[] = [
  {
    id: 'pendulo',
    title: 'Taller de Péndulo',
    description: 'Conecta con tu sabiduría interior a través del uso del péndulo.',
    date: 'Domingo 15 de Febrero',
    time: '10 am a 1 pm (CDMX)',
    modality: 'Vía Zoom',
    capacity: 'Cupo limitado: 8 personas',
    audience: 'Para principiantes y practicantes',
    price: '$444 MXN',
    status: 'available'
  },
  {
    id: 'tarot',
    title: 'Curso de Tarot',
    description: 'Aprende a leer el tarot y conectar con tu intuición. Nuevo módulo disponible.',
    date: 'Marzo 2026',
    status: 'coming-soon'
  },
  {
    id: 'limpias-humo',
    title: 'Taller de Limpias con Humo',
    description: 'Aprende técnicas ancestrales de limpieza energética con hierbas y sahumos.',
    status: 'coming-soon'
  },
  {
    id: 'banos-sanadores',
    title: 'Taller de Baños Sanadores con Hierbas',
    description: 'Descubre el poder curativo de las hierbas en baños rituales de sanación.',
    status: 'coming-soon'
  },
  
];

export const testimonials: Testimonial[] = [
  {
    id: '5',
    name: 'Alejandra M.',
    text: 'Hola querida Tamy ✨ quiero contarte que todo en mi vida está siendo bonito, emocionante y con señales bonitas. Estoy muy agradecida contigo! ❤️',
    service: 'Tarot',
    image: '/images/lecturadetarotcolectiva.png'
  },
    {
    id: '6',
    name: 'Rebeca P.',
    text: 'Me sirvio mucho! hummm, no se qué me pasó pero encontré varias emociones muy rapido y fue bueno para mi por que habían algunas que tenía sin definir. Pero lo curioso es que sentía que tenía que soltarlo todo después y comencé a sentir mi lado izquierdo super pesado y pum! hasta sentía que de mi propio cuerpo jalaban algo y se acabó, adios sensación . Fue raro sentirlo en mi cuerpo tan claro.',
    service: 'Sesiones de sanación y limpia energética',
    image: '/images/masterenreiki.JPG'
  },
    {
    id: '4',
    name: 'Cori S.',
    text: 'Quizás el primer encuentro que tuve con Tamara fue una de las experiencias más trascendentales que he vivido. Era un lugar simple, y lo que aconteció también fue simple. Sentí la presencia de Dios, que siempre está, pero que no siempre recuerdo. Fue una sensación de blancura, de paz, de amor. Ese encuentro se lo debemos a Dios, pero también le agradezco a Tamara, que cultiva en su corazón el amor necesario para hacer posibles acontecimientos como ese.',
    service: 'Terapia Álmica',
    image: '/images/ceremoniasdeamigos.png'
  },
  {
    id: '1',
    name: 'Charlotte',
    text: 'Participé en el taller de meditación con Tamara y no esperaba nada en particular, tenía curiosidad y ganas de vivir una nueva experiencia nueva, y eso fue lo que tuve. Me gustó que cada meditacion cambiaba de alguna manera algo en mi. Mi manera de sentir y reaccionar ante mis emociones nunca fue la misma desde esas meditaciones. Después de varios meses sigo sintiendo el bien que me hicieron, Muchas gracias tamara.',
    service: 'Meditación',
    image: '/images/meditacionesgrupales.png'
  },
    {
    id: '8',
    name: 'pendiente',
    text: 'El Yin Yoga llegó a mí como sorpresa y salvavida en un momento en el que una lesión estaba cambiando mis dinámicas de movimiento. Me ayudó a aliviar dolores amablemente, a recuperar movilidad e incluso mejorarla, a ser mucho más atenta y presente en mis movimientos, a destrabar otras tensiones que ni sabía que tenía y a relajarme profundamente. Es una práctica confrontante y amorosa que recomiendo para acompañar el cotidiano de cualquiera que quiera habitar su cuerpo y mente desde un lugar de tranquilidad y consciencia.',
    service: 'Yin Yoga Personalizado',
    image: '/images/yingyogaplaya.png'
  },
  {
    id: '2',
    name: 'Luma C.',
    text: 'El curso de meditación fue una muy bonita experiencia. Te permite hacer un alto, tomar un respiro (o muchos) y entrar en contacto contigo. Quedas con una sensación de paz muy hermosa. Además cuando terminas, tienes aprendido cómo seguir haciendolo siempre que lo necesites ¡Lo van a disfrutar!',
    service: 'Meditación',
    image: '/images/bendiciones-del-alma.JPG'
  },
  {
    id: '3',
    name: 'Ilse G.',
    text: 'Siempre agradeceré a Dios y al universo por las casualidades que me llevaron con Tamara. Ha sido una luz en medio del caos; su guía y mi determinación se unieron para que hoy viva la mejor de mis versiones, en amor y gratitud con el universo y Dios. Si tienes la oportunidad de ir con Tamara, no la desaproveches y pon de tu parte, porque si te abres, su guía puede cambiar tu vida para un camino menos doloroso y así aperturarte a todo lo bonito que tiene el universo para ti.',
    service: 'Terapia Álmica',
    image: '/images/YogaEnLinea.JPG'
  },

  

  {
    id: '7',
    name: 'Camilita H.',
    text: 'Hola tama como estás ... Te escribo pq estos días he sentido las ganas de agradecer, agradecerte por haberme acompañado en ese instante de sanación (la sesión última que tuvimos). Agradezco pq esa sensación de vacío cuando finalizamos dio paso a una calma en mi cuerpo/ corazón . Me dio la oportunidad de continuar con más alegría y poder disfrutar. La verdad que desde aquella vez no han vuelto a mí muchas sensaciones que antes me habitaban constantemente. Puedo decir que todo ese proceso , que luego trajo una fase curativa en mi cuerpo físico (menstruación) intensa, me ha llevado a sentir una limpieza y tranquilidad mental. Gracias tama por tu inigualable acompañamiento.',
    service: 'Sesiones de sanación y limpia energética',
    image: '/images/ReikiXalapa.JPG'
  },

];

export const aboutContent = {
  intro: 'Hola querido ser. Gracias por estar aquí y por leerme.',
  story: [
    'Soy Tamara, y mi camino comenzó muy temprano, cuando entendí que, cuando el cuerpo se enferma, el espíritu nos está mostrando una vía de sanación.',
    'Desde que nací recibí diversos diagnósticos médicos que dificultaban mi desarrollo físico. Durante varios años utilicé máscaras que comprimían mi rostro; lo único que quedaba libre era mi mirada. Al mirarme al espejo, no siempre me reconocía y pasaba mucho tiempo preguntándome: ¿Quién soy?',
    'A través de la mirada comencé a percibir imágenes, emociones, rostros y mundos desconocidos. Ahí comprendí que la mirada es un espejo del alma. Y mi alma tenía vidas y dolores, cosa que me asustaba, y confundía. Decidí cerrar esas exploraciónes por un largo tiempo.',
    'Cuando la medicina alópata no ofrecía más respuestas, mi familia y yo nos abrimos a la sanación energética. Gracias a ese acompañamiento y a la fe compartida, mi cuerpo comenzó a responder de otra manera. Mis células modificaron su actuar.  Ese momento marcó mi vida y sembró una pregunta esencial: ¿Cómo se da la sanación?',
    'Más adelante estudié Lic.teatro y trabajé con máscaras escénicas. Al usarlas, algo se abría: podía “ser”, expresarme, habitar otras voces sin juicio. Y por mas que me cuidaba, mi cuerpo se accidentaba. Con el tiempo comprendí que mi cuerpo también hablaba a través de síntomas y lesiones, me compartía mensajes de mi propia alma que no me permitía oír.',
    'El dolor me llevó a estudiar biodescodificación, psicosomática, bio-neuro-emoción, PNL, Reiki, biomagnetismo, gemoterapia y sanación energética. Aprendí a escuchar al cuerpo, a la emoción y al espíritu como un mismo lenguaje.',
    'Hoy integro todas estas herramientas en cada sesión, buscando coherencia entre mente, emoción y acción,  para acompañar procesos de alineación con el camino del alma,  ya que cada ser es un ser único, un pensamiento divino, una historia que merece ser vivida y disfrutada en dicha y plenitud absoluta.'
  ],
  credentials: [
    'Biodescodificadora (10 años de experiencia)',
'Maestra de Yin Yoga (desde 2021)',
'Tarot y Runas',
    'Master Reiki',    
    'Biomagnetismo',
    'Sanación energética',
    
  ]
};
