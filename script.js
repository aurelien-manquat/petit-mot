const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");

let attempts = 0;

yesButton.addEventListener("click", () => {
    window.location.href = "surprise.html";
});

noButton.addEventListener("click", () => {

    if (attempts < 2) {

        attempts++;

        const messages = [
            "Hmm... tu es sûre ? 👀",
            "Attends, réfléchis encore deux secondes 😂"
        ];

        message.textContent = messages[attempts - 1];

        const maxX = 100;
        const maxY = 60;

        const x = (Math.random() * maxX * 2) - maxX;
        const y = (Math.random() * maxY * 2) - maxY;

        noButton.style.transform =
            `translate(${x}px, ${y}px)`;

    } else {

        message.textContent =
            "Bon ok, j'arrête de négocier 😂";

        noButton.style.transform = "translate(0, 0)";

        noButton.onclick = () => {
            message.textContent =
                "Aucun souci 😊 Bonne continuation !";
        };
    }
});