var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");

function validateName() {
  var name = document.getElementById("name").value;
  nameError.style.display = "block";

  if (name.length == 0) {
    nameError.innerHTML = "Name required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    nameError.innerHTML = "Full name required";
    return false;
  }
  nameError.innerHTML = '<img width="20" src="./assets/images/check-mark.png">';
  setTimeout(function () {
    nameError.style.display = "none";
  }, 3000);
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  emailError.style.display = "block";

  if (email.length == 0) {
    emailError.innerHTML = "Email required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML =
    '<img width="20" src="./assets/images/check-mark.png">';
  setTimeout(function () {
    emailError.style.display = "none";
  }, 3000);
  return true;
}

function validateMessage() {
  var message = document.getElementById("message");
  messageError.style.display = "block";

  message.addEventListener("input", () => {
    if (message.value.length <= 2) {
      messageError.innerHTML =
        "Required field* Please explain in full and precise";
    } else if (message.value.length >= 60) {
      messageError.innerHTML =
        '<img width="20" src="./assets/images/check-mark.png">';
      setTimeout(function () {
        messageError.style.display = "none";
      }, 3000);
    }
  });
}

function validateForm() {
  var name = document.forms["contact"]["name"];
  var email = document.forms["contact"]["email"];
  var message = document.forms["contact"]["message"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter your email");
    email.focus();
    return false;
  }

  if (message.value == "") {
    window.alert("Please explain in full and precise");
    message.focus();
    return false;
  }

  return true;
}
