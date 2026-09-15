# Project Context

> Contexto operacional mínimo para agentes. Este documento consolida o frontend observado neste workspace e a documentação técnica do backend fornecida pelo usuário. O código do backend não foi acessado nesta tarefa.

## 1. Visão do Sistema

O projeto é uma landing page e identidade digital de Jardel Messias. O frontend React/Vite apresenta serviços, projetos, trajetória, contatos e um cartão digital. Também contém o componente `Chatbot.tsx`, que chama uma API externa de chat.

A arquitetura consolidada pretendida é:

```text
Usuário
  -> Frontend React/Vite
  -> API do backend de chat
  -> IA / banco / serviços externos
```

O backend está em um workspace separado. Sua implementação é representada aqui somente pela documentação técnica fornecida.

## 2. Classificação das partes

| Parte | Classificação | Evidência/limite |
| --- | --- | --- |
| `src/` e `public/` | Código versionado | Implementação frontend neste repositório |
| `VITE_API_URL` | Configuração | Lida pelo frontend em `Chatbot.tsx` |
| API `/api/chat` | Serviço externo ao frontend | Endpoint consumido por `Chatbot.tsx` |
| Backend FastAPI | Código versionado em repositório separado | Detalhes baseados na documentação fornecida |
| OpenAI, MongoDB, OpenWeather e Groq | Serviços externos | Usados pelo backend conforme documentação fornecida |
| TTS | Integração documentada, desativada | Implementação atual retorna `None` |
| README e `docs/` | Documentação versionada | Guias e auditoria do frontend |

## 3. Frontend

### Stack

- React 19, React DOM e TypeScript.
- Vite 8.
- React Router DOM.
- Tailwind CSS, PostCSS e Autoprefixer.
- Framer Motion e Lucide React.
- Oxlint.

### Localização e responsabilidades

- `src/App.tsx`: rotas e composição da Home.
- `src/main.tsx`: entrada React.
- `src/components/`: seções da landing page e chatbot.
- `src/pages/Card.tsx`: cartão digital.
- `src/data/mock.ts`: dados públicos da marca e cases.
- `src/index.css`: tokens e estilos globais.

Rotas relevantes:

- `/`: landing page completa.
- `/card`: cartão digital mobile-first.

O frontend mantém estado local de navegação, FAQ, conversa, loading, erro e voz. Não mantém banco, prompt, modelo ou persistência de conversa.

## 4. Backend

O backend é um serviço Python/FastAPI em workspace separado. Esta seção usa exclusivamente a documentação técnica fornecida, sem acesso ao código desse workspace.

### Stack e arquivos informados

Python/FastAPI/Uvicorn, Pydantic e Motor/PyMongo. `server.py` concentra aplicação, CORS, ciclo de vida do MongoDB e rotas; `chat_service.py` concentra chatbot, prompt fixo, sessão, histórico, persistência e TTS desativado; `models.py` contém modelos Pydantic; `requirements.txt` declara dependências; `test_mongo.py` e `test_env.py` são diagnósticos manuais.

### Responsabilidades

Expor `/api`, validar contratos, gerenciar sessões/histórico, consultar OpenAI, persistir no MongoDB, integrar clima/previsão com OpenWeather, sugerir roupas com Groq e configurar CORS/conexão MongoDB.

### Rotas informadas

- `GET /api/health`
- `GET /api/`
- `POST /api/chat`
- `POST /api/tts`
- `GET /api/status`
- `POST /api/status`
- `GET /api/clima`
- `GET /api/previsao`
- `POST /api/sugerir`

### Limites da evidência

Os arquivos do backend não estão neste workspace. Os fatos desta seção vêm da documentação técnica fornecida e devem ser conferidos no repositório backend quando uma alteração exigir isso.

## 5. Contrato Frontend ↔ Backend

Este contrato é compatível entre o `src/components/Chatbot.tsx` observado no frontend e a documentação da API do backend fornecida.

### Endpoint

```text
POST ${VITE_API_URL}/chat
```

Sem `VITE_API_URL`, o frontend usa:

```text
http://localhost:8000/api
```

