// 1. Create a BankAccount class with deposit(), withdraw(), and displayBalance(). 
//     Use multiple objects for different accounts.
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

// Object 1
let account1 = new BankAccount(1000);
account1.deposit(500);
account1.withdraw(200);
account1.displayBalance();

// Object 2
let account2 = new BankAccount(2000);
account2.deposit(300);
account2.withdraw(400);
account2.displayBalance();