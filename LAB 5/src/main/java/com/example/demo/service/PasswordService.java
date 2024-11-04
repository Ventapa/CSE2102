package com.example.demo.service;

import com.example.demo.model.PasswordQuality;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {
    
    public PasswordQuality evaluatePassword(String password) {
        int score = 0;
        String feedback = "";
        
        if (password.length() >= 8) score += 20;
        if (password.matches(".*[A-Z].*")) score += 20;
        if (password.matches(".*[a-z].*")) score += 20;
        if (password.matches(".*[0-9].*")) score += 20;
        if (password.matches(".*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>/?].*")) score += 20;
        
        if (score < 40) {
            feedback = "Weak password";
        } else if (score < 80) {
            feedback = "Moderate password";
        } else {
            feedback = "Strong password";
        }
        
        return new PasswordQuality(score, feedback);
    }
}