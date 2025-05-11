

## 🌐 CSS Base Setup

### 1. 🧹 Reset e Box Model

```scss
* {
  box-sizing: border-box; // Include padding e border nel calcolo delle dimensioni
  margin: 0;              // Rimuove margini di default
  padding: 0;             // Rimuove padding di default
}
```

### 2. 🔤 Base per HTML

```scss
html {
  font-size: 16px; // Base per rem (1rem = 16px)
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth; // Per uno scroll più fluido nei link ancora
}
```

### 3. 🧍 Body

```scss
body {
  min-height: 100vh;           // Occupa sempre almeno tutta l’altezza dello schermo
  line-height: 1.5;            // Migliora la leggibilità
  background-color: #fff;      // Imposta un colore di sfondo base (modificabile)
  color: #111;                 // Colore base del testo
  -webkit-font-smoothing: antialiased; // Migliora il rendering dei font su Mac
  -moz-osx-font-smoothing: grayscale;
}
```

### 4. 🖼️ Media elements

```scss
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%; // Adatta i media al contenitore
}
```

### 5. ✍️ Form elements

```scss
input,
button,
textarea,
select {
  font: inherit; // Eredita font e stile dal body
}
```

### 6. 🔗 Links

```scss
a {
  text-decoration: none;
  color: inherit; // Inizialmente stesso colore del testo
}
```

### 7. 📜 Liste

```scss
ul,
ol {
  list-style: none; // Rimuove i pallini e numeri predefiniti
}
```

### 8. 🎨 Root variables (opzionale)

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 1rem;
}
```

---

