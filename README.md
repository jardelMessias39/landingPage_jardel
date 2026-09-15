# JM Digital Identity System

Landing page e sistema de identidade digital de Jardel Messias. O projeto apresenta serviços de software, inteligência artificial e automação, com uma Home orientada a conversão e um cartão digital independente.

## Visão geral

Esta é uma aplicação frontend em React. A Home combina conteúdo estático, animações, navegação por âncoras, apresentação de projetos e um Consultor Digital que chama uma API externa de chatbot. A rota `/card` oferece um cartão digital mobile-first.

O backend, banco de dados e infraestrutura do chatbot não estão versionados neste repositório. Quando uma capacidade pertence a um serviço externo ou aparece apenas como documentação/case, isso é indicado nos documentos técnicos.

## Objetivo e posicionamento

O objetivo é apresentar Jardel Messias como profissional de software, IA e automação, traduzindo problemas operacionais em soluções digitais e convertendo visitantes em contatos qualificados.

A comunicação prioriza clareza, confiança, linguagem humana e benefícios de negócio antes de detalhes técnicos. A identidade visual usa fundo navy, dourado, azul tecnológico, tipografia Inter/Outfit, glassmorphism e animações interativas.

## Principais funcionalidades

- Landing page com Hero, desafios, metodologia, projetos, tecnologias, trajetória, depoimentos, perfil e FAQ.
- Navegação responsiva com menu mobile.
- Canvas interativo de partículas matemáticas no fundo.
- Cards de desafios que alternam entre problema e solução.
- Apresentação de cases com contexto, problema, solução, resultado, tecnologias e links quando disponíveis.
- Consultor Digital com texto, perguntas sugeridas, loading e tratamento visual de erro.
- Entrada por voz via Web Speech API, sem envio de áudio ao backend.
- Cartão digital em `/card` com WhatsApp, LinkedIn, GitHub, e-mail, vCard e compartilhamento nativo.

## Stack tecnológica

- React 19 e React DOM
- TypeScript
- Vite 8
- React Router DOM
- Tailwind CSS, PostCSS e Autoprefixer
- Framer Motion
- Lucide React
- React Markdown e Axios estão declarados como dependências, mas não há uso comprovado deles no fluxo atual analisado.
- Oxlint para lint

## Estrutura do projeto

```text
.
├── src/
│   ├── App.tsx                 # Rotas e composição da aplicação
│   ├── main.tsx                # Entrada React
│   ├── index.css               # Tokens e estilos globais
│   ├── components/             # Seções reutilizáveis da Home
│   ├── data/mock.ts            # Fonte dos dados exibidos
│   └── pages/Card.tsx          # Cartão digital em /card
├── public/                     # Imagens, favicon e materiais públicos
├── archive_vanilla/            # Versão histórica em HTML/CSS/JavaScript
├── .ai-master-rules            # Manifesto de comportamento para IA
├── .ai_skills/                 # Skills especializadas
├── .github/instructions/       # Instruções de carregamento do Harness
├── AGENTS.md                   # Guia de navegação e trabalho
├── BrandVoice.md               # Diretrizes de comunicação
├── DesignSystem.md             # Diretrizes visuais
├── DEVELOPER_GUIDE.md          # Guia operacional existente
└── package.json                # Scripts e dependências
```

## Rotas

| Rota | Componente | Responsabilidade |
| --- | --- | --- |
| `/` | `MainLayout` em `src/App.tsx` | Landing page completa |
| `/card` | `src/pages/Card.tsx` | Cartão digital mobile-first |

As seções da Home são acessadas por âncoras como `#projects`, `#about` e `#faq`.

## Arquitetura atual

```text
Browser
├── React Router
├── / -> MainLayout -> componentes da landing page -> src/data/mock.ts
├── /card -> Card.tsx -> APIs nativas e links externos
└── Chatbot.tsx -> POST {VITE_API_URL}/chat -> serviço externo
```

O repositório contém somente o frontend. Não há backend, schema de banco, migrations, autenticação, pipeline de CI/CD ou configuração de deploy versionados aqui.

Detalhes da arquitetura estão em [docs/architecture.md](docs/architecture.md) e [docs/frontend.md](docs/frontend.md).

## Chatbot e integração

O componente `Chatbot.tsx` envia uma requisição `POST` para `${VITE_API_URL}/chat` com:

```json
{
  "message": "texto do usuário",
  "session_id": "string ou null"
}
```

A resposta esperada é:

```json
{
  "response": "texto da resposta",
  "session_id": "string"
}
```

O `session_id` é mantido em `useState` durante a vida do componente. O frontend não importa automaticamente `src/data/mock.ts` para enviar contexto ao modelo, e o backend/modelo não estão presentes neste repositório. Consulte [docs/chatbot.md](docs/chatbot.md).

## Variáveis de ambiente

| Variável | Uso | Fallback |
| --- | --- | --- |
| `VITE_API_URL` | URL base da API externa do chatbot | `http://localhost:8000/api` |

