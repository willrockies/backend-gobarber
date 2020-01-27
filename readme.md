DOCKER
Como Funciona

- Criação de ambientes isolados (Container);
- Containers expõe portas para comunicação;

Principais conceitos

- Imagem
- Container
- Docker Registry (docker hub)
- DockerFile
  - receita de uma imagem
    # Partimos de uma imagem existente
    FROM node:10
    # Definimos a pasta e copiamos o arquivos
    WORKDIR /urs/app
    COPY . ./
    # Instalamos as dependências
    RUN yarn
    # Qual porta queremos expor
    EXPOSE 3333
    # Executamos nossa aplicação
    CMD yarn start

SEQUELIZE - ORM para nodejs e para banco de dados relacional
ORM - Abstração do banco de dados - Tabelas viram models

Manipulação dos dados - Sem SQL (na maioria das vezes) - Apenas código javascript

Migrations&nbsp;

    - Controle de versão para base de dados;
    - Cada Arquivo contém instruções para criação, alteração ou remoção de tabelas ou colunas
    - Mantém a base atualizada entre todos os desenvolvedores do time e também no ambiente de produção
    - Cada arquivo é uma migration e sua ordenação ocorre por data
    - É possivel desfazer uma migração se errarmos algo enquanto estivermos desenvolvendo a feature
    - Depois que a migration foi enviada para outros dev ou para ambiente de produção ela JAMAIS poderá ser alterada, uma nova deve ser criada
    - Cada migration deve realizar alterações em apena uma tabela, você pode criar várias migrations para alterações maiores

Seeds&nbsp;

- Ambiente de teste
- População da base de dados para desenvolvimento
- Muito utilizado para popular dados para testes
- Executável apenas por código
- Jamais será utilizado em produção
- Caso sejam dados que precisam ir para produção, a própria migration pode manipular dados das tabelas

Arquitetura MVC&nbsp;

- MODEL -> O model armazena a abstração do banoc, utilizado para manipular os dados contidos nas tabelas do banco. Não possuem responsabilidade sobre a regra da nossa aplicação

- CONTROLLER -> O controller é o ponto de entrada das requisições da nossa aplicação, uma rota geralmente está associada diretamente com um método do controller. Podemos incluir a grande parte das regras de negócio da aplicação nos controllers (conforme a aplicação cresce podemos isolar as regras).

- VIEW -> A view é o retorno ao cliente, em aplicações que não utilizando o modelo de API REST isso pode ser um HTML, mas no nosso caso a view é apenas JSON que será retornado ao front-en e depois manipulado pelo **ReactJS** ou **React Native**.

  A face de um controller &nbsp;

  - Classes
  - Sempre retorna um JSON
  - Não chama outro controller/método
  - Quando criar um novo controller:
    - Apenas 5 métodos
    - Estou falando da mesma **entidade**?

  CRIAR sequelize
  yarn add pg pg-hstore (criar o database.js)
  yarn sequelize migration:create --name=create-users (criar a database no banco de dados)
  yarn sequelize db:migrate (rodar no banco de dados)
  yarn sequelize db:migrate:undo (para que consiga fazer alterações no meu banco de dados)
