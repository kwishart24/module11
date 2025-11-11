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
    <GoBack/>
  </div>
</template>

<script>
  import GoBack from '@/components/GoBack.vue';

  export default {
    components: {GoBack}
  }
</script>



