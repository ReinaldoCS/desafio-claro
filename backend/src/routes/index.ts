import { Router } from 'express';

import helloWorldRouter from './helloWorld.routes';

const router = Router();

router.use('/', helloWorldRouter);

export default router;