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
        articles: 
        {
         title: 'WHAT ABOUT ME ?',
         description: "My name is Dewi Nur Apriliyani, born in Klaten on April 1, 2002. I am the second of two children. My mother is a teacher and my father is a private employee.I have an older sister, she is a teacher.I am currently a 4th semester student of the Information Systems study program at Ahmad Dahlan University.",
         thumbnail: 'image/foto.jpg'
       },
        articles1: 
        {
          title: 'WHAT ABOUT MY EDUCATION ?',
        },
        articles2: 
        {
          description: "Wedi Muhammadiyah Elementary School is an elementary-level educational unit in Kalitengah, Wedi, Klaten Regency, Central Java.",
          thumbnail: 'image/sd.png'
        },
        articles3: 
        {
          description: "Wedi State Junior High School 1 is a State Junior High School located in Klaten Regency with the address Sukorejo, Wedi, Klaten.",
          thumbnail: 'image/smp1.jpg'
        },
        articles4: 
        {
          description: "State High School 1 Jogonalan is an educational unit with a high school level in Prawatan, Jogonalan, Klaten Regency, Central Java.",
          thumbnail: 'image/sma.jpg'
        },
      
    };
  },
}).mount("#app");
