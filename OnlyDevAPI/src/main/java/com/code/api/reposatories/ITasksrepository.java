package com.code.api.reposatories;

import com.code.api.models.Tasks;
import com.code.api.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITasksrepository extends JpaRepository<Tasks,Integer> {
    public Tasks findByTitle(String title);
    List<Tasks> findByClientId(int clientId);

}
