# PizzariaCawabanga
É uma aplicação de pedidos de uma pizzaria chamada cawabanga inspirada nas tartarugas ninjas. O objetivo do projeto é facilitar o gerenciamento de uma pizzaria usando a tecnologia.

# Documentação de Contexto do Projeto - Sistema de Pizzaria

## Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Tecnologias e Versões](#tecnologias-e-versões)
4. [Estrutura de Pastas](#estrutura-de-pastas)
5. [Modelagem do Banco de Dados](#modelagem-do-banco-de-dados)
6. [Middlewares](#middlewares)
7. [Validação com Schemas](#validação-com-schemas)
8. [Endpoints](#endpoints)
9. [Fluxo de Requisição](#fluxo-de-requisição)
10. [Configurações do Projeto](#configurações-do-projeto)

---

## Visão Geral

Sistema backend de gerenciamento de pizzaria desenvolvido em Node.js com TypeScript, utilizando Express como framework web, Prisma ORM para comunicação com banco de dados PostgreSQL, e Zod para validação de dados.

---

## Arquitetura

O projeto segue o padrão **MVC + Service Layer**, com a seguinte estrutura:

```
Requisição HTTP → Rotas → Middlewares → Controller → Service → Banco de Dados → Service → Controller → Resposta HTTP
```

### Camadas da Arquitetura:

1. **Rotas (`routes.ts`)**: Define os endpoints e aplica os middlewares
2. **Middlewares**: Validação de schema, autenticação e autorização
3. **Controllers**: Recebem a requisição, extraem dados e delegam para o Service
4. **Services**: Contêm toda a lógica de negócio e comunicação com o banco de dados
5. **Prisma Client**: ORM que gerencia a comunicação com PostgreSQL

### Princípios Seguidos:

- **Separação de Responsabilidades**: Cada camada tem uma responsabilidade específica
- **Single Responsibility Principle**: Um controller/service para cada operação
- **Reutilização**: Middlewares compartilhados entre rotas
- **Validação Centralizada**: Schemas Zod validam dados antes de chegarem ao controller

---

## Tecnologias e Versões

### Dependências de Produção

| Tecnologia         | Versão  | Finalidade                                   |
| ------------------ | ------- | -------------------------------------------- |
| **express**        | ^5.1.0  | Framework web para criação de APIs REST      |
| **@prisma/client** | ^6.19.0 | ORM para comunicação com banco de dados      |
| **typescript**     | ^5.9.3  | Superset JavaScript com tipagem estática     |
| **zod**            | ^4.1.12 | Biblioteca de validação de schemas e tipagem |
| **bcryptjs**       | ^3.0.3  | Criptografia de senhas                       |
| **jsonwebtoken**   | ^9.0.2  | Geração e validação de tokens JWT            |
| **cors**           | ^2.8.5  | Middleware para habilitar CORS               |
| **dotenv**         | ^17.2.3 | Carregamento de variáveis de ambiente        |
| **tsx**            | ^4.20.6 | Executor TypeScript para desenvolvimento     |

### Dependências de Desenvolvimento

| Tecnologia              | Versão   | Finalidade                    |
| ----------------------- | -------- | ----------------------------- |
| **@types/express**      | ^5.0.5   | Tipos TypeScript para Express |
| **@types/cors**         | ^2.8.19  | Tipos TypeScript para CORS    |
| **@types/jsonwebtoken** | ^9.0.10  | Tipos TypeScript para JWT     |
| **@types/node**         | ^24.10.0 | Tipos TypeScript para Node.js |
| **prisma**              | ^6.19.0  | CLI do Prisma ORM             |

### Banco de Dados

- **PostgreSQL** (gerenciado via Prisma ORM)

