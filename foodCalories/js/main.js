let foodCalories = {
    Liquid: {
        Sodas: {
            CocaCola: 182,
            Sprite: 192
        },
        Dairy: {
            Milk: 103,
            HalfandHalf: 20
        }
    },
    Solids: { 
        Cookies: {
            ChipsaHoy: 160,
            NutterButter: 270
        },
        Entrees: {
            Meatloaf: 149,
            HotDog: 151
        }
    }
}

console.log(foodCalories);
console.log(foodCalories.Solids.Entrees);
console.log(foodCalories.Solids.Entrees.Meatloaf);
console.log(foodCalories.Solids.Entrees.HotDog)

// Write an object named foodCalories that organizes the calories per serving for different types of food. I would expect 
// foodCalories.Liquid.Sodas.CocaCola to yield 182. 
// Liquid 
// Sodas 
// Coca Cola: 182 
// Sprite: 192 

// Dairy 
// milk: 103 
// half and half: 20 

// Solids 
// Cookies Chips a Hoy: 160 
// Nutter Butter: 270 

// Entrees 
// Meatloaf: 149 
// Hot Dogs: 151