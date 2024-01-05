const selected1 = document.querySelector(".selected-1");
const optionsContainer1 = document.querySelector(".dropdown-options-container-1");

const optionsList1 = document.querySelectorAll(".option-1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
    changeChart();
  });
});

// const selected2 = document.querySelector(".selected-2");
// const optionsContainer2 = document.querySelector(".dropdown-options-container-2");

// const optionsList2 = document.querySelectorAll(".option-2");

// selected2.addEventListener("click", () => {
//   optionsContainer2.classList.toggle("active");
// });

// optionsList2.forEach(o => {
//   o.addEventListener("click", () => {
//     selected2.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer2.classList.remove("active");
//     changeChart();
//   });
// });

let myChart = new Chart(
  document.getElementById('myChart'),
  config601
);

function changeChart() {
  const selectedOption1 = selected1.innerHTML;
  // const selectedOption2 = selected2.innerHTML;

 if (selectedOption1 === '601 - Pengetahuan Pemanfaatan Penggunaan TIK Terhadap Kegiatan Usaha') {
    updateChart(config601);
  } else if (selectedOption1 === '602 - Frekuensi Sikap Terhadap Risiko Terkait Penerapan TIK') {
    updateChart(config602);
  } else if (selectedOption1 === '603 - Kesediaan Mendukung Inovasi Pemanfaatan TIK dalam Kegiatan Usaha') {
    updateChart(config603);
  }  else if (selectedOption1 === '604 - Kecepatan Akses Jaringan Internet di Lokasi Unit Usaha') {
    updateChart(config604);
  } else if (selectedOption1 === '605 - Persetujuan Terhadap Pemanfaatan TIK untuk Transaksi Pembayaran') {
    updateChart(config605);
  } else if (selectedOption1 === '606 - Kelancaran TIK yang Digunakan untuk Transaksi Elektronik') {
    updateChart(config606);
  } else if (selectedOption1 === '607 - Kebersediaan Unit Usaha Melindungi Data Konsumen') {
    updateChart(config607);
  } else if (selectedOption1 === '608 - Kebersediaan Unit Usaha untuk Pencadangan Data Krusial') {
    updateChart(config608);
  } else if (selectedOption1 === '609 - Pendapat bahwa Biaya Pemanfaatan TIK Terlalu Mahal') {
    updateChart(config609);
  } 

  // else if (selectedOption1 === 'Proporsi Label Sentimen') {
  //   if (selectedOption2 === 'Attractions') {
  //     updateChart(config06);
  //   } else if (selectedOption2 === 'Amenities') {
  //     updateChart(config07);
  //   } else if (selectedOption2 === 'Access') {
  //     updateChart(config08);
  //   } else if (selectedOption2 === 'Price') {
  //     updateChart(config09);
  //   } else if (selectedOption2 === 'No Aspect') {
  //     updateChart(config10);
  //   }
  // } else if (selectedOption1 === 'Rerata Jumlah Kata per Label Sentimen') {
  //   if (selectedOption2 === 'Attractions') {
  //     updateChart(config11);
  //   } else if (selectedOption2 === 'Amenities') {
  //     updateChart(config12);
  //   } else if (selectedOption2 === 'Access') {
  //     updateChart(config13);
  //   } else if (selectedOption2 === 'Price') {
  //     updateChart(config14);
  //   } else if (selectedOption2 === 'No Aspect') {
  //     updateChart(config15);
  //   }
  // } else if (selectedOption1 === 'Rerata Jumlah Kata Unik per Label Sentimen') {
  //   if (selectedOption2 === 'Attractions') {
  //     updateChart(config16);
  //   } else if (selectedOption2 === 'Amenities') {
  //     updateChart(config17);
  //   } else if (selectedOption2 === 'Access') {
  //     updateChart(config18);
  //   } else if (selectedOption2 === 'Price') {
  //     updateChart(config19);
  //   } else if (selectedOption2 === 'No Aspect') {
  //     updateChart(config20);
  //   }
  // } else if (selectedOption1 === 'Rerata Jumlah Kata per Review') {
  //   updateChart(config21);
  // } else if (selectedOption1 === 'Rerata Jumlah Kalimat per Review') {
  //   updateChart(config22);
  // } else if (selectedOption1 === 'Rerata Jumlah Kata per Kalimat Tiap Aspek') {
  //   updateChart(config28);
  // } else if (selectedOption1 === 'Top 5 Kemunculan Kata') {
  //   if (selectedOption2 === 'Attractions') {
  //     updateChart(config23);
  //   } else if (selectedOption2 === 'Amenities') {
  //     updateChart(config24);
  //   } else if (selectedOption2 === 'Access') {
  //     updateChart(config25);
  //   } else if (selectedOption2 === 'Price') {
  //     updateChart(config26);
  //   } else if (selectedOption2 === 'No Aspect') {
  //     updateChart(config27);
  //   }
  // } 
}

function updateChart(config) {
  myChart.destroy();
  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
