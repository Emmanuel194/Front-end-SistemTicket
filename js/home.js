document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll(".nav-item");
  var chamadosBtn = document.querySelector(".chamados-btn");
  chamadosBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var formContainer = document.getElementById("form-container");
    formContainer.style.display = "block";
    formContainer.innerHTML =
      "<form>" +
      '<label for="tipo">Tipo de Manutenção:</label><br>' +
      '<select id="tipo" name="tipo">' +
      '<option value="corretiva">Corretiva</option>' +
      '<option value="preventiva">Preventiva</option>' +
      "</select><br>" +
      '<label for="setor">Setor:</label><br>' +
      '<input type="text" id="setor" name="setor"><br>' +
      '<label for="solicitante">Solicitante:</label><br>' +
      '<input type="text" id="solicitante" name="solicitante"><br>' +
      '<label for="equipamento">Equipamento:</label><br>' +
      '<input type="text" id="equipamento" name="equipamento"><br>' +
      '<label for="data">Data:</label><br>' +
      '<input type="date" id="data" name="data"><br>' +
      '<label for="descricao">Descrição do Problema:</label><br>' +
      '<textarea id="descricao" name="descricao"></textarea><br>' +
      '<input type="submit" value="Enviar">' +
      "</form>";
  });
});
