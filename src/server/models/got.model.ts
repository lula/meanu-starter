import { Schema, model } from 'mongoose';

export const HouseSchema = new Schema({
    name: String,
    words: String
});

export const House = model('House', HouseSchema);
