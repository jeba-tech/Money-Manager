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

function getCurrentSave() {
      const save = document.getElementById('saving');
      const saveText = save.innerText;
      const convertSaveText = parseFloat(saveText);
      return convertSaveText;
}

function getSave(total, amount) {
      const save = document.getElementById(total);
      // const saveText = save.innerText;
      // const convertSaveText = parseFloat(saveText);
      const convertSaveText = getCurrentSave();
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
      else if (income < 0) {
            alert("Negative amount of money is not valid");
      }
      else {
            alert("Please enter the valid amount of money in income");
      }
      const amount = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');

      if (amount > 0 && amount < income) {
            //handle total expense event
            updateTotalExpense('total-expenses', amount);
            updateBalance(amount);
      }
      else if (amount > income) {
            alert("Expense can not be greater than income.Please check amount of expenses");
      }
      else if (amount < 0) {
            alert("Negative amount of money is not valid !! Please enter the valid amount of money");
      }
      else {
            alert("Please enter the valid amount of money in food, rent and clothes expenses");
      }


});


document.getElementById('save-button').addEventListener('click', function () {
      const save = getInputValue('save-input');

      //const currentBalance = updateNewBalance();
      //const currentsave = getCurrentSave();

      // if (save < currentBalance) {
      //       alert("You have not enough amount of balance for saving");
      // }

      if (save > 0) {

            // if (currentBalance > (save * 1000)) {
            //       getSave('saving', save);

            //       remainingBalance(save);
            // }
            // else {
            //       alert("You have not enough amount of balance for saving");
            // }
            getSave('saving', save);

            remainingBalance(save);
      }
      // else if (currentBalance < currentsave) {
      //       alert("You have not enough amount of balance for saving");
      // }
      else if (save < 0) {
            alert("Negative amount of money is not valid !! Please enter the valid percentage of money");
      }
      else {
            alert("Please enter the valid percentage of money");
      }

})