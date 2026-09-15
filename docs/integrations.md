# Integrações

## Integrações atuais no frontend

### API do chatbot

`src/components/Chatbot.tsx` faz `POST` para `${VITE_API_URL}/chat`. O endpoint é externo ao repositório e deve obedecer ao payload descrito em [chatbot.md](chatbot.md).

### Web Speech API

Usada localmente pelo chatbot para reconhecimento de voz em navegadores que oferecem `SpeechRecognition` ou `webkitSpeechRecognition`. O resultado vira texto antes do envio.

### APIs nativas do cartão digital

`src/pages/Card.tsx` usa:

- `navigator.share` para compartilhamento, com fallback para `navigator.clipboard`;
- link `data:text/vcard` para download do contato;
- links `wa.me`, `mailto`, LinkedIn e GitHub.

### Recursos externos de apresentação

- Google Fonts para Inter e Outfit.
- Unsplash para os avatares dos depoimentos.
- URLs externas dos demos dos projetos.

## Integrações declaradas nos dados dos cases

`src/data/mock.ts` cita OpenAI, Groq, Gemini, Evolution API, Stripe, Mercado Pago, Supabase, Firebase, Appwrite, Neon, MongoDB Atlas, Google Cloud, Railway, Render e Vercel como tecnologias ou plataformas de projetos apresentados.

Essas menções descrevem os cases e não comprovam que esta landing page se conecta diretamente a esses serviços.

## Integração histórica

`archive_vanilla/script.js` contém o envio de formulário para um Google Apps Script por `fetch` com modo `no-cors`. Esse código pertence à versão vanilla arquivada e não é importado pela aplicação React atual. O identificador da URL não é reproduzido nesta documentação.

## Ausências confirmadas

Não foram encontrados no projeto atual:

- cliente de banco de dados;
- SDK da OpenAI ou de outro modelo usado pela Home;
- configuração de webhook;
- autenticação de terceiros;
- arquivo de integração de pagamentos;
- backend local;
- contrato OpenAPI.
