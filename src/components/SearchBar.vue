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
      default: "",
    },
  },
  data() {
    return {
      products: [
        { id: 1, name: "Harry Potter Teil 1", genre: "Fantasy", price: 29.99 },
        { id: 2, name: "Harry Potter Teil 2", genre: "Fantasy", price: 39.99 },
        { id: 3, name: "Harry Potter Teil 3", genre: "Fantasy", price: 49.99 },
        { id: 4, name: "Harry Potter Teil 4", genre: "Drama", price: 19.99 },
        { id: 5, name: "Harry Potter Teil 5", genre: "Drama", price: 19.99 },
        { id: 6, name: "Hard Land", genre: "Drama", price: 24.99 },
      ],
      filteredSuggestions: [], // Gefilterte Vorschläge basierend auf Eingaben
    };
  },
  mounted() {
    // Globalen Mousedown-Listener hinzufügen
    document.addEventListener("mousedown", this.handleClickOutside);
  },
  beforeUnmount() {
    // Event Listener beim Zerstören des Components entfernen
    document.removeEventListener("mousedown", this.handleClickOutside);
  },
  methods: {
    /**
     * Aktualisiere den Suchbegriff und filtere Vorschläge
     */
    updateQuery(event) {
      this.$emit("update:searchQuery", event.target.value);
      this.filterSuggestions(event.target.value);
    },
    /**
     * Filtere Vorschläge basierend auf der Eingabe
     */
    filterSuggestions(query) {
      if (query.trim()) {
        this.filteredSuggestions = this.products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.filteredSuggestions = [];
      }
    },
    /**
     * Reagiere auf Klick auf ein Suchergebnis
     */
    onSuggestionClick(suggestion) {
      // Navigiere zur Produktseite
      this.$router.push({ name: "articleView", params: { id: suggestion.id } });

      // Leere die Vorschläge und das Suchfeld
      this.filteredSuggestions = [];
      this.$emit("update:searchQuery", "");
    },
    /**
     * Verarbeite den Klick auf das Such-Icon
     */
    onSearchClick() {
      if (this.searchQuery.trim()) {
        // Navigiere zur Suchergebnisseite
        this.$router.push({
          name: "SearchResults",
          query: { q: this.searchQuery },
        });
      }
      // Schließe die Vorschläge, wenn auf das Such-Icon geklickt wird
      this.filteredSuggestions = [];
    },
    /**
     * Überprüft, ob der Klick außerhalb des Suchfelds oder Dropdowns war
     */
    handleClickOutside(event) {
      const searchBar = this.$refs.searchInput;
      const suggestionsDropdown = this.$el.querySelector('.suggestions-dropdown');
      // Wenn der Klick außerhalb des Suchbereichs oder des Dropdowns ist
      if (
        searchBar && !searchBar.contains(event.target) &&
        suggestionsDropdown && !suggestionsDropdown.contains(event.target)
      ) {
        // Schließe das Dropdown
        this.filteredSuggestions = [];
      }
    },
  },
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
