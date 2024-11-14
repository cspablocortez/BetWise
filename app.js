const balanceLabel = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const amountType = document.getElementById("type");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");

class Account {
    constructor() {
        this.balance = 2500.00.toFixed(2);
        balanceLabel.textContent = this.balance;
    }
		
		updateBalance() {
			let amount = parseFloat(amountInput.value);
			let type = amountType.value;
			let item = document.createElement("li");
			let prefix = "";
			
			if (type == "loss") {
				this.balance -= amount;
				item.style.color = "red";
				prefix = "-$";
			} else {
				this.balance += amount;
				item.style.color = "green";
				prefix = "+$";
			}
			
			item.textContent = prefix + amount.toFixed(2);
			expensesList.appendChild(item);
			balanceLabel.textContent = this.balance.toFixed(2);
			amountInput.value = "";
		}
}

const account = new Account();
addBtn.addEventListener("click", account.updateBalance.bind(account));