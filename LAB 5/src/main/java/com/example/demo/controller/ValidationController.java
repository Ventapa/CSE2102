package com.example.demo.controller;

import com.example.demo.service.PasswordService;
import com.example.demo.service.EmailService;
import com.example.demo.service.QuizService;
import com.example.demo.model.PasswordQuality;
import com.example.demo.model.EmailValidation;
import com.example.demo.model.QuizQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ValidationController {
    
    @Autowired
    private PasswordService passwordService;
    
    @Autowired
    private EmailService emailService;
    
    @Autowired
    private QuizService quizService;
    
    @PostMapping("/password/check")
    public PasswordQuality checkPassword(@RequestBody String password) {
        return passwordService.evaluatePassword(password);
    }
    
    @PostMapping("/email/validate")
    public EmailValidation validateEmail(@RequestBody String email) {
        return emailService.validateEmail(email);
    }
    
    @GetMapping("/quiz/questions")
    public List<QuizQuestion> getQuizQuestions() {
        return quizService.getQuestions();
    }
}
