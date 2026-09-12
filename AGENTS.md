# AGENTS.md

## Visão do projeto

Este repositório contém a landing page e o sistema de identidade digital de Jardel Messias.
O projeto é uma aplicação frontend em React 19, Vite 8, TypeScript e Tailwind CSS.
A experiência comunica uma marca profissional de software, inteligência artificial e automação.
O objetivo do produto é apresentar soluções digitais e converter visitantes em clientes qualificados.
A aplicação principal está em `src/` e possui também a página independente `/card`.

## Navegação técnica

`src/App.tsx` concentra o roteamento principal da aplicação.
`src/main.tsx` é o ponto de entrada do frontend.
`src/components/` contém as seções e componentes reutilizáveis da landing page.
`src/pages/Card.tsx` implementa a página de cartão digital mobile-first.
`src/data/mock.ts` é a fonte de verdade dos dados exibidos no site.
`src/index.css` contém tokens e regras principais do sistema visual.
Consulte `DEVELOPER_GUIDE.md` para rotas, arquitetura, chatbot e detalhes operacionais.

## Fluxo de trabalho

Leia o contexto local antes de alterar código ou documentação.
Identifique os arquivos afetados e suas dependências antes de editar.
Prefira mudanças pequenas, localizadas e reversíveis.
Preserve APIs, comportamento existente e a organização atual do projeto.
Não reescreva arquivos inteiros quando uma alteração pontual for suficiente.
Explique decisões, premissas e validações relevantes ao concluir uma tarefa.
Não implemente melhorias visuais ou refatorações fora do escopo solicitado.

## Skills disponíveis

Use `.ai_skills/SKILL_SURGEON.md` antes de modificar código existente ou lógica compartilhada.
Use `.ai_skills/SKILL_DEEP_FULLSTACK.md` ao projetar integrações, APIs, dados ou requisitos de escalabilidade.
Use `.ai_skills/SKILL_BRAND_VISION.md` ao trabalhar com posicionamento visual, logos, imagens ou branding.
Use `.ai_skills/SKILL_SURREAL_UI.md` ao criar ou ajustar experiências interativas e animações visuais.
Use `.ai_skills/SKILL_SOCIAL_MEDIA.md` ao produzir conteúdo para redes sociais ou chamadas de conversão.
As Skills são instruções especializadas; consulte somente a Skill relacionada ao trabalho atual.
Não duplique o conteúdo das Skills neste arquivo.

## Segurança e integridade

Verifique referências e consumidores antes de alterar funções, componentes ou dados compartilhados.
Não introduza chaves, tokens ou credenciais no frontend ou em arquivos versionados.
Variáveis expostas ao navegador devem usar somente o prefixo `VITE_`.
Toda comunicação com serviços de IA deve ocorrer pelo backend; chaves da OpenAI nunca pertencem a este projeto.
Ao encontrar incerteza sobre o comportamento do código, leia as referências necessárias antes de decidir.
Mantenha o código existente íntegro e corrija regressões imediatamente quando identificadas.

## Validações

Use `npm run lint` para executar o Oxlint configurado no projeto.
Use `npm run build` para validar TypeScript e gerar o bundle de produção.
Use `npm run dev` para validar o comportamento durante o desenvolvimento local.
Use `npm run preview` para inspecionar o bundle gerado antes de um deploy.
Confirme as rotas `/` e `/card` quando uma alteração afetar navegação ou componentes de página.
Não considere a aplicação validada apenas porque o build terminou; verifique também o fluxo afetado.

## Documentação de referência

Consulte `BrandVoice.md` para tom, posicionamento e estrutura de comunicação.
Consulte `DesignSystem.md` para paleta, tipografia, tokens e princípios visuais.
Consulte `DEVELOPER_GUIDE.md` para setup, arquitetura, rotas e integrações.
Consulte `README.md` para a orientação inicial e os comandos básicos do template.
Este arquivo orienta a navegação; as documentações especializadas continuam sendo a fonte detalhada de cada assunto.
