function checkUppercase(pass) {
    for(let i = 0;i<pass.length;i++) {
        if(pass[i] >= 'A' && pass[i] <= 'Z'){
            return true;
        }
    }
    return false;
}
function checkLowercase(pass) {
    for(let i = 0;i< pass.length;i++){
        if(pass[i] >= 'a' && pass[i] <= 'z'){
            return true;
        }
    }
    return false;
}
function checkDigit(pass) {
    for(let i = 0; i < pass.length; i++) {
        if (!isNaN(pass[i]) && pass[i] !== ' ') {
            return true;
        }
    }
    return false;
}

function formValidate() {
    let firstname = document.getElementsByName("First Name")[0].value;
    let lastname = document.getElementsByName("Last Name")[0].value;
    let pass = document.getElementsByName("Password")[0].value;
    let len = pass.length;
    let checkEmail = document.getElementsByName("Email")[0].value;

    if(firstname === "" && lastname === "" && pass === "" && checkEmail === "") {
        alert("Please fill all the fields");
        return;
    }
    else if(!checkEmail.includes("@")) {
        alert("Email is Invalid");
        return;
    }
    else if(pass === "") {
        alert("Please fill Password");
        return;
    }
    else if(len < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    else if(!checkUppercase(pass)) {
        alert("Password must contain at least one uppercase letter");
        return;
    }
    else if(!checkLowercase(pass)) {
        alert("Password must contain at least one lowercase letter");
        return;
    }
    else if(!checkDigit(pass)) {
        alert("Password must contains digits");
        return;
    }
    else{
        alert("Form submitted successfully");
    }
}
document.getElementsByTagName("form")[0].style.border = "3px solid blue"

// function checkText(text) {
//   let hasUpperCase = false,
//     hasNumber = false;
//   for (let i = 0; i < text.length; i++) {
//     if (isUpperCase(text[i])) hasUpperCase = true;
//     if (isNumber(text[i])) hasNumber = true;
//     if (hasUpperCase && hasNumber) return true;
//   }

//   return false;
// }

// function isUpperCase(char) {
//   if (char >= "A" && char <= "Z") return true;

//   return false;
// }

// function isNumber(num) {
//   if (Number(num) >= 0 && Number(num) <= 9) return true;
//   else false;
// }

// function formValidate() {
//   const firstName = document.getElementsByName("First Name")[0].value;
//   const lastName = document.getElementsByName("Last Name")[0].value;
//   const email = document.getElementsByName("Email")[0].value;
//   const pass = document.getElementsByName("Password")[0].value;

//   if (!firstName.length || !lastName.length || !email.length || !pass.length) {
//     alert("Some Fields are Empty!");
//     return;
//   }

//   if (!email.includes("@")) {
//     alert("Email is Invalid!");
//     return;
//   }

//   if (!checkText(pass)) {
//     alert("Password not follows the rule!");
//     return;
//   }

//   alert("Form Submitted Successfully!");
//   return;
// }
