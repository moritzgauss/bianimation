// CSS Styles for Animation and Board
const styleContent = `

    #board-container {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #board {
        display: flex;
        font-size: 2rem;
        letter-spacing: 0.1em;
        cursor: pointer;
    }

    .flap {
        position: relative;
        display: inline-block;
        width: 1em;
        height: 1.2em;
        overflow: hidden;
        background: #000;
        border: 1px solid #555;
        margin: 0 0.05em;
        color: #fff; /* White text */
        text-align: center;
    }

    /* Upper and lower halves of each flap */
    .flap::before,
    .flap::after {
        content: attr(data-char);
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        background: #000;
        color: #fff;
        overflow: hidden;
        transition: transform 0.15s ease-out;
    }

    .flap::before {
        top: 0;
        border-bottom: 1px solid #555;
        transform-origin: bottom;
    }

    .flap::after {
        bottom: 0;
        border-top: 1px solid #555;
        transform-origin: top;
        transform: rotateX(90deg);
    }

    .flap.flip::before {
        transform: rotateX(90deg);
    }

    .flap.flip::after {
        transform: rotateX(0);
    }

    #explanationText {
        font-family: Helvetica, DM-Sans, sans-serif;
        font-size: 14px;
        color: #000000;
        text-align: center;
        display: none;
        border: none; /* Remove any borders */
        line-height: 1.2;
        padding: 10px 0; 
`;

// Append CSS to document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styleContent;
document.head.appendChild(styleSheet);

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