Variáveis com prefixo `VITE_` são expostas ao navegador. Não coloque chaves, tokens ou credenciais no frontend. Nenhum valor sensível é documentado neste repositório.

## Execução local

Requisitos documentados: Node.js 18 ou superior e npm 9 ou superior.

```bash
npm install
npm run dev
```

O Vite inicia normalmente em `http://localhost:5173` e escolhe outra porta se necessário. Para testar o chatbot, a API externa configurada em `VITE_API_URL` também precisa estar disponível.

## Scripts disponíveis

| Script | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite |
| `npm run build` | Executa `tsc -b` e gera o bundle de produção |
| `npm run lint` | Executa Oxlint |
| `npm run preview` | Serve localmente o bundle gerado |

## Build

`npm run build` valida o TypeScript com `tsc -b` e depois executa `vite build`. O artefato é gerado em `dist/`, diretório ignorado pelo Git.

## Deploy

Não há configuração de deploy versionada. Não foram encontrados Dockerfile, workflow de CI/CD ou manifests de Vercel, Netlify, Render, Railway ou similares para esta aplicação.

Os nomes de plataformas que aparecem em `src/data/mock.ts` pertencem às tecnologias declaradas em cases apresentados, não comprovam o processo de deploy desta landing page. Para tornar o deploy reproduzível, seria necessário documentar o provedor, variáveis por ambiente, comando de build, publicação de `dist/`, regras de fallback do React Router e configuração da API do chatbot.

## Estado atual do projeto

- Frontend React/Vite funcional e organizado por componentes.
- Conteúdo da marca centralizado em `src/data/mock.ts`.
- Rotas `/` e `/card` implementadas.
- Chatbot preparado para consumir uma API externa.
- Backend e banco não fazem parte deste repositório.
- A pasta `archive_vanilla/` preserva uma implementação histórica.
- Não foram identificados testes automatizados no projeto.

## Limitações conhecidas

- O chatbot depende de uma API externa não versionada.
- `session_id` não é persistido após recarregar a página.
- A resposta da API não possui validação de schema no frontend.
- Não há timeout ou cancelamento explícito da requisição do chatbot.
- O conhecimento dos cases não é conectado automaticamente ao chatbot.
- O deploy atual não é reproduzível a partir dos arquivos do repositório.
- O README original era o README padrão do Vite; a documentação detalhada agora está dividida em `docs/`.

## Decisões e observações arquiteturais

- O conteúdo público foi mantido em dados estáticos para renderização direta da landing page.
- O roteamento usa `BrowserRouter`, com a Home e o cartão digital como rotas distintas.
- A entrada de voz é local no navegador e transforma fala em texto antes do envio.
- O frontend não contém chaves de provedores de IA.
- A versão vanilla foi mantida em `archive_vanilla/` como histórico, não como código executado pela aplicação React atual.

## Projetos e cases apresentados

Os sete cases vêm de `src/data/mock.ts`:

1. **Secretária.Ai**: assistente virtual para WhatsApp, agendamento e pagamentos.
2. **AgendaLivre Aí**: plataforma de agendamento com confirmações, pagamentos e WhatsApp.
3. **Acarajé do Diego / Dois Irmãos**: delivery e gestão operacional.
4. **EloPro**: aplicativo mobile de serviços locais e geolocalização.
5. **Dashboard Financeiro PME**: painel de fluxo de caixa e indicadores.
6. **Condutor Pro**: plataforma de e-learning com simulados e tutor de IA.
7. **Encantos da Ana**: SaaS de catálogo, gestão de loja e reservas por WhatsApp.

Contexto, problemas, soluções, resultados, tecnologias, funcionalidades, links e indicação de projeto privado permanecem detalhados em [docs/cases.md](docs/cases.md). Os resultados são descrições existentes nos dados do projeto, não uma auditoria independente.

## Engenharia Assistida por IA / Harness

O Harness deste projeto é o conjunto de instruções, manifesto, skills e documentos que orientam agentes durante o desenvolvimento. Ele inclui `.ai-master-rules`, `.ai_skills/`, `.github/instructions/project.instructions.md`, `AGENTS.md`, `BrandVoice.md`, `DesignSystem.md` e `DEVELOPER_GUIDE.md`.

O Harness documenta princípios de leitura antes da edição, preservação de lógica, branding, UI, segurança e contexto de produto. O repositório não comprova a existência de agentes autônomos, tool calling, seleção automática de skills ou automações autônomas. Consulte [docs/harness-evolution.md](docs/harness-evolution.md) e [docs/evolution.md](docs/evolution.md).

## Documentação técnica

- [Arquitetura](docs/architecture.md)
- [Frontend](docs/frontend.md)
- [Chatbot](docs/chatbot.md)
- [Integrações](docs/integrations.md)
- [Deploy](docs/deployment.md)
- [Cases](docs/cases.md)
- [Evolução](docs/evolution.md)
- [Decisões](docs/decisions.md)
- [Evolução do Harness](docs/harness-evolution.md)
