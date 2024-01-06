const config6 = {
    type: 'bar',
    data: {
        labels: ['601', '602','603','604','605','606','607','608'],
        datasets: [
            {
            label: 'Sangat Kurang',
            data: [908,891,908,898,918,1003,960,891],
            backgroundColor: ["#F58020"],
      
            },
            {
                label: 'Kurang',
                data: [959,927,905,973,905,874,914,949],
                backgroundColor: ["#FBAC1B"],
            
                }, 
                {
                    label: 'Baik',
                    data: [936,905,978,899,936,960,893,925],
                    backgroundColor: ["#FFC837"],
           
                    }, 
                    {
                        label: 'Sangat Baik',
                        data: [900,980,912,933,944,866,936,938],
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
                text: 'Ringkasan Skala Likert Blok VI',
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
                fontSize: 9.5,    
                align:'center',
                position: 'center',
                offset: 0,
            },
          
        }
    }
};
const config601 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mengetahui', 'Tidak mengetahui','Mengetahui','Sangat mengetahui'],
        datasets: [{
            label: 'Tingkat Pengetahuan',
            data: [959,908,936,900],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Pengetahuan Pemanfaatan Penggunaan TIK Terhadap Kegiatan Usaha',
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

const config602 = {
    type: 'pie',
    data: {
        labels: ['Sangat takut', 'Takut','Berani','Sangat berani'],
        datasets: [{
            label: 'Sikap',
            data: [927,891,905,980],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Frekuensi Sikap Terhadap Risiko Terkait Penerapan TIK',
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

const config603 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mendukung', 'Tidak mendukung','Mendukung','Sangat mendukung'],
        datasets: [{
            label: 'Tingkat Dukungan',
            data: [905,908,978,912],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kesediaan Mendukung Inovasi Pemanfaatan TIK dalam Kegiatan Usaha',
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

const config604 = {
    type: 'pie',
    data: {
        labels: ['Sangat lambat', 'Lambat','Cepat','Sangat Cepat'],
        datasets: [{
            label: 'Tingkat Kecepatan',
            data: [973,898,899,933],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kecepatan Akses Jaringan Internet di Lokasi Unit Usaha',
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

const config605 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak setuju', 'Tidak Setuju','Setuju','Sangat Setuju'],
        datasets: [{
            label: 'Sikap Persetujuan',
            data: [905,918,936,944],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Persetujuan Terhadap Pemanfaatan TIK untuk Transaksi Pembayaran',
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

const config606 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak lancar', 'Tidak lancar','Lancar','Sangat lancar'],
        datasets: [{
            label: 'Tingkat Kelancaran',
            data: [874,1003,960,866],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kelancaran TIK yang Digunakan untuk Transaksi Elektronik',
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

const config607 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak bersedia', 'Tidak bersedia','Bersedia','Sangat bersedia'],
        datasets: [{
            label: 'Tingkat Kebersediaan',
            data: [914,960,893,936],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kebersediaan Unit Usaha Melindungi Data Konsumen',
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

const config608 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak bersedia', 'Tidak bersedia','Bersedia','Sangat bersedia'],
        datasets: [{
            label: 'Tingkat Kebersediaan',
            data: [949,891,925,938],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kebersediaan Unit Usaha untuk Pencadangan Data Krusial',
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

const config609 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak setuju', 'Tidak setuju','Setuju','Sangat setuju'],
        datasets: [{
            label: 'Pendapat',
            data: [894,921,956,932],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Pendapat bahwa Biaya Pemanfaatan TIK Terlalu Mahal',
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