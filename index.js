import express, { Router } from 'express';
import cors from 'cors';
import { MongoDbConnection } from './database/mongo/connection/connect.js';
import { makeUserFactory } from './factories/makeUserFactory.js';
import { makeCharacterFactory } from './factories/makeCharacterFactory.js';
import { makeAuthFactory } from './factories/makeAuthFactory.js';

const connectionDb = new MongoDbConnection();
await connectionDb.connectDb();

const app = express();
const router = Router();
app.use(express.json());
app.use(cors());

const character = makeCharacterFactory(router);
const user = makeUserFactory(router);
const auth = makeAuthFactory(router);

app.use('/characters', character.route());
app.use('/users', user.route());
app.use('/auth', auth.route());

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000.');
});
