const cancelBtn = document.querySelector(".cancel-btn")
const emailInput =  document.querySelector(".email")    
const namenput =  document.querySelector(".name") 
const textarea =  document.querySelector(".textarea")  

cancelBtn.addEventListener("click", () => {
emailInput.value = ""
nameInput.value = ""
textarea.value = ""
}
                                          
