<template>
  <div class="registration-container">
    <h2 class="registration-title">Registrieren</h2>
    <form @submit.prevent="handleRegister">
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

      <div class="form-group">
        <label for="confirm-password">Passwort bestätigen</label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          placeholder="Bestätigen Sie Ihr Passwort"
          required
        />
      </div>

      <button type="submit" class="register-button">Registrieren</button>
    </form>

    <p class="login-text">
      Bereits einen Account?
      <button @click="goToLogin" class="login-link">Jetzt anmelden</button>
    </p>
    <p class="login-text">
      Sind Sie Verkäufer?
      <button @click="goToSellerRegistration" class="login-link">Hier registrieren</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "RegistrationView",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Die Passwörter stimmen nicht überein.");
        return;
      }
      // Hier könnte man weitere Logik zur Registrierung hinzufügen
      alert(`Registrierung erfolgreich für ${this.email}!`);
      this.$router.push("/login"); // Weiterleitung zur Login-Seite
    },
    goToLogin() {
      this.$router.push("/login"); // Weiterleitung zur Login-Seite
    },
    goToSellerRegistration() {
      this.$router.push("/seller-registration"); // Weiterleitung zur Verkäufer-Registrierung
    },
  },
};
</script>

<style scoped>
/* Bestehendes CSS bleibt unverändert */
.registration-container {
  max-width: 400px;
  margin: 5em auto;
  padding: 2em;
  background: linear-gradient(135deg, #001f3f, #0074D9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.registration-title {
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 1em;
  background: linear-gradient(45deg, #4a90e2, #3de6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-group {
  margin-bottom: 1.5em;
  text-align: left;
}

label {
  font-weight: 600;
  color: #ffffff;
}

input {
  width: 100%;
  padding: 0.8em;
  margin-top: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  background-color: #f3f3f3;
  color: #001f3f;
}

input::placeholder {
  color: #999;
}

.register-button {
  width: 100%;
  padding: 0.8em;
  background-color: #ffbf00;
  color: #001f3f;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1em;
}

.login-text {
  font-size: 0.95em;
  color: #ffffff;
  margin-top: 1em;
}

.login-link {
  background: none;
  border: none;
  color: #ffbf00;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.login-link:focus, .login-link:hover {
  color: #ffbf00;
}
</style>
