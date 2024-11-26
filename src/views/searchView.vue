<template>
  <div class="search-view">
    <!-- Ergebnisse -->
    <div v-if="results.length" class="results-container">
      <h2>Ergebnisse für "{{ searchQuery }}":</h2>
      <div class="results-grid">
        <!-- Router-Link für dynamische Navigation -->
        <router-link
          :to="{ name: 'articleView', params: { id: result.id }}"
          v-for="(result, index) in results"
          :key="index"
          class="product-link"
        >
          <div class="result-card">
            <img :src="result.image" :alt="`Bild von ${result.name}`" class="result-image" />
            <div class="result-info">
              <h3 class="result-title">{{ result.name }}</h3>
              <p class="result-author">{{ result.author }}</p>
              <p class="result-genre">{{ result.genre }}</p>
              <p class="result-verlag">{{ result.verlag }}</p>
              <p class="result-price">{{ result.price }} €</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Keine Ergebnisse -->
    <div v-else class="no-results">
      <p>Keine Ergebnisse gefunden für "{{ searchQuery }}".</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchView",
  data() {
    return {
      results: [], // Speichert die Suchergebnisse
      products: [
        { id: 1, name: "Harry Potter Teil 1", genre: "Fantasy", image: require('@/assets/harry-potter-teil-1.jpg'), description: "Beschreibung von Harry Potter Teil 1", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 29.99 },
        { id: 2, name: "Harry Potter Teil 2", genre: "Fantasy", image: require('@/assets/harry-potter-teil-2.jpg'), description: "Beschreibung von Harry Potter Teil 2", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 3, name: "Harry Potter Teil 3", genre: "Fantasy", image: require('@/assets/harry-potter-teil-3.jpg'), description: "Beschreibung von Harry Potter Teil 3", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 49.99 },
        { id: 4, name: "Harry Potter Teil 4", genre: "Fantasy", image: require('@/assets/harry-potter-teil-4.jpg'), description: "Beschreibung von Harry Potter Teil 4", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 19.99 },
        { id: 5, name: "Harry Potter Teil 5", genre: "Fantasy", image: require('@/assets/harry-potter-teil-5.jpg'), description: "Beschreibung von Harry Potter Teil 5", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 59.99 },
        { id: 6, name: "Hard Land", genre: "Drama", image: require('@/assets/hard-land.jpg'), description: "Beschreibung von Hard Land", author: "Benedict Wells", verlag: "DuMont", price: 39.99 },
      ],
    };
  },
  computed: {
    searchQuery() {
      // Holt die aktuelle Query direkt aus der URL
      return this.$route.query.q || "";
    },
  },
  watch: {
    // Beobachtet Änderungen an der Query in der URL
    searchQuery: {
      immediate: true, // Beim ersten Laden der Komponente wird der Watcher ebenfalls ausgeführt
      handler(newQuery) {
        this.fetchResults(newQuery); // Führt die Suche bei jeder Änderung erneut aus
      },
    },
  },
  methods: {
    fetchResults(query) {
      // Filtert die Produkte basierend auf der Suchanfrage
      this.results = this.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.author.toLowerCase().includes(query.toLowerCase()) ||
        product.genre.toLowerCase().includes(query.toLowerCase()) ||
        product.verlag.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  mounted() {
    // Führt beim Laden der Komponente die erste Suche durch
    this.fetchResults(this.searchQuery);
  },
};
</script>

<style scoped>
.search-view {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.results-container {
  margin-top: 20px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.result-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.result-image {
  max-width: 150px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.result-info {
  text-align: center;
}

.result-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.result-author,
.result-genre,
.result-verlag {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
}

.result-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  margin-top: 10px;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin-top: 20px;
}
</style>
