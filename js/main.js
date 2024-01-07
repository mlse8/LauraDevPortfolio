import initializeMenu from './menu.js'
import { initializeProjects } from './renderProjects.js'
import submit from './form.js'

const initializeProject = () => {
    AOS.init()
    initializeMenu()
    initializeProjects()
    submit()
}

window.addEventListener("load", initializeProject)