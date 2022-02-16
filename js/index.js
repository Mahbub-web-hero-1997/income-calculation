
// Get exPenses Input common function
function expenses(expenseId) {
    const exPensesInput = document.getElementById(expenseId);
    const expenseInputNumber = parseFloat(exPensesInput.value);
    return expenseInputNumber
}
// expenses calculation
document.getElementById('calculate_Button').addEventListener('click', function () {
    const foodExpenses = expenses('food_Expense');
    const rentExpenses = expenses('rent_Expense')
    const clothesExpenses = expenses('clothes_Expense')
    const income = expenses('income');
    const totalExpenses = document.getElementById('expenses_Total').innerText = foodExpenses + rentExpenses + clothesExpenses;
    const balance = document.getElementById('balance').innerText = income - totalExpenses;
    // const balanceText = balance.innerText;
    // const balanceNumber = parseFloat(balanceText);
    // balanceNumber = income - totalExpenses;
    console.log('balance........', balance)
    console.log('food Expenses.........', foodExpenses)
    console.log('food Expenses.........', rentExpenses)
    console.log('food Expenses.........', clothesExpenses)
    console.log('total Expenses.........', totalExpenses)
    console.log('Balance.........', income)



})
