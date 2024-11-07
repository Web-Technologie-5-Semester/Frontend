<template>
  <div class="article-view">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Bild von {{ product.name }}" class="product-image" />
    <p class="description">{{ product.description }}</p>
    <p class="price">Preis: {{ product.price }} €</p>
    <button @click="addToCart(product)" class="button">In den Warenkorb</button><br><br>
    <router-link to="/products" class="button">Zurück zur Produktübersicht</router-link>
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
    const productId = parseInt(this.$route.params.id); // Produkt-ID aus der URL
    const products = [
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
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.description {
  font-size: 1.1em;
  color: #555;
  margin: 20px 0;
}

.price {
  font-size: 1.5em;
  font-weight: bold;
  color: #0074D9;
}

.button {
  background-color: #0074D9;
  color: white;
  padding: 12px 24px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  background-color: #005fa3;
}

.router-link {
  margin-top: 10px;
  display: inline-block;
}
</style>
