export const personalInfo = {
  name: "Rekreuz",
  tagline: "Backend Developer & AI Automation Specialist",
  email: "rekreuz3@gmail.com",
  location: "Caracas, Venezuela",
  avatar: null,
  social: {
    github: "https://github.com/rekreuz",
  },
  about: {
    short: "Somos un equipo multidisciplinar que une los extremos clave de cualquier producto digital: la lógica, los datos y la inteligencia artificial por un lado, y la experiencia humana y el diseño por el otro. Creemos que la mejor tecnología no es la que más abruma, sino la que resuelve problemas reales de forma invisible y fluida.",
    long: [
      "Somos un equipo joven, nativo digital y con las manos directamente en el código y el diseño. Combinamos la ingeniería backend y la automatización impulsada por IA con un diseño UX/UI centrado en las personas. Aunque estamos dando nuestros primeros pasos formales en la industria, traemos una base técnica sólida y práctica en el desarrollo de APIs, lógica de servidores y la integración de inteligencia artificial y agentes. Nuestro objetivo es claro: construir soluciones digitales funcionales, eficientes y atractivas que resuelvan problemas reales desde el día uno",
    ]
  }
}

export const backendProfile = {
  id: 'backend',
  title: 'Desarrollador Backend',
  subtitle: 'Python • Django • FastAPI • APIs • Automatización',
  icon: 'backend',
  color: 'backend',
  gradient: 'from-backend-primary to-backend-secondary',
  skills: {
    languages: [
      { name: 'Python', level: 95, icon: 'python' },
      { name: 'TypeScript', level: 85, icon: 'typescript' },
      { name: 'SQL', level: 90, icon: 'database' },
    ],
    frameworks: [
      { name: 'Django / DRF', level: 95 },
      { name: 'FastAPI', level: 90 },
    ],
    databases: [
      { name: 'PostgreSQL', level: 95 },
      { name: 'MySQL', level: 90 },

    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Pytest / Testing', level: 90 },
      { name: 'OpenAPI / Swagger', level: 85 },
    ]
  },
  experience: [
    {
      role: 'Python Developer',
      company: 'Comercial SF',
      period: '2026',
      location: 'Caracas (Remoto)',
      description: 'Desarrolle soluciones de automatizacion en la compañia',
      achievements: [
        'Reduje horas de trabajo repetitivo',
        'Reduje costos',
        'Aumente la eficiencia del flujo de trabajo',
      ],
      technologies: ['Python', 'FLET', 'PyAutoGUI', 'Redis', 'pywinauto'],
    },
  ],
  projects: [
    {
      id: 'api-gateway',
      title: 'Bot Automatizado',
      description: 'Solución RPA (Robotic Process Automation) desarrollada para automatizar la extracción de documentos mediante la manipulación directa de la interfaz de usuario de ABBYY FlexiCapture, optimizando los tiempos de procesamiento y reduciendo la intervención manual.',
      image: null,
      tags: ['Python', 'FLET', 'pywinauto'],
      category: '',
      featured: true,
      github: '',
      demo: null,
      highlights: [
        'Se redujo 4 horas de trabajo manual',
        'Recortes de costos al ser un trabajo que ya no requiere intervencion humana',
        'Interfaz grafica que registras los eventos del bot',
      ],
    },
    {
      id: 'api-gateway',
      title: 'Bot Automatizado con vision de computadora',
      description: 'Solución RPA (Robotic Process Automation) desarrollada para automatizar la separacion de documentos mediante la manipulación directa de la interfaz de usuario de ABBYY FlexiCapture y con vision de computadora optimizando la seleccion de los documentos, reduciendo la intervención manual.',
      image: null,
      tags: ['Python', 'FLET', 'PyAutoGUI', 'Tesseract', 'OCR', 'scheduler'],
      category: '',
      featured: true,
      github: '',
      demo: null,
      highlights: [
        'Se redujo  horas de trabajo manual',
        'Recortes de costos al ser un trabajo que ya no requiere intervencion humana',
        'Interfaz grafica que registras los eventos del bot',
      ],
    },
    {
      id: 'api-gateway',
      title: 'Plataforma Web de Gestión Curricular y Bolsa de Empleo Universitario',
      description: 'Sistema desarrollado a medida para una institución universitaria, diseñado para optimizar el proceso de vinculación laboral y académica. Permite a los estudiantes generar y estructurar sus currículums de forma automatizada, centralizando los perfiles profesionales en una base de datos robusta para agilizar la selección y asignación de pasantías empresariales.',
      image: null,
      tags: ['Python', 'Django', 'ReportLab', 'Tailwind'],
      category: '',
      featured: true,
      github: '',
      demo: null,
      highlights: [
        'Centralizacion de la informacion',
        'Automatizacion de envios de correos y manejo curricular de los pasantes',
        'Sistema altamente escalable',
      ],
    },
  ],
}

