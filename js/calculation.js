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



document.getElementById('calc-button').addEventListener('click', function () {
      // handle input event  
      const amount = getInputValue('food-input') + getInputValue('rent-input') + getInputValue('clothes-input');

      //handle total expense
      updateTotalExpense('total-expenses', amount);
})