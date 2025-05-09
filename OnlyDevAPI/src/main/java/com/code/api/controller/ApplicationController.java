package com.code.api.controller;


import com.code.api.models.Applications;
import com.code.api.services.IApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/applications/")
public class ApplicationController {
    //to add the dependency
    @Autowired
    private IApplicationService applicationService;

    // ✅ Get all users
    @GetMapping("/")
    public List<Applications> getAllApplications() {
        return applicationService.getAll();
    }

    // ✅ Get user by ID
    @GetMapping("/{id}")
    public Applications getApplicationById(@PathVariable("id") int id) {
        return applicationService.getApplicationById(id);
    }

    // ✅ Create a new user
    @PostMapping("/create")
    public Applications createApplications(@RequestBody Applications application) {
        application.setCreatedAt(java.time.LocalDateTime.now());
        return applicationService.createApplications(application);
    }

    // ✅ Update user
    @PutMapping("/edit")
    public Applications updateApplications(@RequestBody Applications application) {
        return applicationService.updateApplications(application);
    }

    // ✅ Delete user by ID
    @DeleteMapping("/delete/{id}")
    public String deleteApplications(@PathVariable("id") int id) {
        return applicationService.deleteApplications(id);
    }

    @GetMapping("/task/{taskId}")
    public List<Applications> getApplicationsByTaskId(@PathVariable("taskId") int taskId) {
        return applicationService.getApplicationsByTaskId(taskId);
    }
    // ✅ Get all applications by developer ID
    @GetMapping("/developer/{developerId}")
    public List<Applications> getApplicationsByDeveloperId(@PathVariable("developerId") int developerId) {
        return applicationService.getApplicationsByDeveloperId(developerId);
    }
    @PutMapping("/update-status/{id}")
    public Applications updateApplicationStatus(@PathVariable("id") int id, @RequestParam("status") Applications.Status status) {
        return applicationService.updateApplicationStatus(id, status);
    }



}
