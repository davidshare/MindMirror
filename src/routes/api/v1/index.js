import { Router } from 'express';
import userRoute from './userRoute';

const apiV1Router = Router();

apiV1Router.use('/api/v1', userRoute);

export default apiV1Router;
