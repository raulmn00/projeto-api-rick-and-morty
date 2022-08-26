import { MongoDbConnection } from './database/mongo/connection/connect.js';

const connectionDb = new MongoDbConnection();
await connectionDb.connectDb();
