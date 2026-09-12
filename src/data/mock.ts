export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  private?: boolean;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  solution: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const profileData: ProfileData = {
  name: "Jardel Messias",
  title: "Software Engineer • IA & Automação",
  subtitle: "Transformo processos em soluções inteligentes através de software, IA e automação.",
  bio: "Sempre fui movido pela vontade de transformar ideias em soluções reais. Hoje utilizo software, inteligência artificial e automação para ajudar empresas a reduzir trabalho manual, organizar processos e criar produtos digitais que realmente geram valor.",
  location: "Simão Dias - SE, Brasil",
  phone: "(79) 99806-1093",
  email: "jardel.messias.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/jardel-messias",
  github: "https://github.com/jardelMessias39"
};

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Muito Trabalho Manual",
    description: "Funcionários e empresários gastam horas copiando dados, preenchendo campos e controlando planilhas.",
    solution: "Automatizamos fluxos de dados de ponta a ponta com integrações de APIs e robôs de software."
  },
  {
    id: 2,
    title: "Atendimento Lento",
    description: "Clientes esperam horas por respostas básicas no WhatsApp ou e-mail, gerando perda de vendas.",
    solution: "Implementamos agentes inteligentes baseados em IA que respondem 24/7 com linguagem natural."
  },
  {
    id: 3,
    title: "Agendamentos Desorganizados",
    description: "Erros manuais, horários conflitantes e faltas frequentes sem aviso prévio prejudicam a agenda.",
    solution: "Sistemas de agendamento online com envio automático de confirmações e lembretes via WhatsApp."
  },
  {
    id: 4,
    title: "Planilhas Demais, Controle De Menos",
    description: "Dificuldade para enxergar o faturamento real, margem de lucro e os gargalos operacionais do negócio.",
    solution: "Dashboards analíticos interativos integrados diretamente com os bancos de dados ou ERPs."
  },
  {
    id: 5,
    title: "Sistemas Desconectados",
    description: "Você usa três softwares diferentes e precisa cadastrar o mesmo cliente manualmente em todos eles.",
    solution: "Integramos as plataformas via Webhooks e APIs para que os dados fluam em tempo real."
  },
  {
    id: 6,
    title: "Processos Repetitivos",
    description: "Erros humanos constantes ao copiar e colar dados entre sistemas de vendas, estoque e finanças.",
    solution: "Sistemas web e automações focados em produtividade, reduzindo a intervenção humana ao mínimo necessário."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Secretária.Ai",
    category: "Inteligência Artificial & Automação",
    image: "/secretária.Ai-preview.png",
    description: "Assistente virtual com IA que atende clientes 24/7 via WhatsApp, agenda compromissos de forma autônoma e processa pagamentos com Stripe.",
    context: "Surgiu da necessidade de pequenos prestadores de serviços que não conseguem atender ligações e mensagens no WhatsApp enquanto executam seu trabalho, perdendo oportunidades de agendamento.",
    problem: "Perda constante de leads e agendamentos devido à demora de resposta no WhatsApp. Custos elevados com contratação de recepcionistas em horário integral.",
    solution: "Um agente inteligente autônomo conectado ao WhatsApp (via Evolution API) alimentado pelo modelo GPT-4o-mini com RAG para responder perguntas sobre o negócio, verificar horários livres no banco de dados, efetivar o agendamento e emitir cobrança via Stripe de forma integrada.",
    result: "Atendimento imediato e ininterrupto (24/7), gerando aumento de até 35% nos agendamentos mensais e eliminando o tempo de espera dos clientes.",
    technologies: ["Next.js", "Python", "FastAPI", "OpenAI API", "Neon (PostgreSQL)", "Stripe", "Evolution API", "Railway"],
    features: ["Processamento de Linguagem Natural (NLP)", "Agendamento Dinâmico em Banco de Dados", "Checkout Seguro Stripe integrado na conversa", "Painel web para acompanhamento dos atendimentos em tempo real"],
    private: true
  },
  {
    id: 2,
    title: "AgendaLivre Aí",
    category: "Software como Serviço (SaaS)",
    image: "/AgendaLivreAí-preview.png",
    description: "Plataforma de agendamento de serviços online com envio automatizado de confirmações e notificações de pagamento via WhatsApp.",
    context: "Desenvolvido para salões de beleza, barbearias e clínicas locais automatizarem seu fluxo de reservas sem atritos.",
    problem: "Conflitos de horários na agenda, clientes que faltam sem avisar e tempo desperdiçado no telefone negociando horários disponíveis.",
    solution: "SaaS de agendamento em que o cliente final acessa um link personalizado, escolhe o profissional, data e hora, realiza o pagamento parcial (entrada) via Mercado Pago e recebe confirmações automáticas em seu celular via WhatsApp.",
    result: "Redução de faltas em 80% através de lembretes automáticos e eliminação completa de conflitos de agenda redundantes.",
    technologies: ["React", "Node.js", "Neon (PostgreSQL)", "Evolution API", "Mercado Pago", "Tailwind CSS"],
    features: ["Link de agendamento público e personalizado", "Cobrança de sinal via Pix automático", "Sincronização de horários de profissionais em tempo real", "Notificações ativas via WhatsApp"],
    private: true
  },
  {
    id: 3,
    title: "Acarajé do Diego / Dois Irmãos",
    category: "Sistemas Web Personalizados",
    image: "/app-Acaraje-preview.png",
    description: "Sistema completo de e-commerce e gestão operacional para delivery alimentício com painel administrativo em tempo real.",
    context: "Criado sob medida para um comércio local otimizar sua operação de delivery que antes era gerida de forma desorganizada em um grupo de WhatsApp.",
    problem: "Pedidos perdidos, erros nos ingredientes adicionais solicitados pelos clientes e falta de métricas sobre o faturamento diário.",
    solution: "Uma plataforma web onde clientes montam seus pedidos personalizando ingredientes e o proprietário gerencia a cozinha através de um painel de controle que atualiza os status dos pedidos instantaneamente.",
    result: "Aumento de produtividade na montagem dos pratos, redução de 95% nos erros de ingredientes e controle financeiro diário centralizado.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB Atlas", "Evolution API"],
    features: ["Montagem de pratos customizada", "Painel administrativo de controle de pedidos em tempo real", "Status automáticos enviados ao WhatsApp do cliente", "Fechamento de caixa automatizado"],
    demo: "https://acarajedabahia.vercel.app/"
  },
  {
    id: 4,
    title: "EloPro",
    category: "Aplicativos Móveis",
    image: "/geoElopro-preview.jpeg",
    description: "Aplicativo mobile que conecta clientes a prestadores de serviços locais por meio de geolocalização e mapas em tempo real.",
    context: "Surgiu como um marketplace local para aproximar profissionais liberais (encanadores, eletricistas, diaristas) de potenciais clientes na vizinhança.",
    problem: "Dificuldade para encontrar prestadores de serviços de confiança de forma rápida e segura na região.",
    solution: "App nativo (Android/iOS) integrado com mapas onde o usuário visualiza profissionais ativos nos arredores, contrata o serviço e realiza o pagamento de forma integrada.",
    result: "Mais de 100 profissionais conectados na versão piloto e tempo de atendimento emergencial reduzido para menos de 30 minutos.",
    technologies: ["Flutter", "Supabase", "Firebase", "Google Cloud", "Mercado Pago"],
    features: ["Geolocalização e mapas em tempo real", "Autenticação segura via Firebase", "Banco de dados em tempo real no Supabase", "Sistema de avaliação e comentários"],
    private: true
  },
  {
    id: 5,
    title: "Dashboard Financeiro PME",
    category: "Sistemas Web Personalizados",
    image: "/dashboard-pme-preview.png",
    description: "Painel estratégico de gestão financeira empresarial com análise de faturamento, fluxo de caixa e relatórios analíticos interativos.",
    context: "Desenvolvido para centralizar e apresentar dados financeiros de uma microempresa, facilitando tomadas de decisões financeiras.",
    problem: "Planilhas de Excel confusas que não forneciam uma visão clara sobre despesas fixas, variáveis e faturamento líquido.",
    solution: "Um dashboard dinâmico que importa lançamentos financeiros e plota em gráficos interativos a evolução das despesas vs receitas, calculando indicadores-chave (KPIs) essenciais como margem de contribuição.",
    result: "O gestor passou a economizar 5 horas semanais na conferência de dados e identificou 15% de gastos supérfluos no primeiro mês.",
    technologies: ["React", "Tailwind CSS", "Recharts", "Lucide Icons", "Supabase"],
    features: ["Visualização de fluxo de caixa em gráficos de linha e barra", "Indicadores de faturamento, despesa e saldo", "Filtro dinâmico por período e categoria", "Exportação de relatórios resumidos"],
    github: "https://github.com/jardelMessias39/Dashboard-Financeiro-PME"
  }
];

