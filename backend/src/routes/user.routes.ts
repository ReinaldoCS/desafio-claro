import { Router, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();;

const helloWorldRouter = Router();

helloWorldRouter.get('/create', async (req: Request, res: Response) => {
  try {
    const db = await prisma.user.findMany();
    return res.status(200).json({ message: "Hello World!!!", db });
  } catch (error) {
    return res.status(400).json(error);
  }
})

export default helloWorldRouter;