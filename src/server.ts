import express from 'express';

const app = express();
const SERVER_PORT = 3004;
app.get('/status', (request, response) => {
  return response.json({ status: 'ONLINE' });
});

app.listen(SERVER_PORT, () => console.log(`😬 😬 Server is running on port ${SERVER_PORT}`));
