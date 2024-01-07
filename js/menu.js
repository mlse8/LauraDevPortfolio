import { $ } from './renderProjects.js'


const openMenu = () => {
    $(".navbar-menu").classList.remove("none")
    $("#close").classList.remove("none")
    $("#open").classList.add("none")
}

const closeMenu = () => {
    $(".navbar-menu").classList.add("none")
    $("#close").classList.add("none")
    $("#open").classList.remove("none")
}

const showMenuItems = () => {
    const width = window.innerWidth
    if (width >= 960)
        $(".navbar-menu").classList.remove("none")
}

const activeItems = () => {
    let linkElements = document.querySelectorAll('.nav-link')

    linkElements.forEach((link) => {
        link.addEventListener('click', () => {
            $('.active')?.classList.remove('active')
            link.classList.add('active')
        })
    })
}

const setActiveItem = () => {
    const sections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY + 50

    sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active')
            })

            const closestListItem = $(`.nav-link a[href="#${section.id}"]`).closest('li')
            if (closestListItem) {
                closestListItem.classList.add('active')
            }
        }
    })
}

const scroll = () => {
    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            $(".navbar").style.backgroundColor = '#0d1321f5'
        }
        else {
            $(".navbar").style.backgroundColor = 'var(--background)'
        }
        setActiveItem()
    })
}

const initializeMenu = () => {
    $("#open").addEventListener("click", openMenu)
    $("#close").addEventListener("click", closeMenu)
    activeItems()
    scroll()
    showMenuItems()
}

export default initializeMenu