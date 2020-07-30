24/07
 
### Integrantes GrupoZeroUm
[Lais Basso](https://github.com/laisbasso "GitHub")  
[Mayara Dotta](https://github.com/DottaMP "GitHub")  
[Matheus Müller](https://github.com/matheuxmuller "GitHub")  
[Victor Hugo Ulloa](https://github.com/Victorhup "GitHub")  
[Letícia Sena](https://github.com/leticia-sena "GitHub")
 
# Descrição DER
 
## Relacionamento entre as tabelas
 
| Um login pode fazer vários posts | Um post só pode ter um login
|---:|:---|
| CADASTRO | POST
| 1 | N

| Um post pode ter um único tema | Um tema pode ter vários posts
|---:|:---|
| POST | TEMA
| N | 1

## Definição das tabelas

| Tabela | **Cadastro** |
|--------|--------------|
| id | biginit Primary Key
| nome completo | varchar (200)
| email | varchar (200)
| senha | varchar (20)
 
Nome completo, email e senha serão pedidos ao usuário para criar um novo cadastro. Será gerada uma id própria automaticamente, que servirá para relacionar as atividades do usuário dentro da plataforma.
 
| Tabela | **Post** |
|--------|----------|
| id | bigint Primary Key
| titulo | varchar (100)
| data | datatime
| descricao | varchar (500)
| autor_id | biginit Foreign Key
| tema_id | biginit Foreign Key
 
O usuário não precisará entrar com a data, pois a rede se encarregará de pegar a hora do sistema. Estará formatado em “dd-MM-yyyy HH:mm:ss”. O usuário digitará o conteúdo do post no campo de descrição que podendo receber mais caracteres do que um varchar. Os demais campos serão essenciais para poder enviar o post, recebendo a id do autor e também do tema relacionado. Será gerada uma id própria do post.

| Tabela | **Tema** |
|--------|----------|
| id | biginit Primary Key
| descricao | varchar (15)
 
A tabela de temas possuirá os temas fixos disponíveis e marcará com true quando o post for sobre o assunto.
