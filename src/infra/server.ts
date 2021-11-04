import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import AppError from './appError';
import rateLimiter from './rateLimiter';
import routes from './routes';

const SERVER_PORT = 3004;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(rateLimiter);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(SERVER_PORT, () => console.log(`😬 😬 Server is running on port ${SERVER_PORT}`));
