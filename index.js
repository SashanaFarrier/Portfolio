const sendBtn = document.querySelector(".contact-btn");
const emailInput =  document.querySelector(".email");    
const nameInput =  document.querySelector(".name"); 
const textarea =  document.querySelector(".textarea");  

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  emailInput.value = "";
nameInput.value = "";
textarea.value = "";


})
                                          
