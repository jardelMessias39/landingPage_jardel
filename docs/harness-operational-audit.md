# Harness Operational Audit

## 1. Estado atual

O Harness atual é um conjunto documental para orientar agentes e colaboradores. Ele combina regras gerais, skills por domínio, documentação de produto/design e documentação técnica do sistema.

Os arquivos principais são:

- `AGENTS.md`.
- `.ai-master-rules`.
- `.github/instructions/project.instructions.md`.
- `.ai_skills/`.
- `BrandVoice.md`.
- `DesignSystem.md`.
- `DEVELOPER_GUIDE.md`.
- `docs/project-context.md`.
- Documentos técnicos em `docs/`.

O Harness não é um runtime de agentes. Não há, no projeto, implementação comprovada de seleção automática de skills, tool calling, memória operacional automática, aprovação humana, execução autônoma ou pipeline de agentes.

Conclusão: o projeto possui uma base de contexto e regras, mas ainda não possui um protocolo operacional determinístico de ponta a ponta.

## 2. Contexto disponível

### Frontend

O agente encontra o frontend em `src/`. A stack, rotas, componentes, dados e responsabilidades estão descritos em `AGENTS.md`, `DEVELOPER_GUIDE.md`, `README.md`, `docs/frontend.md` e `docs/project-context.md`.

Pontos principais:

- React, Vite, TypeScript, React Router, Tailwind CSS, Framer Motion e Lucide React.
- `/` como landing page e `/card` como cartão digital.
- `src/components/` como área dos componentes.
- `src/data/mock.ts` como fonte dos dados públicos.
- `src/components/Chatbot.tsx` como cliente do chatbot.
- `src/pages/Card.tsx` como cartão digital.

### Backend

O backend é identificado em `docs/project-context.md` como um serviço FastAPI em workspace separado. O documento consolidado contém stack, arquivos, rotas, variáveis sem valores sensíveis, collections, integrações e limitações com base na documentação técnica fornecida.

O código do backend não está neste workspace e não foi acessado nesta auditoria.

### API e chatbot

O contrato frontend/backend está indicado em `docs/project-context.md` e `docs/chatbot.md`:

```text
POST ${VITE_API_URL}/chat
```

Com `message` e `session_id` no request, e `response` e `session_id` na resposta.

O fluxo do backend documentado inclui prompt fixo, últimas 20 mensagens, OpenAI `gpt-4o-mini`, sessões MongoDB e registro das conversas.

### Banco e serviços externos

O agente encontra as collections documentadas do backend em `docs/project-context.md`:

- `chat_sessions`.
- `conversas_portfolio`.
- `status_checks`.

Também encontra as integrações documentadas com OpenAI, OpenWeather, Groq e MongoDB, além das integrações do frontend com Web Speech API, Google Fonts, Unsplash, WhatsApp e APIs nativas do navegador.

### Documentação

O mapa consolidado aponta para os documentos detalhados de arquitetura, frontend, chatbot, integrações, deploy, cases, evolução, decisões e Harness. As referências locais foram verificadas nesta auditoria.

## 3. Regras existentes

### Regras de leitura e contexto

- `AGENTS.md` exige leitura do contexto local antes de alterar código ou documentação.
- `.github/instructions/project.instructions.md` aponta `.ai-master-rules` como regra canônica e `.ai_skills/` como fonte de skills relevantes.
- `AGENTS.md` direciona o agente para `DEVELOPER_GUIDE.md`, `BrandVoice.md`, `DesignSystem.md` e `README.md`.

### Regras de alteração

- Identificar arquivos afetados e dependências antes de editar.
- Preferir mudanças pequenas, localizadas e reversíveis.
- Preservar APIs, comportamento e organização existentes.
- Não reescrever arquivos inteiros quando uma mudança pontual for suficiente.
- Verificar referências e consumidores antes de alterar funções, componentes ou dados compartilhados.
- A skill `SKILL_SURGEON.md` reforça leitura antes da ação, edição localizada e preservação de lógica.

### Regras de segurança

