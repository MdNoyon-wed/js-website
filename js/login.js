 
 document.getElementById("login-btn")
 .addEventListener('click', function(event){
  
  event.preventDefault();

  const newInput=document.getElementById("number-input")
  .value;
 
  const pin=document.getElementById("text-input")
  .value;
   const convertedPin=parseInt(pin)
   
  
  if(newInput.length === 11) {
    
    if(convertedPin===1234){
      window.location.href="./new.html"
      
      }
    else{
      alert("pin tik nai")
    }
  }
  else{ 
    alert("need value acount number")
  }

  
 })
 