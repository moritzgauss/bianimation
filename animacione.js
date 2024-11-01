// JavaScript for Animation Logic
const binaryString = "01010101 01101110 01100101 01101100 01101100 01100001 01101101";
const explanationText = "Binary for Tuttofare (ital. Jack of all Trades)";

const board = document.getElementById("board");
const explanation = document.getElementById("explanationText");

// Function to create flaps with binary characters
function createFlaps(text) {
    board.innerHTML = ""; // Clear the board
    text.split("").forEach(char => {
        const flap = document.createElement("span");
        flap.classList.add("flap");
        flap.setAttribute("data-char", char);
        flap.textContent = char;
        board.appendChild(flap);
    });
}

// Function to start the flipping animation
function startFlipAnimation() {
    createFlaps(binaryString);

    [...board.children].forEach((flap, index) => {
        setTimeout(() => {
            flap.classList.add("flip");
            setTimeout(() => {
                // Display explanation text after all flips
                if (index === board.children.length - 1) {
                    board.style.display = "none";
                    explanation.style.display = "block";

                    // Revert back to initial state after 4 seconds
                    setTimeout(() => {
                        explanation.style.display = "none";
                        board.style.display = "flex";
                        createFlaps(binaryString);
                    }, 4000);
                }
            }, 100);
        }, index * 50); // Staggered timing
    });
}

// Restart animation on scrolling down from top
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        startFlipAnimation();
    }
});

// Initial load animation
startFlipAnimation();
