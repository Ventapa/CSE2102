package com.example.demo.service;

import com.example.demo.model.PasswordQuality;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PasswordServiceTest {
    
    private PasswordService passwordService = new PasswordService();
    
    @Test
    void testWeakPassword() {
        PasswordQuality quality = passwordService.evaluatePassword("weak");
        assertTrue(quality.getScore() < 40);
        assertEquals("Weak password", quality.getFeedback());
    }
    
    @Test
    void testStrongPassword() {
        PasswordQuality quality = passwordService.evaluatePassword("StrongP@ss123");
        assertEquals(100, quality.getScore());
        assertEquals("Strong password", quality.getFeedback());
    }
}