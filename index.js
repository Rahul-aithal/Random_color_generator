// Function to generate a random color in RGBA format
function getRandomColor() {
    var red = Math.round(Math.random() * 225); // Random value for red component
    var green = Math.round(Math.random() * 225); // Random value for green component
    var blue = Math.round(Math.random() * 225); // Random value for blue component
    var alpha = (Math.ceil(Math.random() * 100)) / 100; // Random value for alpha component
    return `rgba(${red},${green},${blue},${alpha})`; // Construct and return the RGBA color string
}

// Select all elements with the class "controller"
const controllers = document.querySelectorAll(".controller");

// Get the body element
const body = document.querySelector("body");

// Main function to initialize event listeners
function main() {
    let backgroundColor; // Variable to store the background color

    // Iterate over each controller element
    controllers.forEach((controller) => {
        // Add click event listener to the "Next" button
        controller.children[1].addEventListener("click", () => {
            // Generate a random color
            backgroundColor = getRandomColor();

            // Check if the generated background color is not already in use
            if (backgroundColor in document.querySelectorAll(".color-name") === "false") {
                // If the color is already used, generate a new random color
                backgroundColor = getRandomColor();
            }
            //Check if the innerHtml is Start
            if(controller.children[1].innerHTML === "Start") controller.children[1].innerHTML ="Next"
            
            
            // Set the background color of the parent element
            controller.parentNode.style.background = backgroundColor;
            // Update the text content of the color-name element
            controller.parentNode.children[0].innerHTML = backgroundColor;
        });

        // Add click event listener to the "Copy" button
        controller.children[0].addEventListener('click', () => {
            // Check if the color-name element contains the default text
            if (controller.parentNode.children[0].innerHTML === "The color code") {
                // Display an alert if the color has not been changed
                alert("Please change the color first.");
            } else {
                // Change button text to indicate successful copy
                controller.children[0].innerHTML = "Copied!"
                // Reset button text after a brief delay
                setTimeout(() => {
                    controller.children[0].innerHTML = "Copy"
                }, 1000);
                // Copy the color value to the clipboard
                window.navigator.clipboard.writeText(controller.parentNode.children[0].innerHTML);
                // Log a message indicating that the color value has been copied
                console.log("Color code copied to clipboard.");
            }
        });
    });
}

// Call the main function to initialize event listeners
main();
