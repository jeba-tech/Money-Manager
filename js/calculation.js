function getInputValue(inputID) {
      const input = document.getElementById(inputID);
      const inputValue = input.value;
      const convertFloat = parseFloat(inputValue);

      input.value = '';
      return convertFloat;
}

function updateTotalExpense(total, amount) {
      const expenses = document.getElementById(total);
      const expensesText = expenses.innerText;
      const convertExpensesText = parseFloat(expensesText);
      expenses.innerText = convertExpensesText + amount;



}

function updateNewBalance() {
      const balance = document.getElementById('balance');
      const balanceText = balance.innerText;
      const convertBalanceText = parseFloat(balanceText);
      return convertBalanceText;
}

function updateBalance(amount) {
      const balance = document.getElementById('balance');

      const convertBalanceText = updateNewBalance();
      balance.innerText = convertBalanceText - amount;

}



function getSave(total, amount) {
      const save = document.getElementById(total);
      const saveText = save.innerText;
      const convertSaveText = parseFloat(saveText);
      save.innerText = convertSaveText + (amount * 100);

}

function remainingBalance(input) {
      const savee = document.getElementById('remaining-amount');
      const saveText = savee.innerText;
      const convertSaveText = parseFloat(saveText);
      const updatebalance = updateNewBalance();
      savee.innerText = convertSaveText + updatebalance - (input * 100);
}
document.getElementById('calc-button').addEventListener('click', function () {
      // handle input event  
      const income = getInputValue('income-input');
      if (income > 0) {
            //handle balance event

            updateTotalExpense('balance', income);

      }
      const amount = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');
      if (amount > 0) {
            //handle total expense event
            updateTotalExpense('total-expenses', amount);
            updateBalance(amount);
      }


});


document.getElementById('save-button').addEventListener('click', function () {
      const save = getInputValue('save-input');
      if (save > 0) {
            getSave('saving', save);
            debugger;

            remainingBalance(save);


      }


})