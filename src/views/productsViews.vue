<template>
    <div>
      <h2>Produkte</h2>
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
    
    // Speichere den aktualisierten Warenkorb im localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}
};
  </script>
  
  <style scoped>
  .product {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
  }
  </style>
  