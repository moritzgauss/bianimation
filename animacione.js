// Create styles for the body and animated text
const styles = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200vh; /* Make body taller for scrolling */
        background-color: #000; /* Black background */
        color: #00ff00; /* Green text */
        font-family: 'Courier New', Courier, monospace; /* Monospace font */
        overflow: hidden; /* Prevent scrolling */
        margin: 0; /* Remove default margin */
        position: relative; /* Position relative for child elements */
    }
    #animated-text {
        font-size: 2em; /* Adjust font size */
        opacity: 1; /* Start fully visible */
        transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition for opacity and transform */
        transform: rotateY(0deg); /* Initial rotation */
        backface-visibility: hidden; /* Hide backface when rotated */
    }
    .flipped {
        transform: rotateY(180deg); /* Flip effect */
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

    const binaryString = "Tuttofare: 01010101 01101110 01100101 01101100 01101100 01100001 01101101"; // Binary representation
    const finalText = "Tuttofare"; // Final text
    let currentText = binaryString; // Start with the binary string

    textElement.textContent = currentText; // Set initial text

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY; // Current scroll position
        const windowHeight = window.innerHeight; // Height of the viewport

        // Check if scrolled to a certain point
        if (scrollPosition > windowHeight / 2) { // Trigger halfway down the page
            textElement.classList.add("flipped"); // Add flipped class for animation
            setTimeout(() => {
                textElement.textContent = finalText; // Change to final text
                textElement.classList.remove("flipped"); // Remove flip effect
            }, 500); // Delay to allow flip to complete
        } else {
            textElement.textContent = binaryString; // Show binary string when scrolled back up
            textElement.classList.remove("flipped"); // Ensure flip is reset
        }
    });
});
