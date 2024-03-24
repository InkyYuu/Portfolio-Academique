const creditsData = [
    {
        author: "Flaticon",
        sources: [
            {
                link: "https://www.flaticon.com/fr/icones-gratuites/plus",
                title: "plus icônes",
                img: "navbar/plus.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/la-personne",
                title: "la personne icônes",
                img: "navbar/utilisateur.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/emoji-de-badge-verifie",
                title: "compétences icônes",
                img: "navbar/competence.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/lobtention-du-diplome",
                title: "l'obtention du diplôme icônes",
                img: "navbar/diplome.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/travail",
                title: "travail icônes",
                img: "navbar/sac.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/lien",
                title: "lien icônes",
                img: "navbar/lien.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/double-chevron",
                title: "double chevron icônes",
                img: "project/chevron-double.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/html",
                title: "html icônes",
                img: "tile/html-5.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/css",
                title: "css icônes",
                img: "tile/css-3.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/javascript",
                title: "javascript icônes",
                img: "tile/js.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/php",
                title: "php icônes",
                img: "tile/php.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/java",
                title: "java icônes",
                img: "tile/java.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/xml",
                title: "xml icônes",
                img: "tile/xml.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/jira",
                title: "jira icônes",
                img: "tile/jira.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/emplacement",
                title: "emplacement icônes",
                img: "tile/epingle.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/entreprise",
                title: "entreprise icônes",
                img: "tile/entreprise.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/utilisateur",
                title: "utilisateur icônes",
                img: "tile/groupe.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/collaboration",
                title: "collaboration icônes",
                img: "tile/collaboration.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/big-data",
                title: "big data icônes",
                img: "tile/bdd.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/cv",
                title: "cv icônes",
                img: "tile/cv.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/programmation",
                title: "programmation icônes",
                img: "tile/programmation.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/courrier",
                title: "courrier icônes",
                img: "myself/mail-logo.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/github",
                title: "github icônes",
                img: "myself/github-logo.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/discorde",
                title: "discord icônes",
                img: "myself/discord-logo.png"
            }, {
                link: "https://www.flaticon.com/fr/icones-gratuites/linkedin",
                title: "linkedin icônes",
                img: "myself/linkedin-logo.png"
            }
        ]
    },{
        author: "Helena Chevalier",
        sources: [
            {
                link: "mailto:lna.chevalier@gmail.com",
                title: "PMP Logo",
                img: "project/pmp/pmp-logo.png"
            }, {
                link: "mailto:lna.chevalier@gmail.com",
                title: "LA Logo",
                img: "project/la/la-logo.png"
            }
        ]
    },{
        author: "IDM Group",
        sources: [
            {
                link: "https://www.idmgroup.com",
                title: "IDM Group logo",
                img: "tile/idm-logo.png"
            }
        ]
    }
]

const assetsFolder = "../Assets/img/"

const creditTemplate = document.getElementById('credit-template');
const imgCreditTemplate = document.getElementById('img-credit-template');
const container = document.querySelector('.all-credits');

let id = 1;
creditsData.forEach(credit => {
    const creditElement = creditTemplate.content.cloneNode(true);
    creditElement.querySelector('.creator').textContent = credit.author;

    const diaporama = creditElement.querySelector('.diaporama');
    diaporama.setAttribute('data-id', id);
    id += 1;

    credit.sources.forEach(source => {
        const imgCreditElement = imgCreditTemplate.content.cloneNode(true);
        const link = imgCreditElement.querySelector('.link-diaporama');
        link.setAttribute('href', source.link);
        link.setAttribute('text', source.title);
        const img = imgCreditElement.querySelector('.img-diaporama');
        img.setAttribute('src', assetsFolder + source.img);
        diaporama.appendChild(imgCreditElement);
    });

    container.appendChild(creditElement);

    const slideshows = document.querySelectorAll('.diaporama');

    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('.img-diaporama');
        let currentImageIndex = 0;
        const interval = 5000;

        function nextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        images[currentImageIndex].classList.add('active');

        setInterval(nextImage, interval);
    });
});