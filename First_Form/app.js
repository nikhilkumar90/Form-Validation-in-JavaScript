function data(){
const userId = document.getElementById("UserID").value;
const contact = document.getElementById("contact").value;
const password = document.getElementById("password").value;
const compassword = document.getElementById("compassword").value;
const email = document.getElementById("email").value;

if(userId=="" || contact == "" || password == "" || compassword == "" ){
    alert("All Fields are mendatory");
    return false;
}
else if(contact.length<10 || contact.length>10){
    alert("Number should be of 10 digits ! Please enter valid number");
    return false;
}
else if(email.length>25){
    alert("Email length is too long");
    return false;
}
else if(isNaN(contact)){
    alert("Only Numbers are allowed ! Please enter valid number");
    return false;
}
else if(password != compassword){
    alert("Please enter same password");
    return false;
}

else{
    true;
}
};

