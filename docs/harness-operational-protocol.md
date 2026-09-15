# Harness Operational Protocol

## 1. Objetivo

Este protocolo define como executar tarefas com segurança, contexto proporcional e evidência verificável. Ele orienta o trabalho do agente; não implementa agentes autônomos, automações ou orquestração.

Princípio:

- `docs/project-context.md` explica o que é o sistema.
- Os documentos técnicos explicam os detalhes.
- Este protocolo explica como trabalhar sobre eles.

## 2. Classificação da Tarefa

Antes de agir, classifique a tarefa como uma das áreas abaixo:

- **FRONTEND**: `src/`, rotas, componentes, estilos, dados públicos e comportamento no navegador.
- **BACKEND**: API FastAPI, serviços, modelos, persistência e rotas do workspace backend.
- **INTEGRAÇÃO**: contrato entre camadas ou uso de OpenAI, MongoDB, OpenWeather, Groq e outras APIs.
- **DOCUMENTAÇÃO**: README, `docs/`, regras, skills ou contexto.
- **INFRAESTRUTURA**: ambientes, deploy, CI/CD, domínio, configuração operacional e serviços hospedados.
- **TRANSVERSAL**: duas ou mais áreas. Liste explicitamente as áreas envolvidas.

Se a classificação não for possível, registre a incerteza antes de editar. Não deduza que uma tarefa é somente frontend ou backend pelo nome do arquivo.

## 3. Contexto Obrigatório

Carregue somente o contexto proporcional à tarefa.

### Toda tarefa

- `docs/project-context.md`.
- `AGENTS.md`.
- A documentação técnica diretamente relacionada.
- O código ou configuração que controla o comportamento.

### Frontend

- `docs/frontend.md`.
- `docs/architecture.md` quando houver impacto estrutural.
- Código relacionado em `src/`.
- `src/data/mock.ts` para conteúdo do portfolio.
- Skill relevante em `.ai_skills/`.

### Backend

- `docs/project-context.md`.
- Documentação backend disponível.
- Contrato da API em `docs/project-context.md` e documentos backend correspondentes.
- Código relacionado do backend, somente quando o workspace estiver disponível e dentro do escopo autorizado.

### Chatbot ou integração

- `docs/project-context.md`.
- `docs/chatbot.md`.
- Contrato `message`, `session_id` e `response`.
- `src/components/Chatbot.tsx` para o cliente.
- Documentação/prompt do backend quando a tarefa afetar o processamento remoto.

### Documentação, Harness ou design

- `docs/harness-operational-audit.md` e `docs/harness-evolution.md` para Harness.
- `BrandVoice.md` para voz.
- `DesignSystem.md` para design.
- `DEVELOPER_GUIDE.md` e `README.md` para operação.
- Regra ou skill específica que será alterada ou aplicada.

Carregue somente os documentos necessários ao escopo.

## 4. Fonte de Verdade

Use esta precedência quando houver conflito:

1. Implementação atual diretamente observada no escopo da tarefa.
2. Contrato atual observado entre as partes afetadas.
3. Documentação técnica correspondente e recentemente auditada.
4. `docs/project-context.md` como mapa consolidado.
5. `AGENTS.md`, regras, skills e documentação de produto/design.
6. Histórico Git, somente como evidência de evolução, nunca como prova isolada do comportamento atual.

Se o código controlador não estiver disponível, não trate uma descrição documental como implementação verificada. Registre a origem da informação e a limitação.

Quando uma mudança intencional alterar comportamento documentado, atualize a documentação afetada na mesma tarefa ou registre explicitamente por que isso ficou fora do escopo.

## 5. Incerteza

Quando faltar informação necessária:

1. Não invente comportamento, URL, secret, integração ou decisão.
2. Procure uma fonte válida já disponível no escopo.
3. Compare implementação, contrato e documentação.
4. Registre a lacuna e sua consequência.
5. Pare e peça informação ao usuário antes de editar quando a decisão puder alterar contrato, segurança, produção, escopo ou comportamento não observado.

Para uma lacuna não bloqueadora, prossiga somente com uma hipótese explícita e uma validação capaz de falsificá-la.

## 6. Planejamento

Antes de uma alteração relevante, registre de forma breve:

- objetivo;
- classificação e escopo;
- arquivos prováveis;
- dependências e consumidores;
- riscos;
- validação esperada;
- critério de conclusão.

Para uma alteração trivial e de baixo risco, o planejamento pode ser reduzido a uma hipótese, um arquivo alvo e um check.

Não iniciar implementação enquanto o código controlador, o contrato ou uma dependência crítica permanecerem indefinidos.

## 7. Execução

Fazer a menor alteração suficiente, preservar contratos e comportamento não relacionado, não alterar arquivos fora do escopo, não introduzir dependências sem necessidade, não criar/expor secrets, não transformar documentação histórica em comportamento atual, não esconder falhas de validação e consultar a skill relevante sem presumir seleção automática. Em tarefa somente documental, não alterar código da aplicação.

