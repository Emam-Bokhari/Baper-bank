// Deposit
document.querySelector('#deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.querySelector('#input-deposit');
    const inputDepositValue = inputDeposit.value;
    const convertInputDepositValue = parseFloat(inputDepositValue);
    // step 02
    const previousDeposit = document.querySelector('#previous-deposit');
    const previousDepositValue = previousDeposit.innerText;
    const previousDepositValueConvert = parseFloat(previousDepositValue);
    const currentTotalDeposit = previousDepositValueConvert + convertInputDepositValue;
    previousDeposit.innerText = currentTotalDeposit;
    // balance
    const balance = document.querySelector('#balance');
    const balanceValue = balance.innerText;
    const balanceValueConvert = parseFloat(balanceValue);
    const currentBalanceTotal = balanceValueConvert + convertInputDepositValue;
    balance.innerText = currentBalanceTotal;
    document.querySelector('#input-deposit').value = '';
})
// Withdraw
document.querySelector('#withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.querySelector('#withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueConvert = parseFloat(withdrawInputValue);
    // Step 02
    const withdraw = document.querySelector('#withdraw');
    const withdrawValue = withdraw.innerText;
    const withdrawValueConvert = parseFloat(withdrawValue);
    // Step 03
    withdraw.innerText = withdrawValueConvert + withdrawInputValueConvert;
    document.querySelector('#withdraw-input').value = '';
    //   balance
    const previousTotalBalance=document.querySelector('#balance');
    const previousTotalBalanceValue=previousTotalBalance.innerText;
    const previousTotalBalanceValueConvert=parseFloat(previousTotalBalanceValue);
    console.log(previousTotalBalanceValueConvert)
    const currentTotalBalance=previousTotalBalanceValueConvert-withdrawInputValueConvert;
    previousTotalBalance.innerText=currentTotalBalance;
})