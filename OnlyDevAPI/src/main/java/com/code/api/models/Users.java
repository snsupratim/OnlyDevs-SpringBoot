package com.code.api.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class Users {

	public enum Role {
		CLIENT,
		DEVELOPER
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "name", length = 30, nullable = false)
	private String name;

	@Column(name = "emailid", length = 30, nullable = false, unique = true)
	private String emailid;

	@Column(name = "password", length = 100, nullable = false)
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(name = "roles", nullable = false)
	private Role role;

	@Column(name = "created_at", nullable = false)
	private LocalDateTime createdAt;

	// Default constructor
	public Users() {
		this.createdAt = LocalDateTime.now();
	}

	// Getters and Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
