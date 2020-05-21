var fact=1;
var num=Number(prompt("Enter the number whose factorial is to be found"));
while(num>0)
{
    fact=num*fact;
    num--;
}
console.log("Factorial is " + fact);
