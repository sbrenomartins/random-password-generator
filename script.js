let password = document.getElementById('password');

function genPassword() {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let passwordLength = 12;
  let passwordValue = "";

  for(let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passwordValue += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log(passwordValue);
  password.value = passwordValue;
}

function copyPassword() {
  var copyText = document.getElementById('password');
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand('copy');
}