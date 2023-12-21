import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.send('Everythin is Okay!');
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

export default app;
