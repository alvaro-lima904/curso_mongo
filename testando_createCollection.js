db.createCollection("carros",  {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["model", "year"],
            properties: {
                model: {
                    bsonType: "string",
                },
                madeBy: {
                    bsonType: "string",
                    minLength: 3 
                },
                year: {
                    bsonType: "int",
                    minimum: 1980,
                    maximum: 2025
                }
            }
        }
    }
})