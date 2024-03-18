const productos = [
    {
        nombre:"PASTUROMETRO ELECTRÓNICO",
        descripcion:"Pasturometro electrónico con mediciones georeferenciadas que permite determinar la altura y humedad del pasto medido y enviarlo a un dispositivo movil y a un sistema de acceso web",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros cocinas"
    
    },
    {
        nombre:"PASTECH SATELITAL",
        descripcion:"Sistema de acceso web que utliza lecturas satelitales para determinar la altura del pasto y los KG de pasto seco por m2, para lo cual trabaja con intenligencia artificial y modelos matematicos de predicción",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefactores"
    },
    {
        nombre:"PASTECH DRON",
        descripcion:"Sistema de medicion a demanda mediante la utilizacion de dispositivos de dron, cuyos valores se integran con el sistema de pastech satelital",
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
        descripcion:"Ingeniera Agrónoma y Máster en Producción Animal. Investigadora y docente universitario, con sólida experiencia en el estudio y la producción de pasto en sistemas ganaderos.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefactores"
    },
    {
        nombre:"Juan Insua – Socio fundador",
        titulo:"Especialista en Nutrición Animal y Ecofisiología de Pasturas",
        descripcion:"Ingeniero Agrónomo y Master....Investigador y docente universitario. Especialista en el desarrollo de tecnologías y prácticas de alto valor productivo ambiental que incluyan el manejo de la nutrición animal y del pastoreo para la producción sustentable de carne y leche de los sistemas ganaderos de base pastoril.",
        imagen:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        boton:"Nuestros calefones"
    },

]

const productosLinks = [
    { nombre: 'Pasturometro Electrónico', link: '/pasturometro' },
    { nombre: 'Pastech Satelital', link: '/' },
    { nombre: 'Servicios', link: '/servicios' }
  ];

const linksFooter = [
    { nombre: "Subscripción", link: "/" },
    { nombre: "Preguntas Frecuentes", link: "/preguntas" },
    { nombre: "Novedades", link: "/" },
    { nombre: "Contacto", link: "/contacto" }
  ];

export { productos,productosLinks,empresa,linksFooter}