ob={}
var str;
str=prompt("Enter word");
console.log("The word is "+ str);
for(k of str)
{
    if(k in ob)
    {
        console.log("First Recursive char is " + k);
        break;
    }
    else
    {
        ob[k]=1;
    }
}