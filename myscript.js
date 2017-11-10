function myFunction() {
        var inpObj = document.getElementById("b1");
        if (inpObj.checkValidity() == false) {
            document.getElementById("b1").innerHTML = inpObj.validationMessage;
        }
    }

var button1 = document.getElementById("b1");
button1.addEventListener("click", function (){

    
    if (document.getElementById('radio1').checked){
         var obj = {key:document.getElementById("key").value};
         var abc = function(b){
            return localStorage.setItem(obj.key,b);
        }
        alert("Local Storage");
        abc.call(obj.key,document.getElementById("value").value);
    }   
    else if(document.getElementById('radio2').checked){
        myFunction();
        sessionStorage.setItem(document.getElementById("key").value,document.getElementById("value").value);
        alert("Session Storage");
    }
    else if(document.getElementById('radio3').checked){
        myFunction();
        var myCookie = document.getElementById("key").value;
        var myValue = document.getElementById("value").value;
        console.log(document.cookie = myCookie + "=" + myValue) ;
        alert("Cookie Storage");
    }
});

var button2 = document.getElementById("b2");
var myvalue;
button2.addEventListener("click", function (){
   if (document.getElementById('radio1').checked){
        myvalue = localStorage.getItem(document.getElementById("key").value);
        alert("Local Storage: Value "+myvalue);
    }
    else if(document.getElementById('radio2').checked){
        myvalue = sessionStorage.getItem(document.getElementById("key").value);
        alert("Session Storage: Value "+myvalue);
    }
 });

var button5 = document.getElementById("b5");
button5.addEventListener("click", function (){
    if (document.getElementById('radio1').checked){
        localStorage.clear();
        alert("Clear on local Storage");
    }
    else if(document.getElementById('radio2').checked){
        sessionStorage.clear();
        alert("Clear on session Storage");
    }  
});

var button4 = document.getElementById("b4");
button4.addEventListener("click", function (){
    if (document.getElementById('radio1').checked){
        localStorage.removeItem(document.getElementById("key").value);
        alert("Removed from Local Storage");
    }
    else if(document.getElementById('radio2').checked){
        sessionStorage.removeItem(document.getElementById("key").value);
        alert("Removed from Session Storage");
    } 
});

var button3 = document.getElementById("b3");
button3.addEventListener("click", function (){
    if (document.getElementById('radio1').checked){
		for(var i=0; i<localStorage.length; i++){
        	console.log(localStorage.key(i),localStorage.getItem(localStorage.key(i)));
    	}
	}
    else if(document.getElementById('radio2').checked){
        for(var i=0; i<sessionStorage.length; i++){
        	console.log(sessionStorage.key(i),sessionStorage.getItem(sessionStorage.key(i)));
    	}
    }
});
