package com.code.api.reposatories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.Users;
@Repository
public interface IUsersrepository extends JpaRepository<Users, Integer> {

public	Users findByEmailid(String emailid);
}
