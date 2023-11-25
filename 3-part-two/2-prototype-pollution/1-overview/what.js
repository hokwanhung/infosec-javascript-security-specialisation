'use strict';

class A {
    constructor() {
        this.a = 1;
    }

    sayHello() {
        console.log('hello');
    }
}

class B extends A {
    constructor() {
        super();
        this.b = 2;
    }

    sayHi() {
        console.log('Hi');
    }
}

class C extends B {
    constructor() {
        super();
        this.c = 3;
    }
}

const c = new C();
console.log(c); // c { a: 1, b: 2, c: 3}
// Hi - is there a sayHi() directly on c, if no, then is there on c.__proto__, if no then is there on c.__proto__.__proto__,
// and it returns either true or false as the result.
c.sayHi(); 
c.sayHello(); // hello

// When prototype pollutions happen, either it would be on the class prototype or the global prototype.