if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// function formatDay(day) {
//     switch(day) {
//         case 0:
//             return 'domingo';
//         case 1:
//             return 'segunda-feira';
//         case 2:
//             return 'terça-feira';
//         case 3:
//             return 'quarta-feira';
//         case 4:
//             return 'quinta-feira';
//         case 5:
//             return 'sexta-feira';
//         case 6:
//             return 'sábado';
//         default:
//             return '';
//     }
// }

// function formatMonth(month) {
//     switch(month) {
//         case 0:
//             return 'janeiro';
//         case 1:
//             return 'fevereiro';
//         case 2:
//             return 'março';
//         case 3:
//             return 'abril';
//         case 4:
//             return 'maio';
//         case 5:
//             return 'junho';
//         case 6:
//             return 'julho';
//         case 7:
//             return 'agosto';
//         case 8:
//             return 'setembro';
//         case 9:
//             return 'outubro';
//         case 10:
//             return 'novembro';
//         case 11:
//             return 'dezembro';
//         default:
//             return '';
//     }
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function formatData(data) {
//     const dayExtense = formatDay(data.getDay());
//     const day = data.getDate();
//     const month = formatMonth(data.getMonth());
//     const year = data.getFullYear();
//     const hours = zeroAEsquerda(data.getHours());
//     const minutes = zeroAEsquerda(data.getMinutes());

//     return `${dayExtense}, ${day} de ${month} de ${year} ${hours}:${minutes}`;
// }

function ready() {
    const data = new Date();
    const h1 = document.querySelector('h1');
    
    // const format = formatData(data);
    // h1.innerHTML = format;

    const opcoes = {
        dateStyle: 'full',
        timeStyle: 'short'
    };

    h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

    // h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}