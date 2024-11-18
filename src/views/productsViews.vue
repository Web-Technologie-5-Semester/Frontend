<template>
  <div class="container">
    <!-- Filtermenu -->
    <aside class="filter-menu">
      <h3>Filter</h3>
      <div>
        <label>
          <input type="checkbox" value="Neu" v-model="selectedCategories" />
          Neu
        </label>
      </div>
      <div>
        <label>Maximaler Preis:</label>
        <input type="number" v-model="maxPrice" placeholder="Max. Preis" />
      </div>
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
            <p>{{ product.description }}</p>
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
        { id: 1, name: "Harry Potter Teil 1", image: require('@/assets/harry-potter-teil-1.jpg'), description: "Beschreibung von Harry Potter Teil 1", price: 29.99 },
        { id: 2, name: "Harry Potter Teil 2", description: "Beschreibung von Harry Potter Teil 2", price: 39.99 },
        { id: 3, name: "Harry Potter Teil 3", description: "Beschreibung von Harry Potter Teil 3", price: 49.99 },
        { id: 4, name: "Harry Potter Teil 4", description: "Beschreibung von Harry Potter Teil 4", price: 19.99 },
        { id: 5, name: "Harry Potter Teil 5", description: "Beschreibung von Harry Potter Teil 5", price: 59.99 },
        { id: 6, name: "Hard Land", description: "Beschreibung von Hard Land", price: 39.99 },
      ],
      selectedCategories: [],
      maxPrice: null,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory = this.selectedCategories.length
          ? this.selectedCategories.includes(product.category)
          : true;
        const matchesPrice = this.maxPrice ? product.price <= this.maxPrice : true;
        return matchesCategory && matchesPrice;
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
</style>
