import express from 'express';
import taskRouter from './modules/crud.route.js';

const routes = express.Router();

routes.use("/task", taskRouter);

export default routes;