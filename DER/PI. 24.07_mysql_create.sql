CREATE TABLE `login` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`usuario` varchar(200),
	`email` varchar(200),
	`senha` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(100),
	`data` DATETIME,
	`descricao` TEXT(500),
	`autor` bigint NOT NULL,
	`tema_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`cursos` BOOLEAN,
	`projetos` BOOLEAN,
	`vagas` BOOLEAN,
	`eventos` BOOLEAN,
	PRIMARY KEY (`id`)
);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk0` FOREIGN KEY (`autor`) REFERENCES `login`(`id`);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk1` FOREIGN KEY (`tema_id`) REFERENCES `tema`(`id`);

