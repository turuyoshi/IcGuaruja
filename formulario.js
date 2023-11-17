document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de evento para o campo de idade
    const idadeField = document.getElementById("idade");
    idadeField.addEventListener("input", function () {
        validarIdade(this.value);
    });

    // Função para validar a idade
    function validarIdade(idade) {
        const idadeError = document.getElementById("idadeError");

        if (idade < 12 || idade > 18) {
            idadeError.textContent = "A idade deve estar entre 12 e 18 anos.";
            idadeField.setCustomValidity("A idade deve estar entre 12 e 18 anos.");
        } else {
            idadeError.textContent = "";
            idadeField.setCustomValidity("");
        }

        // Adapte o formulário para telas menores
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        const perfilDiv = document.querySelector(".perfil");
        const enderecoDiv = document.querySelector(".endereco");
        const motivoDiv = document.querySelector(".motivo");
        const soubeDiv = document.querySelector(".soube");

        function handleMediaChange(event) {
            if (event.matches) {
                perfilDiv.style.display = "block";
                enderecoDiv.style.display = "block";
                motivoDiv.style.display = "block";
                soubeDiv.style.display = "block";
            } else {
                perfilDiv.style.display = "inline-block";
                enderecoDiv.style.display = "inline-block";
                motivoDiv.style.display = "inline-block";
                soubeDiv.style.display = "inline-block";
            }
        }

        handleMediaChange(mediaQuery); // Ajuste inicial
        mediaQuery.addEventListener("change", handleMediaChange);
    }
    
});
