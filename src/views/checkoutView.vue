<template>
    <div class="checkout">
      <h1>Checkout</h1>
      
      <!-- Warenkorb-Übersicht -->
      <section class="cart-overview">
  <h2>Warenkorb</h2>
  <ul>
    <li v-for="item in cartItems" :key="item.id" class="cart-item">
      <!-- Bild des Produkts -->
      <img :src="item.image" alt="Product image" />

      <!-- Produktdetails -->
      <div class="item-details">
        <h2>{{ item.name }}</h2>
        <p>Preis: {{ item.price.toFixed(2) }} €</p>
        <p>Menge: {{ item.quantity }}</p>
      </div>
    </li>
  </ul>
  <p>Gesamt: {{ totalPrice.toFixed(2) }} €</p>
</section>

  
      <!-- Lieferadresse -->
      <section class="address-section">
        <h2>Lieferadresse</h2>
        <form @submit.prevent="handleCheckout">
          <label for="name">Nachname: </label>
          <input type="text" id="name" v-model="name" required /><br><br>

          <label for="name">Vorname: </label>
          <input type="text" id="name" v-model="name" required /><br><br>
  
          <label for="address">Adresse: </label>
          <input type="text" id="address" v-model="address" required /><br><br>
  
          <label for="city">Stadt: </label>
          <input type="text" id="city" v-model="city" required /><br><br>
  
          <label for="zipcode">Postleitzahl: </label>
          <input type="text" id="zipcode" v-model="zipcode" required /><br><br>
        </form>
      </section>
  
      <!-- Zahlungsmethode -->
      <section class="payment-section">
        <h2>Zahlungsmethode</h2>
        <label>
          <input type="radio" value="Kreditkarte" v-model="paymentMethod" />
          Kreditkarte
        </label>
        <label>
          <input type="radio" value="PayPal" v-model="paymentMethod" />
          PayPal
        </label>
        <label>
          <input type="radio" value="Rechnung" v-model="paymentMethod" />
          Rechnung
        </label>
        <label>
          <input type="radio" value="Vorkasse" v-model="paymentMethod" />
          Vorkasse
        </label>
      </section>
  
      <button @click="handleCheckout">Bestellung abschicken</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [],  // Hier die Produkte aus dem Warenkorb laden
        nachname: "",
        vorname: "",
        address: "",
        city: "",
        zipcode: "",
        paymentMethod: "Kreditkarte",
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      handleCheckout() {
        // Hier kannst du die Bestelldaten verarbeiten, z. B. an die API senden
        alert('Bestellung erfolgreich abgeschlossen!');
      },
    },
    created() {
  this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  .cart-overview, .address-section, .payment-section {
    margin-bottom: 20px;
  }
  .cart-overview {
  padding: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.cart-item img {
  max-width: 80px;
  margin-right: 20px;
}

.item-details {
  flex: 1;
}

.item-details h2 {
  margin: 0;
  font-size: 1.1em;
}

.item-details p {
  margin: 5px 0;
}

  </style>
  