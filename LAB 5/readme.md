<h1 align="center">CSE 2102 - Lab 5</h1>
<h2 align="center">Ahmed Abdulghany</h2>


## Lab 5: REST Endpoints Implementation Report
## Software Engineering
### Spring Boot REST API Implementation



## 1. Overview
This report documents the implementation of a Spring Boot REST API system that provides three main functionalities:
1. Password quality assessment
2. Email address validation
3. Quiz question delivery

The system is built using Spring Boot 3.3.5 with Java 17 and follows REST architectural principles.

## 2. REST Endpoints Documentation

### 2.1 Password Quality Check
**Endpoint:** `POST /api/v1/password/check`
- **Purpose:** Evaluates the strength of a provided password
- **Input:** Raw password string in request body
- **Output:** JSON object containing:
  ```json
  {
    "score": 80,
    "feedback": "Strong password"
  }
  ```
- **Scoring Criteria:**
  - Length ≥ 8 characters: +20 points
  - Contains uppercase letter: +20 points
  - Contains lowercase letter: +20 points
  - Contains number: +20 points
  - Contains special character: +20 points

### 2.2 Email Validation
**Endpoint:** `POST /api/v1/email/validate`
- **Purpose:** Validates email address format
- **Input:** Email address string in request body
- **Output:** JSON object containing:
  ```json
  {
    "valid": true,
    "feedback": "Valid email address"
  }
  ```
- **Validation Rules:**
  - Must contain '@' symbol
  - Must follow basic email format (username@domain)

### 2.3 Quiz Questions
**Endpoint:** `GET /api/v1/quiz/questions`
- **Purpose:** Retrieves quiz questions with multiple choice options
- **Input:** None required
- **Output:** JSON array of quiz questions:
  ```json
  [{
    "question": "What is the capital of France?",
    "options": ["London", "Berlin", "Paris", "Madrid"],
    "correctOption": 2
  }]
  ```

## 3. Class Structure

### 3.1 Controllers
- `ValidationController.java`
  - Central controller handling all REST endpoints
  - Maps HTTP requests to appropriate service methods
  - Implements proper REST conventions

### 3.2 Service Classes
1. `PasswordService.java`
   - Implements password strength evaluation logic
   - Calculates score based on multiple criteria
   - Provides feedback messages

2. `EmailService.java`
   - Handles email validation logic
   - Uses regex pattern matching
   - Returns validation results

3. `QuizService.java`
   - Manages quiz question database
   - Provides question retrieval functionality
   - Maintains question-answer relationships

### 3.3 Model Classes
1. `PasswordQuality.java`
   - Represents password evaluation results
   - Contains score and feedback fields

2. `EmailValidation.java`
   - Represents email validation results
   - Contains validity status and feedback

3. `QuizQuestion.java`
   - Represents quiz questions
   - Contains question text, options, and correct answer

## 4. Testing Documentation

### 4.1 Unit Tests
1. `PasswordServiceTest.java`
   ```java
   @Test
   void testWeakPassword()
   @Test
   void testStrongPassword()
   ```

2. `EmailServiceTest.java`
   ```java
   @Test
   void testValidEmail()
   @Test
   void testInvalidEmail()
   ```

3. `QuizServiceTest.java`
   ```java
   @Test
   void testQuizQuestions()
   ```

### 4.2 Test Coverage
- Password Service: Tests both weak and strong passwords
- Email Service: Tests valid and invalid email formats
- Quiz Service: Tests question retrieval and format

## 5. Setup Instructions

### 5.1 Prerequisites
- Java 17
- Maven
- Git

### 5.2 Installation Steps
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Build the project:
   ```bash
   ./mvnw clean package
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

## 6. Testing Instructions

### 6.1 Using cURL
```bash
# Test password strength
curl -X POST -H "Content-Type: text/plain" \
     -d "MyPassword123!" \
     http://localhost:8080/api/v1/password/check

# Test email validation
curl -X POST -H "Content-Type: text/plain" \
     -d "test@example.com" \
     http://localhost:8080/api/v1/email/validate

# Get quiz questions
curl http://localhost:8080/api/v1/quiz/questions
```

### 6.2 Using Postman
1. Import the provided Postman collection
2. Execute the pre-configured requests
3. Verify responses match expected formats

## 7. Future Enhancements
1. Password Service:
   - Add dictionary word check
   - Implement password history
   - Add complexity requirements

2. Email Service:
   - Add domain validation
   - Implement disposable email detection
   - Add MX record checking

3. Quiz Service:
   - Add question categories
   - Implement scoring system
   - Add difficulty levels

## 8. Conclusion
The implemented REST API successfully meets all assignment requirements, providing a robust foundation for password quality assessment, email validation, and quiz question delivery. The system is well-tested, properly documented, and ready for deployment or further enhancement.
