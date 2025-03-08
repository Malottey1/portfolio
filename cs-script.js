document.addEventListener('DOMContentLoaded', function () {
    const designer = document.getElementById('designer');
    const programmer = document.getElementById('programmer');
    const selectSound = document.getElementById('selectSound');

    function selectCharacter(page) {
        selectSound.play(); // Play 8-bit sound effect
        document.querySelector('.container').classList.add('fade-out');
        setTimeout(() => {
            window.location.href = page; // Navigate after fade-out
        }, 1000);
    }

    designer.addEventListener('click', () => selectCharacter('designer.html'));
    programmer.addEventListener('click', () => selectCharacter('programmer.html'));
});