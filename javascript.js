const requiredInputs = document.querySelectorAll('input[required]');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', () => {
    requiredInputs.forEach(input => input.className = 'submitted');
});