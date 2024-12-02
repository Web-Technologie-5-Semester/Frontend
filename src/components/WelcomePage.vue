<template>
    <div id="welcome-page">
      <h1>Willkommen in unserem Buch-Shop!</h1>
      <div id="book-slider">
        <div 
          v-for="(book, index) in books" 
          :key="index" 
          class="slide" 
          :class="{ active: currentSlide === index }"
        >
          <h2>{{ book.title }}</h2>
          <p>Autor: {{ book.author }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from "axios";

export default {
  name: "WelcomePage",
  data() {
    return {
      books: [], // Initial leer, wird mit API-Daten befüllt
      currentSlide: 0,
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/books"); // API-Aufruf
        this.books = response.data; // Daten aus API speichern
        if (this.books.length === 0) {
          console.warn("Keine Bücher in der Datenbank gefunden.");
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Bücher:", error);
      }
    },
    showNextSlide() {
      if (this.books.length > 0) {
        this.currentSlide = (this.currentSlide + 1) % this.books.length;
      }
    },
  },
  async mounted() {
    await this.fetchBooks(); // Daten beim Laden der Komponente holen
    setInterval(this.showNextSlide, 3000); // Slider starten
  },
};
</script>

  
  <style scoped>
  #welcome-page {
    text-align: center;
    padding: 20px;
  }
  
  #book-slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .slide {
    display: none;
    animation: fade 1s;
  }
  
  .slide.active {
    display: block;
  }
  
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  