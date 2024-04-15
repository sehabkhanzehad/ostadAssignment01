class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    // Disposit
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    // Withdraw
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }
    // Balance Check
    getBalance() {
        return this.balance;
    }
    // Account Information
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two BankAccount
const account1 = new BankAccount(25252501, "Zehad", 2000);
const account2 = new BankAccount(25252502, "Alvis", 5000);

// Account information for account1
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

console.log("\n");

// Account information for account2
account2.deposit(500);
account2.withdraw(1500);
account2.displayAccountInfo();
