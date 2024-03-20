console.log('gestisci i tavoli')
const tavoloVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
const tavoloVipNew = tavoloVip.map(function (nomeOspite, i) { return { nomeTavolo: 'Tavolo VIP', nomeOspite, posto: i++ + 1 }; })
console.log(tavoloVipNew)
// const tavoloVip1 = [
//     'Brad Pitt',
//     'Johnny Depp',
//     'Lady Gaga',
//     'Cristiano Ronaldo',
//     'Georgina Rodriguez',
//     'Chiara Ferragni',
//     'Fedez',
//     'George Clooney',
//     'Amal Clooney',
//     'Maneskin'
// ];
// const tavoloVipNuovo = [];
// for (let i = 0; i < tavoloVip.length; i++) {
//     const vipName = tavoloVip[i];
//     const vipObj = {
//         nomeTavolo: 'Tavolo VIP',
//         nomeOspite: vipName,
//         posto: i + 1
//     };
//     tavoloVipNuovo.push(vipObj);
// }
// console.log(tavoloVipNuovo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////TARGHETTE STUDENTI//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('targhette studenti')
const ulDomElement = document.querySelector('.nomi-studenti')
const ulDomElement2 = document.querySelector('.over-70')
const ulDomElement3 = document.querySelector('.over-70-120')

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
        id: 250,
        grades: 48
    },
    {
        name: 'Gaia Borromini',
        id: 145,
        grades: 74
    },
    {
        name: 'Luigi Grimaldello',
        id: 196,
        grades: 68
    },
    {
        name: 'Piero della Francesca',
        id: 102,
        grades: 50
    },
    {
        name: 'Francesca da Polenta',
        id: 120,
        grades: 84
    }
]
const listaNomiStudenti = studenti.map(function (elem) { return {name: elem.name.toLowerCase()} }) 
// console.log(listaNomiStudenti)
ulDomElement.innerHTML = listaNomiStudenti.map(function (elem) { 
    return  `<li>${elem.name}</li>`;
}).join('')

const over70 = studenti.filter(function (elem) { return elem.grades > 70 })
// console.log(over70)
ulDomElement2.innerHTML = over70.map(function(over70){
    return `<li>${over70.name}</li>`
}).join('')
const over70GradesAnd120OfId = over70.filter(function (elem) { return elem.id > 120})
ulDomElement3.innerHTML = over70GradesAnd120OfId.map(function(over70){
    return `<li>${over70.name}</li>`
}).join('')
// console.log(over70GradesAnd120OfId)

// let nomiStudenti = []
// let currentStudent = 0
// for (let i = 0; i < studenti.length; i++) {
//     currentStudent = studenti[i]
//     console.log(currentStudent)
//     nomiStudenti.push(currentStudent.name)
// }
// console.log(nomiStudenti)
// for (let i = 0; i < nomiStudenti.length; i++) {
//     const nomeStudente = nomiStudenti[i]
//     ulDomElement.innerHTML += `<li>${nomiStudenti[i].toLowerCase()}</li>`
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////BICICLETTE//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bicycles = 
[
    {
        name: 'mountain-bike',
        weight: 35
    },
    {
        name: 'ARGON 18',
        weight: 15
    },
    {
        name: 'BERGAMONT',
        weight: 18
    },
    {
        name: 'BMC',
        weight: 20
    }
]
console.log(bicycles)
let lightestBicycle = {
    weight: 0
}

bicycles.forEach(function (element){
    if(element.weight > lightestBicycle.weight){
        lightestBicycle = element.weight
       
    }
})
console.log(lightestBicycle)


let bikes = []

for(let i = 0; i < 10; i++){
    bikes[i] = { name: `bici${[i + 1]}` , weight: parseInt(Math.random() * 10) + 30}
}

let lightestbike = bikes[0]



for(let i = 0; i < bikes.length; i++){
    const currentElement = bikes[i]
    if(currentElement.weight < lightestbike.weight){
        lightestbike = currentElement
    }
}
console.log(bikes)
console.log(lightestbike)

const {name, weight} = lightestbike //destre
console.log(`La bici che pesa di meno è ${name} e ha un peso di ${weight} kg`)
