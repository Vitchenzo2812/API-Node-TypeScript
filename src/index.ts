import 'reflect-metadata';
import express from 'express';
import { router } from './routes'; 
import createConnection from './database';

createConnection();

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () =>{
    console.log('Rodando Aplicação')
});