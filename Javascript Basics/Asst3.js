var arr=[] ; var no, i,sum=0,odd=[],even=[];
var lim=Number(prompt("Enter the number of elements"));
console.log("The limit is " + lim);
console.log("Enter elements");
for(i=0;i<lim;i++)
{     
    arr[i]=Number(prompt("Enter element"));
                        //read and print array using for loop,findsumofarrayelements,divide array into odd and even arrays 
    arr.push(i);  
    console.log(arr[i]);
    sum=sum+arr[i];
}
console.log("The elements are :");
for(i=0;i<lim;i++)
{ 

    console.log(arr[i]);
}
console.log("The sum is " + sum);
for(i=0;i<lim;i++)
{
    if((arr[i]%2)==0)
    {
        even[i]=arr[i];
    }
    else
    {
        odd[i]=arr[i];
    }
}
console.log("The even array is :");
for(i=0;i<even.length;i++)
{
    console.log(even[i]);
}
console.log("The odd array is :");
for(i=0;i<odd.length;i++)
{
    console.log(odd[i]);
}
