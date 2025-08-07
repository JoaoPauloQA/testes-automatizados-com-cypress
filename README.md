# 🧪 Testes Automatizados com Cypress

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para aplicações web.

O objetivo deste projeto é praticar e demonstrar conhecimento em testes end-to-end (E2E), utilizando boas práticas como: 

## 🚀 Tecnologias e bibliotecas utilizadas

- [Cypress](https://www.cypress.io/) – Testes E2E e de API
- [Underscore.js](https://underscorejs.org/) – Suporte a manipulação de dados em testes
- Faker (ou Factory personalizada) – Geração de dados dinâmicos
- Cypress Fixture – Uso de arquivos JSON para simular dados
- Commands customizados (`commands.js`) – Reutilização de ações comuns
- Page Objects – Organização de ações por página

### Testes de Login
- Com dados válidos e inválidos

-Simulação de login via UI

-Simulação de login via token 

###Testes de recuperação de senha** 

-Simulação de fluxo de "Esqueci minha senha"

-Validação de e-mails cadastrados e não cadastrados 

### Testes de registro

-Criação de nova conta com dados dinâmicos (factories ou faker)

-Validações de campos obrigatórios e senhas 

### Testes de agendamento
-Seleção de prestador de serviço

-Escolha de data e horário

-Confirmação e verificação de agendamento no dashboard

- **Testes de API**
  - Criação de usuário (`POST`)
  - Consulta de dados (`GET`)
  - Validação de respostas com `cy.request()`

## 📁 Estrutura do projeto

```bash
cypress/
├── fixtures/         # Dados simulados (ex: login.json)
├── integration/      # Testes (specs)
│   ├── login.spec.js
│   └── dashboard.spec.js
├── support/
│   ├── commands.js   # Comandos customizados
│   └── index.js      # Configurações globais
