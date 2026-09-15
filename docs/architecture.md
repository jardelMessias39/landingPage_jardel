# Arquitetura atual

## Escopo

Este documento descreve somente o que está comprovado neste repositório. O projeto versionado é um frontend React/Vite. Backend, banco de dados e infraestrutura do chatbot aparecem como dependências externas ou como descrição documental, mas não estão implementados aqui.

## Diagrama

```mermaid
flowchart TD
  Browser[ navegador ] --> Router[React Router]
  Router --> Home[/ rota /]
  Router --> Card[/ rota /card]
  Home --> Components[Componentes da landing page]
  Components --> Mock[src/data/mock.ts]
  Home --> Chatbot[Chatbot.tsx]
  Chatbot --> API[API externa configurada em VITE_API_URL]
  API --> ExternalBackend[Backend externo não versionado]
  ExternalBackend --> Model[Modelo de IA externo não identificado no repo]
  Card --> Native[APIs nativas e links externos]
```

## Dentro deste repositório

- `src/main.tsx`: ponto de entrada React.
- `src/App.tsx`: `BrowserRouter`, rotas e composição da Home.
- `src/components/`: seções visuais e chatbot.
- `src/pages/Card.tsx`: cartão digital.
- `src/data/mock.ts`: fonte dos dados públicos exibidos.
- `src/index.css`, Tailwind e PostCSS: estilos e tokens.
- `public/`: imagens e materiais públicos.
- `archive_vanilla/`: implementação histórica em HTML/CSS/JavaScript.

## Serviço externo

O único fluxo de rede do frontend atual é o `POST` do chatbot para `${VITE_API_URL}/chat`. O código espera que exista um serviço externo capaz de receber a mensagem, controlar a sessão e devolver a resposta.

A Web Speech API, `navigator.share`, `navigator.clipboard`, links do WhatsApp, Google Fonts e imagens do Unsplash também são dependências externas ou nativas do navegador.

## Apenas documentação ou dados de cases

Os seguintes itens são mencionados em documentos ou em `src/data/mock.ts`, mas não constituem módulos deste repositório:

- FastAPI, Node.js, Python e bancos citados nos cases.
- OpenAI, Gemini, Groq, Evolution API, n8n e ElevenLabs.
- Neon, MongoDB Atlas, Supabase, Firebase e Appwrite.
- Railway, Render, Google Cloud e Vercel.
- Histórico de conversas no MongoDB descrito em `DEVELOPER_GUIDE.md`.

## Ainda não implementado aqui

- Backend local ou versionado.
- Banco de dados, schema e migrations.
- Autenticação, autorização e rate limiting.
- Pipeline de deploy ou CI/CD.
- Prompt, RAG e fonte de conhecimento do chatbot.
- Testes automatizados identificados na árvore do projeto.
- Contrato formal de API ou validação de schema da resposta.
