package com.code.api.services;

import com.code.api.models.Tasks;
import com.code.api.models.Users;

import java.util.List;

public interface ITasksService {
    Tasks createTasks(Tasks task);
    Tasks updateTasks(Tasks task);
    // Delete user by object
    String deleteTasks(Tasks task);

    // Delete user by ID
    String deleteTasks(int id);
    // Get user by ID
    Tasks getTaskById(int id);
    List<Tasks> getAll();
    List<Tasks> getTasksByClientId(int clientId);

}
