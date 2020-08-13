package com.redeSocial.seiva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redeSocial.seiva.model.PostagemModel;
import com.redeSocial.seiva.repository.PostagemRepository;

@RestController
@RequestMapping("/postagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class PostagemController {

	@Autowired
	private PostagemRepository repository;

	@GetMapping
	public ResponseEntity<List<PostagemModel>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<PostagemModel> GetById(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.badRequest().build());
	}

	@GetMapping("/descricao/{descricao}")
	public ResponseEntity<List<PostagemModel>> GetByDescricao(@PathVariable String descricao) {
		return ResponseEntity.ok(repository.findAllByDescricaoContainingIgnoreCase(descricao));
	}

	@PostMapping
	public ResponseEntity<PostagemModel> Post(@RequestBody PostagemModel postagem) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}

	@PutMapping
	public ResponseEntity<PostagemModel> Put(@RequestBody PostagemModel postagem) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}	

	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		repository.deleteById(id);
	}

}