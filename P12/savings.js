let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
            return `You withdrew $${amount},\nYou have $${savingsAccount.balance} in your account`;
        } else {
            return `Ups you don't have $${amount} in your account.`;
        }
    },
    printAccountSummary: function printAccountSummary() {
        const msg = `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`
        console.log(msg);
    }
}

savingsAccount.printAccountSummary();

console.log(savingsAccount.withdraw(100));
savingsAccount.printAccountSummary();
console.log(savingsAccount.withdraw(1100));