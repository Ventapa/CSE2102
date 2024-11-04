package com.example.demo.service;

import com.example.demo.model.QuizQuestion;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class QuizServiceTest {
    
    private QuizService quizService = new QuizService();
    
    @Test
    void testQuizQuestions() {
        var questions = quizService.getQuestions();
        assertFalse(questions.isEmpty());
        assertTrue(questions.get(0).getOptions().size() >= 2);
        assertNotNull(questions.get(0).getQuestion());
    }
}