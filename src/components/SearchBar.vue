<template>
  <div class="custom-searchbar">
    <input
      ref="searchInput"
      type="text"
      :value="searchQuery"
      @input="updateQuery"
      class="search-input"
      placeholder="Suche nach Büchern..."
    />
    <!-- Such-Icon mit Click-Event -->
    <i class="fas fa-search search-icon" @click="onSearchClick"></i>

    <!-- Dropdown mit möglichen Ergebnissen -->
    <ul v-if="filteredSuggestions.length > 0" class="suggestions-dropdown">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        @click="onSuggestionClick(suggestion)"
        class="suggestion-item"
      >
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "SearchBar",
  props: {
    searchQuery: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      products: [
        { id: 1, name: "Harry Potter Teil 1", genre: "Fantasy", image: require('@/assets/harry-potter-teil-1.jpg'), description: "Beschreibung von Harry Potter Teil 1", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 29.99 },
        { id: 2, name: "Harry Potter Teil 2", genre: "Fantasy", image: require('@/assets/harry-potter-teil-2.jpg'), description: "Beschreibung von Harry Potter Teil 2", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 3, name: "Harry Potter Teil 3", genre: "Fantasy", image: require('@/assets/harry-potter-teil-3.jpg'), description: "Beschreibung von Harry Potter Teil 3", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 49.99 },
        { id: 4, name: "Harry Potter Teil 4", genre: "Fantasy", image: require('@/assets/harry-potter-teil-4.jpg'), description: "Beschreibung von Harry Potter Teil 4", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 19.99 },
        { id: 5, name: "Harry Potter Teil 5", genre: "Fantasy", image: require('@/assets/harry-potter-teil-5.jpg'), description: "Beschreibung von Harry Potter Teil 5", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 59.99 },
        { id: 6, name: "Hard Land", genre: "Drama", image: require('@/assets/hard-land.jpg'), description: "Beschreibung von Hard Land", author: "Benedict Wells", verlag: "DuMont", price: 39.99 },
      ],
      filteredSuggestions: [] // Gefilterte Produktvorschläge
    };
  },
  methods: {
    updateQuery(event) {
      this.$emit("update:searchQuery", event.target.value);
      this.filterSuggestions(event.target.value);
    },
    onSearchClick() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: "SearchResults", query: { q: this.searchQuery } });
      }
    },
    filterSuggestions(query) {
      if (query) {
        this.filteredSuggestions = this.products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.filteredSuggestions = [];
      }
    },
    onSuggestionClick(suggestion) {
      // Navigiere direkt zur Artikelansicht des Produkts
      this.$router.push({ name: "articleView", params: { id: suggestion.id } });

      // Leere die Vorschlagsliste
      this.filteredSuggestions = [];

      // Leere das Suchfeld und fokussiere es erneut
      this.$emit("update:searchQuery", "");
      this.$nextTick(() => {
        // Fokus explizit auf das Input-Feld setzen
        this.$refs.searchInput.focus();
      });
    }
  }
};
</script>


<style scoped>
.custom-searchbar {
  position: relative;
  flex: 1;
  max-width: 500px;
  margin-left: 2em;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 15px 50px 15px 20px;
  border-radius: 25px;
  font-size: 1.2em;
  border: none;
  background-color: #f0f0f0;
  box-sizing: border-box;
  color: #333;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #0074D9;
  outline: none;
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5em;
  color: #0074D9;
  cursor: pointer;
}

.suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  margin-top: 5px;
  padding: 0;
  list-style: none;
}

.suggestion-item {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

.suggestion-item:last-child {
  border-bottom: none;
}
</style>
