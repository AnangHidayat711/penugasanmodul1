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
  config401a
);

function changeChart() {
  const selectedOption1 = selected1.innerHTML;
  // const selectedOption2 = selected2.innerHTML;

 if (selectedOption1 === '303 - Jenis Kelamin Pemilik Usaha') {
    updateChart(config303);
  } else if (selectedOption1 === '304 - Tingkat Pendidikan Terakhir') {
    updateChart(config304);
  } else if (selectedOption1 === '306a - Lokasi Berada pada Bangunan Fisik Rumah Tangga') {
    updateChart(config306a);
  }  else if (selectedOption1 === '307 - Rata-Rata Jumlah Pekerja Menurut Skala Usaha') {
    updateChart(config307);
  } else if (selectedOption1 === '308 - Skala Usaha Pariwisata') {
    updateChart(config308);
  } else if (selectedOption1 === '309 - Nilai Produksi/Pendapatan Usaha Menurut Skala Usaha') {
    updateChart(config309);
  } else if (selectedOption1 === '409b - Sarana Transaksi Pembayaran yang Disediakan') {
    updateChart(config409b);
  } else if (selectedOption1 === '411 - Pemanfaatan TIK Dalam Catatan Transaksi Pembayaran') {
    updateChart(config411);
  } else if (selectedOption1 === '413 - Pemanfaatan TIK Dalam Catatan Keuangan Unit Usaha') {
    updateChart(config413);
  } else if (selectedOption1 === '415 - Pemanfaatan TIK Dalam Perencanaan Keuangan Unit Usaha') {
    updateChart(config415);
  } else if (selectedOption1 === '417 - Pemanfaatan TIK Dalam Pengadaan Kebutuhan/Logistik Unit Usaha') {
    updateChart(config417);
  } else if (selectedOption1 === '419 - Pemanfaatan TIK Dalam Aktivitas Manajemen Pegawai Unit Usaha') {
    updateChart(config419);
  } else if (selectedOption1 === '421 - Pemanfaatan TIK Secara Keseluruhan Dalam Unit Usaha') {
    updateChart(config421);
  } else if (selectedOption1 === '423 - Ada Tidaknya Pekerja yang Bertanggungjawab Dalam Penggunaan TIK') {
    updateChart(config423);
  } else if (selectedOption1 === '424 - Rata-Rata Jumlah Tenaga Kerja TIK Berdasarkan Skala Unit Usaha') {
    updateChart(config424);
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
