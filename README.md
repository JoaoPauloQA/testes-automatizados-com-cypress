# 🧪 Testes Automatizados com Cypress

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para aplicações web.

O objetivo deste projeto é praticar e demonstrar conhecimento em testes end-to-end (E2E), utilizando boas práticas. 

## 🚀 Tecnologias e bibliotecas utilizadas

- [Cypress](https://www.cypress.io/) – Testes E2E e de API
- [Underscore.js](https://underscorejs.org/) – Suporte a manipulação de dados em testes
- Faker (ou Factory personalizada) – Geração de dados dinâmicos
- Cypress Fixture – Uso de arquivos JSON para simular dados

## 🧱 Padrões de projeto utilizados

- **Page Object Model (POM):** Separação das interações de página em arquivos próprios, para facilitar reutilização e manutenção dos testes.
- **Factory Pattern:** Criação de usuários e dados dinâmicos de forma centralizada.
- **Command Pattern:** Ações comuns encapsuladas em comandos customizados do Cypress (`cy.login`, `cy.postUser`, etc).


## ⚙️ Configuração do Backend (Node + TypeORM)

Este projeto depende de uma API construída com Node.js e usa **TypeORM** para gerenciar a conexão com o banco de dados e rodar as migrations.

### 📦 Instalação das dependências

```bash
npm install


## ✅ Tipos de testes implementados

### 🔐 Testes de Login
- Com dados válidos e inválidos

-Simulação de login via UI

-Simulação de login via token 

###  🔁 Testes de recuperação de senha 

-Simulação de fluxo de "Esqueci minha senha"

-Validação de e-mails cadastrados e não cadastrados 

### 📝 Testes de registro

-Criação de nova conta com dados dinâmicos (factories ou faker)

-Validações de campos obrigatórios e senhas 

### 📅 Testes de agendamento
-Seleção de prestador de serviço

-Escolha de data e horário

-Confirmação e verificação de agendamento no dashboard

  ### 🌐Testes de API
  - Criação de usuário (`POST`)
  - Consulta de dados (`GET`)
  - Validação de respostas com `cy.request()` 

### 📝 Licença
Este projeto está sob a licença MIT.

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



👨‍💻 Autor
João Paulo – QA Automation Enthusiast
🔗 [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-paulo-6a1b3a207/)
📧 jopaulomartinsdacostaa@gmail.com


