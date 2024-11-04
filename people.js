function populatePeople() {
    const firstsNames = [
        'Alvaro',
        'Belen',
        'Carlos',
        'David',
        'Elena',
        'Fernando',
        'Gloria',
        'Hugo',
        'Ines',
        'Javier',
        'Karla',
        'Luis',
        'Maria',
        'Nacho',
        'Olga',
        'Miguel',
        'Rodrigo',
        'Sara',
        'Teresa',
        'Ursula',    
    ]

    const lastNames = [
        'Carvalho',
        'Silva',
        'Garcia',
        'Perez',
        'Gonzalez',
        'Rodriguez',
        'Ferreira',
        'Souza',
        'Oliveira',
        'Santos',
        'Batista',
        'Martins',
        'Almeida',
        'Fernandes',
        'Ribeiro',
        'Costa',
        'Pereira',
        'Marques',
        'Alves',
        'Monteiro',
        'Andrade'
    ]

    function _randomInt(start = 0, end = 100) {
        return Math.floor(Math.random() * (end - start) + start)
    }

    const nameDataBase = db.getSiblingDB('names')

    let _id = 0;
    while (_id++ < 1e8) {
        const name = 
            firstsNames[_randomInt(0, firstsNames.length - 1)] + 
            ' ' + 
            lastNames[_randomInt(0, lastNames.length - 1)]
        nameDataBase.names.insertOne({
            _id,
            name: name,
            age: _randomInt(18, 100),
            salary: _randomInt(140, 210)
        });
        if (_id % 1e4 === 0) print(`Inserimos ${_id} documentos...`)
    }
    print(`Prontinho! 100 MILHÕES de documentos inseridos!`)
}