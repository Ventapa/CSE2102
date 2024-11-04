package com.example.demo.model;

public class PasswordQuality {
    private int score;
    private String feedback;
    
    public PasswordQuality(int score, String feedback) {
        this.score = score;
        this.feedback = feedback;
    }
    
    // Getters and setters
    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
    public String getFeedback() { return feedback; }
    public void setFeedback(String feedback) { this.feedback = feedback; }
}