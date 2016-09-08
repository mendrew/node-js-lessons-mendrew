function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

var tom = new User("Tom");
var tim = new User("Tim");

tom.hello(tim);


