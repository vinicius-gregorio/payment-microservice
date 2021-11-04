import { Router } from 'express';
import paymentRouter from 'payment/http/payment.routes';

const routes = Router();
routes.use('/payment', paymentRouter);

routes.get('/status', (request, response) => {
  return response.json({ status: 'ONLINE' });
});

export default routes;