export const skills = {
  frontend: ["React", "Next.js", "Flutter (Mobile)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["Python", "FastAPI", "Node.js", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  ia: ["OpenAI API", "Gemini API", "Evolution API (WhatsApp)", "n8n (Automações)", "ElevenLabs (TTS)", "Railway / Render / Google Cloud"]
};

export const timeline: TimelineEvent[] = [
  {
    year: "2023",
    title: "Primeiros Projetos",
    description: "Início do desenvolvimento de aplicações web clássicas e soluções lógicas com lógica de programação, JavaScript e arquiteturas dinâmicas em HTML/CSS."
  },
  {
    year: "2024",
    title: "Aplicações Web & Integrações",
    description: "Construção de aplicações completas com React, Node.js e consumo de APIs de terceiros. Foco em criar experiências de usuário robustas e painéis de controle operacionais."
  },
  {
    year: "2025",
    title: "Sistemas SaaS & Mobile",
    description: "Lançamento de softwares sob medida, portais de agendamento online e aplicativos móveis com Flutter. Integrações comerciais seguras de pagamento e controle de banco de dados."
  },
  {
    year: "2026",
    title: "IA & Automação Inteligente",
    description: "Desenvolvimento de agentes de conversação autônomos integrados a fluxos corporativos reais de WhatsApp, gerando automação e economia para pequenas e médias empresas."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Diego Acarajé",
    role: "Proprietário do Acarajé do Diego",
    content: "O sistema de delivery que o Jardel desenvolveu mudou completamente a nossa rotina. Paramos de perder pedidos no WhatsApp e agora os clientes montam o prato exatamente como querem. Valeu cada centavo investido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Dra. Larissa Santos",
    role: "Clínica OdontoLar",
    content: "Com a Secretária.Ai, meus pacientes marcam consulta pelo WhatsApp mesmo durante a noite quando a clínica está fechada. A IA conversa de forma muito natural e já faz todo o agendamento sozinha.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Alex Diogo",
    role: "Empreendedor Digital",
    content: "Contratei o Jardel para construir a API de agendamento e o resultado foi incrível. Entrega rápida, código limpo e comunicação muito clara. Recomendo muito seu trabalho como engenheiro de software.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Como a IA e a Automação podem ajudar minha empresa?",
    answer: "Elas eliminam tarefas manuais repetitivas (como copiar dados de um sistema para o outro), resolvem o gargalo de atendimento (atendendo clientes instantaneamente no WhatsApp 24/7) e organizam os fluxos do seu negócio para que você gaste tempo focado no crescimento, e não na operação manual."
  },
  {
    question: "Vocês desenvolvem sistemas totalmente sob medida?",
    answer: "Sim. Cada negócio possui processos diferentes. Por isso, as soluções são desenhadas e programadas exclusivamente para atender à realidade e às regras de negócio da sua empresa, garantindo máxima eficiência."
  },
  {
    question: "Quanto tempo demora para um sistema ou automação ficar pronto?",
    answer: "O prazo varia conforme a complexidade. Automações de processos e agentes inteligentes simples podem levar de 10 a 20 dias. Sistemas web completos e aplicativos SaaS sob medida geralmente demandam entre 30 a 60 dias."
  },
  {
    question: "É seguro integrar pagamentos e APIs de terceiros?",
    answer: "Totalmente. Utilizamos gateways renomados e seguros como Stripe e Mercado Pago para processamento financeiro. Todas as conexões de API utilizam criptografia de ponta e chaves de segurança autenticadas na nuvem."
  },
  {
    question: "O sistema pode crescer e receber novas funções depois de pronto?",
    answer: "Com certeza. Nossos softwares são desenvolvidos seguindo princípios arquiteturais modulares. Isso significa que podemos adicionar novos módulos, relatórios, integrações com IA e outras funcionalidades a qualquer momento, sem precisar refazer o sistema do zero."
  }
];
