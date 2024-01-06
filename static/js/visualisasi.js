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
    config308x401b
  );

  function changeChart(selectedId) {
    let config;
    switch (selectedId) {
      case "option-308-401b":
        config = config308x401b
        break;
      case "option-308-403b":
        config = config308x403b
        break;
      case "option-308-405b":
        config = config308x405b
        break;
      case "option-308-407b":
        config = config308x407b
        break;
      case "option-308-421":
        config = config308x421
        break;
      case "option-401a":
        config = config401a;
        break;
      case "option-401b":
        config = config401b;
        break;
      case "option-403a":
        config = config403a;
        break;
      case "option-403b":
        config = config403b;
        break;
      case "option-405a":
        config = config405a;
        break;
      case "option-405b":
        config = config405b;
        break;
      case "option-407a":
        config = config407a;
        break;
      case "option-407b":
        config = config407b;
        break;
      case "option-409a":
        config = config409a;
        break;
      case "option-409b":
        config = config409b;
        break;
      case "option-411":
        config = config411;
        break;
      case "option-413":
        config = config413;
        break;
      case "option-415":
        config = config415;
        break;
      case "option-417":
        config = config417;
        break;
      case "option-419":
        config = config419;
        break;
      case "option-421":
        config = config421;
        break;
      case "option-423":
        config = config423;
        break;
      case "option-424":
        config = config424;
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

