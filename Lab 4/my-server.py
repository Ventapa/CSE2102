from flask import Flask, request, jsonify
import secrets
import hmac

app = Flask(__name__)

# Store active tokens (in a real application, use a database)
active_tokens = {}

def generate_token():
    return secrets.token_hex(16)

@app.route("/")
def hello():
    return "Authentication server running\n"

@app.route("/login", methods=['POST'])
def login():
    user_id = request.form.get('id')
    if not user_id:
        return jsonify({"error": "No user ID provided"}), 400
    
    # Generate a new token for this user
    token = generate_token()
    active_tokens[user_id] = token
    
    return jsonify({
        "message": "Login successful",
        "token": token,
        "id": user_id
    })

@app.route("/protected", methods=['POST'])
def protected():
    user_id = request.form.get('id')
    token = request.form.get('token')
    
    if not user_id or not token:
        return jsonify({"error": "Missing credentials"}), 401
    
    # Verify the token
    if user_id not in active_tokens or active_tokens[user_id] != token:
        return jsonify({"error": "Invalid token"}), 401
    
    return jsonify({"message": "Access granted to protected resource"})

@app.route("/echo", methods=['POST'])
def echo():
    # First verify the token
    user_id = request.form.get('id')
    token = request.form.get('token')
    
    if not user_id or not token:
        return jsonify({"error": "Missing credentials"}), 401
    
    if user_id not in active_tokens or active_tokens[user_id] != token:
        return jsonify({"error": "Invalid token"}), 401
    
    # If authenticated, echo the message
    return "You said: " + request.form.get('text', '')

if __name__ == "__main__":
    app.run(host='0.0.0.0')