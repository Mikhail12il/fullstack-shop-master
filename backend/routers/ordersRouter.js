import Router from 'express';

import OrdersController from '../controllers/ordersController.js';

export const ordersRouter = new Router();

// http://localhost:5000/orders
ordersRouter.get('/', OrdersController.getAll);
ordersRouter.get('/user/:id', OrdersController.getByUserId);
ordersRouter.delete('/:id', OrdersController.deleteOrder);
ordersRouter.put('/:id', OrdersController.completeOrder);
ordersRouter.post('/', OrdersController.createOrder);


