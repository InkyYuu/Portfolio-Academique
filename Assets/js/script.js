// Partie : Navbar
// Gestion du bouton de bascule du menu
const nav = document.querySelector("nav");
const toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Fonction pour rendre le menu draggable
function onDrag({ movementY }) {
    const navStyle = window.getComputedStyle(nav);
    const navTop = parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    const windHeight = window.innerHeight;

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if (navTop > windHeight - navHeight) {
        nav.style.top = `${windHeight - navHeight}px`;
    }
}

// Gestion des événements de souris pour le menu draggable
nav.addEventListener("mousedown", () => {
    nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag);
});

// Partie : Projets
// Gestion des filtres de projets
const allProjectsBlock = document.querySelectorAll('.projects-bloc');
const filterButtonsDate = document.querySelectorAll(".filter-bouton-date");
const filterButtonsBloc = document.querySelectorAll(".filter-bouton-bloc");

// Sélectionner par défaut le premier bloc et afficher son contenu
filterProjectsByDefault();

// Gestion des événements pour les boutons de filtre par bloc
filterButtonsBloc.forEach(button => {
    button.addEventListener("click", function () {
        filterButtonsBloc.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjectsByBloc(button);
    });
});

// Gestion des événements pour les boutons de filtre par date
filterButtonsDate.forEach(button => {
    button.addEventListener("click", function () {
        const bloc = button.closest('.projects-bloc');
        const dateButtons = bloc.querySelectorAll('.filter-bouton-date');
        dateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjectsByDate(button, bloc);
    });
});

// Appliquer le filtre de date par défaut pour chaque bloc
function filterProjectsByDefault() {
    const firstButtonBloc = document.querySelector('.filter-bouton-bloc:first-child');
    firstButtonBloc.classList.add('active');
    filterProjectsByBloc(firstButtonBloc);

    allProjectsBlock.forEach(bloc => {
        const latestButtonDate = bloc.querySelector('.filter-bouton-date:last-child');
        latestButtonDate.classList.add('active');
        filterProjectsByDate(latestButtonDate, bloc);
    });
}

// Filtrer les projets par date
function filterProjectsByDate(button, bloc) {
    const selectedDate = button.dataset.date;
    const projects = bloc.querySelectorAll(".project");

    projects.forEach(project => {
        const projectDate = project.dataset.date;

        if (projectDate === selectedDate || selectedDate === 'all') {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Filtrer les projets par bloc
function filterProjectsByBloc(button) {
    const selectedBloc = button.dataset.bloc;
    const container = button.closest('.all-projects');
    const projects = container.querySelectorAll(".projects-bloc");

    projects.forEach(projectBloc => {
        const projectBlocData = projectBloc.dataset.bloc;

        if (projectBlocData === selectedBloc || selectedBloc === 'all') {
            projectBloc.style.display = "flex";
        } else {
            projectBloc.style.display = "none";
        }
    });
}

// Partie : Explication de projet
// Fonction pour désactiver les effets de survol lorsque la souris est sur le logo GitHub
function disableHoverEffect(project) {
    var githubLogo = project.querySelector('.github-logo');
    var explanation = project.querySelector('.explanation');
    var card = project.querySelector('.card');
    githubLogo.addEventListener('mouseenter', function () {
        explanation.classList.add('disableHover');
        card.classList.add('disableHover');
    });
    githubLogo.addEventListener('mouseleave', function () {
        explanation.classList.remove('disableHover');
        card.classList.remove('disableHover');
    });
}

// Fonction pour prévenir l'explication lorsque la souris est hors du logo GitHub
function preventExplanationOpen(card) {
    var githubLogo = card.querySelector('.github-logo');
    var target = event.target;
    if (!githubLogo.contains(target)) {
        var project = card.parentElement;
        var explanation = project.querySelector('.explanation');
        var card = project.querySelector('.card');
        var footer = project.querySelector('.footer');
        var arrow = project.querySelector('.arrowIcon');
        explanation.classList.toggle('active');
        card.classList.toggle('active');
        footer.classList.toggle('active');
        explanation.classList.toggle('disableHover');
        arrow.classList.toggle('active');
    }
}

function preventExplanationClose(arrow) {
    var project = arrow.closest('.project');
    var explanation = project.querySelector('.explanation');
    var card = project.querySelector('.card');
    var footer = project.querySelector('.footer');
    explanation.classList.toggle('active');
    card.classList.toggle('active');
    footer.classList.toggle('active');
    explanation.classList.toggle('disableHover');
    arrow.classList.toggle('active');
}

const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(event) {
    const button = event.currentTarget;
    const modalId = button.getAttribute("data-modal");
    const modalContainer = document.querySelector(`.modal-container[data-modal="${modalId}"]`);
    
    if (modalContainer) {
        modalContainer.classList.toggle("active");
    }
}