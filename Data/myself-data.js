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

const assets = "../Assets/img/myself/";
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