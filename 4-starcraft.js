'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

const starCraft = [
    {
        name: 'firebat',
        health: 50,
        armor: 1,
        attack: {
            air: 0,
            ground: 8,
        },
        attack_range: 2,
        sight: 7,
        unit_type: 'ground'
    },
    {
        name: 'marine',
        health: 40,
        armor: 0,
        attack: {
            air: 6,
            ground: 6,
        },
        attack_range: 4,
        sight: 6,
        unit_type: 'ground'
    },
    {
        firebat: [
            {
                name: 'firebat',
                health: 50,
                armor: 1,
                attack: {
                    air: 0,
                    ground: 8,
                },
                attack_range: 2,
                sight: 7,
                unit_type: 'ground'
            }
        ],
        marine: [
            {
                name: 'marine',
                health: 40,
                armor: 0,
                attack: {
                    air: 6,
                    ground: 6,
                },
                attack_range: 4,
                sight: 6,
                unit_type: 'ground'
            }
        ]
    }
]

const stats_a = starCraft.map(item => {
    const container = {}
    container.name = item.name
    container.health = item.health
    return container
})
const stats_b = starCraft.map(item => {
    const container = {}
    container[2] = item.name
    container[2] = item.health
    return container
    // Try to map() this function with the new array
})

console.log(stats_a, stats_b)

// Confronting Units
let soldier_a = starCraft[0]
let soldier_b = starCraft[1]
let start_battle = true

function groundBattle(groundUnitA, groundUnitB) {
    // Try to map() with the new array values in the object.
    if (groundUnitA.sight > groundUnitB.sight) {
        console.log(`Stage #2: ${soldier_a.unit_type.toUpperCase()} and ${soldier_b.unit_type.toUpperCase()} battle type.`)
        while (true) {
            if (groundUnitA.health <= 0) {
                console.log(`${groundUnitB.name.toUpperCase()} with ${groundUnitB.health} health points is the winner.`)
                console.log(`${groundUnitA.name.toUpperCase()} with ${groundUnitA.health} remaining health points is the loser.`)
                break
            } else if (groundUnitB.health <= 0) {
                console.log(`Stage #3: Winner is ${groundUnitA.name.toUpperCase()} with ${groundUnitA.health} remaining health points.`)
                console.log(`Stage #3: Loser is ${groundUnitB.name.toUpperCase()} with ${groundUnitB.health} remaining health points.`)
                break
            } else {
                console.log(groundUnitA)
                console.log(`Fighting! ${groundUnitA.name.toUpperCase()} health is ${groundUnitA.health} and ${groundUnitB.name.toUpperCase()} health is ${groundUnitB.health} points.`)
            }
            groundUnitA.health = groundUnitA.health - groundUnitB.attack.ground
            groundUnitB.health = groundUnitB.health - groundUnitA.attack.ground
            // Try with an independent map() instruction
        }
    }
    if (groundUnitB.sight > groundUnitA.sight) {}
    if (groundUnitA.sight === groundUnitB.sight) {}
}

function battleType() {
    if (soldier_a.unit_type && soldier_b.unit_type === 'ground') {
        console.log(`Stage #1: ${soldier_a.name.toUpperCase()} and ${soldier_b.name.toUpperCase()} units selected.`)
        groundBattle(soldier_a, soldier_b)
    } else {
        console.log('No soldiers available.')
    }
}

if (start_battle) {
    battleType()
} else {
    console.log('No battle.')
}
// Simulate the units selected by the user
// Create a battle array to map the battle values
// Arrow functions to execute battle actions