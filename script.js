(function () {
    emailjs.init("LKJNH-VIIE1iK_u0O");
  })();
  
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var service = document.getElementById("service").value;
      var message = document.getElementById("message").value;
      var submitButton = document.querySelector(".submit-button");
  
      if (name && email && service && message) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending in progress...";
  
        emailjs
          .send("service_reh6mys", "template_bycp0zb", {
            name: name,
            email: email,
            service: service,
            message: message,
          })
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("The message was sent successfully !");
              submitButton.disabled = false;
              submitButton.textContent = "Send";
              document.getElementById("contactForm").reset();
            },
            function (error) {
              console.log("FAILED...", error);
              alert("Message sending failed. Try Again.");
              submitButton.disabled = false;
              submitButton.textContent = "Send";
            }
          );
      } else {
        alert("Please complete all fields.");
      }
    });
  

// Gestion de l'affichage de la carte
function showForm() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("contactFormContainer").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("contactFormContainer").style.display = "none";
  }
  
  document.getElementById("contactMeButton").addEventListener("click", function (event) {
    event.preventDefault();
    showForm();
  });
  
  document.getElementById("placeOrderButton").addEventListener("click", function (event) {
    event.preventDefault();
    showForm();
  });
  
  document.getElementById("closeButton").addEventListener("click", function () {
    closeForm();
  });