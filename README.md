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
   git clone https://github.com/LucasRamosLobo/campaign-manager.git
   cd campaign-manager
   ```

    ```
2.Para executar a API com Docker, utilize o seguinte comando:
  ```bash
  docker-compose up --build
  ```
## Endpoints

### 1. Criar Campanha

- **Método:** `POST`
- **Endpoint:** `/api/campaigns`
- **Corpo da Requisição (JSON):**

  ```json
  {
    "nome": "Nome da Campanha",
    "dataInicio": "2024-09-25T10:00:00Z",
    "dataFim": "2024-09-30T10:00:00Z",
    "status": "ativa",
    "categoria": "publicidade"
  }
### 2. Listar Campanhas

- **Método:** `GET`
- **Endpoint:** `/api/campanhas`
  - **Código:** 200
  - **Resposta:**

    ```json
    [
      {
        "id": 1,
        "nome": "Nome da Campanha",
        "dataCadastro": "2024-09-24T10:00:00Z",
        "dataInicio": "2024-09-25T10:00:00Z",
        "dataFim": "2024-09-30T10:00:00Z",
        "status": "ativa",
        "categoria": "publicidade"
      }
    ]
    ```

### 3. Obter Campanha por ID

- **Método:** `GET`
- **Endpoint:** `/api/campanhas/:id`
- **Resposta:**
  - **Código:** 200
  - **Resposta:**

    ```json
    {
      "id": 1,
      "nome": "Nome da Campanha",
      "dataCadastro": "2024-09-24T10:00:00Z",
      "dataInicio": "2024-09-25T10:00:00Z",
      "dataFim": "2024-09-30T10:00:00Z",
      "status": "ativa",
      "categoria": "publicidade"
    }
    ```

### 4. Atualizar Campanha

- **Método:** `PUT`
- **Endpoint:** `/api/campanhas/:id`
- **Corpo da Requisição (JSON):**

  ```json
  {
    "nome": "Nome Atualizado",
    "dataInicio": "2024-09-26T10:00:00Z",
    "dataFim": "2024-10-01T10:00:00Z",
    "status": "pausada",
    "categoria": "publicidade"
  }
### 5. Excluir Campanha

- **Método:** `DELETE`
- **Endpoint:** `/api/campanhas/:id`
- **Resposta:**
  - **Código:** 204
  - **Corpo:** (vazio)
