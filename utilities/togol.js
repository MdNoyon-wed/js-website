 

//  chang money and cashout
 document.getElementById("Cash-out").style.display="none";

 document.getElementById("Money")
 .addEventListener("click",function(){
  hendleToggle("add-money-main","block")
  hendleToggle("Cash-out","none")
  hendleToggle("transaction-history","none ")


 })

 document.getElementById("cashout-money")
 .addEventListener("click",function(){
  hendleToggle("add-money-main","none")
  hendleToggle("Cash-out","block")
  hendleToggle("transaction-history","none")
 })

 


