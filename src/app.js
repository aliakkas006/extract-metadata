import express from 'express';
import cors from 'cors';
import metadataRoute from './route/metadata.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/metadata', metadataRoute);

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
