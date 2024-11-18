<template>
  <div class="article-view">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Bild von {{ product.name }}" class="product-image" />
    <p class="description">{{ product.description }}</p>
    <p class="description">{{ product.verlag }}</p>
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
    this.loadProduct();
  },
  watch: {
    // Überwacht Änderungen an der ID in der Route
    "$route.params.id": "loadProduct"
  },
  methods: {
    loadProduct() {
      const productId = parseInt(this.$route.params.id); // Produkt-ID aus der URL
      const products = [
        { id: 1, name: "Harry Potter Teil 1", image: require('@/assets/harry-potter-teil-1.jpg'), description: "Beschreibung von Harry Potter Teil 1", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 29.99 },
        { id: 2, name: "Harry Potter Teil 2", image: require('@/assets/harry-potter-teil-2.jpg'), description: "Beschreibung von Harry Potter Teil 2", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 3, name: "Harry Potter Teil 3", image: require('@/assets/harry-potter-teil-3.jpg'), description: "Beschreibung von Harry Potter Teil 3", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 4, name: "Harry Potter Teil 4", image: require('@/assets/harry-potter-teil-4.jpg'), description: "Beschreibung von Harry Potter Teil 4", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 5, name: "Harry Potter Teil 5", image: require('@/assets/harry-potter-teil-5.jpg'), description: "Beschreibung von Harry Potter Teil 5", author: "J.K. Rowling", verlag: "Cornelsen Verlag", price: 39.99 },
        { id: 6, name: "Hard Land", image: require('@/assets/hard-land.jpg'), description: "Beschreibung von Hard Land", author: "Benedict Wells", verlag: "DuMont", price: 39.99 },
      ];
      this.product = products.find((product) => product.id === productId);
    },
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
