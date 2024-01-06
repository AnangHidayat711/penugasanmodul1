const config5 = {
    type: 'bar',
    data: {
        labels: ['501', '502','503','504','505','506','507','508','509'],
        datasets: [
            {
            label: 'Sangat Kurang',
            data: [968,916,965,939,1006,952,898,899,934],
            backgroundColor: ["#F58020"],
      
            },
            {
                label: 'Kurang',
                data: [900,954,932,929,939,961,952,944,853],
                backgroundColor: ["#FBAC1B"],
            
                }, 
                {
                    label: 'Baik',
                    data: [931,939,910,919,915,874,888,904,968],
                    backgroundColor: ["#FFC837"],
           
                    }, 
                    {
                        label: 'Sangat Baik',
                        data: [904,894,896,916,843,916,965,956,948],
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
                text: 'Ringkasan Skala Likert Blok V',
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
                fontSize: 8.5,
                align:'center',
                position: 'center',
                offset: 0,
            },
          
        }
    }
};

const config501 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mengikuti', 'Tidak mengikuti','Mengikuti','Sangat mengikuti'],
        datasets: [{
            label: 'Keikutsertaan Isu Ekonomi',
            data: [968,900,931,904],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Keikutsertaan Perkembangan Isu Ekonomi',
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

const config502 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak memahami', 'Tidak memahami','Memahami','Sangat memahami'],
        datasets: [{
            label: 'Tingkat Pemahaman',
            data: [916,954,939,894],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Pemahaman Pentingnya Informasi yang Terorganisir',
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

const config503 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak memahami', 'Tidak memahami','Memahami','Sangat memahami'],
        datasets: [{
            label: 'Tingkat Pemahaman',
            data: [965,932,910,896],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Pemahaman dalam Menghormati Hak Cipta dan Aktivitas di Intenet',
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

const config504 = {
    type: 'pie',
    data: {
        labels: ['Tidak Pernah', 'Jarang','Sering','Selalu'],
        datasets: [{
            label: 'Tingkat Permintaan',
            data: [939,929,919,916],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Meminta Karyawan untuk Mempelajari Pemanfaatan TIK',
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

const config505 = {
    type: 'pie',
    data: {
        labels: ['Tidak Pernah', 'Jarang','Sering','Selalu'],
        datasets: [{
            label: 'Tingkat Dorongan',
            data: [1006,939,915,843],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Mendorong Pekerja/Karyawan Untuk Memahami Pemanfaatan Data Histori',
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

const config506 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mampu', 'Tidak mampu','Mampu','Sangat mampu'],
        datasets: [{
            label: 'Tingkat Kemampuan',
            data: [952,961,874,916],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kemampuan dalam Mengeksplorasi Informasi di Internet Sesuai Kebutuhan',
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

const config507 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak mampu', 'Tidak mampu','Mampu','Sangat mampu'],
        datasets: [{
            label: 'Tingkat Kemampuan',
            data: [898,952,888,965],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kemampuan Mengunggah dan Mengunduh Informasi dari Internet',
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

const config508 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak sesuai', 'Tidak sesuai','Sesuai','Sangat sesuai'],
        datasets: [{
            label: 'Tingkat Kesesuaian',
            data: [899,944,904,956],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Tingkat Kesuaian Produk Promosi Online dengan Kondisi Sebenarnya',
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

const config509 = {
    type: 'pie',
    data: {
        labels: ['Sangat tidak bersedia', 'Tidak bersedia','Bersedia','Sangat bersedia'],
        datasets: [{
            label: 'Tingkat Kesediaan',
            data: [899,944,904,956],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Kesediaan Melakukan Return Produk Gagal',
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