package com.code.api.services;


import com.code.api.models.Assignments;

import java.util.List;

public interface IAssignmentsService {
    Assignments createAssignments(Assignments assignment);
    Assignments updateAssignments(Assignments assignment);
    // Delete user by object
    String deleteAssignments(Assignments assignment);

    // Delete user by ID
    String  deleteAssignments(int id);

    // Get user by ID
    Assignments getAssignmentById(int id);

    // Get all users
    List<Assignments> getAll();
    // Newly added
    List<Assignments> getAssignmentsByTaskId(int taskId);
    // ✅ New method
    List<Assignments> getAssignmentsByDeveloperId(int developerId);
}
