import express, { Router } from 'express';
import cors from 'cors';
import { MongoDbConnection } from './database/mongo/connection/connect.js';
import { makeUserFactory } from './factories/makeUserFactory.js';
import { makeCharacterFactory } from './factories/makeCharacterFactory.js';
import { makeAuthFactory } from './factories/makeAuthFactory.js';
import { makeEquipmentsFactory } from './factories/makeEquipmentFactory.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerDocumentation } from './docs/swagger.js';

const connectionDb = new MongoDbConnection();
await connectionDb.connectDb();

const app = express();
const router = Router();
app.use(express.json());
app.use(cors());
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocumentation, {
        swaggerOptions: {
            validatorUrl: null,
        },
    }),
);

const character = makeCharacterFactory(router);
const user = makeUserFactory(router);
const auth = makeAuthFactory(router);
const equipments = makeEquipmentsFactory(router);

app.use('/characters', character.route());
app.use('/users', user.route());
app.use('/auth', auth.route());
app.use('/equipments', equipments.route());

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function () {
    console.log('Server started.......');
});
