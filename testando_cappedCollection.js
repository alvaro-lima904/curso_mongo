db.createCollection("logs", {
    capped: true,
    size: 20248,
    max: 5
})