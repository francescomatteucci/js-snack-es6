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
//targhette studenti//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('targhette studenti')
const ulDomElement = document.querySelector('.nomi-studenti')
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
console.log(listaNomiStudenti)
ulDomElement.innerHTML = listaNomiStudenti.map(function (elem) { 
    return  `<li>${elem.name}</li>`;
}).join('')


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
