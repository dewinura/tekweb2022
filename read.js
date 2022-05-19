Vue.createApp({
    data() {
      return {
        articles: null,
      };
    },
    methods: {
      getMarkdownData() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get('article');
        var converter = new showdown.Converter();
        console.log(articles);
        axios
          .get("https://raw.githubusercontent.com/dewinura/tekweb2022/main/contents/"+
          article
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);
            this.articles = html;
            console.log(html);
          })
          .catch((error) => {
            consoles.log(error);
          });
      },
    },
    beforeMount() {
      this.getMarkdownData();
    },
  }).mount('#app');