# Documentação Back-End

## Tema

 ### Model

| Atributo | Tipo |
|----------|------|
| id | [PK] bigint |
| descricao | String |
| postagem | List<PostagemModel> |

A tabela possuirá os atributos **ID** referente ao código de cada tema e **descrição** onde iremos inserir a temática: cursos, projetos, vagas, eventos, estudos, alimentação, entretenimento, etc. Mais a lista de postagem da marcação @OneToMany.

### CRUD
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Get | /tema | Listar todos os temas existentes
| Get | /tema/{id} | Listar tema específico pelo ID
| Get | /tema/descricao/{descricao} | Listar um tema específico pela descrição
| Post | /tema | Inserir os dados
| Put | /tema | Editar algum dado específico
| Delete | /tema/{id} | Excluir algum dado pelo ID

A tabela possuirá os end-points básicos (get, post, put e delete) e mais dois métodos específicos, que buscam pelo id e pela descrição.

### Json

```json
{   
    "id": 1,
    "descricao": "Entretenimento",
    "postagem": [
        {
            "id": 1,
            "titulo": "Pantera Negra",
            "texto": "Melhor filme da Marvel! sz",
            "date": "2020-09-01T13:47:44.663+00:00"
        }
    ]
}
{
    "id": 2,
    "descricao": "Cursos",
    "postagem": [
        {
            "id": 2,
            "titulo": "Generation Brasil",
            "texto": "Inscrições abertas para a próxima turma da Generation, seja um desenvolvedor Java!",
            "date": "2020-09-01T13:47:44.663+00:00"
        }
    ]
}
```

## Postagem

 ### Model

| Atributo | Tipo | Qtd. Caracteres |
|----------|------|-----|
| id | [PK] bigint |
| titulo | String | min = 5, max = 100
| data | Date |
| descricao | String | min = 5, max = 500
| usuario_id | [FK] bigint
| tema_id | [FK] bigint

A tabela possuirá os atributos **ID**, **titulo**, **data** e **descrição** referente a cada postagem, mais as chaves estrangeiras **usuario**  e **tema** onde irão fazer o link com esses.

### CRUD
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Get | /postagem | Listar todas as postagens existentes
| Get | /postagem/{id} | Listar postagem específica pelo ID
| Get | /postagem/descricao/{descricao} | Listar uma postagem específica pela Descricao
| Post | /postagem | Inserir os dados
| Put | /postagem | Editar algum dado específico
| Delete | /postagem/{id} | Excluir algum dado pelo ID

A tabela possuirá os end-points básicos (get, post, put e delete) e mais dois métodos específicos, que buscam pelo id e pela descrição.


### Json

```json
{
    "id": 1,
    "titulo": "Pantera Negra",
    "texto": "Melhor filme da Marvel! sz",
    "date": "2020-09-01T13:47:44.663+00:00",
    "usuario": 1,
    "tema": {
            "id": 1,
            "descricao": "Entretenimento"
    }
}

{
    "id": 2,
    "titulo": "Generation Brasil",
    "texto": "Inscrições abertas para a próxima turma da Generation, seja um desenvolvedor Java!",
    "date": "2020-09-01T13:36:18.538+00:00",
    "usuario": 1,
    "tema": {
        "id": 2,
        "descricao": "Cursos"
    }
}
```

## Usuário

 ### Model

| Atributo | Tipo | Qtd. Caracteres |
|----------|------|-----------------|
| id | [PK] long 
| nome | String | min = 8, max = 200
| usuario | String | min = 8, max = 200
| senha | String |  min = 6, max = 20

A tabela possuirá os atributos **ID** referente ao código de cada usuário, **nome**, **usuario** e **senha**.

### CRUD
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Post | /usuario/cadastrar | Cadastrar um novo usuário
| Post | /usuario/logar | Logar um usuário existente

Os caminhos para cadastrar e logar não precisam de autenticação por token.

### Model UserLogin (apenas para Login)
| Atributo | Tipo | 
|----------|------|
| nome | String |
| usuario | String | 
| senha | String |  
| token | String |

Criada a model ```UserLoginModel```, que devolve os dados do usuário logado com o token de autenticação.

```UsuarioRepository``` com busca específica para determinado usuário.

Criada a package ```Segurança``` com as classes ```BasicSecurityConfig```, ```UserDetailsImpl``` e ```UserDetailsServiceImpl```, aplicando as regras de negócio que foram determinadas na interface e restringindo a interação sem autenticação para os caminhos ```"/usuario/cadastrar"``` e ```"/usuario/logar"```.

Criada a package ```Service``` com a classe ```UsuarioService``` que encripta a senha escolhida pelo usuário e guarda no banco de dados.


### Json

#### Enviando dados para cadastrar

```json
{
    "nome": "Flamingo",
    "usuario": "flamingo123",
    "senha": "flamingo123"
}
```

#### Recebendo dados para logar

```json
{
    "nome": "Flamingo",
    "usuario": "flamingo123",
    "senha": "flamingo123",
    "token": "Basic ZmxhbWluZ28xMjM6ZmxhbWluZ28xMjM="
}
``` 

## Descrição Deploy Back-End
 
| Implementações | 
|----------|
| docker-compose.yml | 
| Dockerfile (na pasta de deploy) |
| Dockerfile (na pasta da api) |

Realizamos o deploy do back-end da nossa aplicação através do Docker, inserindo as informações referentes ao banco de dados e o uso da api em outra máquina.

