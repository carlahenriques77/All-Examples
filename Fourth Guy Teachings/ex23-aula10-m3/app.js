// In the HTML part: <ul data-js-"ul"></ul>
const ul = document.querySelector('[data-js="ul"]')
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']
let HTMLTemplate = ''
socialNetworks.forEach(socialNetwork => {
    HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})
ul.innerHTML = HTMLTemplate // How to make an HTML li to appear in the actual site... No idea why I would do it this way, but it exists, anyway