// Function to generate a random color in RGBA format
export function getRandomColor() {
    var red = Math.round(Math.random() * 225); // Random value for red component
    var green = Math.round(Math.random() * 225); // Random value for green component
    var blue = Math.round(Math.random() * 225); // Random value for blue component
    var alpha = (Math.ceil(Math.random() * 100)) / 100; // Random value for alpha component
    return `rgba(${red},${green},${blue},${alpha})`; // Construct and return the RGBA color string
}
