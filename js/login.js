 
 document.getElementById("login-btn")
 .addEventListener('click', function(event){
  
  event.preventDefault();

  const newInput=document.getElementById("number-input")
  .value;
 
  const pin=document.getElementById("text-input")
  .value;
  // const convertedPin=parseInt(pin)
  
  
  if(newInput.length===11){
    
    if(pin==="1234"){
      
      }
    else{
      after('pin tik nai')
    }
  }
  else{
    after('need value acount number')
  }

  
 })
 