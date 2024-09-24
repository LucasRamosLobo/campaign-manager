# Campaign Manager API

## Descrição

A API Campaign Manager permite o gerenciamento de campanhas, incluindo a criação, atualização, listagem e exclusão de campanhas.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL

## Pré-requisitos

Antes de executar a API, você precisará ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started) (opcional, para execução com containers)
- [PostgreSQL](https://www.postgresql.org/download/) (opcional, se não estiver usando Docker)

## Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd campaign-manager
   ```
2. Intale as dependências
    ```bash
    npm install

    ```
3.Para executar a API com Docker, utilize o seguinte comando:
  ```bash
  docker-compose up --build
  ```
## Endpoints

### 1. Criar Campanha

- **Método:** `POST`
- **Endpoint:** `/api/campanhas`
- **Corpo da Requisição (JSON):**

  ```json
  {
    "nome": "Nome da Campanha",
    "dataInicio": "2024-09-25T10:00:00Z",
    "dataFim": "2024-09-30T10:00:00Z",
    "status": "ativa",
    "categoria": "publicidade"
  }
   
