<template>
  <div class="container">
    <!-- Filtermenu -->
    <aside class="filter-menu">
      <h3>Filter</h3>
      <div>
        <label>
          <input type="checkbox" value="Neu" v-model="selectedCategories" />Neu
        </label><br><br>
      </div>
      <div>
        <label>Genre: </label>
        <select v-model="selectedGenre">
          <option value="">Alle Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Krimi">Krimi</option>
          <option value="Romantik">Romantik</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
        </select>
      </div><br>
      <div>
        <label>Autor: </label>
        <select v-model="selectedAuthor">
          <option value="">Alle Autoren</option>
          <option value="J.K. Rowling">J.K. Rowling</option>
          <option value="Benedict Wells">Benedict Wells</option>
        </select>
      </div><br>
      <div>
        <label>Verlag: </label>
        <select v-model="selectedVerlag">
          <option value="">Alle Verlage</option>
          <option value="DuMont">DuMont</option>
          <option value="Ernst Klett Verlag">Ernst Klett Verlag</option>
          <option value="Cornelsen Verlag">Cornelsen Verlag</option>
        </select>
      </div><br>
      <div>
        <label>Maximaler Preis:</label>
        <input type="number" v-model="maxPrice" placeholder="Max. Preis" />
      </div><br>
    </aside>

    <!-- Produkte -->
    <main class="products-container">
      <h1>Bücher</h1>
      <router-link to="/offerBooksView" class="add-book-button">Neues Buch anlegen</router-link>
      <div class="product-grid">
        <router-link
          :to="{ name: 'articleView', params: { id: product.id }}"
          v-for="product in filteredProducts" 
          :key="product.id"
          class="product-link"
        >
          <div class="product">
            <h3>{{ product.name }}</h3>
            <img :src="product.image" alt="Bild von {{ product.name }}" class="product-image" />
            <p>{{ product.genre }}</p>
            <p> {{ product.author }}</p>
            <p>{{ product.description }}</p>
            <p>{{ product.verlag }}</p>
            <p>Preis: {{ product.price }} €</p>
            <button @click.prevent="addToCart(product)">In den Warenkorb</button>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "productsViews",
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
      selectedCategories: [],
      selectedGenre: "",
      selectedAuthor: "",
      selectedVerlag: "",
      maxPrice: null,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory = this.selectedCategories.length
          ? this.selectedCategories.includes(product.category)
          : true;
        const matchesGenre = this.selectedGenre ? product.genre === this.selectedGenre : true;
        const matchesVerlag = this.selectedVerlag ? product.verlag === this.selectedVerlag : true;
        const matchesAuthor = this.selectedAuthor ? product.author === this.selectedAuthor : true;
        const matchesPrice = this.maxPrice ? product.price <= this.maxPrice : true;
        return matchesCategory && matchesGenre && matchesAuthor &&matchesVerlag && matchesPrice;
      });
    },
  },
  methods: {
    addToCart(product) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingItem = cartItems.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        product.quantity = 1;
        cartItems.push(product);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 2em;
}

/* Filtermenu-Styling */
.filter-menu {
  flex: 1;
  border: 1px solid #ccc;
  padding: 1em;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.filter-menu h3 {
  margin-bottom: 1em;
}

.filter-menu input[type="number"] {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.5em;
}

.filter-menu input[type="text"] {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.5em;
}

/* Produktübersicht */
.products-container {
  flex: 3;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1em;
  text-align: center;
  transition: transform 0.3s ease;
}

.product:hover {
  transform: scale(1.05);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5em;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Button für "Neues Buch anlegen" */
.add-book-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 1em;
}

.add-book-button:hover {
  background-color: #0056b3;
}
</style>
