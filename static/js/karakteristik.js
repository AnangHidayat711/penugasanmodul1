const config_usia = {
    type: 'bar',
    data: {
        labels: ['20-24', '25-29','30-34','35-39','40-44','45-49','50-54','55-59','≥60'],
        datasets: [
            {
            label: 'Laki-Laki',
            data: [4.91,5.04,5.10,5.17,4.97,4.71,4.94,4.40,10.76],
            backgroundColor: ["#951A2E"],
            borderWidth: 1
            },
            {
                label: 'Perempuan',
                data: [5.59,4.35,4.41,5.23,5.08,4.66,4.89,4.72,11.07],
                backgroundColor: ["#F58020"],
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
            // title: {
            //     display: true,
            //     text: 'Persentase Pemilik Usaha Berdasarkan Jenis Kelamin dan Kelompok Usia',
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     },
            //     font: {
            //         size: 20,
            //         family : 'Helvetica'
            //     }
            // },
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

const config_pendidikan = {
    type: 'bar',
    data: {
        labels: ['Tidak tamat SD', 'SD/MI/Sederajat','SMP/MTs/Sederajat','SMA/SMK/Sederajat','D1/D2/D3','D4/S1','S2/S3'],
        datasets: [
            {
            label: 'Laki-Laki',
            data: [269,266,271,286,296,270,275],
            backgroundColor: ["#951A2E"],
            borderWidth: 1
            },
            {
                label: 'Perempuan',
                data: [231,266,247,259,252,247,268],
                backgroundColor: ["#F58020"],
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
            // title: {
            //     display: true,
            //     text: 'Jumlah Pemilik Usaha Berdasarkan Pendidikan dan Jenis Kelamin',
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     },
            //     font: {
            //         size: 20,
            //         family : 'Helvetica'
            //     }
            // },
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

const config_skala = {
    type: 'pie',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [{
            label: 'Skala Unit Usaha',
            data: [2883,820],
            // backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            backgroundColor: ["#951A2E","#F58020"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        cutout: '50%', // Cutout percentage for doughnut chart, or you can use a number for pixels
        radius: '100%',
        rotation: 0, // Starting angle in degrees
        circumference: 360, // Sweep to allow arcs to cover

        animation: {
            animateRotate: true, // Animate rotation
            animateScale: true // Animate scale
        },

        plugins: {
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config_kesiapan = {
    type: 'pie',
    data: {
        labels: ['Sangat Tidak Siap', 'Tidak Siap','Siap','Sangat Siap'],
        datasets: [{
            label: 'Kesiapan Pemanfaatan TIK',
            data: [968,900,931,904],
            // backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            backgroundColor: ["#951A2E", "#C4314E","#F58020","#FBAC1B"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
       
        rotation: 0, // Starting angle in degrees
        circumference: 360, // Sweep to allow arcs to cover

        animation: {
            animateRotate: true, // Animate rotation
            animateScale: true // Animate scale
        },

        plugins: {
            labels: {
                render: 'percentage',
                precision: 2,
                fontColor: 'white',
                fontSize: 14
            }
        }
    }
};

const config_faktor = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [
            {
            label: 'Sudah Memanfaatkan TIK',
            data: [1399,410],
            backgroundColor: ["#951A2E"],
            borderWidth: 1
            },
            {
                label: 'Tidak Memanfaatkan TIK',
                data: [1484,410],
                backgroundColor: ["#F58020"],
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
                display: false,
                beginAtZero: true,
                title: {
                    display: false,
                    text: 'Jumlah'
                },
                grid : {
                    display : false
                }
            }
        },
        plugins: {
            legend: {
                position:"bottom"
            },
            // title: {
            //     display: true,
            //     text: 'Jumlah Pemilik Usaha Berdasarkan Skala Usaha dan Pemanfaatan TIK',
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     },
            //     font: {
            //         size: 20,
            //         family : 'Helvetica'
            //     }
            // },
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
