import { model, Schema } from 'mongoose';

const characterSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    urlImage: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

export const characterDb = model('Character', characterSchema);
