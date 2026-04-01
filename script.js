function changeMessage() {
    const message = document.getElementById("message");

    if (message.textContent === "Welcome to my website!") {
        message.textContent = "You clicked the button 🎉";
    } else {
        message.textContent = "Welcome to my website!";
    }
}
