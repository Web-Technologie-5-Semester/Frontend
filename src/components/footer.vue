<template>
    <footer>
      <p>&copy; Informationen</p>
      <router-link to="/impressum">Impressum</router-link>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent"
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
  }
  
  footer a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  