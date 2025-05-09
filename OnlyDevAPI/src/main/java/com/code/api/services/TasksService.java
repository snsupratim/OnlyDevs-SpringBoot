package com.code.api.services;

import com.code.api.models.Tasks;
import com.code.api.models.Users;
import com.code.api.reposatories.ITasksrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TasksService implements ITasksService{

    @Autowired
    private ITasksrepository tasksrepository;

    @Override
    public Tasks createTasks(Tasks task){
        task.setCreatedAt(java.time.LocalDateTime.now());
        return tasksrepository.save(task);

    }
    @Override
    public Tasks updateTasks(Tasks task) {
        Optional<Tasks> existingTask = tasksrepository.findById(task.getId());
        if (existingTask.isPresent()) {
            return tasksrepository.save(task);
        }
        return null; // or throw custom exception
    }

    @Override
    public String deleteTasks(Tasks task) {
        if (tasksrepository.existsById(task.getId())) {
            tasksrepository.delete(task);
            return "Task deleted successfully.";
        }
        return "User not found.";
    }

    @Override
    public String deleteTasks(int id) {
        Optional<Tasks> t = tasksrepository.findById(id);
        if (t.isPresent()) {
            tasksrepository.delete(t.get());
            return "Task with ID " + id + " deleted successfully.";
        }
        return "Task not found with ID: " + id;
    }
    @Override
    public Tasks getTaskById(int id) {
        return tasksrepository.findById(id).orElse(null);
    }

    @Override
    public List<Tasks> getAll() {
        return tasksrepository.findAll();
    }

    @Override
    public List<Tasks> getTasksByClientId(int clientId) {
        return tasksrepository.findByClientId(clientId);
    }

}
