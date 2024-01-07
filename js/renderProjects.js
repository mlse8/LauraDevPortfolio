import projects from './projects.js'

const $ = (selector) => document.querySelector(selector)

const cleanContainer = (selector) => $(selector).innerHTML = ""

const renderProjects = (projectList) => {
    cleanContainer(".projects-cards")
    for (const {name, description, image, deploy, github, figma, category} of projectList) {
        $(".projects-cards").innerHTML += `
        <div class="card" data-aos="zoom-in" data-aos-duration="1200">
            <figure class="card-title">
                <h3>${name}</h3>
                <img src="${image}" alt="img-project">
            </figure>
            <div class="card-info">
                <p>${description}</p>
                <a href="${github || figma}" target="_blank" class="btn">${category != "UX" ? `<i class="fa-brands fa-github"></i>` : `<i class="fa-brands fa-figma"></i>`}</a>
                <a href="${deploy}" target="_blank" class="btn"><i class="fa-solid fa-desktop"></i></a>
            </div>
        </div>`
    }
}

const filter = () => {
    const type = $("#projects-options").value
    let newProjects = projects
    if (type != "Todos")
        newProjects = projects.filter(({category}) => category === type)
    renderProjects(newProjects)
}

const initializeProjects = () => {
    renderProjects(projects)
    $("#projects-options").addEventListener("change", filter)
}
export {$, initializeProjects} 