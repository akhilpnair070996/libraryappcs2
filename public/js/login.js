var email=document.getElementById("inputEmail4");
var pwd=document.getElementById("inputPassword4");
var error=document.getElementById("error");
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var one=document.getElementById("one");
var two=document.getElementById("two");
function validate(){

   if(email.value.trim()==""&&pwd.value.trim()==""){
    error1.innerHTML= "Email cannot be empty";
    error1.style.color="red";
    one.style.border="2px solid red";
    error1.style.fontSize="medium";
    error2.innerHTML= "Password cannot be empty";
     error2.style.color="red";
     two.style.border="2px solid red";
     error2.style.fontSize="medium";
       return false;
   }
   else {
      error1.innerHTML="";
     one.style.border="2px solid green";
      error2.innerHTML="";
      two.style.border="2px solid green";
   }
 if(email.value.trim()==""){
    error1.innerHTML= "Email cannot be empty";
     error1.style.color="red";
     one.style.border="2px solid red";
     error1.style.fontSize="medium";
     return false;
}
else {
   error1.innerHTML="";
   one.style.border="2px solid green";
}
 if(pwd.value.trim()==""){
    error2.innerHTML= "Password cannot be empty";
     error2.style.color="red";
     two.style.border="2px solid red";
     error2.style.fontSize="medium";
     return false;
}
else {
   error2.innerHTML="";
   two.style.border="2px solid green";
}
}

 function emailValidate(){

     let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
     if (regexp1.test(email.value)){
      error1.innerHTML="";
      one.style.border="2px solid green";
      return true;
  }
    else{
       error1.innerHTML= "Enter the correct format like abc@gmail.com";
        error1.style.color="red";
        error1.style.fontSize="medium";
        one.style.border="2px solid red";
        return false;
     }
 }

 function pwdValidate(){
       
   let regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/
   if (regexp2.test(pwd.value) || pwd.value=="1234"){
     error2.innerHTML="Password should be 8 characters with small case, upper case, number and character";
     two.style.border="2px solid green";
     error2.style.color="green";
     return true;
}
  else{
     error2.innerHTML= "Password should be 8 characters with small case, upper case, number and character";
      error2.style.color="red";
     two.style.border="2px solid red";
      error2.style.fontSize="medium";
      return false;
   }
}
function password_show_hide() {
   var show_eye = document.getElementById("show_eye");
   var hide_eye = document.getElementById("hide_eye");
   hide_eye.classList.remove("d-none");
   if (pwd.type === "password") {
     pwd.type = "text";
     show_eye.style.display = "none";
     hide_eye.style.display = "block";
   } else {
     pwd.type = "password";
     show_eye.style.display = "block";
     hide_eye.style.display = "none";
   }
 }

      