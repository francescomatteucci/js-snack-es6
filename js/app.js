console.log('gestisci i tavoli')

const tavoloVip = [
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Brad Pitt',
        posto: 1
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Johnny Depp',
        posto: 2
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Lady Gaga',
        posto: 3
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Cristiano Ronaldo',
        posto: 4
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Georgina Rodriguez',
        posto: 5
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Chiara Ferragni',
        posto: 6
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Fedez',
        posto: 7
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'George Clooney',
        posto: 8
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Amal Clooney',
        posto: 9
    },
    {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: 'Maneskin',
        posto: 10
    }
]
console.log(tavoloVip)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        //targhette studenti//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const studenti = [
    {
        name: 'Marco della Rovere',
        id: 213,
        grades: 78
    },
    {
        name: 'Paola Cortellessa',
        id: 110,
        grades: 96 
    },
    {
        name: 'Andrea Mantegna',
        id:250,
        grades:48
    },
    {
        name: 'Gaia Borromini',
        id:145,
        grades:74 
    },
    {
        name: 'Luigi Grimaldello',
        id:196,
        grades: 68 
    },
    {
        name: 'Piero della Francesca',
        id:102,
        grades:50 
    },
    {
        name: 'Francesca da Polenta',
        id:120,
        grades:84 
    }
]
console.log(studenti)
let nomiStudenti = []
let currentStudent = 0

const ulDomElement = document.querySelector('.nomi-studenti')

for(let i = 0; i < studenti.length; i++){
    currentStudent = studenti[i]
    console.log(currentStudent)
    nomiStudenti.push(currentStudent.name)
    
}
console.log(nomiStudenti)
for(let i = 0; i < nomiStudenti.length; i++){
    const nomeStudente = nomiStudenti[i]
    ulDomElement.innerHTML += `<li>${nomiStudenti[i].toLowerCase()}</li>`
}


