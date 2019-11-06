const formEl = document.querySelector("[data-contact-form]");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateUserName(userName) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(userName);
}

function validateRequired(fieldValue) {
  return fieldValue == ""
}

formEl.addEventListener("submit", function(event) {
  event.preventDefault();

  const formUserNameInputValue = document.querySelector('[data-username]').value;
  const formUserEmailInputValue = document.querySelector('[data-email]').value;
  const formUserMessageValue = document.querySelector('[data-message]').value;
  

  
  
  if (!validateEmail(formUserEmailInputValue)) return alert('Email is not valid');
  if (!validateUserName(formUserNameInputValue)) return alert('UserName is not valid');
  if (validateRequired(formUserEmailInputValue)) return alert('Email is required')
  if (validateRequired(formUserNameInputValue)) return alert('UserName is required');
  if (validateRequired(formUserMessageValue)) return alert('Message is required');


  alert(`User Name: ${formUserNameInputValue}, Email: ${formUserEmailInputValue}`);
})

