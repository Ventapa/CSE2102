// src/test/java/com/example/demo/service/EmailServiceTest.java
package com.example.demo.service;

import com.example.demo.model.EmailValidation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class EmailServiceTest {
    
    private EmailService emailService;
    
    @BeforeEach
    void setUp() {
        emailService = new EmailService();
    }
    
    @Test
    void testValidEmail() {
        EmailValidation validation = emailService.validateEmail("test@example.com");
        assertTrue(validation.isValid());
        assertEquals("Valid email address", validation.getFeedback());
    }
    
    @Test
    void testInvalidEmail() {
        EmailValidation validation = emailService.validateEmail("invalid-email");
        assertFalse(validation.isValid());
        assertEquals("Invalid email address: Must be in format user@domain.com", validation.getFeedback());
    }
    
    @Test
    void testNullEmail() {
        EmailValidation validation = emailService.validateEmail(null);
        assertFalse(validation.isValid());
        assertEquals("Invalid email address: Must be in format user@domain.com", validation.getFeedback());
    }
    
    @Test
    void testEmptyEmail() {
        EmailValidation validation = emailService.validateEmail("");
        assertFalse(validation.isValid());
        assertEquals("Invalid email address: Must be in format user@domain.com", validation.getFeedback());
    }
    
    @Test
    void testEmailWithSpecialCharacters() {
        EmailValidation validation = emailService.validateEmail("test.user+tag@example.com");
        assertTrue(validation.isValid());
        assertEquals("Valid email address", validation.getFeedback());
    }
    
    @Test
    void testEmailWithWhitespace() {
        EmailValidation validation = emailService.validateEmail("  test@example.com  ");
        assertTrue(validation.isValid());
        assertEquals("Valid email address", validation.getFeedback());
    }
}