// AI Profile - Comentado para uso futuro
// export const aiProfile = {
//   id: 'ai',
//   title: 'Especialista en Automatización con IA',
//   subtitle: 'RAG • Agentes IA • LLMs • Sistemas Inteligentes',
//   icon: 'ai',
//   color: 'ai',
//   gradient: 'from-ai-primary to-ai-secondary',
//   skills: {
//     llmFrameworks: [
//       { name: 'LangChain / LangGraph', level: 95 },
//       { name: 'LlamaIndex', level: 90 },
//       { name: 'AutoGen / CrewAI', level: 85 },
//       { name: 'Haystack', level: 80 },
//     ],
//     ragVector: [
//       { name: 'RAG Avanzado (Hybrid, Graph, Agentic)', level: 95 },
//       { name: 'Vector DBs (Pinecone, Weaviate, Qdrant, Chroma)', level: 90 },
//       { name: 'Embeddings & Reranking', level: 95 },
//       { name: 'Chunking Strategies & Optimization', level: 90 },
//     ],
//     agentSystems: [
//       { name: 'Multi-Agent Orchestration', level: 90 },
//       { name: 'Tool Use & Function Calling', level: 95 },
//       { name: 'Planning & Reasoning (ReAct, CoT)', level: 85 },
//       { name: 'Human-in-the-loop Systems', level: 80 },
//     ],
//     mlOps: [
//       { name: 'Fine-tuning (LoRA, QLoRA, PEFT)', level: 85 },
//       { name: 'Model Serving (vLLM, TGI, Ollama)', level: 90 },
//       { name: 'Evaluation & Observability (LangSmith, Arize)', level: 80 },
//       { name: 'Prompt Engineering & Optimization', level: 95 },
//     ],
//     infrastructure: [
//       { name: 'Python / FastAPI para IA', level: 95 },
//       { name: 'Docker / Kubernetes para ML', level: 85 },
//       { name: 'GPU Orchestration (RunPod, Lambda)', level: 80 },
//       { name: 'Streaming / Real-time Inference', level: 85 },
//     ]
//   },
//   experience: [
//     {
//       role: 'AI Automation Lead',
//       company: 'NeuralOps',
//       period: '2023 - Presente',
//       location: 'Madrid (Remoto)',
//       description: 'Liderando la iniciativa de automatización inteligente. Diseño de agentes autónomos para operaciones empresariales.',
//       achievements: [
//         'Desarrollé sistema de agentes que automatiza 80% de tickets de soporte Nivel 1',
//         'Implementé RAG corporativo indexando 500k+ documentos con 95% precisión',
//         'Reducí costos de inferencia 70% mediante routing inteligente de modelos',
//       ],
//       technologies: ['LangGraph', 'GPT-4/Claude', 'Qdrant', 'FastAPI', 'Kubernetes', 'LangSmith'],
//     },
//     {
//       role: 'ML Engineer / AI Developer',
//       company: 'Cognitive Labs',
//       period: '2021 - 2023',
//       location: 'Remoto',
//       description: 'Investigación y desarrollo de aplicaciones basadas en LLMs y sistemas RAG.',
//       achievements: [
//         'Construí pipeline de fine-tuning para modelos especializados en dominio legal',
//         'Desarrollé framework de evaluación automática para calidad de respuestas RAG',
//         'Creé sistema de agentes colaborativos para análisis de contratos',
//       ],
//       technologies: ['Python', 'PyTorch', 'LoRA', 'Weaviate', 'LangChain', 'Streamlit'],
//     },
//     {
//       role: 'Data Scientist / NLP Engineer',
//       company: 'InsightAI',
//       period: '2019 - 2021',
//       location: 'Barcelona',
//       description: 'Procesamiento de lenguaje natural clásico y temprana adopción de transformers.',
//       achievements: [
//         'Modelo de clasificación de documentos con 94% F1-score',
//         'Sistema de extracción de entidades médicas con BERT',
//         'Pipeline de anotación activa reduciendo esfuerzo humano 60%',
//       ],
//       technologies: ['Python', 'Transformers', 'spaCy', 'Prodigy', 'FastAPI', 'Docker'],
//     },
//   ],
//   projects: [
//     {
//       id: 'enterprise-rag',
//       title: 'RAG Empresarial Multi-Tenant',
//       description: 'Plataforma RAG completa para organizaciones con aislamiento de datos, control de acceso granular, auditoría y observabilidad nativa.',
//       image: null,
//       tags: ['LangGraph', 'Qdrant', 'FastAPI', 'PostgreSQL', 'OAuth2', 'Kubernetes'],
//       category: 'RAG Systems',
//       featured: true,
//       github: 'https://github.com/rekreuz/enterprise-rag',
//       demo: 'https://rag.rekreuz.dev',
//       highlights: [
//         'Soporte multi-tenant con aislamiento a nivel de vector',
//         'Hybrid search (dense + sparse + graph) configurable',
//         'Auto-evaluación de calidad con LLM-as-judge',
//         'Cost optimization con model routing inteligente',
//       ],
//     },
//     {
//       id: 'autonomous-agents',
//       title: 'Framework de Agentes Autónomos',
//       description: 'Framework ligero para construir agentes con planning, memory, tool use y human-in-the-loop. Basado en LangGraph con abstracciones de alto nivel.',
//       image: null,
//       tags: ['LangGraph', 'Python', 'Redis', 'WebSockets', 'OpenAI/Anthropic'],
//       category: 'Agent Frameworks',
//       featured: true,
//       github: 'https://github.com/rekreuz/autonomous-agents',
//       demo: null,
//       highlights: [
//         'Stateful agents con persistencia en Redis/PostgreSQL',
//         'Visual debugger para traces de ejecución',
//         'Marketplace de tools y skills reutilizables',
//         'Soporte nativo para streaming y paralización',
//       ],
//     },
//     {
//       id: 'doc-intelligence',
//       title: 'Document Intelligence Pipeline',
//       description: 'Pipeline end-to-end para extracción, clasificación y análisis inteligente de documentos no estructurados (PDFs, imágenes, escaneos).',
//       image: null,
//       tags: ['LayoutLM', 'Donut', 'Qdrant', 'FastAPI', 'Celery', 'MinIO'],
//       category: 'Document AI',
//       featured: false,
//       github: 'https://github.com/rekreuz/doc-intelligence',
//       demo: 'https://docs.rekreuz.dev',
//       highlights: [
//         'OCR + Layout understanding unificado',
//         'Extracción de tablas y key-value pairs',
//         'Clasificación automática de tipos documentales',
//         'API async con webhooks para integración',
//       ],
//     },
//     {
//       id: 'llm-router',
//       title: 'Intelligent LLM Router',
//       description: 'Sistema de routing inteligente que selecciona el modelo óptimo (local/cloud) basado en complejidad, costo, latencia y requisitos de privacidad.',
//       image: null,
//       tags: ['Python', 'vLLM', 'Ollama', 'LiteLLM', 'Prometheus', 'Grafana'],
//       category: 'MLOps',
//       featured: false,
//       github: 'https://github.com/rekreuz/llm-router',
//       demo: null,
//       highlights: [
//         'Routing basado en cascada de clasificadores',
//         'Ahorro 60-80% en costos de inferencia',
//         'Failover automático y circuit breaker',
//         'Métricas de calidad por modelo/tarea',
//       ],
//     },
//   ],
// }