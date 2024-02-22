    const blocData = [
        {
            title : "Réaliser",
            bloc : "realiser",
            projectsData : [
                {
                    title: "Backpack Hero",
                    date: "2022 - 2023",
                    videoSource: "Assets/img/backpack-hero/backpack-hero-presentation.mp4",
                    githubLink: "https://github.com/InkyYuu/Backpack-Hero",
                    projectLogo: "Assets/img/backpack-hero/backpack-hero-icone.ico",
                    tags: ["Java"],
                    explanation: "- Moins de contenu pour lui"
                },
                {
                    title: "PimpsMyPaids",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/pmp/pmp-presentation.mp4",
                    githubLink: "https://github.com/FC-Rats/PimpMyPaids",
                    projectLogo: "Assets/img/pmp/pmp-icone.ico",
                    tags: ["Web", "PHP", "SQL"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        },
        {
            title : "Optimiser",
            bloc : "optimiser",
            projectsData : [
                {
                    title: "Script Graphes",
                    date: "2022 - 2023",
                    videoSource: "Assets/img/graphes/graphes-presentation.mp4",
                    githubLink: "https://github.com/InkyYuu/Graphes",
                    projectLogo: "Assets/img/graphes/graphes-icone.ico",
                    tags: ["Python"],
                    explanation: "- Moins de contenu pour lui"
                },
                {
                    title: "Links Awordkening - Backend",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/default/in-development.mp4",
                    githubLink: "https://github.com/FC-Rats/Links-Awordkening",
                    projectLogo: "Assets/img/la/la-icone.ico",
                    tags: ["PHP", "Java", "C"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        },
        {
            title : "Administrer",
            bloc : "admnistrer",
            projectsData : [
                {
                    title: "Links Awordkening - Serveurs",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/default/in-development.mp4",
                    githubLink: "https://github.com/FC-Rats/Links-Awordkening",
                    projectLogo: "Assets/img/la/la-icone.ico",
                    tags: ["Serveur"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        },
        {
            title : "Gérer",
            bloc : "gerer",
            projectsData : [
                {
                    title: "Links Awordkening - Base de données",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/default/in-development.mp4",
                    githubLink: "https://github.com/FC-Rats/Links-Awordkening",
                    projectLogo: "Assets/img/la/la-icone.ico",
                    tags: ["Web", "PHP", "SQL"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        },
        {
            title : "Conduire",
            bloc : "conduire",
            projectsData : [
                {
                    title: "PimpsMyPaids",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/pmp/pmp-presentation.mp4",
                    githubLink: "https://github.com/FC-Rats/PimpMyPaids",
                    projectLogo: "Assets/img/pmp/pmp-icone.ico",
                    tags: ["Figma", "Jira"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        },
        {
            title : "Collobarer",
            bloc : "collaborer",
            projectsData : [
                {
                    title: "Sheet Comptabilité",
                    date: "2022 - 2023",
                    videoSource: "Assets/img/default/busy-and-work.mp4",
                    githubLink: "https://github.com/InkyYuu/Comptabilite",
                    projectLogo: "Assets/img/sheet-compta/comptabilite-icone.ico",
                    tags: ["Python"],
                    explanation: "- Moins de contenu pour lui"
                },
                {
                    title: "PimpsMyPaids",
                    date: "2023 - 2024",
                    videoSource: "Assets/img/pmp/pmp-presentation.mp4",
                    githubLink: "https://github.com/FC-Rats/PimpMyPaids",
                    projectLogo: "Assets/img/pmp/pmp-icone.ico",
                    tags: ["Github", "Jira"],
                    explanation: "- Du contenu pour PMP"
                }
            ]
        }
    ]

    // Récupération des templates
    const projectBlocTemplate = document.getElementById('project-bloc-template');
    const filterBlocTemplate = document.getElementById('filter-bloc-template');
    const filterDateTemplate = document.getElementById('filter-date-template');
    const tagTemplate = document.getElementById('tag-template');
    const projectTemplate = document.getElementById('project-card-template');
    console.log(filterBlocTemplate);

    blocData.forEach(blocData => {

        const allProjectsContainer = document.querySelector('.all-projects');

        // Création des filtres par bloc
        const filterBloc = filterBlocTemplate.content.cloneNode(true);
        filterBloc.querySelectorAll('.filter-bouton-bloc').forEach(filterBloc => {
            filterBloc.querySelector('h4').textContent = blocData.title;
            filterBloc.setAttribute('data-bloc', blocData.bloc);
        });
        allProjectsContainer.querySelector('.filter-bloc').appendChild(filterBloc);

        // Création du bloc de projets
        const projectsBloc = projectBlocTemplate.content.cloneNode(true);
        projectsBloc.querySelector('.title-bloc').textContent = blocData.title;
        projectsBloc.querySelector('.projects-bloc').setAttribute('data-bloc', blocData.bloc);

        // Création des projets
        const projectsContainer = projectsBloc.querySelector('.projects-container');
        blocData.projectsData.forEach(projectData => {
            // Création des filtres par date
            const filterDates = filterDateTemplate.content.cloneNode(true);
            filterDates.querySelectorAll('.filter-bouton-date').forEach(dateFilter => {
                dateFilter.setAttribute('data-date', projectData.date);
                dateFilter.querySelector('h4').textContent = projectData.date;
            });
            projectsBloc.querySelector('.filter-date').appendChild(filterDates);

            const project = projectTemplate.content.cloneNode(true);

            project.querySelector('.project').setAttribute('data-date', projectData.date);
            project.querySelector('.background-video source').setAttribute('src', projectData.videoSource);
            project.querySelector('.header a').setAttribute('href', projectData.githubLink);
            project.querySelector('.project-logo').setAttribute('src', projectData.projectLogo);
            project.querySelector('.text-explanation h5').textContent = projectData.title;
            project.querySelector('.text-explanation p').textContent = projectData.explanation;

            const tagContainer = project.querySelector('.footer');
            projectData.tags.forEach(tagText => {
                const tag = tagTemplate.content.cloneNode(true);
                tag.querySelector('.circle-color').classList.add(tagText.toLowerCase());
                tag.querySelector('h6').textContent = tagText;
                tagContainer.appendChild(tag);
            });

            projectsContainer.appendChild(project);
        });

        allProjectsContainer.appendChild(projectsBloc);
    });
