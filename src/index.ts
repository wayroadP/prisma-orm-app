import express , { Express,Request , Response } from 'express' ;
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { prisma01 } from './database/mssql';
import { prisma02 } from './database/mssql';
 
dotenv.config();
 
const app: Express = express();
app.use(cors());
app.use(morgan('dev'));
const port = 4000
app.get('/', (_: Request, res: Response) => {
    res.send('Hello, World!');
});
 
app.get('/db1', async (_: Request, res: Response) => {
    const data  = await prisma01.user.findMany();
    res.status(200).json(data);
});

app.get('/db2', async (_: Request, res: Response) => {
    const data  = await prisma02.user.findMany();
    res.status(200).json(data);
});

app.listen(port, () => {
    console.log('Server is running on port at http://localhost:' + port);
});

