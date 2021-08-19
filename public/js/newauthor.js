var book=document.getElementById("book");
var author=document.getElementById("author");
var genre=document.getElementById("genre");
var info=document.getElementById("info");
var image=document.getElementById("image");
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var error3=document.getElementById("error3");
var error4=document.getElementById("error4");
var error5=document.getElementById("error5");
function validate(){

    if(author.value.trim()=="" && book.value.trim()=="" && genre.value.trim()=="" && info.value.trim()=="" && image.value.trim()==""){
     error1.innerHTML= "Please enter a author name";
     error1.style.color="red";
     author.style.border="2px solid red";
     error2.innerHTML= "Please enter book name";
      error2.style.color="red";
      book.style.border="2px solid red";
      error3.innerHTML= "Please enter the genre";
      error3.style.color="red";
      genre.style.border="2px solid red";
      error4.innerHTML= "Please enter a brief description of author";
      error4.style.color="red";
      info.style.border="2px solid red";
      error5.innerHTML= "Please enter an image of author";
      error5.style.color="red";
        return false;
    }
    else {
       error1.innerHTML="";
      author.style.border="2px solid green";
       error2.innerHTML="";
       book.style.border="2px solid green";
       error3.innerHTML="";
       genre.style.border="2px solid green";
       error4.innerHTML="";
       info.style.border="2px solid green";
       error5.innerHTML="";
    }
    if(book.value.trim()=="" && genre.value.trim()=="" && info.value.trim()=="" && image.value.trim()==""){
        error2.innerHTML= "Please enter book name";
      error2.style.color="red";
      book.style.border="2px solid red";
      error3.innerHTML= "Please enter the genre";
      error3.style.color="red";
      genre.style.border="2px solid red";
      error4.innerHTML= "Please enter a brief description of author";
      error4.style.color="red";
      info.style.border="2px solid red";
      error5.innerHTML= "Please enter an image of author";
      error5.style.color="red";
        return false;
    }
    else{
        error2.innerHTML="";
       book.style.border="2px solid green";
        error3.innerHTML="";
        genre.style.border="2px solid green";
        error4.innerHTML="";
        info.style.border="2px solid green";
        error5.innerHTML="";
    }
    if( genre.value.trim()=="" && info.value.trim()=="" && image.value.trim()==""){  
      error3.innerHTML= "Please enter the genre";
      error3.style.color="red";
      genre.style.border="2px solid red";
      error4.innerHTML= "Please enter a brief description of author";
      error4.style.color="red";
      info.style.border="2px solid red";
      error5.innerHTML= "Please enter an image of author";
      error5.style.color="red";
        return false;
    }
    else{
        error3.innerHTML="";
        genre.style.border="2px solid green";
        error4.innerHTML="";
        info.style.border="2px solid green";
        error5.innerHTML="";
    }
    if(info.value.trim()=="" && image.value.trim()==""){
      error4.innerHTML= "Please enter a brief description of author";
      error4.style.color="red";
      info.style.border="2px solid red";
      error5.innerHTML= "Please enter an image of author";
      error5.style.color="red";
        return false;
    }
    else{
        error4.innerHTML="";
        info.style.border="2px solid green";
        error5.innerHTML="";
    }
    if(image.value.trim()==""){
        error5.innerHTML= "Please enter an image of author";
        error5.style.color="red";
          return false;
      }
      else{
          error5.innerHTML="";
      }
  if(author.value.trim()==""){
     error1.innerHTML= "Please enter author name";
      error1.style.color="red";
     author.style.border="2px solid red";
      error1.style.fontSize="medium";
      return false;
 }
 else {
    error1.innerHTML="";
    author.style.border="2px solid green";
 }
  if(book.value.trim()==""){
     error2.innerHTML= "Please enter book name";
      error2.style.color="red";
      book.style.border="2px solid red";
      error2.style.fontSize="medium";
      return false;
 }
 else {
    error2.innerHTML="";
    book.style.border="2px solid green";
 }
 if(genre.value.trim()==""){
    error3.innerHTML= "Please enter the genre";
     error3.style.color="red";
     genre.style.border="2px solid red";
     error3.style.fontSize="medium";
     return false;
}
else {
   error3.innerHTML="";
   genre.style.border="2px solid green";
}
if(info.value.trim()==""){
    error4.innerHTML= "Please enter a brief description of author";
     error4.style.color="red";
     info.style.border="2px solid red";
     error4.style.fontSize="medium";
     return false;
}
else {
   error4.innerHTML="";
   info.style.border="2px solid green";
}
if(image.value.trim()==""){
    error5.innerHTML= "Please enter an image of author";
     error5.style.color="red";
     error5.style.fontSize="medium";
     return false;
}
else {
   error5.innerHTML="";
}
 }
 function showFiles(){
    let inputField= document.getElementById("image");
    let file= inputField.files;
    let fileReader= new FileReader;
    fileReader.onload=function(event){
        let ImageURL=fileReader.result;
        $("#preview").attr("src",`${ImageURL}`)
    }
    fileReader.readAsDataURL(file[0]);
}