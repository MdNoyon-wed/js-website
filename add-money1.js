document.getElementById("add-button").addEventListener("click", 
  function(event){
    event.preventDefault();

    const amount = getInputValueByID("Amount-taka")

    const pin =getInputValueByID("code-pin");

    const account = document.getElementById("Acount-number").value;

    const mainBalance=getInnerTextByID("onak-taka")
    console.log(mainBalance)

    const selectedBank=document.getElementById("allbank").value;
    console.log(selectedBank)

    if(amount<0){

      alert("vai aita kono kotha positive number dite hoba ")
      return;
    }


    if(account.length===11){
      if(pin===1234){

        const sum =mainBalance+amount;
        // document.getElementById("onak-taka").innerText=sum;

        setInnerTextByIDandValue("onak-taka",sum)



        const container=document.getElementById("transaction-container");

        const p = document.createElement("p");
        p.innerText=`
        added ${amount} from ${account} account
        `
        container.appendChild(p)
       



























      }else{
        console.log("pin tik nai")
      }

    }else{
      console.log("account tik nai")
    }
   

  });