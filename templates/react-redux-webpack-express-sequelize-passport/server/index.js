const PORT = process.env.PORT || 8008;
const app = require('./app');


app.listen(PORT, () => {
  console.log(`Environment: ${process.env.NODE_ENV}|| 🌎 Listening on http://localhost:${PORT}`);
});

