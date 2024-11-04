db.createCollection("pessoas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nome", "idade"],
            properties: {
                nome: {
                    bsonType: "string",
                    minLength: 3
                },
                gostaDe: {
                    bsonType: "object",

                },
                idade: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 100
                }
            }
        }
    }
})