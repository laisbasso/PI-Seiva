package com.redeSocial.seiva.controller;

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
import com.redeSocial.seiva.model.TemaModel;
import java.util.List;
import com.redeSocial.seiva.repository.TemaRepository;

@RestController
@RequestMapping("/tema")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class TemaController {

	@Autowired
	private TemaRepository repository;

	@GetMapping
	public ResponseEntity<List<TemaModel>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<TemaModel> GetById(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.badRequest().build());
	}

	@GetMapping("/descricao/{descricao}")
	public ResponseEntity<List<TemaModel>> GetByDescricao(@PathVariable String descricao) {
		return ResponseEntity.ok(repository.findAllByDescricaoContainingIgnoreCase(descricao));
	}

	@PostMapping
	public ResponseEntity<TemaModel> Post(@RequestBody TemaModel tema) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(tema));
	}

	@PutMapping
	public ResponseEntity<TemaModel> Put(@RequestBody TemaModel tema) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(tema));
	}	

	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		repository.deleteById(id);
	}

}