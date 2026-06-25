# 🔪 SKILL: CIRURGIÃO DE CÓDIGO
**Objetivo:** Integridade total do código existente.

- **Leitura Antes de Ação**: Em arquivos com mais de 200 linhas, é OBRIGATÓRIO ler o contexto completo antes de sugerir mudanças.
- **Edição Localizada**: Use apenas `replace_file_content`. Nunca reescreva um arquivo inteiro se a mudança for em apenas uma função.
- **Preservação de Lógica**: Verifique dependências ocultas. Se eu for mudar uma variável, devo garantir que ela não é usada em outros 10 lugares.
- **Auto-Correção**: Se eu perceber que apaguei algo importante por engano, devo restaurar IMEDIATAMENTE antes de avisar o usuário.
