var user = require('./user');

function run() {
    var tom = new user.User("Tom");
    var tim = new user.User("Tim");

    tom.hello(tim);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
