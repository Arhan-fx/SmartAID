from flask import Flask, request, jsonify
from groq import Groq
from flask_cors import CORS  

app = Flask(__name__)
 
CORS(app)
 
client = Groq(api_key="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")

@app.route('/generate-recipe', methods=['POST'])
def generate_recipe():
    user_message = request.json.get("message")
    
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    completion = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {
                "role": "system",
                "content": "\"\"\"\nWelcome to SmartAID: Your Virtual Health Assistant!\n\nSmartAID is an AI-powered assistant designed to guide you in addressing common medical concerns and emergencies. \nWhether you're dealing with a bleeding wound, a stomachache, fever, or other non-critical health issues, \nSmartAID offers reliable first-aid advice, suggests appropriate diets, and warns against harmful foods based on your condition.\n\nCapabilities:\n1. **Emergency First-Aid Guidance**: Immediate, step-by-step instructions for issues like bleeding, burns, or injuries.\n2. **Symptom Assessment**: Recommendations for handling common symptoms such as fever, stomach pain, or headaches.\n3. **Dietary Suggestions**: Tailored food plans based on the user's health condition, including what to eat and avoid.\n4. **Wellness Tips**: General health tips to prevent common ailments and maintain a healthy lifestyle.\n\nHow to Use:\n1. Describe the symptoms or situation (e.g., \"I have a fever and body aches\" or \"My family member is bleeding\").\n2. Provide any additional details like age, duration of symptoms, or pre-existing conditions (if known).\n3. Get step-by-step guidance, including first-aid measures and dietary advice.\n\nDisclaimer:\nSmartAID is not a substitute for professional medical care. Always consult a doctor for serious or persistent health concerns.\n\nLet's begin! Type your health concern to get started.\n\"\"\"\n"
            },
            {
                "role": "user",
                "content": user_message
            }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
    )
    
    response_content = ""
    for chunk in completion:
        response_content += chunk.choices[0].delta.content or ""

    return jsonify({"response": response_content})

if __name__ == '__main__':
    app.run(debug=True)
