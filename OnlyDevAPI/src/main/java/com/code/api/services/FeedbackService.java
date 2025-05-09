package com.code.api.services;

import com.code.api.models.Feedback;
import com.code.api.reposatories.IFeedbackrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService implements  IFeedbackService{


    @Autowired
    private IFeedbackrepository feedbackRepository;

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback getFeedbackById(int id) {
        return feedbackRepository.findById(id).orElse(null);
    }

    @Override
    public List<Feedback> getFeedbackForUser(int userId) {
        return feedbackRepository.findByToUserId(userId);
    }

    @Override
    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }
}
