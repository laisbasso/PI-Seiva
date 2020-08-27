30/07

# SEIVA: Construção do Front-end em Angular

Aqui está a descrição da construção do nosso front-end da Rede Social Seiva, onde 
 
<br>

## Instalação

- <b>ng install -g @angular/cli</b> (instalação)
- <b>ng —version</b> (consulta de instalação)

OBS: É necessária a instalação do node.js na máquina.

<br>

## Configuração

- <b>ng new</b> (criar novo projeto em Angular)
- <b>ng serve</b> (inicializar o servidor)
- <b>ctrl + c</b> (parar o servidor)
- <b>ng generate component OU ng g c</b> (gerar um componente)

<br>

## Instalações necessárias para o projeto

- <b>npm install bootstrap@latest --save</b>
- <b>npm install jquery@latest --save</b>
- <b>npm install popper.js --save</b>
- <b>ng add @fortawesome/angular-fontawesome</b>

<br>

## Configurações no arquivo angular.json

            "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js",
              "./node_modules/popper.js/dist/umd/popper.min.js"
            ]


