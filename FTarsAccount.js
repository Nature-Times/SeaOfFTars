function validate(){
    const username = document.getElementById("username").value
    const country  = document.getElementById("country").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const agreement = document.getElementById("agreement")

    if(username.length < 6){
        alert("Username must be at least 6 characters long!")
        username.focus();
    }
    else if(country == "default"){
        alert("Please select a country!")
        country.focus();
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")
        email.focus();
    }
    else if(isAlphaNum(password) == false || password.length < 8){
        alert("Password must contain 1 number or 1 alphabet and must be at least 8 characters long!")
        password.focus();
    }
    else if(!agreement.checked){
        alert("You must agree with our terms and conditions!")
    }
    else{
        alert("You are registered!")
        window.location.href = "/FTarsHome.html"
    }
}

function isAlphaNum(password){
    let isAlpha = false
    let isNum = false
    for(let i=0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else isNum = true
    }

    if(isAlpha == false || isNum == false){
        return false
    }
    return true
}