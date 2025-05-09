package com.code.api.reposatories;

import com.code.api.models.Applications;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IApplicationrepository extends JpaRepository<Applications,Integer> {
    List<Applications> findByTaskId(int taskId); // New query method
//    public Users findByEmailid(String emailid);
List<Applications> findByDeveloperId(int developerId);
// ✅ Add this
}
