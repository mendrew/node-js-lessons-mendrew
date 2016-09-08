var User = require('./user');

function run() {
    var tom = new User("Tom");
    var tim = new User("Tim");

    tom.hello(tim);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
