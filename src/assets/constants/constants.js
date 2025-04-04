const productos = [
    {
        nombre:"PASTURÓMETRO ELECTRÓNICO",
        descripcion:"Pasturómetro electrónico con mediciones georreferenciadas que mediante sensores permite determinar la altura comprimida del pasto y enviarlo a un dispositivo móvil. La información se encuentra almacenada en un sistema de acceso web, el cual permite disponer de información para la toma de decisiones.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros cocinas"
    
    },
    {
        nombre:"PASTECH SATELITAL",
        descripcion:"Pastech Satelital es una herramienta que mediante la lectura de imágenes satelitales, permite estimar en forma automática la disponibilidad de pasto en cada potrero del campo. Mediante la utilización de inteligencia artificial y modelos matemáticos de simulación permite predecir el crecimiento del pasto.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefactores"
    },
    {
        nombre:"PASTECH DRON",
        descripcion:"Pastech Dron es un sistema de medición remota de la disponibilidad de pasto mediante la utilización de imágenes de drones. Los datos se integran con el sistema de Pastech satelital, lo cual te permite predecir el crecimiento del pasto.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefones"
    },
    {
        nombre:"SERVICIOS",
        descripcion:"Mapeo de la disponibilidad de pasto. Servicio de monitoreo integral. Servicio de gestión de la alimentación del ganado. Asesoramiento en manejo de recursos forrajeros. Capacitaciones. Medición de huella de carbono. Desarrollo de productos. Conducción de ensayos a campo",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros termotanques"
    }
]

const empresa = [
    {
        nombre:"Fernando Genin – Socio fundador",
        titulo:"Especialista en Transformación Digital.",
        descripcion:"Máster en Administración de Empresas y Licenciado en Sistemas Informáticos. Docente en la Facultad de Ingeniería de la UNMdP. Director de la Unidad de Transformación Digital de la UNMDP. Vice Director del Grupo de Ingenieria y Desarrollo Informáticos de la UNMdP. Founder de NetGEN Consulting",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros cocinas"
    
    },
    {
        nombre:"María Alejandra Marino– Socia fundadora",
        titulo:"Especialista en Producción de Recursos Forrajeros",
        descripcion:"Ingeniera Agrónoma y Máster en Producción Animal. Docente en la Facultad de Ciencias Agrarias de la UNMDP e investigadora. Con sólida experiencia en el estudio de la producción y manejo del pasto, y en el desarrollo de tecnología aplicada de triple impacto en sistemas ganaderos pastoriles",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefactores"
    },
    {
        nombre:"Juan Insua – Socio fundador",
        titulo:"Especialista en Nutrición Animal y Ecofisiología de Pasturas",
        descripcion:"Dr. en Cs. Agrarias, profesor e investigador en producción animal. Especialista en el desarrollo de tecnologías y prácticas de alto valor productivo ambiental que incluyan el manejo de la nutrición animal y del pastoreo para la producción sustentable de carne y leche de los sistemas ganaderos de base pastoril.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefones"
    },

]

const productosLinks = [
    { nombre: 'Pasturómetro electrónico', link: '/pasturometro' },
    { nombre: 'Pastech Satelital', link: '/pastech-satelital' },
    { nombre: 'Pastech Dron', link: '/pastech-dron' }
  ];

const linksFooter = [
    // { nombre: "Suscripción", link: "/subscripcion" },
    { nombre: "Preguntas Frecuentes", link: "/preguntas" },
    { nombre: "Novedades", link: "/novedades" },
    { nombre: "Contacto", link: "/contacto" }
  ];

const urlBack = 'https://pastech.com.ar/back'

export { productos,productosLinks,empresa,linksFooter,urlBack}