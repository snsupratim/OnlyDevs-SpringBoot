package com.code.api.services;

import com.code.api.models.Applications;
import com.code.api.models.Users;

import java.util.List;

public interface IApplicationService {

    Applications createApplications(Applications application);
    Applications updateApplications(Applications application);
    // Delete user by object
    String deleteApplications(Applications application);

    // Delete user by ID
    String  deleteApplications(int id);

    // Get user by ID
    Applications getApplicationById(int id);

    // Get all users
    List<Applications> getAll();
    List<Applications> getApplicationsByTaskId(int taskId); // New method
    // ✅ Add this
    List<Applications> getApplicationsByDeveloperId(int developerId);
    Applications updateApplicationStatus(int id, Applications.Status status);

}
