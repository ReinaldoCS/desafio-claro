import express from 'express';
import router from './routes';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(router);

export default app;