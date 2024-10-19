import httpx
import json

# Replace with your codespace URL
url = "https://supreme-succotash-r449g4wv5ggg2xg4w-5000.app.github.dev/"

def test_authentication():
    # Test 1: Basic server connection
    print("\nTest 1: Basic server connection")
    response = httpx.get(url)
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")

    # Test 2: Login attempt
    print("\nTest 2: Login attempt")
    auth_data = {
        "id": "phillip.bradford@uconn.edu"
    }
    response = httpx.post(url + "login", data=auth_data)
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")
    
    # Parse the response to get the token
    auth_response = response.json()
    token = auth_response.get('token')
    user_id = auth_response.get('id')

    # Test 3: Protected request with valid token
    print("\nTest 3: Protected request with valid token")
    protected_data = {
        "id": user_id,
        "token": token,
        "text": "Hello from authenticated user!"
    }
    response = httpx.post(url + "echo", data=protected_data)
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")

    # Test 4: Protected request with invalid token
    print("\nTest 4: Protected request with invalid token")
    invalid_data = {
        "id": user_id,
        "token": "invalid_token",
        "text": "This should fail"
    }
    response = httpx.post(url + "echo", data=invalid_data)
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")

if __name__ == "__main__":
    test_authentication()