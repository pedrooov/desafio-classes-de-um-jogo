class hero{
    constructor(name, type, age, attack){
    this.name = name
    this.type = type
    this.age = age
    this.attack = attack
    }
    
    output(){
        console.log(`o ${this.type} atacou usando ${this.attack}`)
    }
}

let mage = new hero("Alan", "Mago", 18, "Magia")
let warrior = new hero("Victor", "Guerreiro", 30, "Espada")
let monk = new hero("Cleberson", "Monge", 52, "Artes Marciais")
let ninja = new hero("Eduardo","Ninja", 24, "Shuriken")

mage.output()
warrior.output()
monk.output()
ninja.output()
