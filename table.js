
//adding actual salary to first row of table

const myInput = document.getElementById('ssalary');
const myOutput = document.getElementById('salaryinp');
  function salarydisplay(){
    myOutput.innerHTML = myInput.innerHTML;
    document.getElementById('totalsalary').innerHTML=myInput.innerHTML;
  }



// adding expenses to the table
  function insRow()
{
var x=document.getElementById('myTable').insertRow(document.getElementById('myTable').rows.length-1);
var y= x.insertCell(0);
var c= x.insertCell(1);
var z= x.insertCell(2);
y.innerHTML=document.getElementById("cell1").value;
c.innerHTML=":";
//m="&#8377";
var a=document.getElementById("cell2").value;
//z.innerHTML= m.concat(' '+a );
z.innerHTML= a;


// calculating balance amount

var table=document.getElementById('myTable'), sumVal=0;
var n=table.rows.length;
var actualsalary= document.getElementById('salaryinp').innerHTML;


 for (var i=1; i<n-1; i++){
  sumVal= sumVal+ parseInt(table.rows[i].cells[2].innerHTML);
  
 }
 var final= actualsalary-sumVal;
document.getElementById('totalsalary').innerHTML=final;
}
















  