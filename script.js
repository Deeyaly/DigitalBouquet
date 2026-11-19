
const rhinestones = document.querySelector(".rhinestones");

const colors = [
    "#ff69b4", // Pink
    "#ff1493", // Hot pink
    "#e60026", // Ruby red
    "#87cefa", // Baby blue
    "#ffd700", // Gold
    "#ffffff"  // Diamond
];

if (rhinestones) {
    for (let i = 0; i < 180; i++) {
        const gem = document.createElement("span");
        gem.classList.add("gem");

        const color =
            colors[Math.floor(Math.random() * colors.length)];

        gem.style.setProperty("--gem-color", color);

        // Scatter gems in a circular bouquet area
        // Flower locations (percentages of bouquet image)
const flowers = [
    [40, 25],
    [55, 25],
    [70, 30],
    [30, 40],
    [45, 45],
    [60, 45],
    [75, 50],
    [35, 60],
    [50, 60],
    [65, 65],
    [45, 75],
    [60, 78]
];

// Choose a flower
const flower = flowers[
    Math.floor(Math.random() * flowers.length)
];

// Keep rhinestones close to its center
const x = flower[0] + (Math.random() - 0.5) * 9;
const y = flower[1] + (Math.random() - 0.5) * 9;

        gem.style.left = x + "%";
        gem.style.top = y + "%";

        gem.style.animationDelay = Math.random() * 3 + "s";
        gem.style.animationDuration = 1 + Math.random() * 3 + "s";

        rhinestones.appendChild(gem);
    }
}
