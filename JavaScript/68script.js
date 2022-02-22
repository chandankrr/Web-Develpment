// practice class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("eating grass");
    }
}

const rabit = new Animal("tutu", 2);

console.log(rabit);
rabit.eat();

// inheritance && extend keyword
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    eat() {
        console.log("eating chicken");
    }

    run() {
        return `${this.name} is running at ${this.speed}kmph`;
    }
}

const tommy = new Dog("tommy", 3, 30);
console.log(tommy);
tommy.eat();
console.log(tommy.run());
