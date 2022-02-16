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
    console.log('balance.........', balance)
})
// Bonus Aria
document.getElementById('savingButton').addEventListener('click', function () {
    const parcentInput = expenses('parcent_input');
    const income = expenses('income');
    const savingTotal = document.getElementById('saving_Amount').innerText = income * parcentInput / 100;
    const balancee = document.getElementById('balance').innerText;
    const subTotal = document.getElementById('subTotal').innerText = balancee - savingTotal;
})