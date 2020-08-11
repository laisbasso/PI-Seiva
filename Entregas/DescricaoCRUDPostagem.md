06/08
# Postagem

 ## Model

| Atributo | Tipo | Qtd. Caracteres |
|----------|------|-----|
| id | [PK] bigint |
| titulo | String | min = 5, max = 100
| data | Date |
| descricao | String | min = 5, max = 500
| usuario_id | [FK] bigint
| tema_id | [FK] bigint

A tabela possuirá os atributos **ID**, **titulo**, **data** e **descrição** referente a cada postagem, mais as chaves estrangeiras **usuario**  e **tema** onde irão fazer o link com esses.

## CRUD
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Get | /postagem | Listar todas as postagens existentes
| Get | /postagem/{id} | Listar postagem específica pelo ID
| Get | /postagem/descricao/{descricao} | Listar uma postagem específica pela Descricao
| Post | /postagem | Inserir os dados
| Put | /postagem | Editar algum dado específico
| Delete | /postagem/{id} | Excluir algum dado pelo ID

A tabela possuirá os end-points básicos (get, post, put e delete) e mais dois métodos específicos, que buscam pelo id e pela descrição.

## Json

```json
    {
        "id": 1,
        "titulo": "Teste",
        "data": "2020-08-06T14:01:00.943+00:00",
        "descricao": "Grupo Giramundo celebra 50 anos com maratona de teatro online",
        "usuario": null,
        "tema": {
            "id": 1,
            "descricao": "Eventos"
        }
    },
    {
        "id": 2,
        "titulo": "Vagas",
        "data": "2020-08-06T14:03:09.002+00:00",
        "descricao": "teste",
        "usuario": null,
        "tema": {
            "id": 1,
            "descricao": "Eventos"
        }
    }
```

