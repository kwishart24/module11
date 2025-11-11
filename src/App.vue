<template>
  <div id="app" class="container">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

import axios from "axios";

export default {
  components: { TheNavigation },
  name: "App",

  data() {
    return {
      quote: "", //stores the quote text
      author: "", //store the author name
      loading: false, //tracks laoding status
    };
  },

  methods: {
    async getQuote() {
      this.loading = true;
      try {
        //Send a GET request to the Quotable API
        const response = await axios.get(
          "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
          {
            headers: {
              "x-rapidapi-host": "quotes15.p.rapidapi.com",
              "x-rapidapi-key":
                "2b5988ae99msh3342f28de56f493p15c1b0jsna94a1c445e94",
            },
          }
        );

        //Update the quote with the response data
        this.quote = response.data.content;
        this.author = response.data.originator.name;
        //console.log(response);
      } catch (error) {
        console.error("Error fetching quote:", error);
        this.quote = "Oops! Something went wrong.";
        this.author = "";
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    //Load a random quote when the app first starts
    this.getQuote();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 50px auto;
  background-color: #cec2eb;
  width: 60%;
  padding: 2em;
}

h1 {
  font-weight: 700;
}

button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: aquamarine;
  border-color: aquamarine;
  font-weight: 700;
}
.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