## 8. Validação

A validação deve corresponder à área afetada.

### Frontend

Use os checks documentados:

```bash
npm run lint
npm run build
npm run dev
npm run preview
```

`dev` e `preview` são checks de execução/inspeção, não substituem lint e build. Se a tarefa alterar rota ou tela, conferir também a rota e o fluxo afetado.

### Backend

Use somente os checks documentados no contexto backend disponível:

```bash
python -m uvicorn server:app --host 127.0.0.1 --port 8000 --reload
```

A auditoria backend registra compilação Python aprovada, `pytest` impedido antes da coleta por falta de `pymongo`, `test_mongo.py` e `test_env.py` como diagnósticos manuais. Não apresentar esses diagnósticos como suíte automatizada.

### Documentação

```bash
git diff --check
git status --short
```

Também verificar referências locais, tamanho quando houver limite, ausência de secrets e consistência entre afirmações e fontes.

### Transversal

Validar cada camada afetada e o contrato entre elas. Não declarar integração validada apenas porque uma camada passou no próprio check.

## 9. Revisão

Antes de concluir, revisar o diff completo, arquivos alterados e inesperados, correspondência com a tarefa, secrets/tokens, contratos, documentação afetada, limitações, checks não executados e impacto em outro workspace. Preservar alterações de outros trabalhos não relacionados.

## 10. Critério de Conclusão

Uma tarefa só está concluída quando o objetivo foi atendido, o escopo foi respeitado, as validações aplicáveis foram executadas e observadas, o diff foi revisado e limitações/lacunas foram registradas.

Se algum item não puder ser executado, declarar o motivo. Não usar “build passou” como prova de que toda a arquitetura ou rota está correta.

## 11. Relatório Final

Use um relatório curto com: **Objetivo**, **Escopo**, **Alterações**, **Arquivos afetados**, **Validações e resultados**, **Limitações** e **Próximos passos**.

Para revisão de código, findings de risco e regressão devem vir antes do resumo. Não produzir relatório maior que a evidência necessária.

## 12. Handoff entre Frontend e Backend

Como os workspaces são separados:

- Não assumir acesso ao outro workspace.
- Usar `docs/project-context.md` como mapa consolidado.
- Preservar `message`, `session_id` e `response`.
- Identificar explicitamente quando a mudança exige alteração na outra camada.
- Não declarar integração validada sem teste ou evidência suficiente.
- Registrar qual parte foi observada diretamente e qual veio de documentação externa.

## 13. Atualização do Contexto

Atualize `docs/project-context.md` quando houver mudança relevante em:

- arquitetura;
- contrato;
- integração;
- responsabilidade de componente;
- infraestrutura;
- fluxo operacional.

Não atualize o contexto consolidado por mudança cosmética ou detalhe local sem impacto arquitetural.

## 14. Relação com Skills

O agente deve identificar a skill relevante com base na classificação e no escopo da tarefa:

- `SKILL_SURGEON.md` para alteração localizada em código existente.
- `SKILL_DEEP_FULLSTACK.md` para APIs, dados e segurança.
- `SKILL_BRAND_VISION.md` para branding e imagem.
- `SKILL_SURREAL_UI.md` para interações e animações.
- `SKILL_SOCIAL_MEDIA.md` para conteúdo de redes sociais.

As skills são orientação textual. Este protocolo não implementa seleção automática, carregamento automático ou execução de skills.

## 15. Limites

Este protocolo não cria:

- agentes autônomos;
- tool calling;
- memória automática;
- seleção automática de skills;
- CI/CD;
- observabilidade automática;
- aprovação automática;
- acesso automático ao workspace backend;
- execução automática de comandos.

Ele define apenas um procedimento operacional para trabalho humano-agente dentro do escopo autorizado.

## Conflitos ou Ajustes Necessários

### Proatividade versus escopo fechado

`.ai-master-rules`, na seção “Modo Super Sênior”, orienta que o agente seja proativo e sugira/implemente melhorias. Isso pode conflitar com tarefas explicitamente somente analíticas, documentais ou limitadas a um arquivo.

**Ajuste recomendado:** interpretar implementação como autorizada somente quando compatível com o pedido e o escopo classificado. Para auditorias e documentação, a proatividade deve produzir achados e recomendações, não alterações funcionais.

### “Cadeia de Pensamento” versus relatório operacional

`.ai-master-rules`, na seção “Fluxo de Trabalho”, menciona explicar o raciocínio antes de entregar o código. O protocolo exige apenas justificativa concisa, evidências, decisões e validações observáveis.

**Ajuste recomendado:** substituir futuramente essa referência por “resumo de decisões e evidências”, evitando transformar raciocínio interno em requisito operacional.

Nenhum arquivo de regra existente foi alterado nesta etapa.
