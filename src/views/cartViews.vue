<template>
    <div class="cart">
      <h1>Warenkorb</h1>
      <div v-if="cartItems.length === 0">
        <p>Ihr Warenkorb ist leer.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" alt="Product image" />
            <div class="item-details">
              <h2>{{ item.name }}</h2>
              <p>Preis: {{ item.price.toFixed(2) }} €</p>
              <input
                type="number"
                v-model.number="item.quantity"
                min="1"
                @change="updateQuantity(item)"
              />
              <button @click="removeFromCart(item)">Entfernen</button>
            </div>
          </li>
        </ul>
        <h2>Gesamt: {{ total.toFixed(2) }} €</h2>
        <router-link to="/checkout" class="button">Zur Kasse</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], // Beispiel für den Zugriff auf den Warenkorb
      };
    },
    computed: {
      total() {
        return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    },
    methods: {
      updateQuantity(item) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index !== -1) {
          cartItems[index].quantity = item.quantity;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      },
      removeFromCart(item) {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      },
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
  }
  
  .cart-item img {
    max-width: 100px;
    margin-right: 20px;
  }
  
  .item-details {
    flex: 1;
  }
  
  input[type="number"] {
    width: 60px;
    margin: 0 10px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 4px;
    cursor: pointer;
  }

  button:hover {
  background-color: #0056b3;
}
  </style>
  