package com.code.api.controller;

import com.code.api.models.Feedback;
import com.code.api.services.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private IFeedbackService feedbackService;

    @PostMapping
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.createFeedback(feedback);
    }

    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/{id}")
    public Feedback getFeedbackById(@PathVariable int id) {
        return feedbackService.getFeedbackById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Feedback> getFeedbackForUser(@PathVariable int userId) {
        return feedbackService.getFeedbackForUser(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteFeedback(@PathVariable int id) {
        feedbackService.deleteFeedback(id);
    }
}
