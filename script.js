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
    
};

function handleQuery() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    let response = { solution: "I'm sorry, I didn't understand that." };

    
    if (conditions[userInput]) {
        response = conditions[userInput];
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
