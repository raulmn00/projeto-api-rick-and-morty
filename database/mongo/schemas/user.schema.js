import { model, Schema } from 'mongoose';
import { characterDb } from './character.schema.js';

const userSchema = new Schema({
    id: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true },
    userImage: { type: String, required: true },
    characters: { type: [characterDb], required: true },
});

export const userDb = model('User', userSchema);
