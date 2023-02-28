const contactForm = document.querySelector(".contact-form");
  const fullName = document.querySelector(".full-name");
  const emailAddress = document.querySelector(".email-address");
  const subject = document.querySelector(".subject");
  const message = document.querySelector(".message");
  const submit = document.querySelector(".submit-form");
  const modal = document.querySelector(".modal-wrap");
  const cclose = document.querySelector(".model.close");


  submit.addEventListener('click', (e) => {
    e.preventDefault()
    db.collection("contact-form").doc().set({
        fullName: fullName.value,
        email: emailAddress.value,
        subject: subject.value,
        message: message.value,
    }).then(() => {
        contactForm.request();
        model.classlist.toggle("displat-none");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.toggle("dispaly-none");
  });