<template>
  <header>
    <div class="header-content">
      <!-- Logo und Titel in einem flexiblen Container -->
      <div class="logo-title">
        <img src="@/assets/Download.webp" alt="Bücher24 Logo" class="logo" />
        <h1><router-link to="/" class="site-title">Bücher24.de</router-link></h1>
      </div>
      <nav aria-label="Hauptnavigation">
        <ul>
          <li>
            <router-link to="/">Startseite</router-link>
          </li>
          <li>
            <router-link to="/products">Bücher</router-link>
          </li>
          <li>
            <router-link to="/cart">Warenkorb</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* Modernes Styling für den Header */
header {
  background: linear-gradient(90deg, #001f3f, #0074D9); /* Dunkelblauer bis Türkiser Hintergrund */
  padding: 1em 2em; /* Mehr Padding für luftigen Look */
  font-family: 'Poppins', sans-serif; /* Neue Schriftart */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Schatten für Tiefe */
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Flexbox Container für Logo und Titel */
.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  width: 72px;
  height: auto;
  margin-right: 10px;
}

/* Neues Design für den Seitentitel */
.site-title {
  font-weight: 700;
  font-size: 1.8em; /* Schriftgröße für den Titel */
  background: linear-gradient(45deg, #4a90e2, #3de6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Textfarbe wird durch Verlauf ersetzt */
  margin: 0;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

/* Hover Effekt entfernt */
.site-title:hover {
  /* Hier ist kein Hover-Effekt mehr */
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav li {
  position: relative;
}

nav a {
  margin: 0 1.5em;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5em; /* Schriftgröße erhöht */
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Hover Effekt für Navigationslinks */
nav a:hover {
  background: #ffbf00; /* Goldener Hintergrund beim Hover */
  color: #001f3f;
}

/* Mobile Responsivität */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  nav a {
    margin: 0.5em 0;
  }
}
</style>
