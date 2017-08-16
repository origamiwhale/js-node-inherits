var EventEmitter = require('events');
var util = require('util');

// First let's create function constructor
function Rectangle(a, b) {
    this.a = a;
    this.b = b;
}

// Using util.inherits wil overwrite prototype chain set up with .prototype
util.inherits(Rectangle, EventEmitter); // From now on, all objects created with Rectangle ctor will implement EventEmitter

// Add another method - AFTER utils.inherits
Rectangle.prototype.print_area = function () {
    console.log('Rectangle area: ' + this.a * this.b);
    this.emit('area_printed');
}

var rect = new Rectangle(2, 3);

// Add event listener (callback)
rect.on('area_printed', function(){
    console.log('Rectangle area has been printed.');
})

// Call method, which will emit an 'area_printed' event
rect.print_area();

