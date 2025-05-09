package com.code.api.models;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "applications")
public class Applications {

    private LocalDateTime createdAt;

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public enum Status {
        PENDING,
        ACCEPTED,
        REJECTED
    }

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

    @Column(name = "proposal", columnDefinition = "TEXT")
    private String proposal;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status = Status.PENDING;

    @Column(name = "applied_at", nullable = false)
    private LocalDateTime appliedAt;

    // Default constructor
    public Applications() {
        this.appliedAt = LocalDateTime.now();
        this.status = Status.PENDING;
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

    public String getProposal() {
        return proposal;
    }

    public void setProposal(String proposal) {
        this.proposal = proposal;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDateTime getAppliedAt() {
        return appliedAt;
    }

    public void setAppliedAt(LocalDateTime appliedAt) {
        this.appliedAt = appliedAt;
    }
}
