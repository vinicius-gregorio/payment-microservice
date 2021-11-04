import { Router } from 'express';

const paymentRouter = Router();

paymentRouter.get('/status', (request, response) => {
  return response.json({ status: 'payment online' });
});

export default paymentRouter;
