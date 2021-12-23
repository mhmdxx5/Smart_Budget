const { Router } = require('express');
const { UsersController } = require('../controllers/UsersController')
const UsersRouter = new Router();
UsersRouter.get('/', UsersController.getUsers);
UsersRouter.get('/:id', UsersController.getUser);
UsersRouter.post('/', UsersController.postUser);
UsersRouter.post('/family', UsersController.addfamily);
UsersRouter.put('/:id', UsersController.updateUser);
UsersRouter.delete('/:id', UsersController.deleteUser);
module.exports = { UsersRouter };
