<template>
    <div class="login-container">
      <h2>Anmelden</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-Mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Geben Sie Ihre E-Mail ein"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Passwort</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Geben Sie Ihr Passwort ein"
            required
          />
        </div>
  
        <button type="submit">Anmelden</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        if (this.email && this.password) {
          alert(`Willkommen, ${this.email}!`);
          
          // Automatisches Weiterleiten zur Startseite nach erfolgreichem Login
          this.$router.push("/");
        } else {
          alert("Bitte E-Mail und Passwort eingeben.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling für das Login-Formular */
  .login-container {
    max-width: 400px;
    margin: 5em auto;
    padding: 2em;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  h2 {
    color: #4a1a8c; /* Farbe passend zu Büchershop */
    font-size: 2em;
    margin-bottom: 1em;
  }
  
  .form-group {
    margin-bottom: 1.5em;
    text-align: left;
  }
  
  label {
    font-weight: 600;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.8em;
    margin-top: 0.5em;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 0.8em;
    background-color: #5574ff;
    color: #ffffff;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #4a1a8c; /* Hover-Farbe */
  }
  </style>
  