const requiredInputs = document.querySelectorAll('input[required]');
const submitButton = document.querySelector('button[type="submit"]');
const passwordFields = document.querySelectorAll('[type="password"]');
const passwordSpan = document.querySelector('span.password');

submitButton.addEventListener('click', () => {
    requiredInputs.forEach(input => input.className = 'submitted');
    if (passwordFields[0].value !== passwordFields[1].value) {
        passwordSpan.classList.add('validation');
        passwordFields.forEach(field => {
            field.className = 'validation';
            field.setCustomValidity(' ');
        });
    } else {
        passwordSpan.classList.remove('validation');
    }
});