class Bank
{
    constructor(name,accNo,bankName,bal)
    {
        this.name=name;
        this.accNo=accNo;
        this.bankName=bankName;
        this.bal=bal;
    }
    print()
    {   
        console.log("WELCOME to online Banking");
        console.log("Name :" + this.name);
        console.log("Account No. :" + this.accNo);
        console.log("Bank Name :" + this.bankName);
        
    }
    BalanceCheck()
    {
        
        console.log("Current balance : INR "+ this.bal);
    }
    Deposit()
    {
        var dep;
        dep=Number(prompt("Enter amount to be deposited"));
        console.log("Amount deposited : INR "+ dep);
        this.bal+=dep;
        console.log("New balance : INR " + this.bal);
    }
    Withdrawal()
    {
        var wth;
        wth=Number(prompt("Enter the amount to be withdrawn"));
        console.log("Amount to be withdrawn : INR "+ wth);
        if(this.bal<wth)
        {
            alert("Insuffient balance");
            //console.log("Insuffient balance");
        }
        else
        {
        console.log("The amount withdrawn is : INR " + wth);
        this.bal-=wth;
        console.log("New balance : INR "+ this.bal);
        }
    }

}
var ch;
ob1= new Bank("Namratha", 44, "SBI", 76000);
ob1.print();
console.log("Select your choice from below");
console.log("1. Balance check");
console.log("2. Deposit");
console.log("3. Withdraw");
ch=Number(prompt("Enter your choice"));
if(ch==1)
{
    ob1.BalanceCheck();
}
if(ch==2)
{
    ob1.Deposit();
}
if(ch==3)
{
    ob1.Withdrawal();
}

