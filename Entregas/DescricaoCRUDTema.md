05/08

# Descrição CRUD Tema
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Get | /tema | Listar todos os temas existentes
| Get | /tema/{id} | Listar tema específico pelo ID
| Get | /tema/descricao/{descricao} | Listar um tema específico pela Descricao
| Post | /tema | Inserir os dados
| Put | /tema | Editar algum dado específico
| Delete | /tema/{id} | Excluir algum dado pelo ID

A tabela possuirá os end-points básicos (get, post, put e delete) e mais dois métodos específicos, que buscam pelo id e pela descrição.

## Json

```json
   {
        "id": 1,
        "descricao": "Eventos",
        "postagem": [
            {
                "id": 1,
                "titulo": "Teste",
                "data": "2020-08-06T14:01:00.943+00:00",
                "descricao": "Grupo Giramundo celebra 50 anos com maratona de teatro online",
                "usuario": null
            },
            {
                "id": 2,
                "titulo": "Vagas",
                "data": "2020-08-06T14:03:09.002+00:00",
                "descricao": "teste",
                "usuario": null
            }
        ]
    }
```
