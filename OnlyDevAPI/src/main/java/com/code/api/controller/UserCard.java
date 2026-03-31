package com.code.api.controller;

public class UserCard {

    public UserCard(String name, String emailid, String roles) {
        this.name = name;
        this.emailid = emailid;
        this.roles = roles;
    }

    public UserCard(String name) {
        this.name = name;
    }

    private String name;
    private String emailid;
    private String roles;

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

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }


}
