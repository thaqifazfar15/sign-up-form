const submit = document.getElementsByClassName("btn-submit")[0];

submit.addEventListener("click", validate);

function validate() {
  let passValue = document.getElementById("password").value;
  let confirmPassValue = document.getElementById("confirm_password").value;
  let passMsg = document.getElementsByClassName("pass-msg")[0];

  if (passValue !== confirmPassValue) {
    passMsg.style.opacity = "100%";
    return;
  } else {
    passMsg.style.opacity = "0%";
    return;
  }
}
