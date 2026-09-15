# Evolução observável

Esta linha do tempo foi reconstruída a partir do histórico Git disponível no repositório.

## Versão inicial e vanilla

- `a4afd77` em 2026-05-21: commit inicial da landing page.
- `47b5974` em 2026-05-21: backup da versão estável antes da animação matemática.
- `e5329db` em 2026-05-21: introdução da engine matemática surreal com interação do mouse.
- `3cab66e` em 2026-05-21: documentação da engine matemática no README.
- `42111b9` em 2026-05-22: efeito 3D tilt e organização de arquivos.

Nesse período, a aplicação era HTML/CSS/JavaScript, mantida hoje em `archive_vanilla/`.

## Regras de IA e skills

- `79295be` em 2026-06-25: inclusão de `.ai-master-rules`, skills iniciais e conteúdo relacionado a posts.
- O arquivo `.ai-master-rules` passou a orientar análise sistêmica, edição cirúrgica, verificação de dependências, branding e documentação viva.
- `.ai_skills/` passou a separar orientações de cirurgia de código, full stack, branding, UI surreal e social media.
- `.github/instructions/project.instructions.md` passou a indicar `.ai-master-rules` como fonte canônica e as skills como instruções especializadas.

## Conteúdo e cases

- `0d3587a` em 2026-06-25: inclusão de projetos e imagens.
- `cce552a` em 2026-09-11: migração/estrutura React atual, documentação do projeto, componentes, chatbot e novos materiais.
- `8f85512` em 2026-09-14: inclusão de novos projetos em `src/data/mock.ts` e imagens públicas.

## Migração para React

A versão atual usa React 19, Vite, TypeScript, Tailwind, Framer Motion e React Router DOM. A Home passou a ser composta por componentes separados e os dados passaram a ficar centralizados em `src/data/mock.ts`.

## Chatbot

O commit da estrutura React introduziu `src/components/Chatbot.tsx`, com:

- conversa local;
- chamada `POST` para `${VITE_API_URL}/chat`;
- `session_id` em estado React;
- estados de loading e erro;
- reconhecimento de voz via Web Speech API.

Não há histórico Git, neste repositório, que inclua o backend ou o modelo de IA desse fluxo.

## Estado atual

O projeto atual é uma landing page React com cartão digital, dados estáticos, integração remota opcional do chatbot e um Harness documental composto por manifesto, instruções, skills e documentos de produto/design.
