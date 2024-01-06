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
    config7 // Gunakan config701 karena kita menggunakan ID "option-701" sebagai default
  );

  function changeChart(selectedId) {
    let config;
    switch (selectedId) {
      case "blok-vii":
        config = config7;
        break;
      case "option-701":
        config = config701;
        break;
      case "option-702":
        config = config702;
        break;
      case "option-703":
        config = config703;
        break;
      case "option-704":
        config = config704;
        break;
      case "option-705":
        config = config705;
        break;
      case "option-706":
        config = config706;
        break;
      case "option-707":
        config = config707;
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

