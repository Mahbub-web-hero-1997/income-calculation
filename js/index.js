// Get exPenses Input common function
function expenses(expenseId) {
    const exPensesInput = document.getElementById(expenseId);
    const expenseInputNumber = parseFloat(exPensesInput.value);

    return expenseInputNumber
}
// expenses calculation
document.getElementById('calculate_Button').addEventListener('click', function () {
    const foodExpenses = expenses('food_Expense');
    const rentExpenses = expenses('rent_Expense');
    const clothesExpenses = expenses('clothes_Expense');
    const income = expenses('income');
    let balance = 0;
    let expensesAmount = foodExpenses + rentExpenses + clothesExpenses;
    if (expensesAmount > income) {
        alert("Plese Input Currect Value");
        balance = 0;
    }
    else {
        expensesAmount = document.getElementById('expenses_Total').innerText = foodExpenses + rentExpenses + clothesExpenses;
        balance = document.getElementById('balance').innerText = income - expensesAmount;
    }
    if (income < 0 || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {
        alert('Please Enter Positive Value!')
    }
})
// Bonus Aria
document.getElementById('savingButton').addEventListener('click', function () {
    const parcentInput = expenses('parcent_input');
    const income = expenses('income');
    let balancee = document.getElementById('balance').innerText;
    let savingTotal = document.getElementById('saving_Amount').innerText = income * parcentInput / 100;
    let subTotal = balancee - savingTotal;
    if (savingTotal > subTotal) {
        alert("Please Enter a Valid Amount");
        subTotal = document.getElementById('subTotal').innerText = 0;
        savingTotal = document.getElementById('saving_Amount').innerText = 0

    }
    else {
        subTotal = document.getElementById('subTotal').innerText = balancee - savingTotal;

    }


})