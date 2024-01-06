document.addEventListener("DOMContentLoaded", function () {
  const selected1 = document.querySelector(".selected-1");
  const optionsContainer1 = document.querySelector(".dropdown-options-container-1");
  const optionsList1 = document.querySelectorAll(".option-1");

  selected1.addEventListener("click", () => {
    optionsContainer1.classList.toggle("active");
  });

  optionsList1.forEach(o => {
    o.addEventListener("click", () => {
      const selectedId = o.querySelector("input").id;
      selected1.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer1.classList.remove("active");
      changeChart(selectedId);
    });
  });

  let myChart = new Chart(
    document.getElementById('myChart'),
    config306x308  // Gantilah dengan konfigurasi default
  );

  function changeChart(selectedId) {
    let config;
    switch (selectedId) {
      case "option-302x303-radio":
        config = config302x303;
        break;
      case "option-304x303-radio":
        config = config304x303;
        break;
      case "option-306x308-radio":
        config = config306x308;
        break;
      case "option-303-radio":
        config = config303;
        break;
      case "option-304-radio":
        config = config304;
        break;
      case "option-306a-radio":
        config = config306a;
        break;
      case "option-307-radio":
        config = config307;
        break;
      case "option-308-radio":
        config = config308;
        break;
      case "option-309-radio":
        config = config309;
        break;
      default:
        // Default action jika tidak ada yang cocok
        break;
    }

    updateChart(config);
  }

  function updateChart(config) {
    myChart.destroy();
    myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  }
});

