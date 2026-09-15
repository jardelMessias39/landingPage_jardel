# Evolução do Harness

## 1. O que é o Harness neste projeto

Harness é o conjunto de arquivos que orienta agentes e colaboradores sobre contexto, estilo, segurança, edição e objetivo do produto. Ele é documental/configuracional; não é um runtime de agentes.

Os principais elementos são `AGENTS.md`, `.ai-master-rules`, `.github/instructions/project.instructions.md`, `.ai_skills/`, `BrandVoice.md`, `DesignSystem.md` e `DEVELOPER_GUIDE.md`.

## 2. Estado inicial

O histórico começa com uma landing page vanilla. As primeiras decisões eram expressas no próprio HTML, CSS, JavaScript e README, incluindo a identidade pessoal, a apresentação de serviços e a engine matemática interativa.

## 3. Evolução observada no histórico

- Maio de 2026: landing page vanilla, engine matemática e efeito 3D.
- Junho de 2026: primeiros arquivos formais de regras e skills de IA.
- Junho de 2026: inclusão e organização de projetos/cases.
- Setembro de 2026: migração para React/Vite e documentação ampliada.
- Setembro de 2026: novos cases adicionados ao modelo de dados.

## 4. Regras introduzidas

`.ai-master-rules` orienta:

- pensamento sistêmico;
- proatividade;
- edição cirúrgica;
- verificação de dependências;
- anti-alucinação;
- branding e UX;
- documentação viva.

`AGENTS.md` acrescenta regras de integridade, segurança, preservação do projeto, uso das documentações e validação com lint/build.

## 5. Skills introduzidas

As skills são arquivos separados por domínio:

- `SKILL_SURGEON.md`: leitura antes da alteração e edição localizada.
- `SKILL_DEEP_FULLSTACK.md`: princípios de APIs, dados, segurança e escalabilidade.
- `SKILL_BRAND_VISION.md`: direção de marca e imagem.
- `SKILL_SURREAL_UI.md`: interações, camadas e animações.
- `SKILL_SOCIAL_MEDIA.md`: conteúdo de conversão e consistência de marca.

## 6. Contexto disponível aos agentes

Os agentes encontram contexto sobre:

- stack e rotas em `AGENTS.md` e `DEVELOPER_GUIDE.md`;
- identidade visual em `DesignSystem.md`;
- tom de voz em `BrandVoice.md`;
- cases e dados públicos em `src/data/mock.ts`;
- regras de comportamento em `.ai-master-rules`;
- skills de trabalho em `.ai_skills/`;
- instrução de carregamento em `.github/instructions/project.instructions.md`.

## 7. Como as instruções são carregadas

O arquivo `.github/instructions/project.instructions.md` informa que as regras canônicas estão em `.ai-master-rules` e que as skills relevantes estão em `.ai_skills/`. Isso documenta uma convenção de consulta para o agente.

O repositório não contém implementação que prove seleção automática de skills, execução de agentes, tool calling ou orquestração autônoma.

## 8. O que o Harness consegue orientar

Ele consegue orientar, por documentação:

- leitura de contexto antes da edição;
- preservação do código existente;
- princípios de segurança para secrets;
- identidade visual e linguagem;
- organização do frontend;
- uso das skills por assunto;
- validação por lint, build e execução local.

## 9. O que ainda não consegue controlar

Não há mecanismo versionado que controle automaticamente:

- seleção de modelos;
- seleção automática de skills;
- permissões de ferramentas;
- execução de comandos;
- aprovação humana;
- deploy;
- criação de banco;
- prompt e memória do chatbot;
- observabilidade ou auditoria de respostas.

## 10. Lacunas atuais

- Não existe contrato técnico do backend.
- Não existe prompt do chatbot.
- Não existe fonte de RAG versionada.
- Não existe matriz de ambientes.
- Não existe pipeline de CI/CD.
- Não existem testes documentados para validar o Harness.
- Não existe regra formal para atualizar contexto quando `mock.ts` muda.
- Não existe registro de versão do modelo usado pelos serviços externos.

## 11. Próximas possíveis evoluções

As possibilidades abaixo são sugestões, não funcionalidades existentes:

1. Registrar um contrato versionado da API do chatbot sem secrets.
2. Criar documentação de ambientes e deploy reproduzível.
3. Definir testes de rota, chatbot e integridade dos dados.
4. Versionar a fonte de conhecimento que o backend usa, se ela existir.
5. Definir política de revisão para mudanças em regras, skills e documentos.
6. Registrar explicitamente quais informações de `mock.ts` podem ser usadas pelo chatbot.

Nenhuma dessas evoluções foi implementada por esta tarefa.
