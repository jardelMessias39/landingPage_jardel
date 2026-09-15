# Frontend

## Stack

- React 19 e React DOM.
- TypeScript.
- Vite 8.
- React Router DOM.
- Tailwind CSS, PostCSS e Autoprefixer.
- Framer Motion para animações do chatbot.
- Lucide React para ícones.
- Oxlint para lint.

## Entrada e roteamento

`src/main.tsx` importa `src/index.css`, obtém o elemento `#root` e renderiza `App` dentro de `StrictMode`.

`src/App.tsx` cria o `BrowserRouter` e declara:

- `/`: `MainLayout`, com todas as seções da landing page.
- `/card`: `Card`, página do cartão digital.

A navegação interna da Home usa âncoras HTML como `#hero`, `#projects`, `#about` e `#faq`.

## Componentes principais

- `Header.tsx`: logo textual, links de âncora, menu mobile e abertura do chatbot.
- `Hero.tsx`: posicionamento, CTAs, métricas visuais e mockups.
- `MathBackground.tsx`: canvas com partículas, operadores matemáticos, colisões e interação com o mouse.
- `Challenges.tsx`: seis desafios com transição entre problema e solução.
- `Methodology.tsx`: sete etapas do processo de engenharia.
- `Projects.tsx`: renderiza os cases da fonte de dados.
- `Technologies.tsx`: lista tecnologias em frontend/mobile, backend/DB e IA/automação.
- `Timeline.tsx`: trajetória profissional de 2023 a 2026.
- `Testimonials.tsx`: três depoimentos estáticos.
- `About.tsx`: biografia, localização e filosofia.
- `FAQ.tsx`: FAQ expansível mantido em estado local.
- `Footer.tsx`: e-mail, LinkedIn, GitHub e links internos.
- `Chatbot.tsx`: conversa remota e entrada por voz.
- `Card.tsx`: cartão digital, WhatsApp, vCard e compartilhamento.

## Dados

`src/data/mock.ts` contém as interfaces e os dados de perfil, desafios, projetos, tecnologias, timeline, depoimentos e FAQ. Os componentes importam esses dados diretamente; não há camada de API ou banco para o conteúdo da landing page.

## Estilos

`src/index.css` importa Inter e Outfit do Google Fonts, registra tokens CSS, configura Tailwind e define utilitários como `glass-panel`, efeitos de glow e scrollbar. O tema visual usa navy profundo, branco/slate, dourado e azul.

`tailwind.config.cjs` aponta para `index.html` e `src/**/*.{js,ts,jsx,tsx}`. `vite.config.ts` usa somente o plugin React.

## Responsabilidades

O frontend é responsável por:

- renderizar a experiência pública;
- manter estados locais de menu, FAQ, chatbot, loading e voz;
- enviar mensagens para o endpoint externo do chatbot;
- lidar com links e APIs nativas do navegador;
- apresentar dados estáticos da marca.

Ele não é responsável por persistência de conversa, execução de modelo, banco de dados ou deploy.
