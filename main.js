Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Dewi Nur Apriliyani",
        description:
          "Let's be your self",
        social: {
          ig: {
            url: "https://www.instagram.com/dewinaa.__/",
            title: "dewinaa.__",
          },
          fb: {
            url: "https://github.com/dewinura/tekweb2022",
            title: "dewinura",
          },
        },
        imageProfile:
          "image/fotokuu.png",
        },
        articles1: 
        {
         title: 'WHAT ABOUT ME ?',
         description: "Nama saya Dewi Nur Apriliyani, lahir di Klaten pada tanggal 1 April 2002. Saya anak kedua dari dua bersaudara. Ibu saya adalah seorang guru dan ayah saya adalah seorang pegawai swasta. Saya memiliki seorang kakak perempuan, dia seorang guru. Saat ini saya adalah mahasiswi semester 4 program studi Sistem Informasi Universitas Ahmad Dahlan.",
         thumbnail: 'image/foto.jpg'
       },
        articles2: 
        {
          description: "SD Muhammadiyah Wedi adalah sebuah satuan pendidikan setingkat SD di Kalitengah, Wedi, Kabupaten Klaten, Jawa Tengah.",
          thumbnail: 'image/sd.png'
        },
        articles3: 
        {
          description: "SMP Negeri 1 Wedi adalah Sekolah Menengah Pertama Negeri yang terletak di Kabupaten Klaten dengan alamat Sukorejo, Wedi, Klaten.",
          thumbnail: 'image/smp1.jpg'
        },
        articles4: 
        {
          description: "SMA Negeri 1 Jogonalan adalah sebuah satuan pendidikan setingkat SMA di Prawatan, Jogonalan, Kabupaten Klaten, Jawa Tengah.",
          thumbnail: 'image/sma.jpg'
        },
      
    };
  },
}).mount("#app");
