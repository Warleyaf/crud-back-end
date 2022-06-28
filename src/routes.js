import { Router } from "express";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import SessionsController from "./controllers/SessionsController";
import RepositoriesController from "./controllers/RepositoriesController";
import auth from "./middlewares/auth";

const routes = new Router();

routes.post('/sessions', SessionsController.create) // só compara o usuário e senha se estão correto
routes.get('/hello', HelloController.index);

// routes.use(auth) controle do middleware, daqui pra cima publico, e daqui pra baixo privado
routes.use(auth)

// Rotas privadas
// Formato de criar rota e essa é a Restfull
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories', RepositoriesController.destroy)

export default routes;