package com.code.api.services;



import com.code.api.models.Assignments;
import com.code.api.reposatories.IAssignmentsrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentService implements IAssignmentsService {

    @Autowired
    private IAssignmentsrepository assignmentsrepository;

    @Override
    public Assignments createAssignments(Assignments assignment) {
        assignment.setAssignedAt(java.time.LocalDateTime.now());
//		user.setRole(Users.Role.valueOf(user.getRole().toUpperCase()));// Ensure createdAt is set
        return assignmentsrepository.save(assignment);
    }

    @Override
    public Assignments updateAssignments(Assignments assignment) {
        Optional<Assignments> existingAssignments = assignmentsrepository.findById(assignment.getId());
        if (existingAssignments.isPresent()) {
            return assignmentsrepository.save(assignment);
        }
        return null; // or throw custom exception
    }


    @Override
    public String deleteAssignments(Assignments assignment) {
        if (assignmentsrepository.existsById(assignment.getId())) {
            assignmentsrepository.delete(assignment);
            return "User deleted successfully.";
        }
        return "User not found.";
    }

    @Override
    public String deleteAssignments(int id) {
        Optional<Assignments> as = assignmentsrepository.findById(id);
        if (as.isPresent()) {
            assignmentsrepository.delete(as.get());
            return "User with ID " + id + " deleted successfully.";
        }
        return "User not found with ID: " + id;
    }

//    @Override
//    public Assignments getAssignmentById(int id) {
//        return null;
//    }

    @Override
    public Assignments getAssignmentById(int id) {
        return assignmentsrepository.findById(id).orElse(null);
    }

    @Override
    public List<Assignments> getAll() {
        return assignmentsrepository.findAll();
    }

    @Override
    public List<Assignments> getAssignmentsByTaskId(int taskId) {
        return assignmentsrepository.findByTaskId(taskId);
    }
    // ✅ New method
    @Override
    public List<Assignments> getAssignmentsByDeveloperId(int developerId) {
        return assignmentsrepository.findByDeveloperId(developerId);
    }

}
