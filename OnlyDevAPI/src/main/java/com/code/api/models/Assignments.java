package com.code.api.models;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "assignments")
public class Assignments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    private Tasks task;

    @ManyToOne
    @JoinColumn(name = "developer_id", referencedColumnName = "id")
    private Users developer;

    @Column(name = "assigned_at", nullable = false)
    private LocalDateTime assignedAt;

    @Column(name = "submission_url", length = 255)
    private String submissionUrl;

    @Column(name = "is_completed", nullable = false)
    private boolean isCompleted = false;

    // Default constructor
    public Assignments() {
        this.assignedAt = LocalDateTime.now();
        this.isCompleted = false;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Tasks getTask() {
        return task;
    }

    public void setTask(Tasks task) {
        this.task = task;
    }

    public Users getDeveloper() {
        return developer;
    }

    public void setDeveloper(Users developer) {
        this.developer = developer;
    }

    public LocalDateTime getAssignedAt() {
        return assignedAt;
    }

    public void setAssignedAt(LocalDateTime assignedAt) {
        this.assignedAt = assignedAt;
    }

    public String getSubmissionUrl() {
        return submissionUrl;
    }

    public void setSubmissionUrl(String submissionUrl) {
        this.submissionUrl = submissionUrl;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
}
