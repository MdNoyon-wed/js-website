 
 document.getElementById("Cash-out").style.display="none";

 document.getElementById('Money').addEventListener("click", 
  function(){
    
    document.getElementById("add-money-main").style.display="block";
    document.getElementById("Cash-out").style.display="none";

  })
 
  document.getElementById('cashout-money').addEventListener("click",function(){

    document.getElementById("add-money-main").style.display="none";
    document.getElementById("Cash-out").style.display="block";
  })

  document.getElementById("add-button").addEventListener("click", function(event){
    event.preventDefault();

    //  prat 1-->number
    const acountNumber=document.getElementById("Acount-number").value;

    // prat 2-->pin code
    const pinNumber=document.getElementById("code-pin").value;

    // chakk--.pin==1234 naki  
    const convertedPinNumber=parseInt(pinNumber)

    // prat 3-->amount
    const amount=document.getElementById("Amount-taka").value;
    // converted to number
    const convertedAmount=parseFloat(amount)
    // main taka

    const mainBalance=document.getElementById("onak-taka").innerText;
    // strent to number 
  const convertedMainBalance=parseFloat(mainBalance)


    if(acountNumber.length===11){
      if(convertedPinNumber===1234){
       const sum=convertedMainBalance+convertedAmount;
       document.getElementById("onak-taka").innerText=sum;
       

      }

    }
    else{
      alert("account number tik nai")
    }
     
  })
