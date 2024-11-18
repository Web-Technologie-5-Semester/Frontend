<template>
    <div class="offer-books-container">
      <h1>Neues Buch anlegen</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Titel:</label>
          <input type="text" id="title" v-model="book.title" required />
        </div>
        <div class="form-group">
          <label for="author">Autor:</label>
          <div class="author-selection">
            <select id="author" v-model="book.author" required>
              <option value="" disabled>Bitte wählen</option>
              <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
            </select>
            <button type="button" @click="addNewAuthor" class="add-author-btn">+</button>
          </div>
          <div v-if="isAddingAuthor">
            <label for="new-author">Neuen Autor hinzufügen:</label>
            <input
              type="text"
              id="new-author"
              v-model="newAuthor"
              placeholder="Neuen Autor eingeben"
            />
            <button type="button" @click="saveNewAuthor">Hinzufügen</button>
          </div>
        </div>
        <div class="form-group">
          <label for="genre">Genre:</label>
          <select id="genre" v-model="book.genre" required>
            <option value="" disabled>Bitte wählen</option>
            <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="description">Beschreibung:</label>
          <input type="text" id="description" v-model="book.description" required />
        </div>
        <div class="form-group">
          <label for="price">Preis (€):</label>
          <input type="number" id="price" v-model="book.price" step="0.01" min="0" required />
        </div>
        <button type="submit">Speichern</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "OfferBooksView",
    data() {
      return {
        book: {
          title: "",
          author: "",
          genre: "",
          description: "",
          price: null,
        },
        newAuthor: "",
        authors: [
          'J.K. Rowling',
          'Benedict Wells'
        ],
        genres: [
          'Fiction',
          'Non-fiction',
          'Science Fiction',
          'Fantasy',
          'Mystery',
          'Romance',
          'Thriller',
          'Historical',
          'Biography',
          'Self-help',
          'Children',
          'Roman',
          'Komödie',
          'Krimi'
        ],
        isAddingAuthor: false,
      };
    },
    methods: {
      submitForm() {
        console.log("Neues Buch:", this.book);
        // Hier kannst du die Logik implementieren, um das Buch zu speichern.
        // Beispielsweise könnte ein API-Call hier erfolgen.
        alert(`Buch "${this.book.title}" erfolgreich hinzugefügt!`);
        this.resetForm();
      },
      resetForm() {
        this.book = {
          title: "",
          author: "",
          genre: "",
          description: "",
          price: null,
        };
        this.newAuthor = "";
        this.isAddingAuthor = false;
      },
      addNewAuthor() {
        this.isAddingAuthor = true; // Zeigt das Eingabefeld an
      },
      saveNewAuthor() {
        if (this.newAuthor && !this.authors.includes(this.newAuthor)) {
          this.authors.push(this.newAuthor); // Füge den neuen Autor hinzu
          this.book.author = this.newAuthor; // Setze den ausgewählten Autor auf den neuen
          this.isAddingAuthor = false; // Schließe das Eingabefeld
          this.newAuthor = ""; // Leere das Eingabefeld
        } else {
          alert("Bitte einen gültigen Autor eingeben.");
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .offer-books-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  input,
  select {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .author-selection {
    display: flex;
    align-items: center;
  }
  
  .add-author-btn {
    margin-left: 10px;
    background-color: #28a745;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .add-author-btn:hover {
    background-color: #218838;
  }
  
  button[type="button"] {
    margin-top: 5px;
    width: auto;
    background-color: #007bff;
  }
  
  button[type="button"]:hover {
    background-color: #0056b3;
  }
  </style>
  