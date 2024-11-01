// Create styles for the body and animated text
const styles = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #000; /* Black background */
        color: #00ff00; /* Green text */
        font-family: 'Courier New', Courier, monospace; /* Monospace font */
        overflow: hidden; /* Prevent scrolling */
        margin: 0; /* Remove default margin */
    }
    #animated-text {
        font-size: 2em; /* Adjust font size */
        opacity: 0; /* Start with transparent text */
        transition: opacity 0.5s ease; /* Smooth transition for opacity */
    }
`;

// Append styles to the head of the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Animation logic
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animated-text");

    let binaryString = "Tuttofare: 01010101 01101110 01100101 01101100 01101100 01100001 01101101"; // Binary representation
    let currentText = ''; // Track the current text being displayed
    let index = 0; // Current index in the binary string

    function animate() {
        if (index < binaryString.length) {
            currentText += binaryString[index]; // Add the next character
            textElement.textContent = currentText; // Update the displayed text
            index++; // Move to the next character

            textElement.style.opacity = 1; // Make the text visible
            setTimeout(() => {
                textElement.style.opacity = 0; // Fade out
                setTimeout(animate, 500); // Delay before showing the next character
            }, 500); // Time to display each character
        } else {
            textElement.style.opacity = 1; // Ensure final text is visible
        }
    }

    animate(); // Start the animation
});
