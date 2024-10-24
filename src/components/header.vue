<template>
  <header>
    <div class="header-content">
      <h1><router-link to="/">Bücher24.de</router-link></h1>
      <nav aria-label="Hauptnavigation">
        <ul>
          <li>
            <router-link to="/">Startseite</router-link>
          </li>
          <li>
            <router-link to="/products">Produkte</router-link>
          </li>
          <li>
            <router-link to="/cart">Warenkorb</router-link>
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
  background: linear-gradient(90deg, #5574ff, #4a1a8c); /* Gradient Hintergrund */
  padding: 1em 2em; /* Mehr Padding für einen luftigen Look */
  font-family: 'Poppins', sans-serif; /* Neue Schriftart */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Schatten für Tiefe */
}

.header-content {
  display: flex; /* Flexbox für die horizontale Ausrichtung */
  align-items: center; /* Zentrieren der Elemente entlang der Höhe */
  justify-content: space-between; /* Platz zwischen den Elementen */
}

h1 {
  font-weight: 700; /* Fett für Titel */
  font-size: 2.5em; /* Erhöhte Größe des Titels */
  color: #ffffff; /* Weiße Schriftfarbe für Kontrast */
  margin: 0; /* Kein Margin, um vertikale Abweichung zu vermeiden */
  transition: color 0.3s ease; /* Übergang für Farbänderung */
}

h1:hover {
  color: #ffdf00; /* Gelbe Farbe beim Hover für den Titel */
}

nav {
  position: relative; /* Position für die Navigation */
}

nav ul {
  list-style: none; /* Keine Aufzählungszeichen */
  padding: 0; /* Kein Padding */
  margin: 0; /* Kein Margin */
  display: flex; /* Flexbox für horizontale Anordnung */
}

nav li {
  position: relative; /* Position für die Links */
}

nav a {
  margin: 0 1.5em; /* Abstand zwischen den Links anpassen */
  font-weight: 500; /* Leicht fett für Links */
  color: #ffffff; /* Weiße Schrift für Kontrast */
  text-decoration: none; /* Entferne Unterstrich */
  font-size: 1.2em; /* Erhöhte Schriftgröße für die Links */
  padding: 0.5em 1em; /* Padding für die Links */
  border-radius: 5px; /* Abgerundete Ecken für die Links */
  transition: background 0.3s ease, color 0.3s ease; /* Übergang für Hover-Effekte */
}

nav a:hover {
  background: #ffdf00; /* Gelber Hintergrund beim Hover */
  color: #4a1a8c; /* Dunklere Farbe beim Hover für den Text */
}

/* Mobile Responsivität */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column; /* Vertikale Anordnung bei kleineren Bildschirmen */
  }

  nav a {
    margin: 0.5em 0; /* Abstand zwischen Links */
  }
}
</style>