- Não introduzir chaves, tokens ou credenciais no frontend ou em arquivos versionados.
- Variáveis expostas ao navegador devem usar prefixo `VITE_`.
- Chaves da OpenAI não pertencem ao frontend.
- Em caso de incerteza, ler as referências necessárias em vez de adivinhar.
- `docs/project-context.md` orienta registrar lacunas em vez de inventar.

### Regras de domínio

- `SKILL_DEEP_FULLSTACK.md`: APIs, dados, segurança e escalabilidade.
- `SKILL_BRAND_VISION.md`: branding e direção de imagem.
- `SKILL_SURREAL_UI.md`: interação, animação e linguagem visual.
- `SKILL_SOCIAL_MEDIA.md`: conteúdo e conversão.

Essas skills orientam o tipo de trabalho, mas não definem critérios formais para ativação, conclusão ou revisão.

## 4. Fluxo de execução existente

O fluxo existe parcialmente:

```text
Tarefa
  -> ler contexto local
  -> identificar arquivos e dependências
  -> preservar comportamento
  -> implementar mudança localizada
  -> executar lint/build ou checks aplicáveis
```

Há instruções para entendimento, localização de contexto, alteração e validação. Porém, não existe um fluxo único e obrigatório que defina:

- como classificar a tarefa antes de começar;
- quando produzir um plano formal;
- quais critérios autorizam a implementação;
- como separar frontend, backend, serviços, infraestrutura e documentação;
- quando uma tarefa deve parar e pedir confirmação;
- como fazer revisão sistemática do diff;
- qual formato o relatório final deve seguir;
- quais evidências devem ser registradas para concluir a tarefa.

O `.ai-master-rules` incentiva proatividade e sugere implementar melhorias quando possível. Isso pode entrar em tensão com tarefas de auditoria, documentação ou escopo fechado, nas quais a ação correta pode ser somente analisar.

## 5. Validação existente

### Frontend

Comandos documentados em `AGENTS.md`, `README.md` e `docs/project-context.md`:

```bash
npm run lint
npm run build
npm run dev
npm run preview
```

O build executa TypeScript e Vite. O lint usa Oxlint.

### Backend

A documentação técnica fornecida registra:

- compilação Python aprovada na auditoria do backend;
- coleta via `pytest` interrompida antes dos testes porque o Python global não tinha `pymongo`;
- `test_mongo.py` como diagnóstico manual de MongoDB;
- `test_env.py` como diagnóstico manual de variável OpenAI;
- execução local com `python -m uvicorn server:app --host 127.0.0.1 --port 8000 --reload`.

Não há, neste workspace frontend, comando adicional comprovado para testar o backend.

### Documentação e revisão

O projeto documenta:

```bash
git diff --check
git status --short
```

Há orientação para revisar o fluxo afetado, mas não existe checklist automatizado ou formato obrigatório de revisão documental, funcional e de escopo.

## 6. Fontes de verdade

| Assunto | Fonte principal | Limite |
| --- | --- | --- |
| Arquitetura consolidada | `docs/project-context.md` e `docs/architecture.md` | Backend baseado em documentação fornecida, sem código local |
| Frontend e rotas | `src/App.tsx`, `AGENTS.md`, `docs/frontend.md` | Implementação local |
| Conteúdo do portfolio | `src/data/mock.ts` | Dados estáticos da apresentação |
| Chatbot no frontend | `src/components/Chatbot.tsx` e `docs/chatbot.md` | Cliente local e contrato esperado |
| Chatbot no backend | Documentação backend fornecida e referência em `docs/project-context.md` | Código backend não está neste workspace |
| Contrato da API | `Chatbot.tsx`, `DEVELOPER_GUIDE.md` e `docs/project-context.md` | Contrato documentado, sem teste de integração local |
| Banco | Documentação backend fornecida e `docs/project-context.md` | Collections documentadas; sem schema local |
| Regras do agente | `.ai-master-rules`, `AGENTS.md` e `.github/instructions/project.instructions.md` | Orientação textual, sem enforcement automático |
| Design | `DesignSystem.md`, `src/index.css` e componentes | Direção visual e implementação local |
| Voz da marca | `BrandVoice.md` | Conteúdo e posicionamento |
| Decisões | `docs/decisions.md` e histórico Git | Registro observacional |
| Evolução | `docs/evolution.md` e `docs/harness-evolution.md` | Histórico disponível no repositório |

