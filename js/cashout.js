
 document.getElementById("submit-button").addEventListener
 ("click" , function(event){
  event.preventDefault();

  const accountNumber=document.getElementById("cas-number").value;


 const amount = getInputValueByID("cas-amount");
 const pinNumber=getInputValueByID("cas-code")
  const mainBalance=getInnerTextByID("onak-taka")

  if(amount>mainBalance){
    alert("Invalid amount")
    return;

  }


  if(accountNumber.length===11){
    if(pinNumber===1234) {
      const sum=mainBalance-amount;

      setInnerTextByIDandValue("onak-taka",sum)


      const container=document.getElementById("transaction-container");

      const p = document.createElement("p");
      p.innerText=`
      cashout ${amount} from this ${accountNumber} account
      `
      container.appendChild(p)


    }else{
      alert("pin not valid")
    }

  }else{
    alert("account number not valid")
  }
   
   
 })