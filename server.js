var user = require('./user/index');

var tom = new user.User("Tom");
var tim = new user.User("Tim");

tom.hello(tim);
