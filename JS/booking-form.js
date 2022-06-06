// ---------------- Booking section ---------------------//
// ---------------- form Validation ---------------------//

let form = document.querySelector("#book-now form"),
  submit = form.querySelector("[type='submit']"),
  userName = form.querySelectorAll(".name"),
  eMail = form.querySelector("[type='email']"),
  Phone = form.querySelector(".phone"),
  subject = form.querySelector(".subject");

submit.onclick = function (e) {
  let nameValidateOne = false;
  let nameValidateTwo = false;
  // -------------------------------------------
  let nameRegex = /(\s|\d|_)/gi;
  if (!userName[0].value.match(nameRegex)) {
    nameValidateOne = true;
  }
  if (!userName[1].value.match(nameRegex)) {
    nameValidateTwo = true;
  }
  // -------------------------------------------
  let phoneReg = /\d{11}/g;
  let ValidatePhone = phoneReg.test(Phone.value);
  // -------------------------------------------
  let eMailReg = /\w+@\w+.com/gi;
  let ValidateEmail = eMailReg.test(eMail.value);
  // -------------------------------------------
  let subjectReg = /\w{1,25}/gi;
  let ValidateSubject = subjectReg.test(subject.value);
  // -------------------------------------------

  if (
    nameValidateOne === false ||
    nameValidateTwo === false ||
    ValidatePhone === false ||
    ValidateEmail === false ||
    ValidateSubject === false
  ) {
    e.preventDefault();
  }
};

// ---------------- FAQ Ques ---------------------//
let questions = document.querySelectorAll(".question");

questions.forEach((ques) => {
  ques.onclick = function (e) {
    questions.forEach((r) => {
      if (e.currentTarget != r) {
        r.parentElement.classList.remove("show-text");
      }
    });
    ques.parentElement.classList.toggle("show-text");
  };
});
