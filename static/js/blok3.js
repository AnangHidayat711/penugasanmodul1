const config303 = {
    type: 'pie',
    data: {
        labels: ['Laki-Laki', 'Perempuan'],
        datasets: [{
            label: 'Jenis Kelamin',
            data: [1933,1770],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Jenis Kelamin Pemilik Usaha',
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

const config304 = {
    type: 'bar',
    data: {
        labels: ['D1/D2/D3', 'SMA/SMK/Sederajat', 'S2/S3', 'SD/MI/Sederajat','SMP/MTs/Sederajat','D4/S1','Tidak Tamat SD'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [548,545,543,532,518,517,500],
            backgroundColor: ["#CA2128", "#EC2B26", "#F58020", "#FBAC1B", "#FFC837", "#FBE47E", "#FFFAE6"],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Tingkat Pendidikan Terakhir Pemilik Usaha',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 20,
                    family : 'Helvetica'
                }
            }
        }
    }
};

const config306a = {
    type: 'bar',
    data: {
        labels: ['Ya', 'Tidak'],
        datasets: [{
            label: 'Bangunan Fisik Rumah',
            data: [1832, 1871],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Lokasi Berada pada Bangunan Fisik Rumah Tangga',
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
                render: 'value', // Menampilkan nilai label
                fontColor: 'black', // Warna teks label
                fontSize: 12,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

const config307 = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [{
            label: 'Rata-Rata Jumlah Pekerja',
            data: [12.00, 2.48],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Rata-Rata Jumlah Pekerja Menurut Skala Usaha',
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
                render: 'value', // Menampilkan nilai label
                fontColor: 'black', // Warna teks label
                fontSize: 12,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

const config308 = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [{
            label: 'Skala Usaha',
            data: [2883,820],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Skala Usaha Pariwisata',
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
                render: 'value', // Menampilkan nilai label
                fontColor: 'black', // Warna teks label
                fontSize: 12,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

const config309 = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [{
            label: 'Rata-Rata Pendapatan',
            data: [1272503.12,1322362.85],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Nilai Produksi/Pendapatan Usaha Menurut Skala Usaha',
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
                render: 'value', // Menampilkan nilai label
                fontColor: 'black', // Warna teks label
                fontSize: 12,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

const config302x303 = {
    type: 'bar',
    data: {
        labels: ['20-24', '25-29','30-34','35-39','40-44','45-49','50-54','55-59','>=60'],
        datasets: [
            {
            label: 'Laki-Laki',
            data: [4.91,5.04,5.10,5.17,4.97,4.71,4.94,4.40,10.76],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Perempuan',
                data: [5.59,4.35,4.41,5.23,5.08,4.66,4.89,4.72,11.07],
                backgroundColor: ["#FFC837"],
                borderWidth: 1
                }, 
    ]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Persentase'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                position:"top"
            },
            title: {
                display: true,
                text: 'Persentase Pemilik Usaha Berdasarkan Jenis Kelamin dan Kelompok Usia',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 20,
                    family : 'Helvetica'
                }
            },
            // labels: {
            //     render: 'value', // Menampilkan nilai label
            //     fontColor: 'black', // Warna teks label
            //     fontSize: 0.02,
            //     position: 'end', // Posisi label (end, start, top, bottom)
            //     textMargin: 8, // Jarak antara label dan batang
            // },
        }
    }
};

const config304x303 = {
    type: 'bar',
    data: {
        labels: ['Tidak tamat SD', 'SD/MI/Sederajat','SMP/MTs/Sederajat','SMA/SMK/Sederajat','D1/D2/D3','D4/S1','S2/S3'],
        datasets: [
            {
            label: 'Laki-Laki',
            data: [269,266,271,286,296,270,275],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Perempuan',
                data: [231,266,247,259,252,247,268],
                backgroundColor: ["#FFC837"],
                borderWidth: 1
                }, 
    ]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                position:"top"
            },
            title: {
                display: true,
                text: 'Jumlah Pemilik Usaha Berdasarkan Pendidikan dan Jenis Kelamin',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 20,
                    family : 'Helvetica'
                }
            },
            // labels: {
            //     render: 'value', // Menampilkan nilai label
            //     fontColor: 'black', // Warna teks label
            //     fontSize: 12,
            //     position: 'end', // Posisi label (end, start, top, bottom)
            //     textMargin: 8, // Jarak antara label dan batang
            // },
        }
    }
};

const config306x308 = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [
            {
            label: 'Bangunan Fisik RuTa',
            data: [1405,427],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Tidak Bangunan Fisik RuTa',
                data: [1478,393],
                backgroundColor: ["#FFC837"],
                borderWidth: 1
                }, 
    ]
    },
    options: {
        indexAxis:'x',
        maintainAspectRatio: false,
        scales: {
            x: {
                // title: {
                //     display: true,
                //     text: 'Rata-Rata Jumlah Kata per Review'
                // },
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                position:"top"
            },
            title: {
                display: true,
                text: 'Jumlah Pemilik Usaha Berdasarkan Skala Usaha dan Lokasi Usaha',
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
                render: 'value', // Menampilkan nilai label
                fontColor: 'black', // Warna teks label
                fontSize: 12,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

