//Composition means to create method's object in order to simplify the hierarchy


function mixin(target, ...sources) {            //3 ta dot rest operator

    Object.assign(target,...sources)  //3 ta spread operator

}
var canWalk={
    walk:function(){
        console.log('can walk...')
    }
};

var canEat={
    eat:function(){
        console.log('can eat...')
    }

}

var canSwim={
    swim:function(){
        console.log('can swim...')
    }
}
//Object literal
// var person=Object.assign({},canWalk,canEat);
// person.name='Musta'


function Person(name){
    this.name=name
}

mixin(Person.prototype,canWalk,canEat)
var person=new Person('Sakku') 
console.log(person)

function GoldFIsh(name){
    this.name=name
}

mixin(GoldFIsh.prototype,canEat,canSwim)

var fish=new GoldFIsh('jani na goldfish')
console.log(fish)