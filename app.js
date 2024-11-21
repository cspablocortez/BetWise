const balanceLabel = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const amountType = document.getElementById("type");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");
const statesDropdown = document.getElementById("states");

function generateDropdownItems() {
  for (let i = 0; i < statesIncomeData.length; i++) {
    let opt = document.createElement("option");
    opt.value = statesIncomeData[i].state;
    opt.textContent = statesIncomeData[i].state;
    states.appendChild(opt);
  }
}

generateDropdownItems();

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
  
  updateLocation(state) {
    this.balance = state.average.toFixed(2);
    balanceLabel.textContent = this.balance;
  }
}

const account = new Account();
addBtn.addEventListener("click", account.updateBalance.bind(account));

statesDropdown.addEventListener("change", () => { 
  fetch("./states.json") 
    .then(response => response.json()) 
    .then(data => {
      const selectedState = statesDropdown.value;
      const stateData = data.find((dataObj) => dataObj.state === selectedState);
      account.updateLocation(stateData);
    })
    .catch(error => console.error("Error fetching JSON:", error))
})