package com.code.api.services;

import com.code.api.models.Applications;

import com.code.api.reposatories.IApplicationrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService implements  IApplicationService{
    @Autowired
    private IApplicationrepository applicationsrepository;

    @Override
    public Applications createApplications(Applications application) {
        application.setCreatedAt(java.time.LocalDateTime.now());
//		user.setRole(Users.Role.valueOf(user.getRole().toUpperCase()));// Ensure createdAt is set
        return applicationsrepository.save(application);
    }

    @Override
    public Applications updateApplications(Applications application) {
        Optional<Applications> existingApplication = applicationsrepository.findById(application.getId());
        if (existingApplication.isPresent()) {
            return applicationsrepository.save(application);
        }
        return null; // or throw custom exception
    }


    @Override
    public String deleteApplications(Applications application) {
        if (applicationsrepository.existsById(application.getId())) {
            applicationsrepository.delete(application);
            return "User deleted successfully.";
        }
        return "User not found.";
    }

    @Override
    public String deleteApplications(int id) {
        Optional<Applications> a = applicationsrepository.findById(id);
        if (a.isPresent()) {
            applicationsrepository.delete(a.get());
            return "User with ID " + id + " deleted successfully.";
        }
        return "User not found with ID: " + id;
    }

    @Override
    public Applications getApplicationById(int id) {
        return applicationsrepository.findById(id).orElse(null);
    }

    @Override
    public List<Applications> getAll() {
        return applicationsrepository.findAll();
    }

    @Override
    public List<Applications> getApplicationsByTaskId(int taskId) {
        return applicationsrepository.findByTaskId(taskId);
    }
    @Override
    public List<Applications> getApplicationsByDeveloperId(int developerId) {
        return applicationsrepository.findByDeveloperId(developerId);
    }
    @Override
    public Applications updateApplicationStatus(int id, Applications.Status status) {
        Applications app = applicationsrepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found"));
        app.setStatus(status);
        return applicationsrepository.save(app);
    }

}