Quando houver conflito, o Harness não define uma ordem formal universal de precedência. A prática documentada é conferir implementação atual e registrar a divergência.

## 7. Fronteiras frontend/backend

A fronteira principal é clara:

- Frontend: renderização, navegação, estado local, voz, apresentação de dados e chamada HTTP.
- Backend: API FastAPI, validação, sessões, prompt, modelo, persistência, clima e sugestão de roupas.
- Serviços externos: OpenAI, MongoDB, OpenWeather, Groq e APIs nativas/externas do frontend.
- Documentação: contexto, regras e referências técnicas.

O agente consegue identificar a fronteira básica por `docs/project-context.md`, mas não há uma matriz formal de decisão com exemplos para classificar cada tarefa como frontend, backend, integração, infraestrutura ou documentação.

Também não há regra explícita no Harness local exigindo coordenação de contrato quando uma mudança atravessa frontend e backend, embora o documento consolidado recomende preservar `message`, `session_id` e `response`.

## 8. Lacunas

- Não existe protocolo único de execução com etapas obrigatórias e critérios de saída.
- Não existe template de plano, revisão ou relatório final.
- Não existe matriz de classificação de escopo.
- Não existe ordem de precedência formal entre código, README, docs, regras e histórico.
- Não existe mecanismo automático para carregar o contexto correto.
- Não existe seleção automática comprovada de skills relevantes.
- Não existe teste de contrato frontend/backend versionado neste workspace.
- Não existe validação automatizada de links entre documentação e arquivos.
- Não existe checklist de secrets aplicado automaticamente.
- Não existe processo formal para atualizar `docs/project-context.md` após mudanças de arquitetura.
- Não existe política formal para mudanças visuais, aprovação ou congelamento de telas.
- Não existe procedimento documentado de handoff entre workspaces frontend e backend.
- Não existe pipeline de CI/CD ou validação integrada dos dois projetos.
- Não existe observabilidade ou registro automático das decisões do agente.

## 9. Riscos

### Risco de escopo

A regra de proatividade do `.ai-master-rules` pode incentivar implementação fora do pedido quando a tarefa exige somente auditoria ou documentação.

### Risco de interpretação

As regras dizem para consultar skills relevantes, mas não definem como decidir quais são relevantes. O agente pode carregar contexto insuficiente ou excessivo.

### Risco de contrato

O contrato `message`, `session_id` e `response` está documentado, mas não há teste de integração local que detecte regressões entre os dois workspaces.

### Risco de divergência

O frontend contém dados em `mock.ts`, enquanto apenas parte do conhecimento do portfolio é documentada como presente no prompt do backend. Não há sincronização automática.

### Risco de validação

Lint e build do frontend não comprovam que o backend, MongoDB, OpenAI ou rotas externas estão operacionais. Os checks backend registrados também não formam uma suíte integrada.

### Risco de segurança

As regras proíbem secrets versionados, mas não há scanner ou validação automática documentada. Variáveis e CORS dependem de configuração externa.

### Risco de deploy

Não há pipeline ou configuração de produção versionada para validar a arquitetura consolidada como um todo.

## 10. Próximas melhorias recomendadas

Estas são recomendações de evolução, não implementações desta auditoria:

1. Criar um protocolo operacional curto com entradas, saídas e critérios de parada para cada etapa.
2. Criar uma matriz de escopo para frontend, backend, integração, infraestrutura e documentação.
3. Definir precedência entre código atual, contrato, documentação, regras e histórico.
4. Criar um checklist de preservação do contrato frontend/backend.
5. Definir um formato mínimo de plano, validação, revisão e relatório.
6. Criar uma validação de links e referências documentais.
7. Definir como e quando atualizar `docs/project-context.md`.
8. Criar testes de contrato entre `Chatbot.tsx` e `/api/chat` quando os dois workspaces puderem ser validados juntos.
9. Documentar uma validação integrada sem incluir secrets ou criar infraestrutura.
10. Adicionar mecanismos automáticos somente depois de definir claramente as regras humanas que eles devem reforçar.

Nenhuma dessas melhorias foi implementada nesta tarefa.
