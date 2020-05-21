



var arr=[],elem,i,lim,s=0,d=0;
lim=Number(prompt("Enter the limit"));
for(i=0;i<lim;i++)
{
    arr[i]=Number(prompt("Enter the elements"));
    arr.push[i];
}
console.log("The array is");
for(i=0;i<lim;i++)
{
    console.log(arr[i]);
}
elem=Number(prompt("Enter the element"));
console.log("The element to be checked is " + elem);
for(i=0;i<lim;i++)
{
    for(var j=0;j<lim;j++)
    {

      	if(i==j)
            {
             break;
            }
      
     
     
       if((arr[i]+arr[j])==elem)
        {   
            
            
            s=1;
            console.log("The combination is " + arr[i] + "+" + arr[j] );
            
        }
        else if ((arr[i]-arr[j])==elem)
        {    
          d=1; 
          console.log("The combination is "+ arr[i] +"-"+ arr[j] );
        }
        
           
    }
    
}
if(s==0)
{
console.log("No combinations");
}
else if(d==0)
{
console.log("No combinations");
}

