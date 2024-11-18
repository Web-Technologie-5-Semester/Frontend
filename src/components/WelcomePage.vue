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
  export default {
    name: "WelcomePage",
    data() {
      return {
        books: [
          { title: "Buch 1", author: "Max Mustermann" },
          { title: "Buch 2", author: "Erika Mustermann" },
          { title: "Buch 3", author: "John Doe" }
        ],
        currentSlide: 0
      };
    },
    methods: {
      showNextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.books.length;
      }
    },
    mounted() {
      setInterval(this.showNextSlide, 3000);
    }
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
  