import cors from 'cors';
import express from 'express';
import routes from './routes';

const SERVER_PORT = 3004;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(SERVER_PORT, () => console.log(`😬 😬 Server is running on port ${SERVER_PORT}`));
