function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const newAmountText = input.value;
    const newAmount = parseFloat(newAmountText);
    input.value = '';
    return newAmount;
}
function getFieldValueAdd(fieldValue, amount) {
    const totalFiledValue = document.getElementById(fieldValue);
    const totalFieldValueText = totalFiledValue.innerText;
    const previousAmount = parseFloat(totalFieldValueText);
    totalFiledValue.innerText = previousAmount + amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBalanceTotalText);
    return previousBlanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBlanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBlanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBlanceTotal - amount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-field'); //get an convert input field value
    if (newDepositAmount > 0) {
        getFieldValueAdd('deposit-total', newDepositAmount); //update deposit
        updateBalance(newDepositAmount, true); //update balance
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-field'); //get an convert input field value
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        getFieldValueAdd('withdraw-total', newWithdrawAmount); //update withdraw
        updateBalance(newWithdrawAmount, false); //update balance
    }
    if(newWithdrawAmount > currentBalance){
        document.getElementById('warning-message').innerText = 'Sorry! You can not withdraw more than you have.';
    }
});