<template>
  <div class="container">
    <!-- Filtermenu -->
    <aside class="filter-menu">
      <h3>Filter</h3>
      <router-link to="/offerBooksView" class="add-book-button">
        Neues Buch anlegen
      </router-link>
      <div>
        <label>
          <input type="checkbox" value="Neu" v-model="selectedCategories" />Neu
        </label>
        <br><br>
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
      </div>
      <br>
      <div>
        <label>Autor: </label>
        <select v-model="selectedAuthor">
          <option value="">Alle Autoren</option>
          <option value="J.K. Rowling">J.K. Rowling</option>
          <option value="Benedict Wells">Benedict Wells</option>
        </select>
      </div>
      <br>
      <div>
        <label>Verlag: </label>
        <select v-model="selectedVerlag">
          <option value="">Alle Verlage</option>
          <option value="DuMont">DuMont</option>
          <option value="Ernst Klett Verlag">Ernst Klett Verlag</option>
          <option value="Cornelsen Verlag">Cornelsen Verlag</option>
        </select>
      </div>
      <br>
      <div>
        <label>Maximaler Preis:</label>
        <input
          type="range"
          v-model="maxPrice"
          :min="minPrice"
          :max="maxAvailablePrice"
          step="1"
        />
        <span>{{ maxPrice }} €</span>
      </div>
      <br>
    </aside>

    <!-- Produkte -->
    <main class="products-container">
      <h1>Bücher</h1>
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
            <p>{{ product.author }}</p>
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
      maxPrice: 60, // Default-Wert für den Schieberegler
      minPrice: 0, // Minimaler Preis
    };
  },
  computed: {
    maxAvailablePrice() {
      return Math.max(...this.products.map((product) => product.price));
    },
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory = this.selectedCategories.length
          ? this.selectedCategories.includes(product.category)
          : true;
        const matchesGenre = this.selectedGenre ? product.genre === this.selectedGenre : true;
        const matchesVerlag = this.selectedVerlag ? product.verlag === this.selectedVerlag : true;
        const matchesAuthor = this.selectedAuthor ? product.author === this.selectedAuthor : true;
        const matchesPrice = product.price <= this.maxPrice;
        return matchesCategory && matchesGenre && matchesAuthor && matchesVerlag && matchesPrice;
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
  font-family: 'Poppins', sans-serif;
}

/* Filtermenu-Styling */
.filter-menu {
  flex: 1;
  border: 1px solid #e0e0e0; /* Dezente Umrandung */
  padding: 1.5em;
  border-radius: 10px;
  background: linear-gradient(135deg, #f9f9f9, #e8f5ff); /* Heller Farbverlauf */
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
}

.filter-menu h3 {
  margin-bottom: 1.5em;
  color: #001f3f; /* Akzentfarbe */
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
}

.filter-menu label {
  font-weight: 500;
  margin-bottom: 0.5em;
  display: block;
  color: #0074D9; /* Dunkelblau für Labels */
}

.filter-menu select,
.filter-menu input[type="range"] {
  width: 100%;
  padding: 0.7em;
  margin-top: 0.5em;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

.filter-menu select:focus,
.filter-menu input[type="range"]:focus {
  border-color: #0074D9;
  outline: none;
}

.filter-menu span {
  font-weight: bold;
  color: #001f3f;
}

/* Produktübersicht */
.products-container {
  flex: 3;
}

.products-container h1 {
  font-size: 2em;
  color: #001f3f;
  margin-bottom: 1em;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.product {
  background: linear-gradient(135deg, #ffffff, #f9f9f9); /* Dezentes Weiß */
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5em;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sanfter Schatten */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1em;
}

.product h3 {
  font-size: 1.4em;
  margin-bottom: 0.5em;
  color: #001f3f;
}

.product p {
  font-size: 0.95em;
  margin-bottom: 0.5em;
  color: #555;
}

.product button {
  background: linear-gradient(135deg, #0074D9, #001f3f);
  color: white;
  border: none;
  padding: 0.8em 1em;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.product button:hover {
  background: linear-gradient(135deg, #001f3f, #0074D9);
}

/* Button für "Neues Buch anlegen" */
.add-book-button {
  display: inline-block;
  background: linear-gradient(135deg, #0074D9, #001f3f);
  color: white;
  padding: 0.7em 1.5em;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-book-button:hover {
  background: linear-gradient(135deg, #001f3f, #0074D9);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
