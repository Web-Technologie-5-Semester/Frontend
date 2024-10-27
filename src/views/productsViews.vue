<template>
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
  