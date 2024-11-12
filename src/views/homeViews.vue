<template>
  <div class="home">
    <!-- Kategorienabschnitte -->
    <div class="category-section" v-for="(category, index) in categories" :key="index">
      <h2>{{ category.title }}</h2>
      <div class="book-grid">
        <div
          v-for="book in category.books"
          :key="book.id"
          class="book-card"
        >
          <img :src="book.image" alt="book cover" />
          <div class="book-info">
            <h2 class="book-title">{{ book.title }}</h2>
            <p class="author">{{ book.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      categories: [
        {
          title: 'Science Fiction',
          books: [
            { id: 1, title: 'Dune', author: 'Frank Herbert', image: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Neuromancer', author: 'William Gibson', image: 'https://via.placeholder.com/150' },
            { id: 3, title: 'Snow Crash', author: 'Neal Stephenson', image: 'https://via.placeholder.com/150' },
          ],
        },
        {
          title: 'Programmierung',
          books: [
            { id: 4, title: 'Clean Code', author: 'Robert C. Martin', image: 'https://via.placeholder.com/150' },
            { id: 5, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', image: 'https://via.placeholder.com/150' },
            { id: 6, title: 'You Don\'t Know JS', author: 'Kyle Simpson', image: 'https://via.placeholder.com/150' },
          ],
        },
        {
          title: 'Abenteuer',
          books: [
            { id: 7, title: 'Der Herr der Ringe', author: 'J.R.R. Tolkien', image: 'https://via.placeholder.com/150' },
            { id: 8, title: 'Moby Dick', author: 'Herman Melville', image: 'https://via.placeholder.com/150' },
            { id: 9, title: 'Die Schatzinsel', author: 'Robert Louis Stevenson', image: 'https://via.placeholder.com/150' },
          ],
        },
      ],
    };
  },
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
}

/* Kategorieabschnitt */
.category-section {
  margin: 30px 0;
}

.category-section h2 {
  font-size: 2rem;
  color: #444;
  margin-bottom: 15px;
  text-align: left;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.book-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.book-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.book-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.book-info {
  text-align: left;
}

.book-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.author {
  font-size: 0.9rem;
  color: #777;
  margin-top: 5px;
}
</style>
