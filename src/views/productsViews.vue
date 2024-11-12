<template>
  <div>
    <h1>Bücher</h1>
    <div class="product-grid">
      <router-link
        :to="{ name: 'articleView', params: { id: product.id }}"
        v-for="product in products"
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
        { id: 3, name: "Harry Potter Teil 3", description: "Beschreibung von Harry Potter Teil 3", price: 39.99 },
        { id: 4, name: "Harry Potter Teil 4", description: "Beschreibung von Harry Potter Teil 4", price: 39.99 },
        { id: 5, name: "Harry Potter Teil 5", description: "Beschreibung von Harry Potter Teil 5", price: 39.99 },
        { id: 6, name: "Harry Potter Teil 6", description: "Beschreibung von Harry Potter Teil 6", price: 39.99 },
        { id: 7, name: "Harry Potter Teil 7", description: "Beschreibung von Harry Potter Teil 7", price: 39.99 },
        { id: 8, name: "Harry Potter Teil 8", description: "Beschreibung von Harry Potter Teil 8", price: 39.99 },
        { id: 9, name: "Harry Potter Teil 9", description: "Beschreibung von Harry Potter Teil 9", price: 39.99 },
        { id: 10, name: "Harry Potter Teil 10", description: "Beschreibung von Harry Potter Teil 10", price: 39.99 },
        // Weitere Produkte hinzufügen
      ],
    };
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
    <div>
      <h1>Produkte</h1>
      <div class="product" v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Preis: {{ product.price }} €</p>
        <button @click="addToCart(product)">In den Warenkorb</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "productsViews",
    data() {
      return {
        products: [
          { id: 1, name: "Harry Potter Teil 1", description: "Beschreibung von Harry Potter Teil 1", price: 29.99, },
          { id: 2, name: "Harry Potter Teil 2", description: "Beschreibung von Harry Potter Teil 2", price: 39.99 },
          { id: 3, name: "Harry Potter Teil 3", description: "Beschreibung von Harry Potter Teil 3", price: 39.99 },
          { id: 4, name: "Harry Potter Teil 4", description: "Beschreibung von Harry Potter Teil 4", price: 39.99 },
          { id: 5, name: "Harry Potter Teil 5", description: "Beschreibung von Harry Potter Teil 5", price: 39.99 },
          { id: 6, name: "Harry Potter Teil 6", description: "Beschreibung von Harry Potter Teil 6", price: 39.99 },
          { id: 7, name: "Harry Potter Teil 7", description: "Beschreibung von Harry Potter Teil 7", price: 39.99 },
          { id: 8, name: "Harry Potter Teil 8", description: "Beschreibung von Harry Potter Teil 8", price: 39.99 },
          { id: 9, name: "Harry Potter Teil 9", description: "Beschreibung von Harry Potter Teil 9", price: 39.99 },
          { id: 10, name: "Harry Potter Teil 10", description: "Beschreibung von Harry Potter Teil 10", price: 39.99 },
          // Weitere Produkte hinzufügen
        ],
      };
    },
    methods: {
  addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      // Wenn das Produkt bereits im Warenkorb ist, erhöhe die Menge
      existingItem.quantity += 1;
    } else {
      // Füge das Produkt neu zum Warenkorb hinzu
      product.quantity = 1; // Setze die Menge auf 1
      cartItems.push(product);
    }
  }
};
</script>

<style scoped>
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
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.3s ease;
}

.product:hover {
  transform: scale(1.05);
}

.product h3 {
  font-size: 1.2em;
  margin: 0.5em 0;
}

.product p {
  margin: 0.5em 0;
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