Assim, o fallback completo esperado é `http://localhost:8000/api/chat`. O backend documentado expõe as rotas com prefixo `/api`.

### Request

```json
{
  "message": "string",
  "session_id": "string ou null"
}
```

Headers enviados:

```text
Content-Type: application/json
```

### Response esperada

```json
{
  "response": "string",
  "session_id": "string"
}
```

O frontend verifica `response.ok`, lê o JSON, guarda `session_id` quando presente e exibe `response`. O backend documentado cria ou recupera a sessão e retorna esses campos.

### Preservar

Alterações devem manter `message`, `session_id` e `response`, salvo atualização coordenada do frontend e do contrato.

## 6. Chatbot

Fluxo conhecido:

```text
Usuário
  -> Chatbot.tsx
  -> POST /api/chat no serviço configurado
  -> backend externo
  -> prompt fixo + últimas 20 mensagens
  -> OpenAI gpt-4o-mini
  -> MongoDB e registro da conversa
  -> response + session_id
  -> estado local e interface
```

- A primeira mensagem envia `session_id: null`.
- O ID retornado é mantido em `useState` durante a montagem do componente.
- Recarregar a página perde o ID e o histórico local.
- A voz é transcrita no navegador por Web Speech API; áudio não é enviado.
- O fallback da API é `http://localhost:8000/api`.
- `Chatbot.tsx` não importa `mock.ts` e não envia automaticamente cases, FAQ, perfil ou prompt.
- O backend documentado usa prompt fixo e as últimas 20 mensagens como janela de contexto.
- O conhecimento de CondutorPro e Encantos da Ana está no texto do prompt do backend.
- Não há RAG comprovado: não foram observados embeddings, busca vetorial ou recuperação de documentos.
- O backend usa OpenAI `gpt-4o-mini`.
- O backend registra sessões e conversas no MongoDB.
- TTS está documentado como desativado; a rota existe, mas a função retorna `None`.

## 7. Dados

### Frontend

Dados públicos estáticos em `src/data/mock.ts`, estado transitório da conversa em React e nenhuma collection, schema ou migration local.

### Backend, conforme documentação fornecida

Collections observadas:

- `chat_sessions`: sessões e histórico do chatbot.
- `conversas_portfolio`: registro das trocas da conversa.
- `status_checks`: dados da rota de status.

O banco é selecionado por `DB_NAME` e conectado por `MONGO_URL`. Índices, retenção, backup e configuração externa do MongoDB não estão documentados como versionados.

## 8. Serviços externos

| Serviço | Função observável/informada | Onde aparece | Status nesta consolidação |
| --- | --- | --- | --- |
| API de chat | Recebe mensagem e devolve resposta/sessão | `Chatbot.tsx` + backend documentado | Atual; backend separado |
| Web Speech API | Transcrição local de voz | `Chatbot.tsx` | Atual |
| WhatsApp | Links de contato e cases | `Card.tsx`, `mock.ts` | Links/cases; não é backend desta aplicação |
| Google Fonts | Inter e Outfit | `index.css` | Atual |
| Unsplash | Avatares dos depoimentos | `mock.ts` | Atual |
| Vercel | Demo/plataforma citada em cases | `mock.ts` | Menção de case; deploy da landing page não comprovado |
| Render | Plataforma citada em skills/cases | `mock.ts` e documentação frontend | Deploy atual não comprovado |
| MongoDB Atlas | Infraestrutura MongoDB informada para o backend | Documentação backend fornecida | Serviço externo do backend; configuração não versionada |
| OpenAI | Modelo do chatbot | Documentação backend fornecida | Atual no backend: `gpt-4o-mini` |
| Groq | Sugestão de roupas | Documentação backend fornecida | Atual no backend: `llama-3.3-70b-versatile` |
| OpenWeather | Clima e previsão | Documentação backend fornecida | Atual no backend; variável `OPENWEATHER_KEY` |
| ElevenLabs | TTS | `skills.ia` e documentação backend | Integração desativada; rota/função não funcional |

A versão vanilla também contém uma integração histórica com Google Apps Script em `archive_vanilla/script.js`; ela não é usada pela aplicação React atual.

