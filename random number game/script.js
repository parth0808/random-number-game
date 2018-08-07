var g=1;
var attempt=0;
do
{
	var a;
	var b;
	a=Math.floor(Math.random() * 10);
	b=prompt("enter any number b/w 0-9.....") ;
	//b=Math.floor(Math.random()*1000);
	attempt++;
	if (a==b)
	{
		alert("Hurrey!!!! You Won");
		g++;

	}
	else
	{
		alert("sorry the number was"+" "+a);
		alert("try again......");

	}
}
while(g==1);
console.log(attempt);
