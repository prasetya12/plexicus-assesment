export function getInitialName(name: string) {
    if (!name) return "";
    const words = name.trim().split(" ");
    return words.length > 1
        ? words[0][0].toUpperCase() + words[1][0].toUpperCase()
        : words[0][0].toUpperCase();
}

export function getRandomBackgroundColor() {
    const softColors = [
        "#FEE2E2",
        "#FEF3C7",
        "#D1FAE5",
        "#DBEAFE",
        "#E0E7FF",
        "#F3E8FF",
        "#FCE7F3",
        "#FDE68A",
        "#C7D2FE",
        "#BEE3F8",
    ];
    return softColors[Math.floor(Math.random() * softColors.length)];
}