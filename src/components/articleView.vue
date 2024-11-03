<template>
  <div class="article-view">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Preis: {{ product.price }} €</p>
    <button @click="addToCart(product)">In den Warenkorb</button>
    <router-link to="/products" class="back-button">Zurück zur Produktübersicht</router-link>
  </div>
</template>

<script>
export default {
  name: "articleView",
  data() {
    return {
      product: {}
    };
  },
  created() {
    const productId = parseInt(this.$route.params.id);
    const products = [
    { id: 1, name: "Harry Potter Teil 1", description: "Beschreibung von Harry Potter Teil 1", price: 29.99 },
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
    ];
    this.product = products.find((product) => product.id === productId);
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
    }
  }
};
</script>

<style scoped>
.article-view {
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.article-view h1 {
  font-size: 2em;
  margin-bottom: 1em;
}

.article-view p {
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
