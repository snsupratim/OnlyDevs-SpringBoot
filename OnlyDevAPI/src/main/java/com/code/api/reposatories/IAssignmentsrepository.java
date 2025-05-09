package com.code.api.reposatories;

import com.code.api.models.Assignments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IAssignmentsrepository extends JpaRepository<Assignments,Integer> {
    List<Assignments> findByTaskId(int taskId);
    List<Assignments> findByDeveloperId(int developerId);
}
