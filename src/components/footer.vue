<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Bücher24.de | Alle Rechte vorbehalten</p>
      <nav>
        <router-link to="/impressum">Impressum</router-link>
        <router-link to="/datenschutz">Datenschutz</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </nav>
      <div class="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook-f"></i> <!-- Facebook Icon -->
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i> <!-- Twitter Icon -->
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #343a40; /* Dunkler Hintergrund */
  color: #ffffff; /* Weiße Schriftfarbe */
  padding: 2em 0; /* Padding oben und unten */
  text-align: center; /* Zentrales Layout */
}

.footer-content {
  max-width: 1200px; /* Maximale Breite für den Inhalt */
  margin: 0 auto; /* Zentrieren des Inhalts */
  padding: 0 1em; /* Innenabstand */
}

footer p {
  margin: 0.5em 0; /* Abstand für den Paragraphen */
  font-size: 1em; /* Schriftgröße */
}

nav {
  margin: 1em 0; /* Abstand für die Navigation */
}

nav a {
  color: #007bff; /* Linkfarbe */
  text-decoration: none; /* Kein Unterstrich */
  margin: 0 1em; /* Abstand zwischen Links */
  transition: color 0.3s; /* Übergang für Farbänderung */
}

nav a:hover {
  color: #ffdf00; /* Hover-Farbe */
}

.social-media {
  margin-top: 1em; /* Abstand für soziale Medien */
}

.social-media a {
  margin: 0 1em; /* Abstand zwischen Icons */
  color: #ffffff; /* Weiße Farbe für die Icons */
  font-size: 1.5em; /* Größe der Icons */
  transition: color 0.3s; /* Übergang für Farbänderung */
}

.social-media a:hover {
  color: #ffdf00; /* Hover-Farbe für Icons */
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    padding: 0 0.5em; /* Innenabstand bei mobilen Geräten */
  }

  nav a {
    margin: 0 0.5em; /* Weniger Abstand bei mobilen Geräten */
  }
}
</style>
