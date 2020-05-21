var arr=[] ; var no, i;
var lim=Number(prompt("Enter the number of elements"));
console.log("The limit is " + lim);
console.log("Enter elements");
for(i=0;i<lim;i++)
{     
    arr[i]=Number(prompt("Enter element"));
                                                                   //read and print array using for loop
    arr.push(i);
    console.log(arr[i]);
}
console.log("The elements are :");
for(i=0;i<lim;i++)
{

    console.log(arr[i]);
}