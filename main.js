const wizard = {
    name: 'Edna',
    health: 50,
    heal() {
        return this.health = 100
    }
}

const archer = {
    name: 'brian',
    health: 30,
    
}

console.log('1', archer)
wizard.heal.call(archer)
console.log('2', archer)