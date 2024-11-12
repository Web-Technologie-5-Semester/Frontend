<template>
  <div class="login-container">
    <h2 class="login-title">Anmelden</h2>
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

      <button type="submit" class="login-button">Anmelden</button>
    </form>

    <!-- Registrieren-Button als Link-Stil -->
    <p class="register-text">
      Noch keinen Account?
      <button @click="goToRegister" class="register-link">Jetzt registrieren</button>
    </p>
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
        this.$router.push("/"); // Weiterleitung zur Startseite
      } else {
        alert("Bitte E-Mail und Passwort eingeben.");
      }
    },
    goToRegister() {
      this.$router.push("/register"); // Weiterleitung zur Registrierungsseite
    },
  },
};
</script>

<style scoped>
/* Anpassungen für die Login-Ansicht */
.login-container {
  max-width: 400px;
  margin: 5em auto;
  padding: 2em;
  background: linear-gradient(135deg, #001f3f, #0074D9); /* Dunkelblauer Farbverlauf */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.login-title {
  color: #ffffff; /* Weißer Titel */
  font-size: 2em;
  margin-bottom: 1em;
  background: linear-gradient(45deg, #4a90e2, #3de6c1); /* Blau-Türkis Farbverlauf */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-group {
  margin-bottom: 1.5em;
  text-align: left;
}

label {
  font-weight: 600;
  color: #ffffff; /* Weiß für die Labels */
}

input {
  width: 100%;
  padding: 0.8em;
  margin-top: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  background-color: #f3f3f3; /* Hellgrau für Eingabefelder */
  color: #001f3f; /* Dunkelblauer Text */
}

input::placeholder {
  color: #999;
}

.login-button {
  width: 100%;
  padding: 0.8em;
  background-color: #ffbf00; /* Gelber Button */
  color: #001f3f; /* Dunkelblauer Text */
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1em;
}

.register-text {
  font-size: 0.95em;
  color: #ffffff;
  margin-top: 1em;
}

.register-link {
  background: none;
  border: none;
  color: #ffbf00; /* Gold für Registrieren-Link */
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.register-link:focus, .register-link:hover {
  color: #ffbf00; /* Keine Änderung der Farbe */
}
</style>
