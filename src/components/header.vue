<template>
    <header>
      <h1>Bücher24.de</h1>
      <nav>
        <router-link to="/">Startseite</router-link>
        <router-link to="/products">Produkte</router-link>
        <router-link to="/cart">Warenkorb</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  header {
    background: #5574ff;
    padding: 1em;
  }
  nav a {
    margin: 0 1em;
  }
  </style>
  