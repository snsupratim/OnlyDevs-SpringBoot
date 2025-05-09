package com.code.api.controller;

import com.code.api.models.Assignments;

import com.code.api.services.IAssignmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/assignments/")
public class AssignmentController {
    //to add the dependency
    @Autowired
    private IAssignmentsService assignmentsService;

    // ✅ Get all users
    @GetMapping("/")
    public List<Assignments> getAllAssignments() {
        return assignmentsService.getAll();
    }

    // ✅ Get user by ID
    @GetMapping("/{id}")
    public Assignments getAssignmentById(@PathVariable("id") int id) {
        return assignmentsService.getAssignmentById(id);
    }

    // ✅ Create a new user
    @PostMapping("/create")
    public Assignments createAssignments(@RequestBody Assignments assignment) {
        assignment.setAssignedAt(java.time.LocalDateTime.now());
        return assignmentsService.createAssignments(assignment);
    }

    // ✅ Update user
    @PutMapping("/edit")
    public Assignments updateAssignments(@RequestBody Assignments assignment) {
        return assignmentsService.updateAssignments(assignment);
    }

    // ✅ Delete user by ID
    @DeleteMapping("/delete/{id}")
    public String deleteAssignments(@PathVariable("id") int id) {
        return assignmentsService.deleteAssignments(id);
    }

    @GetMapping("/task/{taskId}")
    public List<Assignments> getAssignmentsByTaskId(@PathVariable("taskId") int taskId) {
        return assignmentsService.getAssignmentsByTaskId(taskId);
    }
    // ✅ Get assignments by developer ID
    @GetMapping("/developer/{developerId}")
    public List<Assignments> getAssignmentsByDeveloperId(@PathVariable("developerId") int developerId) {
        return assignmentsService.getAssignmentsByDeveloperId(developerId);
    }




}


