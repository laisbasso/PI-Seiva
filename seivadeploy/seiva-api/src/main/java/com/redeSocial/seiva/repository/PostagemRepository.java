package com.redeSocial.seiva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redeSocial.seiva.model.PostagemModel;

@Repository
public interface PostagemRepository extends JpaRepository<PostagemModel, Long> {
	
	public List<PostagemModel> findAllByDescricaoContainingIgnoreCase(String descricao);

}
