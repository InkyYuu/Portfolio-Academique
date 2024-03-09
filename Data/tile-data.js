const tilesData = [
    // Four type : 8 small, 3 large, 3 tall, 1 big
    {
        text: "HTML",
        image: "html-5",
        link: "#",
        type: "small",
        row: "1",
        column: "1"
    },{
        text: "CSS",
        image: "css-3",
        link: "#",
        type: "small",
        row: "1",
        column: "3"
    },{
        text: "JS",
        image: "js",
        link: "#",
        type: "small",
        row: "1",
        column: "6"
    },{
        text: "PHP",
        image: "php",
        link: "#",
        type: "small",
        row: "2",
        column: "1"
    },{
        text: "Java",
        image: "java",
        link: "#",
        type: "small",
        row: "2",
        column: "5"
    },{
        text: "XML",
        image: "xml",
        link: "#",
        type: "small",
        row: "4",
        column: "1"
    },{
        text: "Jira",
        image: "jira",
        link: "#",
        type: "small",
        row: "4",
        column: "4"
    },{
        text: "Mon CV",
        image: "cv",
        link: "../Assets/files/cv-bredeau-kellian.pdf",
        type: "small",
        row: "4",
        column: "6"
    },{
        text: "Localisation",
        image: "epingle",
        description: "Champs-sur-Marne",
        link: "#",
        type: "large",
        row: "1",
        column: "4 / 6"
    },{
        text: "Activité",
        image: "entreprise",
        description: "Création de site pour dictionnaire en ligne",
        link: "#",
        type: "large",
        row: "3",
        column: "1 / 3"
    },{
        text: "Taille",
        image: "groupe",
        description: "PME (~ 60 employés)",
        link: "#",
        type: "large",
        row: "4",
        column: "2 / 4"
    },{
        text: "Programmation",
        image: "programmation",
        description: ["Front End", "Back End"],
        link: "#",
        type: "tall",
        row: "1 / 3",
        column: "2"
    },{
        text: "Collaboration",
        image: "collaboration",
        description: ["Réunion", "Agile"],
        link: "#",
        type: "tall",
        row: "2 / 4",
        column: "6"
    },{
        text: "Gestion",
        image: "bdd",
        description: ["BDD"],
        link: "#",
        type: "tall",
        row: "3 / 5",
        column: "5"
    },{
        text: "IDM Group",
        image: "idm-icon",
        description: "Alternance en 2ème et 3ème année de BUT Informatique",
        link: "https://www.idmgroup.com",
        type: "big",
        row: "2 / 4",
        column: "3 / 5"
    }
]

const tileSmallTemplate = document.getElementById('small-tile-template');
const tileTallTemplate = document.getElementById('tall-tile-template');
const tileLargeTemplate = document.getElementById('large-tile-template');
const tileBigTemplate = document.getElementById('big-tile-template');

// Remplissage des tuiles en fonction du type
tilesData.forEach(tile => {
    let template;
    let assets = "../Assets/img/tile/"
    switch (tile.type) {
        case 'small':
            template = tileSmallTemplate.content.cloneNode(true);
            template.querySelector('.tile-icon').src = assets + tile.image + '.png';
            break;
        case 'tall':
            template = tileTallTemplate.content.cloneNode(true);
            template.querySelector('.tile-icon').src = assets + tile.image + '.png';
            const descriptionList = template.querySelector('.bottom .tile-description');
            tile.description.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                descriptionList.appendChild(listItem);
            });
            break;
        case 'large':
            template = tileLargeTemplate.content.cloneNode(true);
            template.querySelector('.tile-description').textContent = tile.description;
            template.querySelector('.tile').style.backgroundImage = `url(${assets}${tile.image}.png)`;
            break;
        case 'big':
            template = tileBigTemplate.content.cloneNode(true);
            template.querySelector('.tile-icon').src = assets + tile.image + '.png';
            template.querySelector('.tile-description').textContent = tile.description;
            break;
        default:
            console.error('Unknown tile type: ' + tile.type);
    }

    template.querySelector('.tile-text').textContent = tile.text;

    if(tile.link !== '#') {
        template.querySelector('.link-tile').setAttribute('href', tile.link);
        template.querySelector('a').classList.add('link-activated');
    }

    template.querySelector('.link-tile').style.gridColumn = tile.column;
    template.querySelector('.link-tile').style.gridRow = tile.row;

    document.querySelector('.all-tiles').appendChild(template);
});
