const conditions = {
    bleeding: {
        solution: [
            "Apply firm pressure to the wound with a clean cloth. Elevate the injury above heart level.",
            "Clean the wound gently with water if possible. Cover with a sterile bandage.",
            "If bleeding persists for more than 10 minutes or is severe, call emergency services immediately."
        ],
    },
    burn: {
        solution: [
            "Cool the burn with running water for at least 10 minutes. Do not apply ice or butter.",
            "Cover the burn with a clean, non-stick dressing or cling film.",
            "Seek immediate medical attention for third-degree burns or burns covering a large area."
        ],
    },
    fever: {
        solution: [
            "Drink plenty of fluids and rest. Stay hydrated to help the body recover.",
            "Take over-the-counter medications like paracetamol or ibuprofen to reduce fever.",
            "If fever persists for more than 3 days or exceeds 103°F (39.4°C), consult a doctor."
        ],
    },
    dehydration: {
        solution: [
            "Drink plenty of water or oral rehydration solutions to replenish fluids.",
            "Avoid caffeine and alcohol, which can worsen dehydration.",
            "If symptoms like dizziness or confusion occur, seek immediate medical attention."
        ],
    },
    diarrhea: {
        solution: [
            "Stay hydrated by drinking water, clear broths, or oral rehydration solutions.",
            "Avoid dairy, caffeine, and greasy foods until symptoms resolve.",
            "Consult a doctor if diarrhea lasts more than 48 hours or is accompanied by fever."
        ],
    },
    fatigue: {
        solution: [
            "Get 7-9 hours of sleep each night and maintain a consistent sleep schedule.",
            "Eat a balanced diet rich in whole foods and stay hydrated.",
            "If fatigue persists despite lifestyle changes, consult a doctor."
        ],
    },
    backpain: {
        solution: [
            "Apply a hot or cold pack to the affected area for 15-20 minutes at a time.",
            "Practice gentle stretching exercises or yoga to relieve tension.",
            "If pain persists or worsens, consult a doctor for further evaluation."
        ],
    },
    allergy: {
        solution: [
            "Avoid known allergens and stay in a clean environment.",
            "Take over-the-counter antihistamines to reduce allergic reactions.",
            "If symptoms like difficulty breathing occur, seek immediate medical attention."
        ],
    },
    anxiety: {
        solution: [
            "Practice deep breathing exercises or mindfulness techniques to calm your mind.",
            "Engage in regular physical activity to reduce stress levels.",
            "Consider speaking to a therapist or doctor if anxiety significantly impacts daily life."
        ],
    },
    constipation: {
        solution: [
            "Increase your fiber intake with fruits, vegetables, and whole grains.",
            "Drink plenty of water throughout the day to soften stools.",
            "If constipation lasts more than a week, consult a doctor for further advice."
        ],
    },
    cold: {
        solution: [
            "Rest and stay hydrated to support your immune system.",
            "Use saline nasal spray or a humidifier to ease congestion.",
            "Take over-the-counter cold medications for symptom relief, but consult a doctor if symptoms worsen."
        ],
    },
};

function handleQuery(inputText) {
    const userInput = inputText.toLowerCase().trim();
    const messages = document.getElementById("messages");

    let matchedConditions = Object.keys(conditions).filter((condition) =>
        userInput.includes(condition)
    );

    messages.innerHTML += ` 
        <div class="message user-message">
            <strong>You:</strong> ${userInput}
        </div>
    `;

    if (matchedConditions.length === 0) {
        messages.innerHTML += `
            <div class="message bot-message">
                <strong>SmartAid:</strong> I'm sorry, I didn't understand that.
            </div>
        `;
    } else {
        let responseText = matchedConditions
            .map(
                (condition) =>
                    `<strong>${condition.charAt(0).toUpperCase() + condition.slice(1)}:</strong><br>${conditions[condition].solution.join(
                        "<br>"
                    )}`
            )
            .join("<br><br>");

        messages.innerHTML += `
            <div class="message bot-message">
                <strong>SmartAid:</strong> ${responseText}
            </div>
        `;
    }

    messages.scrollTop = messages.scrollHeight;

    document.getElementById("user-input").value = "";
}

function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById("user-input").value = transcript;

        handleQuery(transcript);
    };

    recognition.start();
}

document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const inputText = document.getElementById("user-input").value;
        handleQuery(inputText);
    }
});
function clearChat() {
    document.getElementById("messages").innerHTML = "";
}
