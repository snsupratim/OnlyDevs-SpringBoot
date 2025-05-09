package com.code.api.reposatories;


import com.code.api.models.Feedback;
import com.code.api.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IFeedbackrepository  extends JpaRepository<Feedback,Integer> {
    List<Feedback> findByToUserId(int toUserId);
}
