<template>
  <div id="app" class="quotes container">
    <h1>Random Quote Generator</h1>
    <br />

    <!-- Display the quote or a loading message -->
    <h2 v-if="loading">Loading...</h2>
    <h2 v-else>
      "{{ quote }}" <br /><br />
      - {{ author }}
    </h2>

    <!-- The button that triggers the API call -->
    <button @click="getQuote">Get New Quote</button>
    <GoBack />
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
import axios from "axios";

export default {
  components: { GoBack },
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
