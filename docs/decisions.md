# Decisões e observações técnicas

Este registro inclui somente decisões ou padrões que podem ser observados no código, na documentação ou no histórico Git.

## Frontend como escopo do repositório

`package.json`, `src/` e `vite.config.ts` demonstram uma aplicação frontend React/Vite. Não há diretório ou configuração de backend, banco ou infraestrutura local.

## Roteamento com React Router

`src/App.tsx` usa `BrowserRouter`, `Routes` e `Route` para separar `/` e `/card`. A Home usa âncoras para navegação entre seções.

## Dados estáticos centralizados

`src/data/mock.ts` funciona como fonte única dos dados públicos da marca, incluindo perfil, projetos, tecnologias, timeline, depoimentos e FAQ. Os componentes consomem esses dados diretamente.

## Chatbot desacoplado por URL

`Chatbot.tsx` usa `VITE_API_URL` e um fallback local para não fixar a localização do serviço externo no componente. O código pressupõe um endpoint `/chat`, mas não implementa o servidor.

## Voz processada no navegador

A Web Speech API transforma voz em texto no cliente. O componente envia apenas a mensagem textual ao endpoint.

## Preservação da versão vanilla

A implementação anterior foi movida/preservada em `archive_vanilla/`. O histórico Git registra a evolução da engine matemática e do efeito 3D antes da migração para React.

## Direção visual

`src/index.css`, `DesignSystem.md` e os componentes mostram a adoção de fundo navy, dourado, azul, glassmorphism, Inter/Outfit, canvas e microinterações.

## Ausências importantes

Não é possível concluir, a partir deste repositório, qual backend, banco, modelo, provedor de deploy ou pipeline foi usado nos cases ou no chatbot. Essas informações permanecem externas ou desdocumentadas.
