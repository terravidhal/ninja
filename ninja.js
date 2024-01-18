class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hello my name is ${this.name} !`);
    }
    showStats() {
        console.log(
            `Name : ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`
        );
    }
    drinkSake() {
        this.health += 10;
        console.log(`add +10 Health : ${this.health} `)
    }
}
const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
