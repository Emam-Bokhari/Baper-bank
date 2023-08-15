document.querySelector('#deposit-btn').addEventListener('click', function(){
    const inputDeposit=document.querySelector('#input-deposit');
    const inputDepositValue=inputDeposit.value;
    const convertInputDepositValue=parseFloat(inputDepositValue);
    // step 02
    const previousDeposit=document.querySelector('#previous-deposit');
    const previousDepositValue=previousDeposit.innerText;
    const previousDepositValueConvert=parseFloat(previousDepositValue);
   const currentTotalDeposit=previousDepositValueConvert+convertInputDepositValue;
   previousDeposit.innerText=currentTotalDeposit;
    // step 03
   const balance= document.querySelector('#balance');
   const balanceValue=balance.innerText;
   const balanceValueConvert=parseFloat(balanceValue);
   const currentBalanceTotal=balanceValueConvert+convertInputDepositValue;
   balance.innerText=currentBalanceTotal;
   document.querySelector('#input-deposit').value='';
})