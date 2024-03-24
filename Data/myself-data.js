const socialData = [
    {
        text: "kellianbre@outlook.fr",
        image: "mail-logo",
        link: "mailto:kellianbre@outlook.fr"
    },
    {
        text: "InkyYuu",
        image: "github-logo",
        link: "https://github.com/InkyYuu"
    },
    {
        text: "inkyyuu",
        image: "discord-logo",
        value: "inkyyuu"
    },
    {
        text: "kellian-bredeau",
        image: "linkedin-logo",
        link: "https://www.linkedin.com/in/kellian-bredeau/"
    }
]

const myDatas = [
    {
        text: "Prénom Nom",
        value: "Kellian Bredeau",
        type: "main-info"
    }, {
        text: "Date de naissance",
        value: "21 Mai 2004",
        type: "main-detail"
    }, {
        text: "Localisation",
        value: "Val-de-Marne (94)",
        type: "main-detail"
    }, {
        text: "Etudes actuelles",
        value: "BUT Informatique",
        type: "main-detail"
    }, {
        text: "Métiers visées",
        title: "Métiers visées",
        value: ["Développeur jeux-vidéo", "Développeur logiciel", "Professeur d'informatique"],
        type: "more-left"
    }, {
        text: "Qualités",
        title: "Qualités",
        value: ["Perfectionniste", "Attentif", "Curieux"],
        type: "more-right"
    }
]

const assets = "Assets/img/myself/";
const socialButtonTemplate = document.getElementById("social-button-template");
const socialButtonContainer = document.querySelector(".social");

socialData.forEach(item => {
    const socialButton = socialButtonTemplate.content.cloneNode(true);
    const linkElement = socialButton.querySelector(".social-button");

    linkElement.style.backgroundImage = `url(${assets}${item.image}.png)`;

    if (item.link) {
        linkElement.href = item.link;
    } else if (item.value) {
        linkElement.setAttribute("onClick", "copyInClipboard(this)")
        linkElement.setAttribute("value", item.text);
    }

    const tooltipElement = socialButton.querySelector(".tooltip");
    tooltipElement.textContent = item.text;

    socialButtonContainer.appendChild(socialButton);
});

const mainInfoDiv = document.querySelector('.main-info');
const mainDetailDivs = document.querySelectorAll('.main-detail');
const moreLeftTitleDiv = document.querySelector('.left-info .title-info');
const moreLeftContentDiv = document.querySelector('.left-info .content-info');
const moreRightTitleDiv = document.querySelector('.right-info .title-info');
const moreRightContentDiv = document.querySelector('.right-info .content-info');

// Remplissage des divs
myDatas.forEach(data => {
    const span = document.createElement('span');
    span.setAttribute('text', data.text);
    span.textContent = data.value;

    switch (data.type) {
        case 'main-info':
            mainInfoDiv.appendChild(span);
            break;
        case 'main-detail':
            mainDetailDivs.forEach(div => {
                const newSpan = span.cloneNode(true);
                div.appendChild(newSpan);
            });
            break;
        case 'more-left':
            moreLeftTitleDiv.setAttribute('text', data.text);

            const titleSpanLeft = document.createElement('span');
            titleSpanLeft.textContent = data.title;
            moreLeftTitleDiv.appendChild(titleSpanLeft);

            const ulLeft = document.createElement('ul');
            data.value.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ulLeft.appendChild(li);
            });

            const contentSpanLeft = document.createElement('span');
            contentSpanLeft.appendChild(ulLeft);
            moreLeftContentDiv.appendChild(contentSpanLeft);
            break;
        case 'more-right':
            moreRightTitleDiv.setAttribute('text', data.text);

            const titleSpanRight = document.createElement('span');
            titleSpanRight.textContent = data.title;
            moreRightTitleDiv.appendChild(titleSpanRight);

            const ulRight = document.createElement('ul');
            data.value.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ulRight.appendChild(li);
            });

            const contentSpanRight = document.createElement('span');
            contentSpanRight.appendChild(ulRight);
            moreRightContentDiv.appendChild(contentSpanRight);
            break;
        default:
            console.error('Type non reconnu :', data.type);
    }
});