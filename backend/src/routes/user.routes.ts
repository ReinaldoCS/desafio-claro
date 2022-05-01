import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const helloWorldRouter = Router();

helloWorldRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    if(!email || !username || !password) {
      return res.status(400).json({message: "MISSING_VALUE"});
    }

    const findEmail = await prisma.user.findFirst({ where: { email }  });
    const findUser = await prisma.user.findFirst({ where: { username } });

    if (findEmail) {
      return res.status(400).json({ message: "EMAIL_IN_USE" })
    };

    if (findUser) {
      return res.status(400).json({ message: "USER_IN_USE" })
    };

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password
      }
    });

    return res.status(200).json({ message: "SUCESS", newUser });
  } catch (error) {
    return res.status(400).json(error);
  }
})

export default helloWorldRouter;