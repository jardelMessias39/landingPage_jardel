# JM Digital Identity System — Frontend

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS · Framer Motion
**Localização:** `C:\landing_Page_jardel`

---

## Requisitos

- Node.js >= 18
- npm >= 9

---

## Instalação

```bash
npm install
```

---

## Desenvolvimento local

```bash
npm run dev
```

O Vite inicia em **http://localhost:5173** por padrão.

> O Vite escolhe automaticamente a próxima porta livre se 5173 estiver ocupada.
> Veja a saída do terminal para confirmar a URL exata.

---

## Build de produção

```bash
npm run build
```

O artefato de produção é gerado em `dist/`.
O TypeScript é verificado (`tsc -b`) antes de o Vite fazer o bundle.

## Preview do build

```bash
npm run preview
```

Serve o conteúdo de `dist/` localmente para validação antes de deploy.

---

## Rotas

| Rota   | Componente              | Descricao                         |
|--------|-------------------------|-----------------------------------|
| `/`    | `MainLayout` (App.tsx)  | Landing page completa             |
| `/card`| `src/pages/Card.tsx`    | Cartao digital mobile-first       |

---

## Variaveis de ambiente do frontend

Crie um arquivo `.env` na raiz do projeto (`C:\landing_Page_jardel\.env`):

| Variavel         | Default                        | Descricao                     |
|------------------|--------------------------------|-------------------------------|
| `VITE_API_URL`   | `http://localhost:8000/api`    | URL base da API FastAPI       |

> Variaveis expostas ao browser devem comecar com `VITE_`.
> NUNCA coloque chaves da OpenAI no frontend. Toda comunicacao com IA passa pelo backend.

Exemplo de `.env`:
```env
VITE_API_URL=http://localhost:8000/api
```

---

## Estrutura de `src/`

```
src/
├── App.tsx                  # Roteamento (BrowserRouter + Routes)
├── main.tsx                 # Entry point React
├── index.css                # Design System (variaveis, glass-panel, fontes)
├── App.css                  # Boilerplate Vite (nao utilizado — candidato a remocao)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MathBackground.tsx
│   ├── Challenges.tsx
│   ├── Methodology.tsx
│   ├── Projects.tsx
│   ├── Technologies.tsx
│   ├── Timeline.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── Chatbot.tsx          # Consultor Digital (texto + entrada por voz)
├── pages/
│   └── Card.tsx             # Cartao digital /card
└── data/
    └── mock.ts              # Fonte de verdade de todos os dados da marca
```

---

## Consultor Digital (Chatbot)

### Endpoint utilizado

```
POST http://localhost:8000/api/chat
Content-Type: application/json

{
  "message": "string",
  "session_id": "string | null"
}
```

### Resposta esperada

```json
{
  "response": "string",
  "session_id": "string"
}
```

### Gerenciamento do session_id

- Na primeira mensagem, o frontend envia `session_id: null`.
- O backend cria uma sessao nova e devolve o session_id gerado.
- O frontend armazena o ID no estado React (useState).
- Todas as mensagens seguintes da mesma aba enviam o mesmo session_id.
- O historico da conversa e mantido no MongoDB e recuperado a cada chamada.

### Responsabilidade do frontend

- Capturar a mensagem do usuario (digitada ou por voz via Web Speech API).
- Gerenciar o session_id em estado local.
- Exibir estados de loading, erro e resposta.
- Nao enviar audio ao backend; nao conter chaves da OpenAI.

### Entrada por voz

Implementada via Web Speech API nativa do navegador (sem bibliotecas extras):
- Suportada no Chrome e Edge.
- Idioma: pt-BR.
- O texto reconhecido e inserido no campo de mensagem para revisao antes do envio.
- Se o navegador nao suportar, exibe aviso amigavel.
- Se a permissao for negada, exibe mensagem de orientacao.

---

## Cartao Digital /card

Pagina independente da Home, criada para o QR Code do cartao fisico.

- Acesse localmente em: http://localhost:5173/card
- Componente: src/pages/Card.tsx
- Mobile-first (max-width 384px)
- Funcionalidades:
  - Link direto para WhatsApp com mensagem pre-definida
  - Download de vCard (.vcf) para salvar contato
  - Links para LinkedIn e GitHub
  - Botao de compartilhamento nativo (navigator.share) com fallback para clipboard
  - Nao depende do backend

---

## Dados da marca

Todos os dados exibidos na landing page (projetos, servicos, FAQ, timeline, depoimentos, perfil)
sao lidos de: src/data/mock.ts

Este arquivo e a fonte de verdade unica para o conteudo do site.
Alteracoes de conteudo devem ser feitas aqui.
