const conditions = {
    bleeding: {
        solution: "Apply firm pressure to the wound with a clean cloth. Elevate the injury above heart level. If bleeding persists for more than 10 minutes, consult a doctor.",
    },
    burn: {
        solution: "Cool the burn with running water for at least 10 minutes. Do not apply ice or butter. Cover with a clean, non-stick dressing. Consult a doctor for severe burns.",
    },
    fever: {
        solution: "Drink plenty of fluids and rest. Take over-the-counter medications like paracetamol for high fever. Contact a doctor if the fever persists for more than 3 days.",
    },
    headache: {
        solution: "Rest in a quiet, dark room. Stay hydrated. Take over-the-counter pain relief. If headaches persist or worsen, consult a doctor.",
    },
    nausea: {
        solution: "Sip on clear fluids. Eat small, bland meals like crackers or bananas. Avoid strong odors. Contact a doctor if vomiting lasts more than 24 hours.",
    },
    cough: {
        solution: "Stay hydrated and drink warm fluids. Use honey and lemon in warm water to soothe your throat. If coughing lasts more than 2 weeks or is severe, consult a doctor.",
    },
    stomachache: {
        solution: "Rest and avoid solid foods for a few hours. Drink clear fluids. If pain persists or worsens, or is accompanied by fever, consult a doctor.",
    },
    dizziness: {
        solution: "Sit or lie down immediately to prevent falling. Drink water to stay hydrated. Avoid sudden movements. If dizziness persists, consult a doctor.",
    },
    sprain: {
        solution: "Rest the injured area. Apply ice to reduce swelling. Compress the area with a bandage and elevate it. Consult a doctor if the pain persists.",
    },
    sorethroat: {
        solution: "Gargle with warm salt water. Drink warm fluids like tea with honey. Use over-the-counter throat lozenges. See a doctor if symptoms last more than a week.",
    },
};

function handleQuery() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    let response = { solution: "I'm sorry, I didn't understand that." };

    const matchedCondition = Object.keys(conditions).find((condition) =>
        userInput.includes(condition)
    );

    if (matchedCondition) {
        response = conditions[matchedCondition];
    }
    
    document.getElementById("messages").innerHTML += `
        <div class="message user-message">
            <strong>You:</strong> ${userInput}
        </div>
        <div class="message bot-message">
            <strong>SmartAid:</strong> ${response.solution}
        </div>
    `;
    document.getElementById("user-input").value = "";
}

function clearChat() {
    document.getElementById("messages").innerHTML = "";
}
