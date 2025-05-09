package com.code.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.code.api.models.Users;
import com.code.api.services.IUsersService;
@RestController
@RequestMapping("api/users/")
public class UsersController {
//to add the dependency
@Autowired
private IUsersService usersService;

	// ✅ Get all users
	@GetMapping("/")
	public List<Users> getAllUsers() {
		return usersService.getAll();
	}

	// ✅ Get user by ID
	@GetMapping("/{id}")
	public Users getUsersById(@PathVariable("id") int id) {
		return usersService.getUserById(id);
	}

	// ✅ Create a new user
	@PostMapping("/create")
	public Users createUsers(@RequestBody Users user) {
		user.setCreatedAt(java.time.LocalDateTime.now());
		return usersService.createUsers(user);
	}

	// ✅ Update user
	@PutMapping("/edit")
	public Users updateUsers(@RequestBody Users user) {
		return usersService.updateUsers(user);
	}

	// ✅ Delete user by ID
	@DeleteMapping("/delete/{id}")
	public String deleteUsers(@PathVariable("id") int id) {
		return usersService.deleteUsers(id);
	}

	// ✅ User login check
	@PostMapping("/login")
	public Users checkUsers(@RequestParam("emailid") String emailid,
							@RequestParam("password") String password) {
		return usersService.validateUsers(emailid, password);
	}

	
}
