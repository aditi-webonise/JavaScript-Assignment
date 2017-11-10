

var obj = {name:"nice "};

var greeting = function(b){
    return "Hello!! Have a "+this.name+b;
};

console.log(greeting.call(obj,"day"));

console.log(greeting.apply(obj,["day"]));

var abind=greeting.bind(obj);
console.log(abind("day"));
