11/08

# Descrição Usuário Model
 
| Atributo | Tipo | Qtd. Caracteres |
|----------|------|-----------------|
| id | [PK] long 
| nome | String | min = 8, max = 200
| usuario | String | min = 8, max = 200
| senha | String |  min = 6, max = 20

A tabela possuirá os atributos **ID** referente ao código de cada usuário, **nome**, **usuario** e **senha**.

## CRUD
 
| Métodos | End-points | Descrição |
|----------|--------------|----------|
| Post | /usuario/cadastrar | Cadastrar um novo usuário
| Post | /usuario/logar | Logar um usuário existente

Os caminhos para cadastrar e logar não precisam de autenticação por token.

# Descrição da Camada de Segurança Basic

Criada a model ```UserLoginModel```, que devolve os dados do usuário logado com o token de autenticação.

```UsuarioRepository``` com busca específica para determinado usuário.

Criada a package ```Segurança``` com as classes ```BasicSecurityConfig```, ```UserDetailsImpl``` e ```UserDetailsServiceImpl```, aplicando as regras de negócio que foram determinadas na interface e restringindo a interação sem autenticação para os caminhos ```"/usuario/cadastrar"``` e ```"/usuario/logar"```.

Criada a package ```Service``` com a classe ```UsuarioService``` que encripta a senha escolhida pelo usuário e guarda no banco de dados.

## Json

### Enviando dados para cadastrar

```json
{
    "nome": "Flamingo",
    "usuario": "flamingo123",
    "senha": "flamingo123"
}
```

### Recebendo dados para logar

```json
{
    "nome": "Flamingo",
    "usuario": "flamingo123",
    "senha": "flamingo123",
    "token": "Basic ZmxhbWluZ28xMjM6ZmxhbWluZ28xMjM="
}
```