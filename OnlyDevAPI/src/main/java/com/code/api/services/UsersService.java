package com.code.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Users;
import com.code.api.reposatories.IUsersrepository;

@Service
public class UsersService implements IUsersService {

	@Autowired
	private IUsersrepository usersrepository;

	@Override
	public Users createUsers(Users user) {
		user.setCreatedAt(java.time.LocalDateTime.now());
//		user.setRole(Users.Role.valueOf(user.getRole().toUpperCase()));// Ensure createdAt is set
		return usersrepository.save(user);
	}

	@Override
	public Users updateUsers(Users user) {
		Optional<Users> existingUser = usersrepository.findById(user.getId());
		if (existingUser.isPresent()) {
			return usersrepository.save(user);
		}
		return null; // or throw custom exception
	}

	@Override
	public String deleteUsers(Users user) {
		if (usersrepository.existsById(user.getId())) {
			usersrepository.delete(user);
			return "User deleted successfully.";
		}
		return "User not found.";
	}

	@Override
	public String deleteUsers(int id) {
		Optional<Users> u = usersrepository.findById(id);
		if (u.isPresent()) {
			usersrepository.delete(u.get());
			return "User with ID " + id + " deleted successfully.";
		}
		return "User not found with ID: " + id;
	}

	@Override
	public Users getUserById(int id) {
		return usersrepository.findById(id).orElse(null);
	}

	@Override
	public List<Users> getAll() {
		return usersrepository.findAll();
	}

	@Override
	public Users validateUsers(String emailid, String password) {
		Users user = usersrepository.findByEmailid(emailid);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}
}
