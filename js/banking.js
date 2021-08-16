document.getElementById('deposit-btn').addEventListener('click', function () {
    //update deposit amount
    const depositInput = document.getElementById('deposit-field');
    const newDepositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const updatedDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = updatedDepositTotal;
    depositInput.value = '';

    //update balance amount
    const balanceTotal = document.getElementById('balance-total');
    const previousBlanceTotal = balanceTotal.innerText;
    const updatedBalanceTotal = parseFloat(previousBlanceTotal) + parseFloat(newDepositAmount);
    balanceTotal.innerText = updatedBalanceTotal;
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const updateWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(previousWithdrawAmount);
    withdrawTotal.innerText = updateWithdrawTotal;
    withdrawInput.value = '';

    //update balance amount
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const updatedBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    balanceTotal.innerText = updatedBalanceTotal;

});