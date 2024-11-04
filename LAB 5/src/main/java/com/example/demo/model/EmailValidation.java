package com.example.demo.model;

public class EmailValidation {
    private boolean valid;
    private String feedback;
    
    public EmailValidation(boolean valid, String feedback) {
        this.valid = valid;
        this.feedback = feedback;
    }
    
    // Getters and setters
    public boolean isValid() { return valid; }
    public void setValid(boolean valid) { this.valid = valid; }
    public String getFeedback() { return feedback; }
    public void setFeedback(String feedback) { this.feedback = feedback; }
}