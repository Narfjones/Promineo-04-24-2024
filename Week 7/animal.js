class Animal{


    constructor(numLegs, sound){
        this.legs = numLegs;
        this.noise = sound;
    }
    
    makeSound(){
        console.log(this.noise);
    }

    howManyLegs(){
        console.log(this.legs)
    }

}

const dog = new Animal(4, 'woof woof');
const cat = new Animal(4, "meow meow");

dog.makeSound();
cat.makeSound();