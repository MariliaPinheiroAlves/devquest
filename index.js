const cadastro = document.querySelectorAll(".informacao")
const botaoDeEnvio = document.querySelector(".btn")

botaoDeEnvio.addEventListener('click', function () {
    cadastro.forEach(function (item) {
        if (item.value === "") {
            item.classList.remove("informacao")
            item.classList.add("borda-nao-preenchida")
            item.nextElementSibling.classList.remove("texto-obrigatorio")
            item.nextElementSibling.classList.add("nao-preenchido")
        } else {
            item.classList.add("informacao")
            item.classList.remove("borda-nao-preenchida")
            item.nextElementSibling.classList.add("texto-obrigatorio")
            item.nextElementSibling.classList.remove("nao-preenchido")
            item.classList.add("preenchido")
            console.log("Preenchido")
        }
    });
});