<template>
  <div class="offer-books-container">
    <h1>Neues Buch anlegen</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="isbn">ISBN:</label>
        <input type="number" id="isbn" v-model="book.isbn" required />
      </div>
      <div class="form-group">
        <label for="title">Titel:</label>
        <input type="text" id="title" v-model="book.title" required />
      </div>
      <div class="form-group">
        <label for="author">Autor:</label>
        <div class="author-selection">
          <select id="author" v-model="book.author" required>
            <option value="" disabled>Bitte wählen</option>
            <option v-for="author in authors" :key="author.id" :value="author.id">
              {{ author.name }} ({{ author.birthday }})
            </option>
          </select>
          <button type="button" @click="addNewAuthor" class="add-author-btn">+</button>
        </div>
        <div v-if="isAddingAuthor">
          <label for="new-author-name">Neuen Autor hinzufügen:</label>
          <input
            type="text"
            id="new-author-name"
            v-model="newAuthor.name"
            placeholder="Name des Autors eingeben"
            required
          />
          <label for="new-author-birthday">Geburtsdatum:</label>
          <input
            type="date"
            id="new-author-birthday"
            v-model="newAuthor.birthday"
            required
          />
          <button type="button" @click="saveNewAuthor">Hinzufügen</button>
        </div>
      </div>
      <div class="form-group">
        <label for="release">Veröffentlichung:</label>
        <input type="date" id="release" v-model="book.release" required />
      </div>
      <div class="form-group">
        <label for="genre">Genre:</label>
        <div class="genre-selection">
          <select id="genre" v-model="book.genre" required>
            <option value="" disabled>Bitte wählen</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
          <button type="button" @click="addNewGenre" class="add-genre-btn">+</button>
        </div>
        <div v-if="isAddingGenre">
          <label for="new-genre-name">Neues Genre hinzufügen:</label>
          <input
            type="text"
            id="new-genre-name"
            v-model="newGenre.name"
            placeholder="Neues Genre eingeben"
            required
          />
          <button type="button" @click="saveNewGenre">Hinzufügen</button>
        </div>
      </div>
      <div class="form-group">
        <label for="description">Beschreibung:</label>
        <input type="text" id="description" v-model="book.description" required />
      </div>
      <div class="form-group">
  <label for="price">Preis:</label>
  <input
    type="text"
    id="price"
    v-model="book.price"
    @input="validatePrice"
    required
    placeholder="z. B. 19,99"
  />
