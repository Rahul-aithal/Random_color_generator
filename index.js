
import { getRandomColor } from "./Components/get_random_color.js";
import BgcolorRem from "./Components/Color_store.js";


// Main function to initialize event listeners
function main() {
    // Select all elements with the class "controller"
    const controllers = document.querySelectorAll(".controller");
    let backgroundColor; // Variable to store the background color
    let Color_stores = []


    // Iterate over each controller element
    controllers.forEach((controller) => {


        let Color_store_name = controller.parentNode.classList[1]
        Color_store_name = new BgcolorRem(); //create a new class for the given Color_store_name
        Color_stores.push(Color_store_name) // push class in isntace

        // Add click event listener to the "Next" button
        controller.children[1].addEventListener("click", () => {
            // Generate a random color
            backgroundColor = getRandomColor();
            console.log(backgroundColor);
            // Check if the generated background color is not already in use
            if (backgroundColor in document.querySelectorAll(".color-name") === "false") {
                // If the color is already used, generate a new random color
                backgroundColor = getRandomColor();
            }
            //Check if the innerHtml is Start
            if (controller.children[1].innerHTML === "Start") controller.children[1].innerHTML = "Next"

            // Set the background color of the parent element
            controller.parentNode.style.background = backgroundColor;
            // Update the text content of the color-name element
            controller.parentNode.children[0].innerHTML = backgroundColor;

            //to save the color in the arrary of class
            let idx = Array.from(controllers).indexOf(controller)
            Color_stores[idx].sotre_color(backgroundColor)

            console.log(Color_stores[idx]);

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


        // Add click event listener to the "Previous" button
        let counter = 2; // Initialize counter for tracking color index

        // Add click event listener to the "Previous" button
        controller.children[2].addEventListener("click", () => {
            
            let index = Array.from(controllers).indexOf(controller); // Get index of current controller
            let numberOfColors = Color_stores[index].bg_colors.length; // Get number of colors in Color_stores

            // Check if there are no colors or only one color available
            if (numberOfColors === 0 || numberOfColors === 1) {
                alert("Go to next color then use this button"); // Alert user to go to next color
            }
            else {
                // Get the last color based on the counter
                let lastColor = Color_stores[index].bg_colors[numberOfColors - counter];

                // Set the background color and text content
                controller.parentNode.style.background = lastColor;
                controller.parentNode.children[0].innerHTML = lastColor;

                // Increment counter if there are more colors to access
                if (numberOfColors - counter !== 0) {
                    counter += 1;
                }
            }
        });

    });

}

// Call the main function to initialize event listeners
main();
