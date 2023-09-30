// Getting data from DOM
const email = document.getElementById('email');
const zip = document.getElementById('zip');
const phone = document.getElementById('phone');
const res = document.getElementById('result');

// Adding event listeners
email.addEventListener('click', evaluateExpression);
zip.addEventListener('click', evaluateExpression);
phone.addEventListener('click', evaluateExpression);

// Function for expression validation
function evaluateExpression(event) {
    let expression = event.target.id;
    let text = document.createElement('h4');
    switch (expression) {
        case 'email':
            let email = prompt("Enter an email: ");
            let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
            if (emailRegExp.test(email)) {
                text.appendChild(document.createTextNode('Your given email is valid!'));
                text.style.color = 'green';
                res.appendChild(text);
            }
            else {
                text.appendChild(document.createTextNode('Your given email is not valid!'));
                text.style.color = 'red';
                res.appendChild(text);
            }
            break;
        case 'zip':
            let zip = prompt("Enter a zip code of Bangladesh: ");
            let zipRegExp = /^[0-9][0-9][0-9][0-9]$/;
            if (zipRegExp.test(zip)) {
                text.appendChild(document.createTextNode('Your given zip code is valid!'));
                text.style.color = 'green';
                res.appendChild(text);
            }
            else {
                text.appendChild(document.createTextNode('Your given zip code is not valid!'));
                text.style.color = 'red';
                res.appendChild(text);
            }
            break;
        case 'phone':
            let phone = prompt("Enter a phone number (Bangladeshi): ");
            let phoneRegExp = /^(\+)?(88)?01[0-9]{9}$/;
            if (phoneRegExp.test(phone)) {
                text.appendChild(document.createTextNode('Your given phone number is valid!'));
                text.style.color = 'green';
                res.appendChild(text);
            }
            else {
                text.appendChild(document.createTextNode('Your given phone number is not valid!'));
                text.style.color = 'red';
                res.appendChild(text);
            }
            break;
        default:
            break;
    }
}