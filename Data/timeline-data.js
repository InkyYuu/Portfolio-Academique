const timelineData = [
    {
        name: "Éducation",
        timelineBloc: [
            {
                date: "2019 - 2022",
                title: "Lycée Theilard de Chardin",
                description: "Spécialités Mathématique | NSI | SVT",
                link: "https://tdechardin.org"
            },
            {
                date: "Février 2022",
                title: "Certification PIX",
                description: "Obtenue avec 395 points pix",
                link: "Assets/files/attestation-pix-20220218.pdf"
            },
            {
                date: "Juin 2022",
                title: "Baccalauréat général",
                description: "Spécialités Mathématique | NSI - Mention Très bien",
                link: "#"
            },
            {
                date: "2022 - Present",
                title: "Université Gustave Eiffel",
                description: "Bachelor Universitaire de Technologie",
                link: "https://www.univ-gustave-eiffel.fr"
            }
        ]
    },
    {
        name: "Experience",
        timelineBloc: [
            {
                date: "Novembre 2018",
                title: "Stage d'observation",
                description: "Stage d'observation dans le cabinet d'architecte \"A comme Architecte\"",
                link: "https://fr.linkedin.com/company/a-comme-architectes"
            },
            {
                date: "2023 - Present",
                title: "Alternance",
                description: "Alternance tant que développeur full stack dans la société \"IDM Group\"",
                link: "https://www.idmgroup.com"
            }
        ]
    }
]

const timelineTemplate = document.getElementById('timeline-template');
const timelineBlocTemplate = document.getElementById('timeline-bloc-template');

timelineData.forEach(data => {
    const timeline = timelineTemplate.content.cloneNode(true);

    timeline.querySelector('.timeline-title').textContent = data.name;
    const timelineColumn = timeline.querySelector('.all-timelines-bloc');

    data.timelineBloc.forEach(bloc => {
        const blocElement = timelineBlocTemplate.content.cloneNode(true);
        if (bloc.link !== '#') {
            blocElement.querySelector('a').setAttribute('href', bloc.link);
            blocElement.querySelector('a').classList.add('link-activated');
        }
        blocElement.querySelector('h5').textContent = bloc.date;
        blocElement.querySelector('h4').textContent = bloc.title;
        blocElement.querySelector('p').textContent = bloc.description;
        timelineColumn.appendChild(blocElement);
    });

    const allTimelines = document.querySelector('.all-timelines');
    allTimelines.appendChild(timeline);
});
