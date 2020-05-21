var arr=[], lim,no,i,j ;
lim=Number(prompt("Enter the limit of Array"));
console.log("The limit of Array is "+ lim);
for(i=0;i<lim;i++)
{
    no=Number(prompt("Enter the array elements"));
    arr.push(no);
    console.log(no);
}
console.log("The Array is :");
for(i of arr)
{
    console.log(i);
}
while(i<lim)
{
    for(j=i+1;j<lim;j++)
    {
        
        if(a[i]<a[j])
        {
            if((a[j]-a[i])>1)    
            {
                console.log("The missing element is :" + a[i+1]);
            }
        }
        if (a[i]>a[j])
        {
            if((a[i]-a[j])>1)    
            {
                console.log("The missing element is :" + a[j+1]);
            }

        }
        if (a[i]==a[j])
        {
            console.log("No missing element");
        }
    }
    i++;
}
