const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errorMessage = document.querySelectorAll('.absolute');

for (let i = 0; i < 6; i++) {
  inputs[i].addEventListener('input', () => {
    if (inputs[4].value.length !== 0 && inputs[5].value.length !== 0 && inputs[4].value !== inputs[5].value) {
      errorMessage[5].textContent = "Passwords aren't matching.";
      errorMessage[5].classList.remove('trans');
    }

    if (inputs[i].validity.valid) {
      errorMessage[i].classList.add('trans');
    } else {
      errorMessage[i].classList.remove('trans');
      if(inputs[i].validity.valueMissing) {
        errorMessage[i].textContent = 'You need to enter a value.';
      } else if(inputs[i].validity.typeMismatch) {
        errorMessage[i].textContent = 'Enter proper value.';
      } else if(inputs[i].validity.tooShort) {
        errorMessage[i].textContent = `At least ${ inputs[i].minLength } characters here`;
      } 
    } 
    if (inputs[4].value.length !== 0 && inputs[5].value.length !== 0 && inputs[4].value !== inputs[5].value) {
      errorMessage[5].textContent = "Passwords aren't matching.";
      errorMessage[5].classList.remove('trans');
    }
  });
}

form.addEventListener('submit', (event) => {
  for (let i = 0; i < 6; i++) {
    if (!inputs[i].validity.valid) {
      errorMessage[i].classList.remove('trans');
      errorMessage[i].textContent = 'This one is wrong dude';
      event.preventDefault();
    }
  }
});