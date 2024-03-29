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

function getInnerText(id) {
      const text = document.getElementById(id);
      const innerText = text.innerText;
      const convertInnerText = parseFloat(innerText);
      return convertInnerText;
}
document.getElementById('calc-button').addEventListener('click', function () {
      // handle input event  
      const income = getInputValue('income-input');
      const food = getInputValue('food-input');
      const rent = getInputValue('rent-input');
      const clothes = getInputValue('clothes-input');

      if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid amount of money in income, food, rent, and clothes expenses.',
            });
            return;
        }
      if (income > 0 || food > 0 || rent > 0 || clothes > 0) {
            //handle balance event

            updateTotalExpense('balance', income);

      }
      else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Negative amount of money is not valid',

            })
            // alert("Negative amount of money is not valid");
            return;
      }
      else {
            Swal.fire(
                  ' ',
                  'Please enter the valid amount of money in income, food, rent and clothes expenses!!',
                  'question'
            )
            // alert("Please enter the valid amount of money in income");
      }

      const amount = food + rent + clothes;

      if (amount > 0 && amount < income) {
            //handle total expense event

            updateTotalExpense('total-expenses', amount);
            updateBalance(amount);
      }
      else if (amount > income) {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Expense can not be greater than income.Please check amount of expenses',

            })
            // alert("Expense can not be greater than income.Please check amount of expenses");

      }
      else if (amount < 0) {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Negative amount of money is not valid !! Please enter the valid amount of money in food, rent and clothes expenses',

            })
            // alert("Negative amount of money is not valid !! Please enter the valid amount of money");
            return;
      }
      // else {
      //       alert("Please enter the valid amount of money in food, rent and clothes expenses");
      // }


});


document.getElementById('save-button').addEventListener('click', function () {
      const save = getInputValue('save-input');

     

      // if (save < currentBalance) {
      //       alert("You have not enough amount of balance for saving");
      // }
      if (isNaN(save) ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid amount of money.',
            });
            return;
        }
        const currentBalance = updateNewBalance();
        // debugger
        //const currentSave = getInnerText('save-input') * 1000;
        const currentSave = getCurrentSave();
      if (save > 0 && currentBalance > save) {


            // if (save <= currentBalance) {
            //       getSave('saving', save);
            //       remainingBalance(save);
            //   } else {
            //       Swal.fire(
            //           '',
            //           'You do not have enough balance for saving.',
            //           'question'
            //       );
            //   }
      
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
      else if (currentBalance < save || currentBalance < 0) {
            Swal.fire(
                  ' ',
                  'You have not enough amount of balance for saving!!',
                  'question'
            )
            // alert("You have not enough amount of balance for saving");
      }
      else if (save < 0) {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Negative amount of money is not valid !! Please enter the valid percentage of money!',

            })
            // alert("Negative amount of money is not valid !! Please enter the valid percentage of money");
      }
      else {
            Swal.fire(
                  ' ',
                  'Please enter the valid percentage of money!!',
                  'question'
            )
            // alert("Please enter the valid percentage of money");
      }

})