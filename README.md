# 🧪 Testes Automatizados com Cypress

Este repositório contém testes end-to-end (E2E) e de API para aplicações web, desenvolvidos com Cypress, com foco em boas práticas de automação.

## 🚀 Tecnologias e bibliotecas utilizadas
-Cypress 9.5.0 – Testes E2E e de API
-**Underscore.js** – Manipulação de dados em testes
-**Faker.js / Factory personalizada** – Geração de dados dinâmicos
-**Fixtures do Cypress** – Simulação de dados via JSON
-**TypeORM** – Mapeamento e migrations do banco de dados

PostgreSQL – Banco de dados (Railway)
## 🧱 Padrões de projeto utilizados

- **Page Object Model (POM):** Separação das interações de página em arquivos próprios, para facilitar reutilização e manutenção dos testes.
- **Factory Pattern:** Criação de usuários e dados dinâmicos de forma centralizada.
- **Command Pattern:** Ações comuns encapsuladas em comandos customizados do Cypress (`cy.login`, `cy.postUser`, etc).


## ⚙️ Backend

Este projeto depende de uma API Node.js com TypeORM conectada ao PostgreSQL.
As migrations configuram as tabelas e relacionamentos necessários para os testes. 

## 📸 Demonstração 

[teste rodando no cypress](assets/cypress.png)

## Como rodar os testes

- [Node.js 16.14.0] (https://nodejs.org/) instalado (recomendo versão 16)  
- [Yarn](https://yarnpkg.com/getting-started/install) instalado (alternativa ao npm, facilita o gerenciamento de dependências)  
- Acesso ao banco de dados PostgreSQL hospedado no Railway (credenciais necessárias)

## Requisitos

- Node.js >= 16.14.0 ([site oficial](https://nodejs.org/))  
- Yarn  
- PostgreSQL (hosted on Railway)  
- Cypress 9.5.0 ([site oficial](https://www.cypress.io/))
- TypeORM para migrations


### Passo a passo
```bash
1. Clone este repositório 

git clone https://github.com/JoaoPauloQA/testes-automatizados-com-cypress
cd seuprojeto  

2. Instale as dependências do projeto

yarn install 

3. Configure a conexão com o banco de dados PostgreSQL
No arquivo .env (crie na raiz do projeto se não existir), configure a variável DATABASE_URL com a URL de conexão do seu banco PostgreSQL no Railway, algo como:
DATABASE_URL=postgres://usuario:senha@endereco:porta/nome_do_banco

4. Execute as migrations para preparar o banco de dados :

yarn typeorm migration:run

5. Inicie o backend (API Node.js)

yarn dev 

6. Execute os testes com Cypress
Para abrir a interface visual: 
npx cypress open

```


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

```

👨‍💻 Autor
**João Paulo** 
*QA Automation Engineer | Test Automation Enthusiast*
🔗 [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-paulo-6a1b3a207/)
📧 jopaulomartinsdacostaa@gmail.com


