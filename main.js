Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Dewi Nur Apriliyani",
        description:
          "My name is Dewi Nur Apriliyani a student of Ahmad Dahlan University Yogyakarta, born in Klaten on April 1, 2002",
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
          description: "SD Muhammadiyah Wedi adalah sebuah satuan pendidikan setingkat SD di Kalitengah, Wedi, Kabupaten Klaten, Jawa Tengah.",
          thumbnail: 'image/sd.png'
        },
        articles2: 
        {
          description: "SMP Negeri 1 Wedi adalah Sekolah Menengah Pertama Negeri yang terletak di Kabupaten Klaten dengan alamat Sukorejo, Wedi, Klaten.",
          thumbnail: 'image/smp1.jpg'
        },
        articles3: 
        {
          description: "SMA Negeri 1 Jogonalan adalah sebuah satuan pendidikan setingkat SMA di Prawatan, Jogonalan, Kabupaten Klaten, Jawa Tengah.",
          thumbnail: 'image/sma.jpg'
        },
      
    };
  },
}).mount("#app");
