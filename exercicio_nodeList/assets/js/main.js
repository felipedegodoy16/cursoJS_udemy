const divParagrafos = document.querySelector('.paragrafos');
const ps = divParagrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
}