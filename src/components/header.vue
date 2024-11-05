<template>
  <header>
    <div class="header-content">
      <!-- Logo und Titel in einem flexiblen Container -->
      <router-link to="/" class="logo-title">
        <img src="@/assets/Download.webp" alt="Bücher24 Logo" class="logo" />
        <h1 class="site-title">Bücher24.de</h1>
      </router-link>
      <nav aria-label="Hauptnavigation">
        <ul>
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
  background: linear-gradient(90deg, #001f3f, #0074D9);
  padding: 1em 2em;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
  text-decoration: none;
}

.logo {
  width: 55px; /* Anpassung der Größe des Logos */
  height: auto;
  margin-right: 10px;
}

/* Schriftgröße und Stil für den Seitentitel */
.site-title {
  font-weight: 700;
  font-size: 2.5em; /* Gleiche visuelle Höhe wie das Logo */
  background: linear-gradient(45deg, #4a90e2, #3de6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin: 0;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
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
  font-size: 1.5em;
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Hover Effekt für Navigationslinks */
nav a:hover {
  background: #ffbf00;
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
