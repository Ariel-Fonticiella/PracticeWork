function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    // Create a new property on the object, make sure that property is an array
    this.events[type].push(listener);
    // then start adding functions into that array.
};

Emitter.prototype.emit = function(type) {
    // if I have the events property on this object, then i'll take the property
    if(this.events[type]){

      // then i'll take that property, which will be an array, and loop over the array, and then execute it.
       this.events[type].forEach(function(listener) {
            listenter();
       });
    }
};

// So the function constructor, Emitter, will come back from the require function so I can create as many emitters as I want.
module.exports = Emitter;
