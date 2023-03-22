# fullcycle-nginx-node

Para rodar o projeto, basta usar o comando:

```
docker-compose up
```

Depois disso, a aplicação estará rodando na porta `8080`.

O `nginx` funciona como proxy reverso e se comunica com o container da api `node.js`, esta por sua vez se comunica com o container do banco de dados `mysql`, que retorna uma resposta para o `node`, que retorna uma resposta para o `nginx`, que mostra o resultado para o usuário.

Ao acessar a página, um nome aleatório é adicionado na base de dados e listado junto com todos os outros. Se quiser acrescentar nomes, é só recarregar a página.