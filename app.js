let palestrantes = [
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 03 palco #", "popup":"SirRichard"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 02 palco #", "popup":"Ministro"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 01 palco #", "popup":"Fred"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 04 palco #", "popup":"Francesco"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 03 palco #", "popup":"Jorge"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 02 palco #", "popup":"Patricia"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 01 palco #", "popup":"Thiago"
    },
    {
        "name": "Lucas Barbosa", "url": "./man.png", "description": "Desenvolvedor Full Stack", "local":"Vila da Ciência", "section": "Pavilhão 04 palco #", "popup":"Zeiger"
    }
]



var app = document.querySelector('#palestrantes');
app.innerHTML = palestrantes.map(function (infos) {
    return `<li class="${infos.popup}"><img src="${infos.url}" alt="${infos.name}"><strong>${infos.name}</strong><p>${infos.description}</p><span>${infos.local}</span><span>${infos.section}</span></li>`;
}).join('');


var form = document.getElementById('formulario');
var local = document.getElementById('local');
var section = document.getElementById('section');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    function filterGuests(value) {
        if (value.local == local.value && value.section == section.value) {
            return value;
        }
    }

    var guestLocal = palestrantes.filter(filterGuests);
    guestLocal.forEach(local => { 
        app.innerHTML = guestLocal.map(infos => {
            return `<li class="${infos.popup}"><img src="${infos.url}" alt="${infos.name}"><strong>${infos.name}</strong><p>${infos.description}</p><span>${infos.local}</span><span>${infos.section}</span></li>`;
        })
    })

    e.preventDefault();
});