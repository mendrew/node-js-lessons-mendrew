var user = require('./user');

var tom = new user.User("Tom");
var tim = new user.User("Tim");

tom.hello(tim);
