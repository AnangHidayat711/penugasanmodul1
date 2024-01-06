const config308x421 = {
    type: 'bar',
    data: {
        labels: ['Kecil', 'Mikro'],
        datasets: [
            {
            label: 'Sudah Memanfaatkan TIK',
            data: [1399,410],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Tidak Memanfaatkan TIK',
                data: [1484,410],
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
                text: 'Jumlah Pemilik Usaha Berdasarkan Skala Usaha dan Pemanfaatan TIK',
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

const config308x401b = {
    type: 'bar',
    data: {
        labels: ['PC', 'Laptop','Tablet','Smartphone'],
        datasets: [
            {
            label: 'Kecil',
            data: [842,836,828,817],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Mikro',
                data: [256,263,255,253],
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
                text: 'Jumlah Pemilik Usaha Berdasarkan Skala Usaha dan Perangkat Digital',
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
                textMargin: 5, // Jarak antara label dan batang
            },
        }
    }
};

const config308x403b = {
    type: 'bar',
    data: {
        labels: ['Email', 'WhatsApp','Line','Telegram','Instagram','Twitter','Lainnya'],
        datasets: [
            {
            label: 'Kecil',
            data: [845,842,866,840,858,817,839],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Mikro',
                data: [235,243,228,240,242,237,235],
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
                text: 'Jumlah Pemilik Usaha Berdasarkan Skala Usaha dan Sosial Media',
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
                fontSize: 10,
                position: 'end', // Posisi label (end, start, top, bottom)
                textMargin: 8, // Jarak antara label dan batang
            },
        }
    }
};

const config308x405b = {
    type: 'bar',
    data: {
        labels: ['Media Sosial','Marketplace','Keduanya'],
        datasets: [
            {
            label: 'Kecil',
            data: [740,721,682],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Mikro',
                data: [210,202,207],
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
                text: 'Jumlah Unit Usaha Berdasarkan Jenis Sarana Promosi dan Skala Usaha',
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

const config308x407b = {
    type: 'bar',
    data: {
        labels: ['Media Sosial','Marketplace'],
        datasets: [
            {
            label: 'Kecil',
            data: [940,1000],
            backgroundColor: ["#F58020"],
            borderWidth: 1
            },
            {
                label: 'Mikro',
                data: [285,240],
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
                text: 'Jumlah Unit Usaha Berdasarkan Jenis Sarana Penjualan dan Skala Usaha',
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

const config401a = {
    type: 'pie',
    data: {
        labels: ['Ya', 'Tidak'],
        datasets: [{
            label: 'Penggunaan Perangkat Digital',
            data: [1855,1848],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Penggunaan Perangkat Digital Untuk Aktivitas Unit Usaha',
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

const config401b = {
    type: 'bar',
    data: {
        labels: ['Laptop', 'PC', 'Tablet', 'Smartphone'],
        datasets: [{
            label: 'Perangkat Digital',
            data: [1099,1098,1083,1070],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Jenis Perangkat Digital yang Digunakan',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};

const config403a = {
    type: 'bar',
    data: {
        labels: ['Ya', 'Tidak'],
        datasets: [{
            label: 'Penggunaan Aplikasi',
            data: [1875, 1828],
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
                text: 'Penggunaan Aplikasi untuk Berkomunikasi',
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

const config403b = {
    type: 'bar',
    data: {
        labels: ['Instagram', 'Line', 'WhatsApp', 'Email','Telegram','Lainnya','Twitter'],
        datasets: [{
            label: 'Aplikasi Komunikasi',
            data: [1100,1094,1085,1080,1080,1074,1054],
            backgroundColor: ["#CA2128", "#EC2B26", "#F58020", "#FBAC1B", "#FFC837", "#FBE47E", "#FFFAE6"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Aplikasi Komunikasi yang Digunakan',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};

const config405a = {
    type: 'bar',
    data: {
        labels: ['Memanfaatkan (Konvensional)','Tidak Memanfaatkan', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [966,941,909,887],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Unit Usaha Berdasarkan Pemanfaatan TIK pada Kegiatan Promosi',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};

const config405b = {
    type: 'pie',
    data: {
        labels: ['Media Sosial', 'Marketplace','Keduanya'],
        datasets: [{
            label: 'Sarana Promosi Usaha',
            data: [34.40,33.42,32.19],
            backgroundColor: ["#F58020", "#FBAC1B","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Sarana Promosi Usaha yang Digunakan',
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

const config407a = {
    type: 'bar',
    data: {
        labels: ['Memanfaatkan (Konvensional)','Tidak Memanfaatkan', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [1249,1238,1216,0],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Unit Usaha Berdasarkan Pemanfaatan TIK pada Kegiatan Penjualan',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};

const config407b = {
    type: 'bar',
    data: {
        labels: ['Marketplace', 'Media Sosial'],
        datasets: [{
            label: 'Sarana Penjualan',
            data: [1240, 1225],
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
                text: 'Sarana Penjualan Usaha yang Digunakan',
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

const config409a = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Semua Memanfaatkan','Memanfaatkan (Konvensional)',  'Sebagian Besar Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [969,952,916,866],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Unit Usaha Berdasarkan Pemanfaatan TIK pada Kegiatan Promosi',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};

const config409b = {
    type: 'bar',
    data: {
        labels: ['Transfer', 'Kartu', 'E-Wallet', 'QRIS'],
        datasets: [{
            label: 'Sarana Transaksi Pembayaran',
            data: [2244,2225,2217,2194],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                grid : {
                    display : false
                }
            },
            y: {
                beginAtZero: true,
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
                text: 'Sarana Transaksi Pembayaran yang Disediakan',
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
                textMargin: 0, // Jarak antara label dan batang
                offset: 5, // Offset tambahan untuk memastikan label tidak menabrak batang
            },
        }
    }
};


const config411 = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Memanfaatkan (Konvensional)', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Penggunaan Aplikasi',
            data: [931, 920, 942, 910],
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
                text: 'Pemanfaatan TIK Dalam Catatan Transaksi Pembayaran',
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

const config413 = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Memanfaatkan (Konvensional)', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [955, 906, 911, 931],
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
                text: 'Pemanfaatan TIK Dalam Catatan Keuangan Unit Usaha',
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

const config415 = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Memanfaatkan (Konvensional)', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [915, 960, 922, 906],
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
                text: 'Pemanfaatan TIK Dalam Perencanaan Keuangan Unit Usaha',
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

const config417 = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Memanfaatkan (Konvensional)', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [913, 936, 931, 923],
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
                text: 'Pemanfaatan TIK Dalam Pengadaan Kebutuhan/Logistik Unit Usaha',
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

const config419 = {
    type: 'bar',
    data: {
        labels: ['Tidak Memanfaatkan', 'Memanfaatkan (Konvensional)', 'Sebagian Besar Memanfaatkan', 'Semua Memanfaatkan'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [976, 874, 951, 902],
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
                text: 'Pemanfaatan TIK Dalam Aktivitas Manajemen Pegawai Unit Usaha',
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

const config421 = {
    type: 'pie',
    data: {
        labels: ['Ya', 'Tidak'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [1809,1894],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Pemanfaatan TIK Pada Unit Usaha',
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

const config423 = {
    type: 'pie',
    data: {
        labels: ['Ya', 'Tidak'],
        datasets: [{
            label: 'Pemanfaatan TIK',
            data: [24.4,75.6],
            backgroundColor: ["#F58020", "#FBAC1B","#FFC837","#FBE47E"],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        
        plugins: {
            title: {
                display: true,
                text: 'Terdapat Pekerja yang Bertanggungjawab dalam Penggunaan TIK',
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

const config424 = {
    type: 'bar',
    data: {
        labels: ['Usaha Kecil', 'Usaha Mikro'],
        datasets: [{
            label: 'Rata-Rata Jumlah Tenaga Kerja',
            data: [1.19, 1.31],
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
                    text: 'Rata-Rata Jumlah Tenaga Kerja TIK'
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
                text: 'Rata-Rata Jumlah Tenaga Kerja TIK pada Unit Usaha',
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