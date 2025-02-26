document.getElementById("add-button").addEventListener("click", 
  function(event){
    event.preventDefault();

    const amount = getInputValueByID("Amount-taka")

    const pin =getInputValueByID("code-pin");

    const account = document.getElementById("Acount-number").value;

    const mainBalance=getInnerTextByID("onak-taka")
    console.log(mainBalance)


    if(account.length===11){
      if(pin===1234){

        const sum =mainBalance+amount;
        // document.getElementById("onak-taka").innerText=sum;

        setInnerTextByIDandValue("onak-taka",sum)

      }else{
        console.log("pin tik nai")
      }

    }else{
      console.log("account tik nai")
    }
   

  });