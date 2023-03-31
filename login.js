
function validate(){

    var eid = document.getElementById("eid").value;
    var pass = document.getElementById("pass").value;
    var alert = document.getElementById("label")

    if(eid == "ilakya@gmail.com" && pass=="111"){

        document.getElementById('label').innerHTML="Login Success";
        alert.style.color="green";
        window.setTimeout(function(){
            window.location="main.html";
        }, 8000);
    }
    
    else{
        document.getElementById('label').innerHTML="Invalid Credentials";
        alert.style.color="red";
    }
}






function keyupfun() {
    let input = document.getElementById('inp').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('s');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";  
                           
        }
    }
    return false; 
}










  