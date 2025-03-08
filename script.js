document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        transitionToNextPage();
    }
});

document.querySelector('.enter-button').addEventListener('click', transitionToNextPage);

function transitionToNextPage() {
    document.querySelector('.container').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "character-selection.html"; // Redirect to next screen
    }, 1000);
}