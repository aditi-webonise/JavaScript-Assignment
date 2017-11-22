var session = {storage: sessionStorage};
var local = {storage: localStorage};



// Set value 
var setValue = function() {
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    this.storage.setItem(key,value);
    alert("key value pair stored!");
}

var setInLocal=setValue.bind(local);
var setInSession=setValue.bind(session);

var cookie = document.getElementById("b9");
cookie.addEventListener("click", function (){

        var myCookie = document.getElementById("key").value;
        var myValue = document.getElementById("value").value;
        console.log(document.cookie = myCookie + "=" + myValue) ;
        alert("Cookie Storage");
    
});

// Clear storage 
var clearStorage = function() {
    var key = document.getElementById('key').value;
    var value = document.getElementById('value').value;
    this.storage.clear();
    alert("Storage cleared!");
}

var clearLocal=clearStorage.bind(local);
var clearSession=clearStorage.bind(session);

// Get all key-value pairs 
var getAll = function() {
    var len = this.storage.length;
       if (len == 0)
           alert("Empty!");
    else
         for(var i = 0; i < len; i++) {
              var mykey = this.storage.key(i);
              var myval = this.storage.getItem(this.storage.key(i)); 
             console.log(mykey , myval);
             
         }
}

var getAllFromLocal=getAll.bind(local);
var getAllFromSession=getAll.bind(session);

// Get value 
var getValue = function() {
   var mykey = document.getElementById('key').value;
   var myvalue = this.storage.getItem(mykey);
   if(!myvalue)
       alert("Key did not match!");
   else
       alert(mykey + " : " + myvalue);
}

var getValueFromLocal=getValue.bind(local);
var getValueFromSession=getValue.bind(session);
