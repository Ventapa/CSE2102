package com.example.demo.service;

import com.example.demo.model.QuizQuestion;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class QuizService {
    
    public List<QuizQuestion> getQuestions() {
        return Arrays.asList(
            new QuizQuestion(
                "What is the capital of France?",
                Arrays.asList("London", "Berlin", "Paris", "Madrid"),
                2
            ),
            new QuizQuestion(
                "Which planet is known as the Red Planet?",
                Arrays.asList("Venus", "Mars", "Jupiter", "Saturn"),
                1
            )
        );
    }
}