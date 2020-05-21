/*var num=Number(prompt("Enter the range"));
var i=0,sum=0;
while(i<=num)
{
    console.log(i);       //  even no sum
    if((i%2)==0)
    {
        sum=sum+i; 
    } 
    i++;
}
console.log(sum);*/b

var num1=Number(prompt("Enter the start range"));  //even no sum between 2 limits
var num2=Number(prompt("Enter the end range"));
var sum=0;      
while(num1<=num2)
{
    console.log(num1);         
    if((num1%2)==0)
    {
        sum=sum+num1; 
    } 
    num1++;
}
console.log(sum);