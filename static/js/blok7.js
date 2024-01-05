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
