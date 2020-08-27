11/08

# Estrutura de páginas (Rede Social Seiva)

<br>

## Descrição de itens nas páginas

- <b>Itens da Navbar Principal (quando o usuário estiver logado no feed)</b>: [logo] [pesquisa] [eventos] [cursos] [projetos] [vagas] [perfil]

- <b>Itens da Navbar Dropdown (passando o mouse em qualquer dos temas principais)</b>: Navegação por temas [eventos, cursos, projetos, vagas] e subtemas [ONGS, Psicologia, Alimentação, Tecnologia, Família, Esportes, Aprendizagem, DIY, Fotografia, Escrita, Música, Games, Crenças, Cinema, Humor, Carreira, Animações, Artes Plásticas], como a navegação do Magazine Luiza.

- <b>Footer</b>: onde ficarão os redirecionamentos das páginas Junte-se a nós, Redes Sociais (Instagram/Facebook/LinkedIn) e Equipe/Contato

- <b>Pop-up lateral</b>: botão com redirecionamento ao Centro de Valorização a Vida e Disque Denúncia/Violência contra a mulher

- <b>Botão de "Voltar ao Topo"</b>: scroll-top com smooth behaviour


- <b>1ª Página (Home Estática)</b>: Apresentação do Projeto (página com carrossel de imagens e cards, junto com login/cadastro)

- <b>2ª Página (Equipe/Contato Estática)</b>: sobre nós geral, cards do grupo com as redes sociais individuais)

- <b>3ª Página (Junte-se a Nós Estática)</b>: página semelhante ao "Trabalhe Conosco" de algumas organizações, mas adaptadas ao nosso contexto de projeto social/sem fins lucrativos.

- <b>4ª Página Feed</b>: barra lateral exibindo perfil de usuário logado, com navegação dentre os temas subtemas - filtrados ou não - das publicações (isso quando os usuários já postaram, mostrando a visualização, tags, temas, etc.)

- <b>5ª Página (Perfil Pessoal e/ou Organizacional)</b>: feed contendo somente os posts de determinado usuário.


<br>


## Componentes Angular do projeto

- <b>ng g c home-inicio:</b> :white_check_mark:
- <b>ng g c footer:</b> :white_check_mark:
- <b>ng g c equipe:</b> :white_check_mark:
- <b>ng g c sobre:</b> :white_check_mark:
- <b>ng g c feed:</b> :arrows_counterclockwise:
- <b>ng g c perfil:</b> :arrows_counterclockwise:
- <b>ng g c navbar</b> :arrows_counterclockwise:
- <b>ng g c junte-se:</b> :arrows_counterclockwise:

<br>

## Considerações para uma versão 2.0

- Integração com Hand Talk (acessibilidade em Libras para a Página)
- Implantação de E-commerce (recurso para ONGs e pequenos produtores venderem seus produtos, semelhante a Loja do Instagram)
- Habilitação de Dark mode
