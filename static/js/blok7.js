const config7 = {
    type: 'bar',
    data: {
        labels: ['701', '702','703','704','705','706','707'],
        datasets: [
            {
            label: 'Sangat Kurang',
            data: [1021,941,925,926,960,926,947],
            backgroundColor: ["#F58020"],
      
            },
            {
                label: 'Kurang',
                data: [898,936,899,917,948,887,921],
                backgroundColor: ["#FBAC1B"],
            
                }, 
                {
                    label: 'Baik',
                    data: [914,960,957,913,921,975,930],
                    backgroundColor: ["#FFC837"],
           
                    }, 
                    {
                        label: 'Sangat Baik',
                        data: [870,866,922,947,874,915,905],
                        backgroundColor: ["#FBE47E"],
                    
                        }, 
    ]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        tooltips: {
            displayColors: true,
            callbacks:{
              mode: 'x',
            },
          },
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                },
                stacked: true
            },
            y: {
                display:false,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                },
                type: 'linear',
                stacked: true
            }
        },
        plugins: {
            legend: {
                position:"bottom"
            },
            title: {
                display: true,
                text: 'Ringkasan Skala Likert Blok VII',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 20,
                    family : 'Helvetica'
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'black',
                fontSize: 10,
                align:'center',
                position: 'center',
                offset: 0,
            },
          
        }
    }
};
const config701 = {
    type: 'pie',
    data: {
        labels: ['Sangat sedikit', 'Sedikit','Banyak','Sangat banyak'],
        datasets: [{
            label: 'Tingkat Ketertarikan',
            data: [1021,898,914,870],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Ketertarikan Pelanggan dalam Pemanfaatan TIK',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config702 = {
    type: 'pie',
    data: {
        labels: ['Sangat sedikit', 'Sedikit','Banyak','Sangat banyak'],
        datasets: [{
            label: 'Penggunaan TIK',
            data: [941,936,960,866],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Penggunaan TIK oleh Supplier dalam Transaksi Kegiatan Usaha',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config703 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak baik', 'Tidak baik','Baik','Sangat baik'],
        datasets: [{
            label: 'Akses Internet',
            data: [925,899,957,922],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Akses Jaringan Internet di Lokasi Unit Usaha',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config704 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak cukup', 'Tidak cukup','Cukup','Sangat cukup'],
        datasets: [{
            label: 'Pemenuhan Listrik',
            data: [926,917,913,947],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Pemenuhan Kebutuhan Listrik Unit Usaha oleh PLN',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config705 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak berpengaruh', 'Tidak berpengaruh','Berpengaruh','Sangat berpengaruh'],
        datasets: [{
            label: 'Kategori Pengaruh',
            data: [960,948,921,874],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Pengaruh Motivasi Keluarga dan Lingkungan Terhadap Pemanfaatan TIK',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config706 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mencukupi', 'Tidak mencukupi','Mencukupi','Sangat mencukupi'],
        datasets: [{
            label: 'Tingkat Kecukupan',
            data: [926,887,975,915],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Kecukupan Bantuan yang Diberikan Pemerintah',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config707 = {
    type: 'pie',
    data: {
        labels: ['Sangat sulit', 'Sulit','Mudah','Sangat mudah'],
        datasets: [{
            label: 'Tingkat Kebersediaan',
            data: [947,921,930,905],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Kemudahan Peminjaman/Kredit dari Perbankan',
                font: {
                    size: 20  // Ganti nilai sesuai dengan yang diinginkan
                }
            },
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};
