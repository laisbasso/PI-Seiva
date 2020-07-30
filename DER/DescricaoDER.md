24/07
 
# Descrição DER
 
## Relacionamento entre as tabelas
 
| CADASTRO | POST
|---:|:---|
| Um login pode fazer vários posts | Um post só pode ter um login
| 1 | N

| POST | TEMA
|---:|:---|
| Um post só pode ter um único tema | Um tema pode ter vários posts
| N | 1

## Definição das tabelas

| Tabela | **Cadastro** |
|--------|--------------|
| id | (PK) biginit
| nome completo | varchar (200)
| email | varchar (200)
| senha | varchar (20)
 
Nome completo, email e senha serão pedidos ao usuário para criar um novo cadastro. Será gerada uma id própria automaticamente, que servirá para relacionar as atividades do usuário dentro da plataforma.
 
| Tabela | **Post** |
|--------|----------|
| id | (PK) bigint
| titulo | varchar (100)
| data | datatime
| descricao | varchar (500)
| autor_id | (FK) biginit
| tema_id | (FK) biginit
 
O usuário não precisará entrar com a data, pois a rede se encarregará de pegar a hora do sistema. Estará formatado em “dd-MM-yyyy HH:mm:ss”. O usuário digitará o conteúdo do post no campo de descrição que podendo receber mais caracteres do que um varchar. Os demais campos serão essenciais para poder enviar o post, recebendo a id do autor e também do tema relacionado. Será gerada uma id própria do post.

| Tabela | **Tema** |
|--------|----------|
| id | (PK) biginit
| descricao | varchar (15)
 
A tabela de temas possuirá os temas fixos disponíveis e marcará com true quando o post for sobre o assunto.
