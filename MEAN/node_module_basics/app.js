var my_module = require('./my_module');
my_module.greet();
my_module.add(5,6);

//notice the extra invocation parenthesis because we are importing object constructors:
var my_objects = require('./my_objects')();
my_objects.greet();
my_objects.add(5,6);

