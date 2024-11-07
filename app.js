const balance = document.getElementById("balance");
const expense = document.getElementById("expense");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");

class Account {
    constructor() {
        this.balance = 1323.50;
        balance.textContent = this.balance;
    }

    addExpense() {
        let loss = parseFloat(expense.value);
        this.balance -= loss;

        let expenseItem = document.createElement("li");
        expenseItem.textContent = "-$" + loss;
        expensesList.appendChild(expenseItem);

        balance.textContent = this.balance;
        expense.value = "";
    }
}

const account = new Account();
addBtn.addEventListener('click', account.addExpense.bind(account));


