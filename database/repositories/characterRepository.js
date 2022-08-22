import { characterDb } from '../mongo/schemas/character.schema.js';

export class CharacterRepositoryMongoDB {
    async create(character) {
        return await characterDb.create(character);
    }
    async findById(characterId) {
        return await characterDb.findOne({ id: userId });
    }

    async deleteUser(characterId) {
        return await characterDb.findOneAndDelete(characterId);
    }
    async updateUser(character) {
        return await characterDb.findOneAndUpdate(
            { id: character.id },
            character,
            {
                new: true,
            },
        );
    }
}
