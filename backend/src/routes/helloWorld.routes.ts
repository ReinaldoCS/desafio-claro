import { Router, Request, Response } from 'express';

const helloWorldRouter = Router();


helloWorldRouter.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "Hello World!!!" });
  } catch (error) {
    return res.status(400).json(error);
  }
})

export default helloWorldRouter;