<template>
  <footer>
    <div class="footer-content">
      <p>&copy; Informationen</p>
      <router-link to="/impressum" class="impressum-link">Impressum</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
footer {
  background: linear-gradient(90deg, #001f3f, #0074D9); /* Dunkelblauer bis Türkiser Hintergrund */
  font-family: 'Poppins', sans-serif; /* Schriftart konsistent mit Header */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2); /* Schatten für Tiefe */
  color: #ffffff; /* Weißer Text für Kontrast */
  text-align: center; /* Zentrierter Text */
}

.footer-content {
  display: flex;
  flex-direction: column; /* Vertikale Ausrichtung */
  align-items: center; /* Zentrierte Ausrichtung */
}

footer a {
  color: #ffbf00; /* Goldene Farbe für Links */
  text-decoration: none; /* Unterstreichung entfernen */
  font-size: 1.2em; /* Schriftgröße */
  margin-top: 0.5em; /* Abstand über dem Link */
  transition: color 0.3s ease; /* Übergangseffekt für die Farbe */
}

footer a:hover {
  color: #ffffff; /* Weißer Text beim Hover */
}
</style>