## 9. Ambientes

### Local

- Frontend: `npm run dev`.
- Frontend build: `npm run build`.
- Frontend preview: `npm run preview`.
- Frontend API fallback: `http://localhost:8000/api`.
- Backend documentado: `python -m uvicorn server:app --host 127.0.0.1 --port 8000 --reload`.
- Backend docs interativas: `http://localhost:8000/docs` quando o servidor está em execução.

A URL acima é o comando local documentado; não representa configuração de produção.

### Produção

Não há configuração de deploy da landing page versionada neste workspace. Não afirmar provedor, domínio, URL de API ou pipeline sem evidência específica.

### Serviços externos

O backend depende de MongoDB, OpenAI, OpenWeather e Groq. Valores de credenciais não são documentados. CORS é configurado pelo backend, mas os valores efetivos de `CORS_ORIGINS` não são registrados aqui.

## 10. Regras para agentes

- Não alterar backend quando a tarefa for exclusivamente frontend.
- Não alterar frontend quando a tarefa for exclusivamente backend.
- Preservar o contrato `message`, `session_id` e `response`.
- Não acessar ou alterar secrets.
- Não assumir que documentação histórica representa implementação atual.
- Diferenciar código versionado, configuração, serviço externo, infraestrutura e lacuna.
- Validar a alteração no escopo correto.
- Revisar `git diff --check` e `git status --short`.
- Registrar lacunas em vez de inventar detalhes.
- Não tratar tecnologias listadas em `mock.ts` como integrações da landing page sem evidência de uso.

## 11. Validação

### Frontend

```bash
npm run lint
npm run build
npm run dev
npm run preview
```

### Backend informado

Compilação Python passou na auditoria fornecida. A coleta via `pytest` falhou antes de coletar testes porque o Python global não tinha `pymongo`. `test_mongo.py` e `test_env.py` são diagnósticos manuais, não uma suíte automatizada.

### Documentação

```bash
git diff --check
git status --short
```

O comando local documentado para iniciar o backend é o Uvicorn descrito na seção de ambientes. Não executar comandos do backend a partir deste workspace frontend.

## 12. Documentação de referência

Frontend:

- [README.md](../README.md)
- [architecture.md](architecture.md)
- [frontend.md](frontend.md)
- [chatbot.md](chatbot.md)
- [integrations.md](integrations.md)
- [deployment.md](deployment.md)
- [cases.md](cases.md)
- [evolution.md](evolution.md)
- [decisions.md](decisions.md)
- [harness-evolution.md](harness-evolution.md)
- [AGENTS.md](../AGENTS.md)
- [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md)

Backend, fornecido como referência textual:

- `README.md`, `docs/architecture.md`, `docs/api.md`, `docs/chatbot.md` e `docs/database.md`.
- `docs/integrations.md`, `docs/deployment.md`, `docs/security.md`, `docs/testing.md`, `docs/evolution.md` e `docs/decisions.md`.

Esses caminhos pertencem ao workspace backend separado e não são links locais deste repositório frontend.

## 13. Lacunas conhecidas

- O código do backend não foi acessado nesta tarefa; a visão backend depende da documentação fornecida.
- Não há autenticação, autorização ou rate limiting observados no backend documentado.
- Não há índices, retenção, backup ou configuração externa do MongoDB versionados.
- Não há timeout/retry uniforme para chamadas externas.
- Não há testes de contrato, integração ou cobertura identificados.
- Deploy de frontend e backend, provedor, domínio e URLs de produção não estão identificados.
- A integração ElevenLabs/TTS está desativada.
- A relação automática entre todo o conteúdo de `mock.ts` e o prompt do backend não existe; somente CondutorPro e Encantos da Ana foram documentados no prompt.

## 14. Limites de conhecimento

Este arquivo é um mapa operacional curto. Ele não substitui as documentações técnicas dos dois repositórios. A parte do backend foi consolidada a partir do texto fornecido, sem acesso ao workspace `C:\Users\Jardel\projetos-jardel\meu-portfolio-backend`.
