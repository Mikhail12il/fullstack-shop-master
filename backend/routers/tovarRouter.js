import Router from 'express';

import TovarController from "../controllers/tovarController.js"

export const tovarRouter = new Router();

// http://localhost:5000/tovars
tovarRouter.get('/', TovarController.getAll);
tovarRouter.post('/', TovarController.createTovar);
tovarRouter.delete('/:id', TovarController.deleteById);
tovarRouter.put('/:id', TovarController.updateById);



