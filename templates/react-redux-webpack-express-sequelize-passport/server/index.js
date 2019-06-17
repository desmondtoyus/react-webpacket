const PORT = process.env.PORT || 8008;
const app = require('./app');

// Setup the Express global error handler.

app.listen(PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV}|| 🌎 => Listening on p✨rt ${PORT}...`);
});

