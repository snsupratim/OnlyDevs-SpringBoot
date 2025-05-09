package com.code.api.services;

import com.code.api.models.Feedback;

import java.util.List;

public interface IFeedbackService {
    Feedback createFeedback(Feedback feedback);
    List<Feedback> getAllFeedback();
    Feedback getFeedbackById(int id);
    List<Feedback> getFeedbackForUser(int userId);
    void deleteFeedback(int id);
}
