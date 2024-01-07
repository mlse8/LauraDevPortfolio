import { $ } from './renderProjects.js'

const form = $("form")

const validateEmpty = (value) => value != ""

const checkName = () => {
    const inputName = $("#name").value
    if(!validateEmpty(inputName) || inputName.length < 3) {
        $(".name-error").classList.remove("none")
        $("#name").classList.add("error")
    }
    else {
        $(".name-error").classList.add("none")
        $("#name").classList.remove("error")
    }
}

const checkEmail = () => {
    const inputEmail = $("#email").value
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(!validateEmpty(inputEmail) || !inputEmail.match(emailPattern)) {
        $(".email-error").classList.remove("none")
        $("#email").classList.add("error")
    }
    else {
        $(".email-error").classList.add("none")
        $("#email").classList.remove("error")
    }
}

const checkMessage = () => {
    const inputMessage = $("#message").value
    if(!validateEmpty(inputMessage) || inputMessage.length < 15) {
        $(".message-error").classList.remove("none")
        $("#message").classList.add("error")
    }
    else {
        $(".message-error").classList.add("none")
        $("#message").classList.remove("error")
    }
}

const submit = () => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        checkName()
        checkEmail()
        checkMessage()

        if ($("#name").classList.contains("error") || $("#email").classList.contains("error") || $("#message").classList.contains("error")) {
            return
        }

        const btn = $("#button")
        btn.value = 'Enviando...'
        const serviceID = 'default_service'
        const templateID = 'template_ruo6ztq'
        try{
            await emailjs.sendForm(serviceID, templateID, form)
                btn.value = 'Enviar'
                form.reset()
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Tu mensaje ha sido enviado correctamente.',
                    icon: 'success',
                    timer: 3000, 
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })                
        } catch (err) {
            btn.value = 'Enviar'
            alert(JSON.stringify(err))
        }
    })
}

export default submit