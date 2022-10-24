// Storing DOM elements into variables
const form = document.querySelector("form");
const fName = document.querySelector("#first-name");
const sName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNum = document.querySelector("#phone-number");
const password = document.querySelector("#pswd");
const password2 = document.querySelector("#conf-pswd");
const validities = {
  fName: false,
  sName: false,
  email: false,
  phone: false,
  password: false,
  password2: false,
};

// To make code more readable
const errorMessages = {
  valueMissing: "You need to enter a value",
  typeMismatch: "Enter proper value",
  tooShort: "Value is too short",
  tooLong: "Value is too long",
  typeMismatch: "Wrong input value",
  passMismatch: "Passwords aren't matching",
};

// Only for testing purposes
fName.value = "Chief";
sName.value = "Keef";
email.value = "cheefkeef@a.a";
phoneNum.value = "+1234";
password.value = "cheefkeef";
password2.value = "cheefkeef";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ValidateInputs();

  if (
    validities.fName &&
    validities.sName &&
    validities.email &&
    validities.phone &&
    validities.password &&
    validities.password2
  ) {
    LoadOnSuccess();
  } else {
    console.log("failed");
  }
});

// Start of inputs values validation
function ValidateNames(name) {
  const reg = /^[A-Za-z\s]+$/g;
  return reg.test(String(name));
}

function ValidateEmail(email) {
  const reg = /^.+\@.+\..+$/g; // I could use complicated one, but this work is just for university
  return reg.test(String(email));
}

function ValidatePhone(phone) {
  const reg =
    /(^[+]?\d{1}[(-]?\d{3}[)-]+?\d{3}[-]?\d{2}[-]?\d{2}$)|(\d{5,12})/g;
  return reg.test(String(phone));
}
// End of inputs values validation

// Makes error paragraphs visible/invisible
function SetError(elm, msg, which) {
  const inputControl = elm.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message"); //kinda lame but I'm lazy

  errorDisplay.innerText = msg;
  errorDisplay.classList.remove("trans");
  validities[which] = false;
}

function SetSuccess(elm, which) {
  const inputControl = elm.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = "";
  errorDisplay.classList.add("trans");
  validities[which] = true;
}

// Checks individualy for inputs validity
function ValidateInputs() {
  const fNameValue = fName.value.trim();
  const sNameValue = sName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumValue = phoneNum.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fNameValue == "" || fNameValue == null) {
    SetError(fName, errorMessages.valueMissing, "fName");
  } else if (fNameValue.length > 20) {
    SetError(fName, errorMessages.tooLong, "fName");
  } else if (!ValidateNames(fNameValue)) {
    SetError(fName, errorMessages.typeMismatch, "fName");
  } else {
    SetSuccess(fName, "fName");
  }

  if (sNameValue == "" || sNameValue == null) {
    SetError(sName, errorMessages.valueMissing, "sName");
  } else if (sNameValue.length > 20) {
    SetError(sName, errorMessages.tooLong, "sName");
  } else if (!ValidateNames(sNameValue)) {
    SetError(sName, errorMessages.typeMismatch, "sName");
  } else {
    SetSuccess(sName, "sName");
  }

  if (emailValue == "" || emailValue == null) {
    SetError(email, errorMessages.valueMissing, "email");
  } else if (!ValidateEmail(emailValue)) {
    SetError(email, errorMessages.typeMismatch, "email");
  } else {
    SetSuccess(email, "email");
  }

  if (phoneNumValue == "" || phoneNumValue == null) {
    SetError(phoneNum, errorMessages.valueMissing, "phone");
  } else if (!ValidatePhone(phoneNumValue)) {
    SetError(phoneNum, errorMessages.typeMismatch, "phone");
  } else {
    SetSuccess(phoneNum, "phone");
  }

  if (passwordValue == "" || passwordValue == null) {
    SetError(password, errorMessages.valueMissing, "password");
  } else if (passwordValue.length < 6) {
    SetError(password, errorMessages.tooShort, "password");
  } else if (passwordValue.length > 24) {
    SetError(password, errorMessages.tooLong, "password");
  } else {
    SetSuccess(password, "password");
  }

  if (password2Value !== passwordValue) {
    SetError(password2, errorMessages.passMismatch, "password2");
  } else {
    SetSuccess(password2, "password2");
  }
}

// Only for test purposes
function LoadOnSuccess() {
  console.log(
    `SUCCESS!
    First name is: ${fName.value}
    Second name is: ${sName.value}
    Email is: ${email.value}
    Phone number is: ${phoneNum.value}
    Password is: ${password.value}`
  );
}
