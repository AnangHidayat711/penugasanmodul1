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
    config6
  );

  function changeChart(selectedId) {
    let config;
    switch (selectedId) {
      case "blok-vi":
        config = config6;
        break;
      case "option-601":
        config = config601;
        break;
      case "option-602":
        config = config602;
        break;
      case "option-603":
        config = config603;
        break;
      case "option-604":
        config = config604;
        break;
      case "option-605":
        config = config605;
        break;
      case "option-606":
        config = config606;
        break;
      case "option-607":
        config = config607;
        break;
      case "option-608":
        config = config608;
        break;
      case "option-609":
        config = config609;
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

