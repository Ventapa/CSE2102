// src/main/java/com/example/demo/service/EmailService.java
package com.example.demo.service;

import com.example.demo.model.EmailValidation;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    public EmailValidation validateEmail(String email) {
        if (email != null) {
            email = email.trim();
        }
        
        boolean isValid = email != null && 
                         !email.isEmpty() &&
                         email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$");
        
        String feedback = isValid ? 
            "Valid email address" : 
            "Invalid email address: Must be in format user@domain.com";
        
        return new EmailValidation(isValid, feedback);
    }
}