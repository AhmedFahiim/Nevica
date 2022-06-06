//------- Post replay form

let userName = document.getElementById("name"),
  mail = document.getElementById("mail"),
  site = document.getElementById("site"),
  submit = document.querySelector("[type='submit']"),
  textArea = document.getElementById("message");

submit.onclick = function () {
  let nameReg = /\d|\s|_/gi;
  let nameValid = !nameReg.test(userName.value);
  // --------------------------------
  let mailReg = /\w+@\w+.(com|net|org)/gi;
  let mailValid = mailReg.test(mail.value);
  // --------------------------------
  let siteReg = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?id=\d+&\w+=\w+)?/g;
  let siteValid = siteReg.test(site.value);
  // --------------------------------
  let textReg = /\w{1,30}/gi;
  let textValid = textReg.test(textArea.value);

  console.log(nameValid);
  console.log(mailValid);
  console.log(siteValid);
  console.log(textValid);

  if (
    nameValid === false ||
    mailValid === false ||
    siteValid === false ||
    textValid === false
  ) {
    return false;
  }
};
