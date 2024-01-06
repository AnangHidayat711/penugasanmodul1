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
    config5
  );

  function changeChart(selectedId) {
    let config;
    switch (selectedId) {
      case "blok-v":
        config = config5;
        break;
      case "ikut-serta":
        config = config501;
        break;
      case "pemahaman-informasi":
        config = config502;
        break;
      case "hak-cipta":
        config = config503;
        break;
      case "karyawan":
        config = config504;
        break;
      case "histori":
        config = config505;
        break;
      case "kebutuhan":
        config = config506;
        break;
      case "unggah":
        config = config507;
        break;
      case "promosi":
        config = config508;
        break;
      case "return":
        config = config509;
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

