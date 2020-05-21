class student
{
    setval(name,marks)
    {
        name=prompt("Enter the name :");
        this.name=name;
        marks=Number(prompt("Enter marks :"));
        this.marks=marks;
    }

    printval()
    {
        console.log("Name :" +this.name);
        console.log("Marks :" +this.marks);
    }
}
ob1=new student();
ob1.setval();
ob1.printval();

ob2=new student();
ob2.setval();
ob2.printval();

ob3=new student();
ob3.setval();
ob3.printval();

ob4=new student();
ob4.setval();
ob4.printval();

var arr=[];
arr.push(ob1);
arr.push(ob2);
arr.push(ob3);
arr.push(ob4);

var m=arr.filter(o=>(o.marks)<50)
//console.log(m);

for(obj of m)
{
    console.log(obj.name);
}
var up=arr.map(ob=>ob.name.toUpperCase())
//console.log(up);
for(obje of up)
{
  console.log(obje);
}


