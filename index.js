const sendBtn = document.querySelector(".contact-btn");
const emailInput =  document.querySelector(".email");    
const nameInput =  document.querySelector(".name"); 
const textarea =  document.querySelector(".textarea");  

setTimeout(() => {
 emailInput.value = "";
nameInput.value = "";
}, 3000)

sendBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  
  emailInput.value = "";
nameInput.value = "";
textarea.value = "";


})
                                          
