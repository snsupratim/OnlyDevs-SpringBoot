package com.code.api.controller;


import com.code.api.models.Tasks;
import com.code.api.models.Users;
import com.code.api.services.ITasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tasks/")
public class TasksController {

    @Autowired
    private ITasksService tasksService;

    // ✅ Get all users
    @GetMapping("/")
    public List<Tasks> getAllTasks() {
        return tasksService.getAll();
    }

    // ✅ Get user by ID
    @GetMapping("/{id}")
    public Tasks getTasksById(@PathVariable("id") int id) {
        return tasksService.getTaskById(id);
    }

    // ✅ Create a new user
    @PostMapping("/create")
    public Tasks createTasks(@RequestBody Tasks task) {
        task.setCreatedAt(java.time.LocalDateTime.now());
        return tasksService.createTasks(task);
    }

    // ✅ Update user
    @PutMapping("/edit")
    public Tasks updateTasks(@RequestBody Tasks task) {
        return tasksService.updateTasks(task);
    }

    // ✅ Delete user by ID
    @DeleteMapping("/delete/{id}")
    public String deleteTasks(@PathVariable("id") int id) {
        return tasksService.deleteTasks(id);
    }
    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Tasks>> getTasksByClientId(@PathVariable int clientId) {
        List<Tasks> tasks = tasksService.getTasksByClientId(clientId);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }
}
