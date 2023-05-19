const submit = document.getElementById("submit");

const isEmpty = (str) => str.length === 0;
const checkLength = (str, min, max) => str.length <= max && str.length >= min;
const alphabetOnly = (str) => {
  let pattern = /^[a-zA-Z]+$/;
  return pattern.test(str);
};
const numberOnly = (str) => {
  let pattern = /^[0-9]+$/;
  return pattern.test(str);
};
const checkEqual = (str1, str2) => str1 === str2;
const isValidString = (str) => {
  let pattern = /^[a-zA-Z][a-zA-Z0-9@_]{0,}[a-zA-Z0-9]{0,1}$/;
  return pattern.test(str);
};
const isValidPassword = (str) => {
  var pattern = /^(?=.*\d)(?=.*[@_])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d@_]+$/;
  return pattern.test(str);
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // extracting DOM objects
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const dob = document.getElementById("dob");
  const gender = document.getElementById("gender");
  const province = document.getElementById("province");
  const district = document.getElementById("district");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  // error message container
  const fnameMessage = document.getElementById("fname-message");
  const lnameMessage = document.getElementById("lname-message");
  const dobMessage = document.getElementById("dob-message");
  const genderMessage = document.getElementById("gender-message");
  const provinceMessage = document.getElementById("province-message");
  const districtMessage = document.getElementById("district-message");
  const phoneMessage = document.getElementById("phone-message");
  const emailMessage = document.getElementById("email-message");
  const usernameMessage = document.getElementById("username-message");
  const password1Message = document.getElementById("password1-message");
  const password2Message = document.getElementById("password2-message");

  if (isEmpty(fname.value)) {
    fnameMessage.innerText = "Please enter your fisrt name!";
  } else if (!checkLength(fname.value, 2, 50)) {
    fnameMessage.innerText = "  Field must be 2 to 50 characters.";
  } else {
    fnameMessage.innerText = "";
  }
  if (isEmpty(lname.value)) {
    lnameMessage.innerText = "Please enter your last name!";
  } else if (!checkLength(fname.value, 2, 50)) {
    lnameMessage.innerText = "  Field must be 2 to 50 characters.";
  } else {
    lnameMessage.innerText = "";
  }
  if (isEmpty(dob.value)) {
    dobMessage.innerText = "Please select a date!";
  } else {
    dobMessage.innerText = "";
  }
  if (isEmpty(phone.value)) {
    phoneMessage.innerText = "Please enter your phone number!";
  } else if (!numberOnly(phone.value)) {
    phoneMessage.innerText = "  Phone must be numbers.";
  } else if (!checkLength(phone.value, 10, 10)) {
    phoneMessage.innerText = "  Phone must be 10 digits.";
  } else {
    phoneMessage.innerText = "";
  }
  if (isEmpty(username.value)) {
    usernameMessage.innerText = " Enter a username!";
  } else if (!checkLength(username.value, 6, 15)) {
    usernameMessage.innerText = "  Username must be 6 to 15 characters.";
  } else if (!isValidString(username.value)) {
    usernameMessage.innerText = "  Username must be alphanumeric.";
  } else {
    usernameMessage.innerText = "";
  }
  if (isEmpty(password1.value)) {
    password1Message.innerText = "Please enter your password.";
  } else if (!checkLength(password1.value, 8, 20)) {
    password1Message.innerText = "  Password must be 8 to 20 characters.";
  } else if (!isValidPassword(password1.value)) {
    password1Message.innerText = "  Password must contain at least a digit, a special character, an uppercase letter and a lowercase letter!";
  } else {
    password1Message.innerText = "";
  }
  if (isEmpty(password2.value)) {
    password2Message.innerText = " Please re-enter your password.";
  } else if (!checkEqual(password1.value, password2.value)) {
    password2Message.innerText = "  Password does not match.";
  } else {
    password2Message.innerText = "";
  }
});