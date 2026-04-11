let account = {
    balance: 0,
    transactions: [],

    deposit: function(amount) {
         if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return;
        }
        this.balance += amount;
          this.transactions.push("Deposited: " + amount);
    },

    withdraw: function(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0");
            return;
        }

            if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

                if (this.balance - amount < 500) {
            console.log("Minimum balance 500 must be maintained");
            return;
        }

          if (amount > 10000) {
            console.log("Max withdrawal is 10,000");
            return;
        }

        this.balance -= amount;
        this.transactions.push("Withdrawn: " + amount);
    },
    getBalance: function(){
        return this.balance;
    },

    getTransactions: function(){
        
        return this.transactions;
    },

    elements: (transactions) => {
        for (let i = 0; i <= transactions.length; i++) {
            console.log(transactions[i]);
        }
    }
};

account.deposit(2000);
account.withdraw(500);
account.deposit(1000);

console.log("Balance: "+account.getBalance()); 
console.log(account.getTransactions());
account.elements(account.transactions);

