class Employee
{
    constructor(name,ID,salary)
    {
        this.name=name;
        this.ID=ID;
        this.salary=salary;
    }

    print()
    {
        console.log("Name :" + this.name);
        console.log("ID :" + this.ID);
        console.log("Salary :" + this.salary);
    }

}
ob1=new Employee("Sruthy",960,90000);
ob2=new Employee("Parvathy",868, 67000);
ob3=new Employee("Namratha",685,68000);
var arr=[];
arr.push(ob1);
arr.push(ob2);
arr.push(ob3);
var temp;
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i].salary>arr[j].salary)
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}