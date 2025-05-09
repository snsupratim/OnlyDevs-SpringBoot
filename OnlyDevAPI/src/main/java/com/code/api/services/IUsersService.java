package com.code.api.services;

import java.util.List;
import com.code.api.models.Users;

public interface IUsersService {

	// Create a new user (Client or Developer)
	Users createUsers(Users user);

	// Update an existing user
	Users updateUsers(Users user);

	// Delete user by object
	String deleteUsers(Users user);

	// Delete user by ID
	String deleteUsers(int id);

	// Get user by ID
	Users getUserById(int id);

	// Get all users
	List<Users> getAll();

	// Validate login (email + password)
	Users validateUsers(String emailid, String password);
}
