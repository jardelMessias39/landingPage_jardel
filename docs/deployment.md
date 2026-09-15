# Deploy

## O que é comprovado

O projeto possui scripts para desenvolvimento, build e preview:

```bash
npm run dev
npm run build
npm run preview
```

O build executa `tsc -b` e `vite build`, gerando `dist/`. O diretório `dist/` está no `.gitignore`.

## O que não está versionado

Não foram encontrados manifests ou workflows de deploy para esta aplicação, incluindo Dockerfile, `docker-compose`, Vercel, Netlify, Render, Railway, GitHub Actions ou GitLab CI.

Também não há comprovação, no repositório, de qual provedor publica a landing page, como os domínios são configurados ou como o backend do chatbot é disponibilizado.

Os nomes de Railway, Render, Google Cloud e Vercel em `src/data/mock.ts` são tecnologias/plataformas atribuídas a cases, não configuração de deploy desta aplicação.

## Variáveis

O frontend reconhece `VITE_API_URL`. O valor padrão é `http://localhost:8000/api`. Não há variáveis backend versionadas neste projeto.

Nenhum segredo deve ser colocado no frontend ou documentado em texto aberto.

## Para tornar o deploy reproduzível

Seria necessário registrar, sem incluir secrets:

1. provedor e projeto de hospedagem;
2. comando de instalação e build;
3. diretório publicado (`dist/`);
4. variáveis públicas necessárias por ambiente;
5. regra de fallback para as rotas `/` e `/card`;
6. URL e política de CORS da API do chatbot;
7. procedimento de rollback;
8. workflow de CI/CD, se existir externamente.

Este documento não afirma que qualquer um desses itens já exista.