</div>
      <div class="form-group">
        <label for="age_recommendation">Altersbeschränkung:</label>
        <select id="age_recommendation" v-model="book.age_recommendation" required>
          <option value="" disabled>Bitte wählen</option>
          <option v-for="age in ageRestrictions" :key="age" :value="age">{{ age }}+</option>
        </select>
      </div>
      <div class="form-group">
        <label for="publisher">Verlag:</label>
        <select id="publisher" v-model="book.publisher" required>
          <option value="" disabled>Bitte wählen</option>
          <option v-for="publisher in publishers" :key="publisher.id" :value="publisher.id">
            {{ publisher.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="stock">Anzahl Exemplare:</label>
        <input type="number" id="stock" v-model="book.stock" required />
      </div>
      <button type="submit">Buch hinzufügen</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OfferBooksView",
  data() {
    return {
      book: {
        isbn: "",
        title: "",
        author: "",
        genre: "",
        description: "",
        price: null, // Preis wird als Dezimalzahl gespeichert
        release: "",
        age_recommendation: 0,
        publisher: "",
        stock: 0,
      },
      newAuthor: {
        name: "",
        birthday: "",
      },
      newGenre: {
        name: "",
      },
      authors: [],
      genres: [],
      ageRestrictions: [0, 6, 12, 16, 18],
      publishers: [],
      isAddingAuthor: false,
      isAddingGenre: false,
    };
  },
  methods: {
    submitForm() {
      const price = parseFloat(this.book.price);
      if (isNaN(price)) {
        alert("Bitte geben Sie einen gültigen Preis ein.");
        return;
      }
      this.book.price = price; // Ensure price is a number without quotes

      console.log("Neues Buch:", this.book);
      this.addNewBook();
      alert(`Buch "${this.book.title}" erfolgreich hinzugefügt!`);
      this.resetForm();
    },
    validatePrice(event) {
      const input = event.target.value;
      // Nur Zahlen, Komma und Punkt erlauben
      const formatted = input.replace(/[^0-9.,]/g, "");
      this.book.price = formatted.replace(",", "."); // Komma durch Punkt ersetzen
    },
    addNewBook() {
      const bookData = {
        ...this.book,
        author: {
          id: this.book.author,
          name: this.authors.find((author) => author.id === this.book.author)?.name,
        },
        genre: {
          id: this.book.genre,
          name: this.genres.find((genre) => genre.id === this.book.genre)?.name,
        },
        publisher: {
          id: this.book.publisher,
          name: this.publishers.find((publisher) => publisher.id === this.book.publisher)?.name,
        },
        price: parseFloat(this.book.price).toFixed(2),
      };

      axios
        .post("http://127.0.0.1:8000/book", bookData)
        .then((response) => {
          console.log("Buch erfolgreich hinzugefügt:", response.data);
          alert(`Buch "${this.book.title}" erfolgreich hinzugefügt!`);
          this.resetForm();
        })
        .catch((error) => {
          console.error("Fehler beim Hinzufügen des Buches:", error);
          alert("Fehler beim Hinzufügen des Buches.");
        });
    },
    resetForm() {
      this.book = {
        isbn: "",
        title: "",
        author: "",
        genre: "",
        description: "",
        price: null,
        release: "",
        age_recommendation: 0,
        publisher: "",
        stock: 0,
      };
      this.newAuthor = { name: "", birthday: "" };
      this.isAddingAuthor = false;
      this.newGenre = { name: "" };
      this.isAddingGenre = false;
    },
    addNewAuthor() {
      this.isAddingAuthor = true;
    },
    saveNewAuthor() {
      const { name, birthday } = this.newAuthor;
      if (name && birthday) {
        axios
          .post("http://127.0.0.1:8000/author", { name, birthday })
          .then((response) => {
            const newAuthor = response.data;
            this.authors.push(newAuthor);
            this.book.author = newAuthor.id;
            this.isAddingAuthor = false;
            this.newAuthor = { name: "", birthday: "" };
            alert("Neuer Autor erfolgreich hinzugefügt!");
          })
          .catch((error) => {
            console.error("Fehler beim Hinzufügen des Autors:", error);
            alert("Fehler beim Hinzufügen des neuen Autors.");
          });
      } else {
        alert("Bitte Name und Geburtsdatum eingeben.");
      }
    },
    fetchAuthors() {
      axios
        .get("http://127.0.0.1:8000/author")
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der Autoren:", error);
        });
    },
    addNewGenre() {
      this.isAddingGenre = true;
    },
    saveNewGenre() {
      const { name } = this.newGenre;
      if (name) {
        axios
          .post("http://127.0.0.1:8000/genre", { name })
          .then((response) => {
            const newGenre = response.data;
            this.genres.push(newGenre);
            this.book.genre = newGenre.id;
            this.isAddingGenre = false;
            this.newGenre = { name: "" };
            alert("Neues Genre erfolgreich hinzugefügt!");
          })
          .catch((error) => {
            console.error("Fehler beim Hinzufügen des Genres:", error);
            alert("Fehler beim Hinzufügen des neuen Genres.");
          });
      } else {
        alert("Bitte Name des Genres eingeben.");
      }
    },
    fetchGenres() {
      axios
        .get("http://127.0.0.1:8000/genre")
        .then((response) => {
          this.genres = response.data;
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der Genres:", error);
        });
    },
    fetchPublishers() {
      axios
        .get("http://127.0.0.1:8000/publisher")
        .then((response) => {
          this.publishers = response.data;
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der Verlage:", error);
        });
    },
  },
  mounted() {
    this.fetchAuthors();
    this.fetchPublishers();
    this.fetchGenres();
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

.genre-selection {
  display: flex;
  align-items: center;
}

.add-genre-btn {
  margin-left: 10px;
  background-color: #28a745;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
}

.add-genre-btn:hover {
  background-color: #218838;
}
</style>