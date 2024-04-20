class BgcolorRem {
    bg_colors = [];

    // Method to add a new background color
    sotre_color(bg_color) {
        // Validation: Check if bg_color is provided
        if (!bg_color) {
            throw new Error("Background color is required.");
        }

        // Add the bg_color to the bg_colors array
        this.bg_colors.push(bg_color);
    }
}


export default BgcolorRem