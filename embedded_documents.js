// db.pokemon.updateOne(
//     { _id: 1 },
//     {
//         $set: {
//             types: [
//                 {
//                     name: 'Grass',
//                     bonus_points: 45,
//                     weakness: "Fire",
//                 },
//                 {
//                     name: "Poison",
//                     bonus_points: 50,
//                     weakness: "Ground"
//                 },
//                 {
//                     name: "Rock",
//                     bonus_points: 12,
//                     weakness: "Fighter"
//                 }
//             ],
//         }
//     }
// )





// BUSCANDO POR UM DOCUMENTO DENTRO DE UM ARRAY
// db.pokemon.updateOne(
//     {_id: 1, "types.name": "Rock"},
//     {
//         $set: {
//             "types.$.bonus_points": 30
//         }
//     }
// )


// DELETANDO UM ELEMENTO DE UM ARRAY
// db.pokemon.updateOne(
//     {_id: 1},
//     {
//         $pull: {
//             types: {'bonuns_points': 30}
//         }
//     }
// )


    db.pokemon.updateOne(
        {_id: 1},
        {
            $push: {
                types: {
                    $each: [],
                    $sort: {"bonus_points": -1}
                }
            }
        }
    )