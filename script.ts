const togglebutton2 = document.getElementById('Toggle-Skills') as HTMLButtonElement
const skills2 = document.getElementById('Skills') as HTMLElement

togglebutton2.addEventListener('click', () => {
    skills2.classList.toggle('hidden')
});