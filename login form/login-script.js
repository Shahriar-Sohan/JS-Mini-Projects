const username = document.querySelector("#first-input")
const password = document.querySelector("#second-input")
const form = document.querySelector(".auth-input")
const errorMsg= document.querySelector(".error-msg")
const submitBtn = document.querySelector(".submit-btn")

form.addEventListener("change", passwordSbmt)

function passwordSbmt(){
    if (password.value.length < 8){
        errorMsg.innerHTML = "Password must contain minimum 8 characters"
    }else{

    }
    let userArray = username.value.split('')
    if(!userArray.includes('@')){
        errorMsg.innerHTML = "username must be an email"
    }else{
        errorMsg.innerHTML = ""
    }
}

