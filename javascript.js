const requiredInputs = document.querySelectorAll('input[required]');
const submitButton = document.querySelector('button[type="submit"]');
const passwordFields = document.querySelectorAll('[type="password"]');
const passwordSpan = document.querySelector('span.password');

submitButton.addEventListener('click', () => {
    requiredInputs.forEach(input => input.className = 'submitted');
    if (passwordFields[0].value !== passwordFields[1].value) {
        passwordSpan.classList.add('error');
        passwordFields.forEach(field => {
            field.className = 'error';
            field.setCustomValidity(' ');
        });
    } else {
        passwordSpan.classList.remove('error');
        passwordFields.forEach(field => {
            field.classList.remove('error')
            field.setCustomValidity('');
        });
    }
});